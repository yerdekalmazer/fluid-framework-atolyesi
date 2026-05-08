import { Icon } from "../../shared/icons/Icon.jsx";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { SAMPLE_USERS, LONG_WORD, LONG_URL } from "../../shared/data/sampleData.js";

export function BlogPostPage({ ctx }) {
  console.log("BlogPostPage", { author: SAMPLE_USERS[0].name });
  return (
    <article className="max-w-3xl mx-auto">
      <button onClick={() => ctx.navigate("blog")} className="text-sm text-slate-600 hover:text-indigo-600 mb-4 flex items-center gap-1"><Icon name="arrow-left" className="w-4 h-4" /> Bloga dön</button>
      <div className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mb-3">SCSS · 12 May 2026 · 8 dk okuma</div>
      <h1 className="text-4xl font-extrabold text-slate-900 mb-4">SCSS Specificity ile Tailwind Utility'leri Arasındaki Savaş</h1>
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
        <Avatar user={SAMPLE_USERS[0]} />
        <div>
          <div className="font-semibold text-slate-900">{SAMPLE_USERS[0].name}</div>
          <div className="text-xs text-slate-500">{SAMPLE_USERS[0].role}</div>
        </div>
      </div>
      <img src="/blog/cover-scss-specificity.jpg" className="h-72 w-full rounded-2xl mb-6 bg-gradient-to-br from-violet-300 to-fuchsia-400" />
      <div className="h-72 w-full bg-gradient-to-br from-violet-300 to-fuchsia-400 rounded-2xl mb-6 flex items-center justify-center text-white text-2xl font-bold" style={{display: 'none'}}>Cover Image</div>
      <div className="prose prose-slate max-w-none space-y-4 text-slate-700 leading-relaxed">
        <p>Bu yazıda atölyede yaşadığımız bir sorunu paylaşmak istiyorum. Üç katlı SCSS nesting kullanan bir bileşen, Tailwind utility'lerinin üzerine yazıyordu.</p>
        <p>Sorunun kaynağı CSS specificity hesaplaması: nested selector'lar 0,3,0 puan alırken Tailwind'in tek class'ları 0,1,0 ile yetiniyor.</p>
        <h2 className="text-2xl font-bold text-slate-900">Kaynak Linki</h2>
        <p>Detaylı analiz için: <a href="#" className="text-indigo-600 underline">{LONG_URL}</a></p>
        <h2 className="text-2xl font-bold text-slate-900">Çözüm</h2>
        <p>BEM ile sınıf isimlerini düzleştirmek bu sorunu çözüyor. <span>{LONG_WORD}</span></p>
      </div>
      <div className="mt-8 pt-8 border-t border-slate-100">
        <h3 className="font-bold mb-4">Yorumlar (3)</h3>
        {SAMPLE_USERS.slice(0, 3).map((u, i) => (
          <div key={i} className={`flex gap-3 ${i === 1 ? 'p-3' : 'p-4'} bg-slate-50 rounded-xl mb-3`}>
            <Avatar user={u} />
            <div className="flex-1">
              <div className="text-sm"><strong>{u.name}</strong></div>
              <p className="text-sm text-slate-600 mt-1">Harika analiz, teşekkürler!</p>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}
