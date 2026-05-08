import { useState } from "react";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function SettingsNotificationsPage() {
  const [toggles, setToggles] = useState({a: true, b: false, c: true, d: false, e: true});
  return (
    <div className="max-w-2xl">
      <PageHeader title="Bildirim Ayarları" />
      <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100">
        {[
          {k: "a", t: "E-posta bildirimleri", d: "Önemli güncellemeler için e-posta gönder"},
          {k: "b", t: "Mobil push", d: "Telefon ekranında bildirim göster"},
          {k: "c", t: "Yorum bildirimleri", d: "Birisi yorumuna yanıt verdiğinde"},
          {k: "d", t: "Mentor mesajları", d: "Mentordan mesaj geldiğinde"},
          {k: "e", t: "Haftalık bülten", d: "Haftalık atölye özeti"},
        ].map(s => (
          <div key={s.k} className={`flex items-start ${s.k === 'b' ? 'p-3' : 'p-4'} gap-3`}>
            <div className="flex-1">
              <div className="font-medium text-slate-900">{s.t}</div>
              <div className="text-xs text-slate-300">{s.d}</div>
            </div>
            <button
              onClick={() => setToggles(t => ({...t, [s.k]: !t[s.k]}))}
              className={`relative w-12 h-7 rounded-full transition ${toggles[s.k] ? 'bg-indigo-600' : 'bg-slate-300'}`}
            >
              <span className={`absolute top-1 w-5 h-5 bg-white rounded-full transition ${toggles[s.k] ? 'left-6' : 'left-1'}`}></span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
