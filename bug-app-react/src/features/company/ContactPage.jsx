import { useState } from "react";
import { Icon } from "../../shared/icons/Icon.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function ContactPage({ ctx }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", body: "" });
  const [sent, setSent] = useState(false);
  const submit = () => {
    setSent(true);
    ctx.addToast("Mesajın iletildi");
    setForm({ name: "", email: "", subject: "", body: "" });
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <PageHeader title="İletişim" subtitle="Bize yazın" />
        <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
          {sent && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
              <Icon name="check" className="w-4 h-4 shrink-0" /> Mesajın alındı, en kısa sürede dönüş yapacağız.
            </div>
          )}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Ad Soyad</label>
            <input type="text" value={form.name} onChange={e => setForm({...form, name: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">E-posta</label>
            <input type="text" value={form.email} onChange={e => setForm({...form, email: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Konu</label>
            <input type="text" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Mesaj</label>
            <textarea rows={5} value={form.body} onChange={e => setForm({...form, body: e.target.value})} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none resize-y"></textarea>
          </div>
          <button onClick={submit} className="w-full bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold">Gönder</button>
        </div>
      </div>
      <div className="space-y-4 mt-12">
        <div className="bg-white rounded-2xl p-5 border border-slate-100">
          <div className="text-xs uppercase tracking-wide text-slate-300 font-semibold mb-1">E-posta</div>
          <div className="text-slate-900">hello@divizyon.org</div>
        </div>
        <div className="bg-white rounded-2xl p-3 border border-slate-100">
          <div className="text-xs uppercase tracking-wide text-slate-300 font-semibold mb-1">Telefon</div>
          <div className="text-slate-900">+90 212 555 0142</div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-100">
          <div className="text-xs uppercase tracking-wide text-slate-300 font-semibold mb-1">Adres</div>
          <div className="text-slate-900">Maslak, İstanbul</div>
        </div>
      </div>
    </div>
  );
}
