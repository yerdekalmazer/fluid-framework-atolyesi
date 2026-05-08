import { useState } from "react";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function SettingsAccountPage({ ctx }) {
  const [form, setForm] = useState({ handle: "ali_yilmaz", email: "ali@divizyon.org", curr: "", next: "", lang: "Türkçe" });
  return (
    <div className="max-w-2xl">
      <PageHeader title="Hesap Ayarları" />
      <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-5">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Kullanıcı adı</label>
          <input type="text" value={form.handle} onChange={e => setForm({...form, handle: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">E-posta</label>
          <input type="text" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Mevcut Şifre</label>
          <input type="text" value={form.curr} onChange={e => setForm({...form, curr: e.target.value})} placeholder="••••••" className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Yeni Şifre</label>
          <input type="text" value={form.next} onChange={e => setForm({...form, next: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Dil</label>
          <select value={form.lang} onChange={e => setForm({...form, lang: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none">
            <option>Türkçe</option>
            <option>English</option>
          </select>
        </div>
        <div className="pt-4 border-t border-slate-100">
          <button onClick={() => ctx.addToast("Hesap ayarları kaydedildi")} className="bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold">Kaydet</button>
        </div>
        <div className="bg-red-50 border border-red-100 rounded-xl p-4">
          <h4 className="font-bold text-red-900 mb-1">Tehlikeli Bölge</h4>
          <p className="text-sm text-red-300 mb-3">Hesabını kalıcı olarak sileceksin.</p>
          <button onClick={() => ctx.addToast("Hesap silme süreci başlatıldı")} className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-semibold">Hesabı Sil</button>
        </div>
      </div>
    </div>
  );
}
