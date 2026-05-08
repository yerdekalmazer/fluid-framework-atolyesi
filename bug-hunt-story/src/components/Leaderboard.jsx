import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabase.js";
import { TOTAL_CASES } from "../data/cases.js";

function formatDuration(seconds) {
  if (!seconds || seconds < 1) return "—";
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = seconds % 60;
  if (h > 0) return `${h}s ${m}d`;
  if (m > 0) return `${m}d ${s}sn`;
  return `${s}sn`;
}

function rankBadge(i) {
  if (i === 0) return "🥇";
  if (i === 1) return "🥈";
  if (i === 2) return "🥉";
  return `#${i + 1}`;
}

export function Leaderboard({ currentUserId }) {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      setErr("Supabase yapılandırılmadı. .env.local'i ayarla.");
      return;
    }
    let cancelled = false;
    setLoading(true);
    supabase
      .from("leaderboard")
      .select("*")
      .order("solved_count", { ascending: false })
      .order("duration_seconds", { ascending: true })
      .limit(50)
      .then(({ data, error }) => {
        if (cancelled) return;
        if (error) { setErr(error.message); }
        else { setRows(data || []); }
        setLoading(false);
      });
    return () => { cancelled = true; };
  }, []);

  // Realtime: progress tablosunda değişiklik olursa yenile
  useEffect(() => {
    if (!isSupabaseConfigured) return;
    const channel = supabase
      .channel("lb-progress")
      .on("postgres_changes", { event: "*", schema: "public", table: "progress" }, () => {
        supabase
          .from("leaderboard")
          .select("*")
          .order("solved_count", { ascending: false })
          .order("duration_seconds", { ascending: true })
          .limit(50)
          .then(({ data }) => { if (data) setRows(data); });
      })
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  return (
    <div className="bg-white rounded-xl border border-stone-200 overflow-hidden">
      <div className="px-5 py-4 bg-stone-900 text-white">
        <div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-1">
          Sıralama
        </div>
        <h2 className="font-serif text-2xl font-bold">Top Bug Avcıları</h2>
        <p className="text-sm text-stone-300 mt-1">
          Çözüm sayısı yüksek olan üstte, eşitlikte ilk işaretlemeden son işaretlemeye kadar geçen süre kısa olan üstte.
        </p>
      </div>

      {loading && (
        <div className="p-10 text-center text-stone-500 font-serif italic">Yükleniyor...</div>
      )}

      {err && !loading && (
        <div className="p-10 text-center text-rose-700 text-sm">{err}</div>
      )}

      {!loading && !err && rows.length === 0 && (
        <div className="p-10 text-center text-stone-500 font-serif italic">
          Henüz kimse şikayet çözmemiş. İlk olan sen ol!
        </div>
      )}

      {!loading && !err && rows.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-stone-100 border-b border-stone-200">
              <tr>
                <th className="text-left px-4 py-2 font-semibold text-stone-700">Sıra</th>
                <th className="text-left px-4 py-2 font-semibold text-stone-700">Avcı</th>
                <th className="text-right px-4 py-2 font-semibold text-stone-700">Çözülen</th>
                <th className="text-right px-4 py-2 font-semibold text-stone-700">Süre</th>
                <th className="text-right px-4 py-2 font-semibold text-stone-700 hidden sm:table-cell">İlerleme</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const isMe = r.id === currentUserId;
                const pct = Math.round((r.solved_count / TOTAL_CASES) * 100);
                return (
                  <tr
                    key={r.id}
                    className={`border-b border-stone-100 ${isMe ? "bg-emerald-50" : "hover:bg-stone-50"}`}
                  >
                    <td className="px-4 py-3 font-bold text-stone-900">
                      {rankBadge(i)}
                    </td>
                    <td className="px-4 py-3">
                      <div className={`font-mono text-stone-900 ${isMe ? "font-bold" : "font-semibold"}`}>
                        @{r.handle} {isMe && <span className="text-emerald-700 text-xs ml-1">(sen)</span>}
                      </div>
                      <div className="text-xs text-stone-500">{r.display_name}</div>
                    </td>
                    <td className="px-4 py-3 text-right">
                      <span className="font-bold text-stone-900">{r.solved_count}</span>
                      <span className="text-stone-400 text-xs"> / {TOTAL_CASES}</span>
                    </td>
                    <td className="px-4 py-3 text-right text-stone-700 font-mono text-xs">
                      {formatDuration(r.duration_seconds)}
                    </td>
                    <td className="px-4 py-3 text-right hidden sm:table-cell">
                      <div className="inline-flex items-center gap-2">
                        <div className="w-20 h-1.5 bg-stone-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-emerald-500"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="text-xs text-stone-500 w-9 text-right">{pct}%</span>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
