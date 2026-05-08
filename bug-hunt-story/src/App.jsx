import { useState, useEffect, useMemo, useRef } from "react";
import { ALL_CASES, TOTAL_CASES, SCORING } from "./data/cases.js";
import { CHAPTERS } from "./data/chapters.js";
import { Hero } from "./components/Hero.jsx";
import { FilterBar } from "./components/FilterBar.jsx";
import { ChapterIntro } from "./components/ChapterIntro.jsx";
import { CaseCard } from "./components/CaseCard.jsx";
import { AuthBar } from "./components/AuthBar.jsx";
import { Leaderboard } from "./components/Leaderboard.jsx";
import { useSession } from "./lib/useSession.js";
import {
  loadLocal, saveLocal,
  syncLocalToRemote, markCaseRemote, unmarkCaseRemote, clearAllRemote,
} from "./lib/progress.js";

function getScoreLabel(count) {
  return SCORING.find(s => count >= s.min)?.label ?? SCORING[SCORING.length - 1].label;
}

export default function App() {
  const { session, profile } = useSession();
  const userId = session?.user?.id ?? null;

  const [checked, setChecked] = useState({});
  const [activeChapter, setActiveChapter] = useState("all");
  const [activePage, setActivePage] = useState("all");
  const [query, setQuery] = useState("");
  const [hideResolved, setHideResolved] = useState(false);
  const [view, setView] = useState("cases"); // 'cases' | 'leaderboard'

  // İlk yüklemede local'i yükle
  useEffect(() => { setChecked(loadLocal()); }, []);

  // Login olunca local → remote sync, sonra remote'u state'e koy
  const lastSyncedUserRef = useRef(null);
  useEffect(() => {
    if (!userId || lastSyncedUserRef.current === userId) return;
    lastSyncedUserRef.current = userId;
    (async () => {
      const merged = await syncLocalToRemote(userId);
      setChecked(merged);
    })();
  }, [userId]);

  const toggle = (id) => {
    setChecked(prev => {
      const willBeChecked = !prev[id];
      const next = { ...prev, [id]: willBeChecked };
      if (!willBeChecked) delete next[id];
      saveLocal(next);
      if (userId) {
        if (willBeChecked) markCaseRemote(userId, id);
        else unmarkCaseRemote(userId, id);
      }
      return next;
    });
  };

  const reset = async () => {
    if (!confirm("Tüm işaretlemeleri silmek istediğine emin misin?")) return;
    setChecked({});
    saveLocal({});
    if (userId) await clearAllRemote(userId);
  };

  const checkedCount = Object.values(checked).filter(Boolean).length;
  const scoreLabel = getScoreLabel(checkedCount);

  const pageOptions = useMemo(() => {
    const set = new Set();
    ALL_CASES.forEach(c => { if (c.chapter === "ch2" && c.pageGroup) set.add(c.pageGroup); });
    return Array.from(set).sort();
  }, []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return ALL_CASES.filter(c => {
      if (activeChapter !== "all" && c.chapter !== activeChapter) return false;
      if (activeChapter === "ch2" && activePage !== "all" && c.pageGroup !== activePage) return false;
      if (hideResolved && checked[c.id]) return false;
      if (!q) return true;
      return (
        c.id.toLowerCase().includes(q) ||
        c.subject.toLowerCase().includes(q) ||
        c.body.toLowerCase().includes(q) ||
        (c.page || "").toLowerCase().includes(q) ||
        (c.category || "").toLowerCase().includes(q)
      );
    });
  }, [activeChapter, activePage, query, hideResolved, checked]);

  const grouped = useMemo(() => {
    if (activeChapter === "all") {
      const byChapter = new Map();
      filtered.forEach(c => {
        if (!byChapter.has(c.chapter)) byChapter.set(c.chapter, []);
        byChapter.get(c.chapter).push(c);
      });
      return CHAPTERS.filter(ch => byChapter.has(ch.id)).map(ch => ({
        chapter: ch,
        items: byChapter.get(ch.id),
      }));
    }
    if (activeChapter === "ch2" && activePage === "all") {
      const byPage = new Map();
      filtered.forEach(c => {
        const k = c.pageGroup || "Diğer";
        if (!byPage.has(k)) byPage.set(k, []);
        byPage.get(k).push(c);
      });
      return Array.from(byPage.entries()).map(([page, items]) => ({
        chapter: { id: page, title: page, subtitle: `${items.length} şikayet`, number: "Sayfa", intro: null },
        items,
      }));
    }
    if (activeChapter === "ch4") {
      const byGroup = new Map();
      filtered.forEach(c => {
        const k = c.group || "Diğer";
        if (!byGroup.has(k)) byGroup.set(k, []);
        byGroup.get(k).push(c);
      });
      return Array.from(byGroup.entries()).map(([g, items]) => ({
        chapter: { id: g, title: g, subtitle: `${items.length} şikayet`, number: "Mobil", intro: null },
        items,
      }));
    }
    const ch = CHAPTERS.find(c => c.id === activeChapter);
    return [{ chapter: ch, items: filtered }];
  }, [filtered, activeChapter, activePage]);

  return (
    <div className="min-h-screen bg-stone-50">
      <AuthBar session={session} profile={profile} />
      <Hero checkedCount={checkedCount} total={TOTAL_CASES} scoreLabel={scoreLabel} />

      <main className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex gap-2 mb-6 border-b border-stone-200">
          <button
            onClick={() => setView("cases")}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition ${
              view === "cases"
                ? "border-stone-900 text-stone-900"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            📋 Şikayetler
          </button>
          <button
            onClick={() => setView("leaderboard")}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition ${
              view === "leaderboard"
                ? "border-stone-900 text-stone-900"
                : "border-transparent text-stone-500 hover:text-stone-800"
            }`}
          >
            🏆 Sıralama
          </button>
        </div>

        {view === "leaderboard" ? (
          <Leaderboard currentUserId={userId} />
        ) : (
          <>
            <FilterBar
              activeChapter={activeChapter}
              onChapterChange={setActiveChapter}
              query={query}
              onQueryChange={setQuery}
              pageOptions={pageOptions}
              activePage={activePage}
              onPageChange={setActivePage}
              filteredCount={filtered.length}
              totalCount={TOTAL_CASES}
              onReset={reset}
              hideResolved={hideResolved}
              onToggleHideResolved={() => setHideResolved(h => !h)}
            />

            {grouped.length === 0 ? (
              <div className="bg-white rounded-xl border border-stone-200 p-16 text-center">
                <div className="text-stone-400 text-lg font-serif italic">
                  Bu filtreye uygun şikayet bulunamadı.
                </div>
              </div>
            ) : (
              <div className="space-y-10">
                {grouped.map(group => (
                  <section key={group.chapter.id}>
                    {group.chapter.intro ? (
                      <ChapterIntro chapter={group.chapter} />
                    ) : (
                      <div className="mb-4 pb-2 border-b-2 border-stone-300">
                        <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
                          {group.chapter.number}
                        </div>
                        <h2 className="font-serif text-xl font-bold text-stone-900">
                          {group.chapter.title}
                          <span className="ml-2 text-stone-400 font-sans text-sm font-normal">
                            ({group.items.length} şikayet)
                          </span>
                        </h2>
                      </div>
                    )}
                    <div className="space-y-3">
                      {group.items.map(c => (
                        <CaseCard
                          key={c.id}
                          caseData={c}
                          isMarked={!!checked[c.id]}
                          onToggle={() => toggle(c.id)}
                        />
                      ))}
                    </div>
                  </section>
                ))}
              </div>
            )}
          </>
        )}

        <footer className="mt-16 pt-8 border-t border-stone-200 text-center text-sm text-stone-500">
          <p className="font-serif italic">Divizyon — Pixel-Perfect Fluid Framework Atölyesi · 2026</p>
          <p className="mt-1 text-xs">Tüm bug'lar atölye katılımcılarının pratik yapması için kasıtlı yerleştirilmiştir.</p>
        </footer>
      </main>
    </div>
  );
}
