import { useState } from "react";
import { Icon } from "../../shared/icons/Icon.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function FaqPage() {
  const [open, setOpen] = useState(null);
  const items = [
    {q: "Nasıl atölye oluştururum?", a: "Atölyeler sayfasından + Yeni butonuna tıklayarak."},
    {q: "Mentor seçimi nasıl yapılır?", a: "Mentorlar sayfasından profili inceleyip seans rezervasyonu yapabilirsin."},
    {q: "Plan nasıl değiştirilir?", a: "Ayarlar > Faturalama bölümünden."},
    {q: "Hesabımı nasıl silerim?", a: "Ayarlar > Hesap > Tehlikeli Bölge."},
    {q: "Kaynak yüklemenin sınırı var mı?", a: "Pro plan kullanıcıları sınırsız kaynak yükleyebilir."},
    {q: "Atölye iadesi mümkün mü?", a: "Atölyeden 24 saat önce iptal edilebilir."},
  ];
  return (
    <div className="max-w-3xl">
      <PageHeader title="Sıkça Sorulan Sorular" />
      <div className="mb-4">
        <input type="text" value="" placeholder="Sorularda ara..." className="w-full bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none" />
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100 overflow-hidden">
        {items.map((it, i) => (
          <div key={i} className="">
            <button onClick={() => setOpen(open === i ? null : i)} className={`w-full text-left flex items-center justify-between ${i === 1 ? 'p-3' : 'p-5'} hover:bg-slate-50`}>
              <span className="font-medium text-slate-900">{it.q}</span>
              <span className="text-slate-400"><Icon name={open === i ? "minus" : "plus"} className="w-4 h-4" /></span>
            </button>
            {open === i && (
              <div className="px-5 pb-5 text-sm text-slate-300">{it.a}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
