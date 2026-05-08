import { Icon } from "../../shared/icons/Icon.jsx";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { SAMPLE_USERS, LONG_WORD } from "../../shared/data/sampleData.js";

export function MentorDetailPage({ ctx }) {
  return (
    <div>
      <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6">
        <div className="flex gap-4">
          <Avatar user={SAMPLE_USERS[0]} size="lg" />
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold text-slate-900">{SAMPLE_USERS[0].name}</h1>
            <p className="text-sm text-slate-300">{SAMPLE_USERS[0].role}</p>
            <div className="flex gap-2 mt-3">
              <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-1 rounded flex items-center gap-1"><Icon name="star-fill" className="w-3 h-3" /> 4.9 (142)</span>
              <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded">Mentor 3 yıl</span>
            </div>
          </div>
          <button onClick={() => ctx.addToast("Rezervasyon talebin gönderildi")} className="bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold">Seans Rezervasyonu</button>
        </div>
        <div className="mt-6 pt-6 border-t border-slate-100">
          <h3 className="font-bold mb-2">Bio</h3>
          <p className="text-slate-600 leading-relaxed">5+ yıl frontend deneyimi, SCSS ve Tailwind uzmanı. Pixel-perfect render konusunda topluluk lideri. Bu uzun yazıda <span>{LONG_WORD}</span> türü kelimeler de geçer.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="bg-white rounded-2xl p-5 border border-slate-100">
          <h3 className="font-bold mb-3">Yorumlar</h3>
          <div className="space-y-3">
            {SAMPLE_USERS.slice(1, 4).map((u, i) => (
              <div key={i} className="flex gap-3">
                <Avatar user={u} size="sm" />
                <div>
                  <div className="text-sm"><strong>{u.name}</strong></div>
                  <div className="text-yellow-500 flex gap-0.5">
                    {Array.from({length: 5}).map((_, k) => <Icon key={k} name="star-fill" className="w-3 h-3" />)}
                  </div>
                  <p className="text-sm text-slate-600">Harika bir mentor, kesinlikle tavsiye ederim.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-100">
          <h3 className="font-bold mb-3">Uzmanlık</h3>
          <div className="flex gap-1 flex-nowrap">
            {["SCSS", "Tailwind CSS", "Bootstrap", "CSS Grid", "Flexbox", "Pixel Perfect", "Responsive Design", "Dark Mode", "Animations", "Accessibility", "SCSS"].map((s, i) => (
              <span key={s} className="bg-slate-100 text-slate-700 text-xs px-2 py-1 rounded">{s}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
