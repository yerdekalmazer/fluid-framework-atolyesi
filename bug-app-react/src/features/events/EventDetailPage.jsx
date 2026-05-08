import { Icon } from "../../shared/icons/Icon.jsx";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { SAMPLE_USERS, LONG_URL } from "../../shared/data/sampleData.js";

export function EventDetailPage({ ctx }) {
  const joined = ctx.registrations["scss-event"];
  return (
    <div>
      <div className="bg-gradient-to-br from-indigo-600 to-fuchsia-600 text-white rounded-2xl p-8 mb-6">
        <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-semibold">12 Mayıs · 19:00</span>
        <h1 className="text-3xl font-extrabold mt-4 mb-2">SCSS Specificity Atölyesi</h1>
        <p className="text-gray-300 max-w-xl">3 saatlik intensive atölye — pixel-perfect render pratiği.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-100">
          <h3 className="font-bold mb-3">Detaylar</h3>
          <p className="text-slate-600 mb-4">Atölyenin detaylı içerikleri ve hazırlık materyalleri burada.</p>
          <h3 className="font-bold mb-3">Kayıt URL</h3>
          <a href="#" className="text-indigo-600 underline">{LONG_URL}</a>
        </div>
        <aside className="bg-white p-5 rounded-2xl border border-slate-100">
          <h4 className="font-bold mb-3">Katılımcılar (12)</h4>
          <div className="flex flex-wrap gap-1 mb-4">
            {SAMPLE_USERS.slice(0, 8).map((u, i) => (
              <Avatar key={i} user={u} size="sm" />
            ))}
          </div>
          <button onClick={() => { ctx.toggleRegistration("scss-event"); ctx.addToast(joined ? "Etkinlikten ayrıldın" : "Etkinliğe katıldın"); }} className={`w-full ${joined ? 'bg-emerald-600' : 'bg-indigo-600'} hover:opacity-90 text-white h-8 px-4 py-3 rounded-lg font-semibold`}>{joined ? <span className="inline-flex items-center gap-1.5"><Icon name="check" className="w-4 h-4" /> Katıldın</span> : 'Katıl'}</button>
        </aside>
      </div>
    </div>
  );
}
