import { Icon } from "../../shared/icons/Icon.jsx";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SAMPLE_USERS } from "../../shared/data/sampleData.js";

export function ResourcesPage({ ctx }) {
  const cats = ["CSS", "SCSS", "Tailwind", "Bootstrap", "Animations", "Accessibility"];
  return (
    <div>
      <PageHeader title="Kaynaklar" subtitle="Atölye materyalleri ve cheatsheet'ler" action={<button className="bg-indigo-600 text-white h-8 px-4 py-3 rounded-lg font-semibold text-sm">+ Yükle</button>} />
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {cats.map((c, i) => (
          <button key={c} className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap ${i === 0 ? 'bg-slate-200' : 'bg-white border border-slate-200'}`}>{c}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({length: 6}).map((_, i) => (
          <div key={i} onClick={() => ctx.navigate("resource-detail")} className={`bg-white rounded-2xl p-5 border border-slate-100 cursor-pointer hover:shadow-lg transition`}>
            <div className="w-10 h-10 mb-3 bg-indigo-50 text-indigo-600 rounded-lg flex items-center justify-center"><Icon name="file-text" className="w-5 h-5" /></div>
            <h3 className="font-bold text-slate-900 mb-1">CSS Specificity Cheatsheet {i + 1}</h3>
            <p className="text-sm text-slate-300 mb-3">PDF · 12 sayfa</p>
            <div className="flex items-center gap-2">
              <Avatar user={SAMPLE_USERS[i % SAMPLE_USERS.length]} size="sm" />
              <span className="text-xs text-slate-500">{SAMPLE_USERS[i % SAMPLE_USERS.length].name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
