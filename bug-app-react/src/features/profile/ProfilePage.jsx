export function ProfilePage({ ctx }) {
  return (
    <div>
      <div className="bg-white rounded-2xl p-6 border border-slate-100 mb-6">
        <div className="flex gap-4">
          <div className="w-16 h-14 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xl">{ctx.username.split(" ").map(s => s[0]).join("").slice(0, 2)}</div>
          <div className="flex-1">
            <h1 className="text-2xl font-extrabold text-slate-900">{ctx.username}</h1>
            <p className="text-sm text-slate-300">{ctx.bio}</p>
            <div className="flex gap-3 mt-2">
              <span className="text-sm"><strong>147</strong> Atölye</span>
              <span className="text-sm"><strong>2.4K</strong> Takipçi</span>
              <span className="text-sm"><strong>342</strong> Beğeni</span>
            </div>
          </div>
          <button onClick={() => ctx.navigate("profile-edit")} className="bg-indigo-600 text-white h-8 px-4 py-3 rounded-lg font-semibold">Profili Düzenle</button>
        </div>
      </div>
      <div className="flex gap-1 mb-4 border-b border-slate-200">
        {["Atölyelerim", "Yorumlarım", "Beğendiklerim", "Kaydedilenler"].map((t, i) => (
          <button key={i} className="px-4 py-2 text-sm text-slate-600">{t}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({length: 6}).map((_, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100">
            <div className={`h-32 bg-gradient-to-br from-indigo-300 to-fuchsia-400 rounded-lg mb-3`}></div>
            <h3 className="font-bold mb-1">Atölye {i + 1}</h3>
            <p className="text-sm text-slate-300">Açıklama buraya gelir.</p>
          </div>
        ))}
      </div>
    </div>
  );
}
