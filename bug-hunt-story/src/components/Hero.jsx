export function Hero({ checkedCount, total, scoreLabel }) {
  const percent = Math.round((checkedCount / total) * 100);
  return (
    <section className="bg-gradient-to-br from-stone-900 via-slate-900 to-stone-900 text-white">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="flex items-start gap-3 text-xs font-mono text-stone-400 uppercase tracking-widest mb-4">
          <span className="bg-stone-800 px-2 py-1 rounded border border-stone-700">Divizyon Destek Paneli</span>
          <span>· Kullanıcı Bildirimleri Arşivi</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl font-bold leading-tight mb-3 tracking-tight">
          "Bir şeyler yanlış,<br/>ama tam neyi söyleyemem..."
        </h1>
        <p className="text-stone-300 text-lg leading-relaxed max-w-2xl mb-8">
          Topluluğumuzdan gelen <strong className="text-white">{total} kullanıcı şikayeti</strong> burada arşivlendi.
          Her birinde bir bug var — kimi göz önünde, kimi konsolun derinlerinde, kimi mobilde gizli.
          Hangisini sen de fark edebileceksin? Şikayet metnini oku, ipucunu sonra aç, çözümü en sona sakla.
        </p>

        <div className="bg-stone-800/50 backdrop-blur rounded-xl border border-stone-700 p-5">
          <div className="flex items-end justify-between mb-2 flex-wrap gap-2">
            <div>
              <div className="text-xs text-stone-400 uppercase tracking-wider mb-1">Çözülmüş şikayetler</div>
              <div className="text-3xl font-bold">{checkedCount} <span className="text-stone-500 text-xl font-normal">/ {total}</span></div>
            </div>
            <div className="text-right">
              <div className="text-xs text-stone-400 uppercase tracking-wider mb-1">İlerleme</div>
              <div className="text-3xl font-bold">{percent}%</div>
            </div>
          </div>
          <div className="w-full h-2 bg-stone-700 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 transition-all duration-500"
              style={{ width: `${percent}%` }}
            />
          </div>
          <div className="mt-3 text-sm text-stone-200 font-medium">{scoreLabel}</div>
        </div>
      </div>
    </section>
  );
}
