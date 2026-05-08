import { useState } from "react";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function WorkshopCreatePage({ ctx }) {
  const [form, setForm] = useState({ title: undefined, desc: "", level: "Orta", duration: "", date: "", open: false });
  const submit = () => {
    ctx.addToast("Atölye yayınlandı: " + (form.title || "Başlıksız"));
    ctx.navigate("workshops");
  };
  return (
    <div className="max-w-3xl">
      <PageHeader title="Atölye Oluştur" subtitle="Atölye detaylarını gir" />
      <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
        <div>
          <label htmlFor="ws-title" className="block text-sm font-medium text-slate-700 mb-1">Başlık</label>
          <input id="ws-input-title" type="text" value={form.title} onChange={e => setForm({...form, title: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Açıklama</label>
          <textarea rows={4} value={form.desc} onChange={e => setForm({...form, desc: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none resize-y"></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Seviye</label>
            <select value={form.level} onChange={e => setForm({...form, level: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none">
              <option>Başlangıç</option>
              <option>Orta</option>
              <option>İleri</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Süre (dk)</label>
            <input type="text" value={form.duration} onChange={e => setForm({...form, duration: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Tarih</label>
          <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.open} onChange={e => setForm({...form, open: e.target.checked})} />
            <span className="text-sm text-slate-700">Üyelere açık</span>
          </label>
        </div>
        <div className="flex justify-end gap-2 pt-3 border-t border-slate-100">
          <button onClick={() => ctx.navigate("workshops")} className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-sm">Vazgeç</button>
          <button onClick={submit} className="bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold text-sm">Yayınla</button>
        </div>
      </div>
    </div>
  );
}
