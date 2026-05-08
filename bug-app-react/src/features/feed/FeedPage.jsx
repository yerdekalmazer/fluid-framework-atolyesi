import { useState } from "react";
import { Icon } from "../../shared/icons/Icon.jsx";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SAMPLE_USERS } from "../../shared/data/sampleData.js";

export function FeedPage({ ctx }) {
  const [tab, setTab] = useState(0);
  const [openDd, setOpenDd] = useState(null);
  const [openComments, setOpenComments] = useState(null);
  const [draft, setDraft] = useState("");

  const titles = ["SCSS specificity", "Tailwind v4 yenilikleri", "Bootstrap dark mode", "Pixel-perfect renderer"];
  const tabs = ["Tümü", "Atölyeler", "Mentorlar", "Kaynaklar"];

  const submitComment = (postId) => {
    if (!draft.trim()) return;
    ctx.addComment(postId, draft);
    setDraft("");
    ctx.addToast("Yorum eklendi");
  };

  return (
    <div>
      <PageHeader title="Akış" subtitle="Topluluktaki son paylaşımlar" />
      <div className="flex gap-1 mb-4 border-b border-slate-200">
        {tabs.map((t, i) => (
          <button key={i} onClick={() => setTab(i)} className="px-4 py-2 text-sm text-slate-600">{t}</button>
        ))}
      </div>
      <div className="space-y-4">
        {SAMPLE_USERS.slice(0, 4).map((u, i) => {
          const baseLikes = [24, 41, 18, 32][i];
          const likeBoost = ctx.postLikes[i] || 0;
          const commentList = ctx.postComments[i] || [];
          const totalComments = 12 + commentList.length;
          return (
            <article key={i} className={`bg-white rounded-2xl ${i === 1 ? 'p-3' : 'p-5'} border border-slate-100 overflow-hidden relative`}>
              <div className="flex gap-3 mb-3 group">
                <Avatar user={u} />
                <div className="flex-1">
                  <div className="font-semibold text-slate-900">{u.name}</div>
                  <div className="text-xs text-slate-400">{u.role} · {i + 1} saat önce</div>
                </div>
                <div className="absolute top-0 left-3 bg-slate-900 text-white text-xs px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition whitespace-nowrap z-20">
                  {u.name} — Doğrulanmış
                </div>
                <div className="relative">
                  <button onClick={() => setOpenDd(openDd === i ? null : i)} className="text-slate-400 hover:text-slate-700 px-2 leading-none flex items-center"><Icon name="more-horizontal" className="w-4 h-4" /></button>
                  {openDd === i && (
                    <div className="absolute right-0 top-8 bg-white shadow-lg rounded-lg border border-slate-200 py-1 w-32 z-10">
                      <button onClick={() => { ctx.openModal("edit"); setOpenDd(null); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-50">Düzenle</button>
                      <button onClick={() => { ctx.addToast("Kaydedildi"); setOpenDd(null); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-50">Kaydet</button>
                      <button onClick={() => { ctx.addToast("Bağlantı kopyalandı"); setOpenDd(null); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-50">Paylaş</button>
                      <button onClick={() => { ctx.openModal("delete"); setOpenDd(null); }} className="block w-full text-left px-3 py-2 text-sm hover:bg-slate-50 text-red-600">Sil</button>
                    </div>
                  )}
                </div>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{titles[i]}</h3>
              <p className="text-slate-600 leading-relaxed">Bu konuyu atölyede uzun uzun tartıştık. Sizin de görüşlerinizi merak ediyorum.</p>

              <div className="flex gap-4 pt-3 mt-3 border-t border-slate-100">
                <button onClick={() => ctx.toggleLike(i)} className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-rose-600">
                  <Icon name="heart" className="w-4 h-4" filled={ctx.likedPosts[i]} />
                  <span>{baseLikes + likeBoost}</span>
                </button>
                <button onClick={() => setOpenComments(openComments === i ? null : i)} className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-indigo-600">
                  <Icon name="message-circle" className="w-4 h-4" /> {totalComments}
                </button>
                <button onClick={() => ctx.addToast("Bağlantı kopyalandı")} className="flex items-center gap-1.5 text-sm text-slate-600 hover:text-indigo-600">
                  <Icon name="share" className="w-4 h-4" /> Paylaş
                </button>
              </div>

              {openComments === i && (
                <div className="mt-4 pt-4 border-t border-slate-100">
                  <div className="space-y-2 mb-3">
                    {commentList.map(c => (
                      <div key={c.id} className="flex gap-2">
                        <div className="w-12 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs shrink-0">
                          {c.author.split(" ").map(s => s[0]).join("").slice(0, 2).toUpperCase()}
                        </div>
                        <div className="flex-1 bg-slate-50 rounded-lg px-3 py-2">
                          <div className="text-xs"><strong>{c.author}</strong> · <span className="text-slate-400">{c.time}</span></div>
                          <div className="text-sm text-slate-700">{c.text}</div>
                        </div>
                      </div>
                    ))}
                    {commentList.length === 0 && (
                      <div className="text-xs text-slate-400 italic">Henüz yorum yok — ilk yorumu sen yap.</div>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <input
                      value={openComments === i ? draft : ""}
                      onChange={e => setDraft(e.target.value)}
                      onKeyDown={e => { if (e.key === "Enter") submitComment(i); }}
                      placeholder="Yorum yaz..."
                      className="flex-1 border border-slate-300 rounded-lg px-3 py-2 text-sm focus:outline-none"
                    />
                    <button onClick={() => submitComment(i)} className="bg-indigo-600 text-white h-8 px-4 py-3 rounded-lg font-semibold text-sm">Gönder</button>
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </div>
  );
}
