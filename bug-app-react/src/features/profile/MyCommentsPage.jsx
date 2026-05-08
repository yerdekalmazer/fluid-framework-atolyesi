import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { LONG_URL } from "../../shared/data/sampleData.js";

export function MyCommentsPage({ ctx }) {
  return (
    <div>
      <PageHeader title="Yorumlarım" />
      <div className="space-y-3">
        {Array.from({length: 5}).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 overflow-hidden">
            <div className="text-xs text-slate-400 mb-1">{i + 1} gün önce · "{["SCSS Atölyesi", "Tailwind v4", "Bootstrap Dark", "CSS Grid", "Pixel Perfect"][i]}" altında</div>
            <p className="text-slate-700">{i === 1 ? <>Bu kaynağa bakın: <a href="#" className="text-indigo-600 underline">{LONG_URL}</a></> : "Harika bir atölye olmuş, teşekkürler!"}</p>
            <div className="flex gap-3 mt-2 text-xs text-slate-500">
              <button onClick={() => ctx.openModal("edit")} className="hover:text-indigo-600">Düzenle</button>
              <button onClick={() => ctx.openModal("delete")} className="hover:text-red-600">Sil</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
