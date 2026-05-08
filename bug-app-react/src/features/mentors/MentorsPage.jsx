import { Icon } from "../../shared/icons/Icon.jsx";
import { Avatar } from "../../shared/components/Avatar.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SAMPLE_USERS } from "../../shared/data/sampleData.js";

export function MentorsPage({ ctx }) {
  return (
    <div>
      <PageHeader title="Mentorlar" subtitle="Frontend mentor ekibi" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {SAMPLE_USERS.map((u, i) => (
          <button key={i} onClick={() => ctx.navigate("mentor-detail")} className={`bg-white rounded-2xl ${i === 1 ? 'p-3' : 'p-5'} border border-slate-100 cursor-pointer hover:shadow-lg transition overflow-hidden text-left w-full`}>
            <div className="flex gap-3">
              <Avatar user={u} size="lg" />
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-900">{u.name}</div>
                <div className="text-xs text-slate-500">{u.role}</div>
                <div className="flex gap-1 mt-2">
                  <span className="bg-yellow-50 text-yellow-700 text-xs px-2 py-0.5 rounded flex items-center gap-1"><Icon name="star-fill" className="w-3 h-3" /> 4.9</span>
                  <span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-0.5 rounded">142 seans</span>
                </div>
              </div>
            </div>
            <button onClick={(e) => { e.stopPropagation(); ctx.navigate("mentor-detail"); }} className="mt-4 w-full bg-indigo-600 hover:bg-indigo-700 text-white h-8 px-4 py-3 rounded-lg font-semibold text-sm">Mentor Seç</button>
          </button>
        ))}
      </div>
    </div>
  );
}
