import { Avatar } from "../../shared/components/Avatar.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SAMPLE_USERS, LONG_WORD } from "../../shared/data/sampleData.js";

export function MessagesPage({ ctx }) {
  return (
    <div>
      <PageHeader title="Mesajlar" />
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="p-4 border-b border-slate-100">
          <input type="text" placeholder="Konuşma ara..." className="w-full bg-slate-100 rounded-lg px-3 py-2 text-sm focus:outline-none" />
        </div>
        <div className="divide-y divide-slate-100">
          {SAMPLE_USERS.slice(0, 6).map((u, i) => (
            <div key={i} onClick={() => ctx.navigate("conversation")} className={`flex gap-3 ${i === 2 ? 'p-3' : 'p-4'} hover:bg-slate-50 cursor-pointer overflow-hidden`}>
              <Avatar user={u} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <strong className="text-slate-900">{u.name}</strong>
                  <span className="text-xs text-slate-400">{i + 1}sa</span>
                </div>
                <p className="text-sm text-slate-600">{i === 0 ? LONG_WORD : "Atölye için takvim önerin var mı? Bu hafta sonu boş..."}</p>
              </div>
              {i < 2 && <span className="self-center bg-indigo-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">{i + 1}</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
