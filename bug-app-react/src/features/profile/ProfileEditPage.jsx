import { useState } from "react";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function ProfileEditPage({ ctx }) {
  const [name, setName] = useState(ctx.username);
  const [bio, setBio] = useState(ctx.bio);
  const [city, setCity] = useState("");
  const [position, setPosition] = useState("");
  const [site, setSite] = useState("");
  const save = () => {
    ctx.setUsername(name);
    ctx.setBio(bio);
    ctx.addToast("Profil güncellendi");
    ctx.navigate("profile");
  };
  return (
    <div className="max-w-2xl">
      <PageHeader title="Profili Düzenle" />
      <div className="bg-white rounded-2xl p-6 border border-slate-100 space-y-4">
        <div className="flex gap-4 items-center pb-4 border-b border-slate-100">
          <Avatar user={{initials: name.split(" ").map(s => s[0]).join("").slice(0,2).toUpperCase(), color: "bg-indigo-600"}} size="lg" />
          <button onClick={() => ctx.addToast("Yükleme henüz aktif değil")} className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-sm">Fotoğraf Değiştir</button>
          <button onClick={() => ctx.addToast("Fotoğraf silindi")} className="text-red-600 text-sm">Sil</button>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Ad Soyad</label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Bio</label>
          <textarea rows={3} value={bio} onChange={e => setBio(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none resize-y"></textarea>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Şehir</label>
            <input type="text" value={city} onChange={e => setCity(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Pozisyon</label>
            <input type="text" value={position} onChange={e => setPosition(e.target.value)} className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1">Web Site</label>
          <input type="text" value={site} onChange={e => setSite(e.target.value)} placeholder="https://..." className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none" />
        </div>
        <div className="flex gap-2">
          <button onClick={() => ctx.navigate("profile")} className="bg-white border border-slate-300 px-4 py-2 rounded-lg text-sm">Vazgeç</button>
          <button onClick={save} className="bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold">Kaydet</button>
        </div>
      </div>
    </div>
  );
}
