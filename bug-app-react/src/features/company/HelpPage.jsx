import { Icon } from "../../shared/icons/Icon.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function HelpPage({ ctx }) {
  const cats = [
    {i: "palette", t: "Atölyeler", d: "Atölye nasıl oluşturulur, katılım"},
    {i: "users", t: "Mentorlar", d: "Mentor seçimi ve seans rezervasyonu"},
    {i: "credit-card", t: "Faturalama", d: "Plan değişikliği ve ödemeler"},
    {i: "lock", t: "Güvenlik", d: "Hesap güvenliği ve gizlilik"},
    {i: "book-open", t: "Kaynaklar", d: "Kaynak yükleme ve indirme"},
    {i: "help-circle", t: "Diğer", d: "Hesabını sil veya iletişim"},
  ];
  return (
    <div>
      <PageHeader title="Yardım Merkezi" subtitle="Sıkça karşılaşılan konular" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cats.map((c, i) => (
          <div key={i} onClick={() => ctx.navigate("faq")} className={`bg-white rounded-2xl ${i === 2 ? 'p-3' : 'p-6'} border border-slate-100 cursor-pointer hover:shadow-lg transition`}>
            <div className="w-12 h-12 mb-3 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center">
              <Icon name={c.i} className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-slate-900 mb-1">{c.t}</h3>
            <p className="text-sm text-slate-300">{c.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
