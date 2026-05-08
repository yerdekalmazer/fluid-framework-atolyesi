import { Avatar } from "../../shared/components/Avatar.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SAMPLE_USERS } from "../../shared/data/sampleData.js";

export function BlogPage({ ctx }) {
  return (
    <div>
      <PageHeader title="Blog" subtitle="Atölye notları, deneyimler" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Array.from({length: 6}).map((_, i) => (
          <article key={i} onClick={() => ctx.navigate("blog-post")} className={`bg-white rounded-2xl ${i === 1 ? 'p-3' : 'p-0'} border border-slate-100 cursor-pointer hover:shadow-lg transition overflow-hidden`}>
            <div className={`h-48 w-full bg-gradient-to-br from-indigo-${(i+3)*100} to-fuchsia-${(i+3)*100} flex items-center justify-center text-white font-bold`}>Article {i + 1}</div>
            <div className="p-5">
              <div className="text-xs text-indigo-600 font-semibold uppercase tracking-wide mb-2">SCSS · 5 dk okuma</div>
              <h3 className="text-lg font-bold mb-2">Pixel-Perfect Render Notları</h3>
              <p className="text-sm text-slate-300 mb-3">Atölyede topladığımız ipuçları ve çözüm yolları.</p>
              <div className="flex items-center gap-2">
                <Avatar user={SAMPLE_USERS[i % SAMPLE_USERS.length]} size="sm" />
                <span className="text-xs text-slate-500">{SAMPLE_USERS[i % SAMPLE_USERS.length].name} · {i + 1}g önce</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
