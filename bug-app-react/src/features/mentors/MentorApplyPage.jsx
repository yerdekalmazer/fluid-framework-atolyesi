import { useState } from "react";
import { Icon } from "../../shared/icons/Icon.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function MentorApplyPage({ ctx }) {
  const [form, setForm] = useState({ name: "", email: "", years: "", reason: "", agree: false });
  const [sent, setSent] = useState(false);
  const submit = () => {
    setSent(true);
    ctx.addToast("Başvurun alındı, 48 saat içinde dönüş yapılacak");
  };
  return (
    <div className="max-w-2xl">
      <PageHeader title="Mentor Başvurusu" subtitle="Topluluğa katıl" />
      <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
        {sent && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
            <Icon name="check" className="w-4 h-4 shrink-0" /> Başvurunu aldık, {form.email || "kayıtlı e-postana"} dönüş yapacağız.
          </div>
        )}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Ad Soyad <span className="text-red-500">*</span></label>
          <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">E-posta</label>
          <input type="text" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Tecrübe Yılı</label>
          <input type="text" value={form.years} onChange={e => setForm({...form, years: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Niye mentor olmak istiyorsun?</label>
          <textarea rows={5} value={form.reason} onChange={e => setForm({...form, reason: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none resize-y"></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">CV (PDF)</label>
          <input type="file" className="w-full px-3 py-2 border border-slate-300 rounded-lg" />
        </div>
        <div>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={form.agree} onChange={e => setForm({...form, agree: e.target.checked})} />
            <span className="text-sm text-slate-700">Şartları okudum ve kabul ediyorum</span>
          </label>
        </div>
        <button onClick={submit} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold">Başvuruyu Gönder</button>
      </div>
    </div>
  );
}
