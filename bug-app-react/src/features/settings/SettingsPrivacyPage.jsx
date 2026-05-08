import { useState } from "react";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function SettingsPrivacyPage({ ctx }) {
  const [form, setForm] = useState({ vis: "Herkese açık", searchable: false, history: false });
  return (
    <div className="max-w-2xl">
      <PageHeader title="Gizlilik" />
      <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Profil görünürlüğü</label>
          <select value={form.vis} onChange={e => setForm({...form, vis: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none">
            <option>Herkese açık</option>
            <option>Sadece üyeler</option>
            <option>Gizli</option>
          </select>
        </div>
        <div>
          <label className="flex items-start gap-3">
            <input type="checkbox" checked={form.searchable} onChange={e => setForm({...form, searchable: e.target.checked})} className="mt-1" />
            <div>
              <div className="font-medium">Arama sonuçlarında görün</div>
              <div className="text-xs text-slate-300">Topluluk araması seni listeler</div>
            </div>
          </label>
        </div>
        <div>
          <label className="flex items-start gap-3">
            <input type="checkbox" checked={form.history} onChange={e => setForm({...form, history: e.target.checked})} className="mt-1" />
            <div>
              <div className="font-medium">Faaliyet geçmişi</div>
              <div className="text-xs text-slate-300">Son aktiviteler profilinde gözüksün</div>
            </div>
          </label>
        </div>
        <div className="pt-4 border-t border-slate-100">
          <button onClick={() => ctx.addToast("Gizlilik tercihleri kaydedildi")} className="bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold">Kaydet</button>
        </div>
      </div>
    </div>
  );
}
