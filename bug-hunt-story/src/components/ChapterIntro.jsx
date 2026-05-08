export function ChapterIntro({ chapter }) {
  return (
    <div className="bg-stone-900 text-stone-100 rounded-xl p-6 mb-6 paper">
      <div className="text-xs font-mono uppercase tracking-widest text-stone-400 mb-2">
        Kategori {chapter.number}
      </div>
      <h2 className="font-serif text-2xl font-bold mb-1">{chapter.title}</h2>
      <p className="text-sm text-stone-400 mb-3">{chapter.subtitle}</p>
      <p className="text-sm text-stone-200 font-serif italic leading-relaxed">
        {chapter.intro}
      </p>
    </div>
  );
}
