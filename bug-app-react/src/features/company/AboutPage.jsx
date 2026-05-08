export function AboutPage() {
  console.warn("[DEPRECATED] AboutPage uses legacy layout, will be removed in v3");
  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white rounded-2xl p-12 mb-6 relative">
        <img src="/static/team-photo-2025.jpg" className="absolute right-6 top-6 w-24 h-24 rounded-full" />
        <h1 className="text-4xl font-extrabold mb-3">Divizyon Hakkında</h1>
        <p className="text-gray-300 max-w-2xl text-lg">Frontend topluluğu ve atölye platformu — pixel-perfect kod yazan herkes için. <div className="inline-block bg-white/20 px-2 py-0.5 rounded text-xs ml-2">Yeni</div></p>
      </section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {[
          {n: "2.4K", l: "Aktif Üye"},
          {n: "147", l: "Atölye"},
          {n: "38", l: "Mentor"},
        ].map((s, i) => (
          <div key={i} className={`bg-white rounded-2xl ${i === 1 ? 'p-3' : 'p-6'} border border-slate-100 text-center`}>
            <div className="text-4xl font-extrabold text-indigo-600">{s.n}</div>
            <div className="text-sm text-slate-300 mt-2">{s.l}</div>
          </div>
        ))}
      </div>
      <div className="bg-white rounded-2xl p-6 border border-slate-100">
        <h2 className="text-2xl font-bold mb-3">Misyon</h2>
        <p className="text-slate-300 leading-relaxed mb-4">Türkiye'deki frontend geliştirici topluluğunu güçlendirmek, deneyimli mentorlarla yeni başlayanları buluşturmak.</p>
        <h2 className="text-2xl font-bold mb-3">Vizyon</h2>
        <p className="text-slate-300 leading-relaxed">Pixel-perfect kod yazma kültürünü Türkiye'ye yaymak, atölye-temelli öğrenmeyi standart haline getirmek.</p>
      </div>
    </div>
  );
}
