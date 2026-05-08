import { useState } from "react";
import { CHARACTERS } from "../data/characters.js";
import { STATUS_STYLES } from "../data/cases.js";

export function CaseCard({ caseData, isMarked, onToggle }) {
  const [showHint, setShowHint] = useState(false);
  const [showReveal, setShowReveal] = useState(false);
  const reporter = CHARACTERS[caseData.reporter] || CHARACTERS.eda;
  const statusClass = STATUS_STYLES[caseData.status] || STATUS_STYLES["Açık"];

  return (
    <article className={`bg-white rounded-xl border transition-all ${isMarked ? "border-emerald-300 bg-emerald-50/30" : "border-stone-200 hover:border-stone-300"}`}>
      <header className="flex items-start gap-3 px-5 pt-4 pb-3 border-b border-stone-100">
        <div className={`w-10 h-10 rounded-full ${reporter.color} text-white flex items-center justify-center font-bold text-sm shrink-0`}>
          {reporter.initials}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="font-semibold text-stone-900 text-sm">{reporter.name}</span>
            <span className="text-xs text-stone-500">·</span>
            <span className="text-xs text-stone-500">{reporter.role}</span>
          </div>
          <div className="flex items-center gap-2 mt-0.5 text-xs text-stone-400">
            <span>{caseData.date}</span>
            <span>·</span>
            <span className="font-mono">{caseData.id}</span>
          </div>
        </div>
        <span className={`text-xs font-semibold px-2 py-0.5 rounded-md border ${statusClass} shrink-0`}>
          {caseData.status}
        </span>
      </header>

      <div className="px-5 py-4">
        <div className="flex items-center gap-2 mb-2 flex-wrap">
          <span className="text-xs font-medium text-stone-600 bg-stone-100 px-2 py-0.5 rounded">
            {caseData.category}
          </span>
          {caseData.severity === "security" && (
            <span className="text-xs font-bold text-white bg-red-600 px-2 py-0.5 rounded">⚠️ GÜVENLİK</span>
          )}
          {caseData.severity === "high" && (
            <span className="text-xs font-bold text-white bg-orange-600 px-2 py-0.5 rounded">⚡ KRİTİK</span>
          )}
          <span className="text-xs text-stone-500">📍 {caseData.page}</span>
        </div>
        <h3 className="font-serif text-lg font-bold text-stone-900 mb-2 leading-snug">
          "{caseData.subject}"
        </h3>
        <p className="text-sm text-stone-700 leading-relaxed font-serif italic">
          {caseData.body}
        </p>
      </div>

      <div className="px-5 pb-4 space-y-2">
        <div className="border-t border-stone-100 pt-3">
          <button
            onClick={() => setShowHint(s => !s)}
            className="text-xs font-semibold text-amber-700 hover:text-amber-900 inline-flex items-center gap-1"
          >
            <span>{showHint ? "▾" : "▸"}</span>
            <span>{showHint ? "İpucunu gizle" : "💡 İpucu göster"}</span>
          </button>
          {showHint && (
            <p className="mt-2 text-sm text-stone-700 bg-amber-50 border border-amber-200 rounded-lg px-3 py-2 ink-fade">
              {caseData.hint}
            </p>
          )}
        </div>

        <div>
          <button
            onClick={() => setShowReveal(s => !s)}
            className="text-xs font-semibold text-indigo-700 hover:text-indigo-900 inline-flex items-center gap-1"
          >
            <span>{showReveal ? "▾" : "▸"}</span>
            <span>{showReveal ? "Çözümü gizle" : "🔧 Çözümü göster (Mentor notu)"}</span>
          </button>
          {showReveal && (
            <pre className="mt-2 text-xs text-stone-800 bg-slate-900 text-slate-100 rounded-lg px-3 py-2 ink-fade whitespace-pre-wrap font-mono leading-relaxed">
              {caseData.reveal}
            </pre>
          )}
        </div>
      </div>

      <footer className="px-5 py-3 bg-stone-50 border-t border-stone-100 flex items-center justify-between rounded-b-xl">
        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="checkbox"
            checked={isMarked}
            onChange={onToggle}
            className="w-4 h-4 accent-emerald-600 cursor-pointer"
          />
          <span className={isMarked ? "text-emerald-700 font-semibold" : "text-stone-600"}>
            {isMarked ? "Bu şikayeti çözdüm" : "Bu şikayeti çözdüm olarak işaretle"}
          </span>
        </label>
      </footer>
    </article>
  );
}
