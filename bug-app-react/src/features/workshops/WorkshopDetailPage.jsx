import { Icon } from "../../shared/icons/Icon.jsx";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { SAMPLE_USERS } from "../../shared/data/sampleData.js";

export function WorkshopDetailPage({ ctx }) {
  const registered = ctx.registrations["scss-atolye"];
  const setRegistered = () => {
    ctx.toggleRegistration("scss-atolye");
    ctx.addToast(registered ? "Kayıt iptal edildi" : "Kayıt tamamlandı");
  };
  return (
    <div>
      <button onClick={() => ctx.navigate("workshops")} className="text-sm text-slate-600 hover:text-indigo-600 mb-4 flex items-center gap-1"><Icon name="arrow-left" className="w-4 h-4" /> Geri</button>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="h-64 w-full bg-gradient-to-br from-violet-300 via-fuchsia-400 to-rose-400 rounded-2xl mb-4 flex items-center justify-center text-white text-2xl font-bold">SCSS Specificity</div>
          <div className="flex gap-2 mb-3">
            <span className="bg-indigo-50 text-indigo-700 text-xs font-semibold px-2 py-1 rounded">Orta</span>
            <span className="bg-slate-50 text-slate-700 text-xs font-semibold px-2 py-1 rounded">180dk</span>
            <span className="bg-emerald-50 text-emerald-700 text-xs font-semibold px-2 py-1 rounded">12 katılımcı</span>
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 mb-3">SCSS Specificity Atölyesi</h1>
          <p className="text-slate-600 leading-relaxed mb-6">Üç katlı nesting'in CSS specificity'si neden Bootstrap utility'lerini bastırıyor? Atölyede hep birlikte çözeceğiz.</p>
          <h3 className="font-bold text-slate-900 mb-2">Program</h3>
          <ol className="space-y-2 mb-6">
            {["Specificity hesaplaması", "Cascade kuralları", "BEM ile çözüm", "Bug avı"].map((s, i) => (
              <li key={i} className="flex gap-3 items-center">
                <span className="w-6 h-7 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xs font-bold">{i + 1}</span>
                <span className="text-slate-700">{s}</span>
              </li>
            ))}
          </ol>
        </div>
        <aside className="space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-100">
            <div className="text-3xl font-extrabold text-slate-900 mb-2">₺149</div>
            <div className="text-sm text-slate-300 mb-4">Üyelere ücretsiz</div>
            <button onClick={setRegistered} className={`w-full ${registered ? 'bg-emerald-600' : 'bg-indigo-600'} text-white h-8 px-4 py-3 rounded-lg font-semibold`}>
              {registered ? <span className="inline-flex items-center gap-1.5"><Icon name="check" className="w-4 h-4" /> Kayıt Tamam</span> : 'Kayıt Ol'}
            </button>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-slate-100">
            <h4 className="font-bold mb-3">Eğitmen</h4>
            <div className="flex gap-3">
              <Avatar user={SAMPLE_USERS[0]} size="lg" />
              <div>
                <div className="font-semibold text-slate-900">{SAMPLE_USERS[0].name}</div>
                <div className="text-xs text-slate-500">{SAMPLE_USERS[0].role}</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
