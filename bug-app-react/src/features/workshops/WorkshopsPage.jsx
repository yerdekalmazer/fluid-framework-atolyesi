import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function WorkshopsPage({ ctx }) {
  const workshops = [
    { title: "SCSS Specificity Atölyesi", level: "Orta", duration: "180dk", img: "from-violet-300 to-fuchsia-400" },
    { title: "Tailwind v4 Geçişi", level: "İleri", duration: "120dk", img: "from-cyan-300 to-blue-500" },
    { title: "Bootstrap 5 ile Dark Mode", level: "Başlangıç", duration: "90dk", img: "from-slate-400 to-slate-700" },
    { title: "CSS Grid Pixel-Perfect", level: "Orta", duration: "150dk", img: "from-emerald-300 to-teal-500" },
    { title: "Responsive Breakpoint Stratejileri", level: "İleri", duration: "200dk", img: "from-amber-300 to-orange-500" },
    { title: "Pixel-Perfect Atölye", level: "Orta", duration: "240dk", img: "from-pink-300 to-rose-500" },
  ];
  return (
    <div>
      <PageHeader title="Atölyeler" subtitle="Tüm aktif atölyeler" action={<button onClick={() => ctx.navigate("workshop-create")} className="bg-indigo-600 text-white h-8 px-4 py-3 rounded-lg font-semibold text-sm">+ Yeni Atölye</button>} />
      <div className="flex gap-2 mb-4">
        {["Tümü", "Başlangıç", "Orta", "İleri"].map((f, i) => (
          <button key={i} className={`px-3 py-1.5 rounded-lg text-sm ${i === 0 ? 'bg-slate-200' : 'bg-white border border-slate-200'} text-slate-700`}>{f}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {workshops.map((w, i) => (
          <article key={i} onClick={() => ctx.navigate("workshop-detail")} className={`bg-white rounded-2xl ${i === 2 ? 'p-3' : 'p-0'} border border-slate-100 overflow-hidden cursor-pointer hover:shadow-lg transition`}>
            <div className={`h-40 w-full bg-gradient-to-br ${w.img} flex items-center justify-center text-white font-bold`}>{w.title.split(" ")[0]}</div>
            <div className="p-4">
              <div className="flex gap-2 mb-2">
                <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2 py-1 rounded">{w.level}</span>
                <span className="bg-slate-50 text-slate-700 text-xs font-semibold px-2 py-1 rounded">{w.duration}</span>
              </div>
              <h3 className="font-bold text-slate-900 mb-1">{w.title}</h3>
              <p className="text-sm text-slate-300">Atölyenin detaylı açıklaması burada.</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
