import { Icon } from "../../shared/icons/Icon.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function CalendarPage({ ctx }) {
  const days = Array.from({length: 35}, (_, i) => i - 2);
  return (
    <div>
      <PageHeader title="Takvim" subtitle="Mayıs 2026" action={
        <div className="flex gap-2">
          <button className="bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-sm flex items-center"><Icon name="chevron-left" className="w-4 h-4" /></button>
          <button className="bg-white border border-slate-300 px-3 py-1.5 rounded-lg text-sm flex items-center"><Icon name="chevron-right" className="w-4 h-4" /></button>
        </div>
      } />
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="grid grid-cols-7 border-b border-slate-100">
          {["Pzt", "Sal", "Çar", "Per", "Cum", "Cmt", "Paz"].map(d => (
            <div key={d} className="p-2 text-xs font-semibold text-slate-300 text-center">{d}</div>
          ))}
        </div>
        <div className="grid grid-cols-7">
          {days.map((d, i) => (
            <div key={i} className={`h-24 border-r border-b border-slate-100 ${i % 7 === 6 ? 'border-r-0' : ''} p-1 ${d > 0 && d <= 31 ? '' : 'bg-slate-50 text-slate-300'} overflow-hidden`}>
              <div className="text-xs font-medium">{d > 0 && d <= 31 ? d : ''}</div>
              {d === 12 && <div onClick={() => ctx.navigate("event-detail")} className="bg-indigo-100 text-indigo-700 text-xs px-2 py-0.5 rounded mt-1 cursor-pointer hover:bg-indigo-200">SCSS Atölyesi</div>}
              {d === 19 && <div onClick={() => ctx.navigate("event-detail")} className="bg-emerald-100 text-emerald-700 text-xs px-2 py-0.5 rounded mt-1 cursor-pointer hover:bg-emerald-200">Tailwind Deep Dive workshop with extra long title</div>}
              {d === 26 && <div onClick={() => ctx.navigate("event-detail")} className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded mt-1 cursor-pointer hover:bg-amber-200">Mentor Buluşması</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
