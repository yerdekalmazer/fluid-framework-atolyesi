import { CHAPTERS } from "../data/chapters.js";

export function FilterBar({
  activeChapter, onChapterChange,
  query, onQueryChange,
  pageOptions, activePage, onPageChange,
  filteredCount, totalCount,
  onReset, hideResolved, onToggleHideResolved,
}) {
  return (
    <div className="sticky top-0 z-20 bg-stone-50/95 backdrop-blur border-b border-stone-200 -mx-6 px-6 py-4 mb-6">
      <div className="flex items-center gap-2 mb-3 overflow-x-auto pb-1">
        <button
          onClick={() => { onChapterChange("all"); onPageChange("all"); }}
          className={`shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
            activeChapter === "all"
              ? "bg-stone-900 text-white"
              : "bg-white border border-stone-200 text-stone-700 hover:border-stone-400"
          }`}
        >
          Hepsi
        </button>
        {CHAPTERS.map(ch => (
          <button
            key={ch.id}
            onClick={() => { onChapterChange(ch.id); onPageChange("all"); }}
            className={`shrink-0 px-3 py-1.5 rounded-lg text-sm font-medium transition ${
              activeChapter === ch.id
                ? "bg-stone-900 text-white"
                : "bg-white border border-stone-200 text-stone-700 hover:border-stone-400"
            }`}
          >
            {ch.number}: {ch.title}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex-1 min-w-[240px] flex items-center gap-2 bg-white rounded-lg border border-stone-200 px-3 py-2 focus-within:border-stone-400 focus-within:ring-2 focus-within:ring-stone-200">
          <svg className="w-4 h-4 text-stone-400 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
          </svg>
          <input
            value={query}
            onChange={e => onQueryChange(e.target.value)}
            placeholder="Şikayet ID, konu, sayfa ara..."
            className="flex-1 bg-transparent text-sm focus:outline-none placeholder:text-stone-400"
          />
          {query && (
            <button onClick={() => onQueryChange("")} className="text-stone-400 hover:text-stone-700 text-lg leading-none">×</button>
          )}
        </div>

        {activeChapter === "ch2" && (
          <select
            value={activePage}
            onChange={e => onPageChange(e.target.value)}
            className="bg-white border border-stone-200 rounded-lg px-3 py-2 text-sm font-medium text-stone-700 focus:outline-none focus:border-stone-400 focus:ring-2 focus:ring-stone-200"
          >
            <option value="all">Tüm sayfalar</option>
            {pageOptions.map(p => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
        )}

        <label className="flex items-center gap-2 text-sm text-stone-700 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={hideResolved}
            onChange={onToggleHideResolved}
            className="w-4 h-4 accent-stone-700"
          />
          <span>Çözülenleri gizle</span>
        </label>

        <span className="text-xs text-stone-500 ml-auto whitespace-nowrap">
          <strong className="text-stone-900">{filteredCount}</strong> / {totalCount} şikayet
        </span>

        <button
          onClick={onReset}
          className="text-xs text-stone-600 hover:text-rose-700 underline underline-offset-2"
        >
          Sıfırla
        </button>
      </div>
    </div>
  );
}
