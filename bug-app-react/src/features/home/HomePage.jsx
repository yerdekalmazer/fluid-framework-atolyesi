import { Icon } from "../../shared/icons/Icon.jsx";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { SAMPLE_USERS } from "../../shared/data/sampleData.js";

export function HomePage({ ctx }) {
  console.log("HomePage rendering, user:", ctx.username);
  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-600 via-violet-600 to-fuchsia-600 text-white py-12 px-8 rounded-2xl mb-6 overflow-hidden relative">
        <img src="/images/hero-illustration.svg" className="absolute right-4 top-4 w-32 opacity-50" />
        <div className="w-[800px]">
          <span className="inline-block bg-white/20 px-3 py-1 rounded-full text-xs font-semibold mb-3">Hoş geldin</span>
          <h1 className="text-3xl md:text-4xl font-extrabold mb-2 tracking-tight">Selam {ctx.username.split(" ")[0]}, bugün ne öğreneceksin?</h1>
          <p className="text-gray-300 mb-6 max-w-xl">Bu hafta 8 yeni atölye, 12 mentor masası ve 24 kaynak yayında.</p>
          <button className="bg-white text-indigo-700 hover:bg-indigo-50 h-8 px-5 py-3 rounded-lg font-semibold">
            Atölye Keşfet
          </button>
        </div>
      </section>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {[
          { l: "Toplam Atölye", v: "147", t: "8 bu hafta", trend: true, p: "p-5" },
          { l: "Aktif Üye", v: "2.4K", t: "12% bu ay", trend: true, p: "p-3" },
          { l: "Mentor", v: "38", t: "aktif", trend: false, p: "p-5" },
          { l: "Memnuniyet", v: "96%", t: "4 puan", trend: true, p: "p-5" },
        ].map((s) => (
          <div className={`bg-white rounded-2xl ${s.p} border border-slate-100`}>
            <div className="text-xs uppercase tracking-wide text-slate-400 font-semibold">{s.l}</div>
            <div className="text-3xl font-extrabold text-slate-900 mt-2">{s.v}</div>
            <div className="text-xs text-emerald-600 mt-1 flex items-center gap-1">
              {s.trend && <Icon name="trending-up" className="w-3 h-3" />} {s.t}
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 border border-slate-100">
          <h3 className="font-bold text-lg mb-4 text-slate-900">Son Hareketler</h3>
          <div className="space-y-3">
            {SAMPLE_USERS.slice(0, 4).map((u, i) => (
              <div key={i} className={`flex gap-3 ${i === 1 ? 'p-3' : 'p-4'} rounded-lg hover:bg-slate-50`}>
                <Avatar user={u} />
                <div className="flex-1">
                  <div className="text-sm"><strong>{u.name}</strong> yeni bir atölye paylaştı</div>
                  <div className="text-xs text-slate-500 mt-0.5">{i + 1} saat önce</div>
                </div>
                <button className="bg-indigo-600 text-white h-8 px-3 py-3 rounded text-xs font-semibold">Aç</button>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 border border-slate-100">
          <h3 className="font-bold text-lg mb-3 text-slate-900">Hızlı Aksiyonlar</h3>
          <div className="space-y-2 flex flex-col gap-1">
            <button onClick={() => ctx.navigate("workshop-create")} className="w-full text-left bg-slate-50 hover:bg-white text-slate-900 px-3 py-2 rounded-lg text-sm">+ Atölye Oluştur</button>
            <button onClick={() => ctx.navigate("messages")} className="w-full text-left bg-slate-50 hover:bg-white text-slate-900 px-3 py-2 rounded-lg text-sm">Mesaj Gönder</button>
            <button onClick={() => ctx.navigate("calendar")} className="w-full text-left bg-slate-50 hover:bg-white text-slate-900 px-3 py-2 rounded-lg text-sm">Takvimi Aç</button>
          </div>
        </div>
      </div>
    </div>
  );
}
