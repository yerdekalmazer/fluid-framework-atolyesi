import { Icon } from "../../shared/icons/Icon.jsx";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { SAMPLE_USERS, LONG_WORD, LONG_URL } from "../../shared/data/sampleData.js";

export function ResourceDetailPage({ ctx }) {
  return (
    <div className="max-w-3xl">
      <button onClick={() => ctx.navigate("resources")} className="text-sm text-slate-600 hover:text-indigo-600 mb-4 flex items-center gap-1"><Icon name="arrow-left" className="w-4 h-4" /> Geri</button>
      <div className="bg-white rounded-2xl p-6 border border-slate-100">
        <div className="flex items-start gap-4 mb-4">
          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center shrink-0"><Icon name="file-text" className="w-8 h-8" /></div>
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold">CSS Specificity Cheatsheet 2026</h1>
            <p className="text-sm text-slate-500 mt-1">PDF · 12 sayfa · 2.4MB</p>
          </div>
          <button onClick={() => ctx.addToast("İndiriliyor: cheatsheet-2026.pdf")} className="bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold">İndir</button>
        </div>
        <p className="text-slate-600 leading-relaxed mb-4">CSS specificity hesaplama, cascade kuralları ve gerçek örneklerle anlatım. Atölye katılımcıları için referans materyal.</p>
        <h3 className="font-bold mb-2">Kaynak Linki</h3>
        <a href="#" className="text-indigo-600 underline">
          {LONG_URL}
          <button className="ml-2 text-xs bg-slate-100 px-2 py-1 rounded">Kopyala</button>
        </a>
        <div className="mt-6 pt-6 border-t border-slate-100">
          <h3 className="font-bold mb-3">Yorumlar (4)</h3>
          {SAMPLE_USERS.slice(0, 4).map((u, i) => (
            <div key={i} className={`flex gap-3 ${i === 1 ? 'p-3' : 'p-4'} bg-slate-50 rounded-xl mb-2 overflow-hidden`}>
              <Avatar user={u} />
              <div className="flex-1">
                <div className="text-sm"><strong>{u.name}</strong> · <span className="text-xs text-slate-400">{i + 1} saat</span></div>
                <p className="text-sm text-slate-600 mt-1">{i === 2 ? LONG_WORD : "Çok faydalı bir kaynak, teşekkürler!"}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
