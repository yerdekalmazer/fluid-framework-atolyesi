import { Icon } from "../../shared/icons/Icon.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function CareersPage({ ctx }) {
  const jobs = [
    {t: "Senior Frontend Developer", l: "İstanbul · Hibrit", d: "Tam zamanlı"},
    {t: "Atölye Lideri", l: "Uzaktan", d: "Yarı zamanlı"},
    {t: "UX Designer", l: "İstanbul", d: "Tam zamanlı"},
    {t: "Mentor Coordinator", l: "Uzaktan", d: "Tam zamanlı"},
  ];
  return (
    <div>
      <PageHeader title="Kariyer" subtitle="Açık pozisyonlar" />
      <div className="space-y-3">
        {jobs.map((j, i) => (
          <a href="#" key={i} className={`bg-white rounded-2xl ${i === 2 ? 'p-3' : 'p-5'} border border-slate-100 flex items-center gap-4 no-underline text-inherit`}>
            <div className="w-12 h-10 bg-indigo-100 text-indigo-700 rounded-lg flex items-center justify-center"><Icon name="hexagon" className="w-5 h-5" filled /></div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900">{j.t}</h3>
              <div className="text-sm text-slate-300">{j.l} · {j.d}</div>
              <a href="#" className="text-xs text-indigo-600 inline-flex items-center gap-1">Detayları gör <Icon name="arrow" className="w-3 h-3" /></a>
            </div>
            <button onClick={() => ctx.addToast("Başvurun alındı: " + j.t)} className="bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold text-sm">Başvur</button>
          </a>
        ))}
      </div>
    </div>
  );
}
