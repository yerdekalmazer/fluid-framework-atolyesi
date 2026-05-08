import { Icon } from "../../shared/icons/Icon.jsx";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SAMPLE_USERS, LONG_WORD } from "../../shared/data/sampleData.js";

export function LikesPage() {
  return (
    <div>
      <PageHeader title="Beğeniler" subtitle="Beğendiğin paylaşımlar" />
      <div className="space-y-3">
        {SAMPLE_USERS.slice(0, 5).map((u, i) => (
          <div key={u.role} className={`bg-white rounded-2xl ${i === 1 ? 'p-3' : 'p-4'} border border-slate-100 flex gap-3`}>
            <Avatar user={u} />
            <div className="flex-1">
              <div className="font-semibold">{u.name}</div>
              <p className="text-sm text-slate-600 mt-1">{i === 2 ? LONG_WORD : "Atölye paylaşımı yaptı"}</p>
            </div>
            <span className="text-rose-500 self-center"><Icon name="heart" className="w-5 h-5" filled /></span>
          </div>
        ))}
      </div>
    </div>
  );
}
