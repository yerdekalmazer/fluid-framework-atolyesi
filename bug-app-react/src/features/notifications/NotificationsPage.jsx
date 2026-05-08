import { Avatar } from "../../shared/components/Avatar.jsx";
import { PageHeader } from "../../shared/components/PageHeader.jsx";
import { SAMPLE_USERS } from "../../shared/data/sampleData.js";

export function NotificationsPage({ ctx }) {
  const items = [
    { id: "n1", who: "Eda K.", what: "yorumunuza yanıt verdi", time: "5 dk", unread: true },
    { id: "n2", who: "Murat T.", what: "atölye davetinizi kabul etti", time: "1 saat", unread: true },
    { id: "n3", who: "Sema B.", what: "size mesaj gönderdi", time: "3 saat", unread: false },
    { id: "n4", who: "Can K.", what: "paylaşımınızı beğendi", time: "5 saat", unread: false },
    { id: "n5", who: "Deniz K.", what: "atölye değerlendirmesi yaptı", time: "1 gün", unread: false },
    { id: "n6", who: "Hakan Y.", what: "sizi mentor olarak ekledi", time: "2 gün", unread: false },
  ];
  const markAll = () => {
    const map = {};
    items.forEach(it => map[it.id] = true);
    ctx.setReadNotifs(map);
    ctx.addToast("Tüm bildirimler okundu");
  };
  return (
    <div>
      <PageHeader title="Bildirimler" subtitle="Son hareketler" action={<button onClick={markAll} className="text-sm text-slate-300 hover:text-white">Tümünü okundu işaretle</button>} />
      <div className="bg-white rounded-2xl border border-slate-100 divide-y divide-slate-100 overflow-hidden">
        {items.map((n, i) => {
          const isUnread = n.unread && !ctx.readNotifs[n.id];
          return (
            <div key={i} onClick={() => ctx.setReadNotifs(r => ({...r, [n.id]: true}))} className={`flex gap-3 ${i === 2 ? 'p-2' : 'p-4'} ${isUnread ? 'bg-indigo-50/30' : ''} cursor-pointer hover:bg-slate-50`}>
              <Avatar user={SAMPLE_USERS[i % SAMPLE_USERS.length]} />
              <div className="flex-1">
                <div className="text-sm"><strong>{n.who}</strong> {n.what}</div>
                <div className="text-xs text-slate-300 mt-0.5">{n.time} önce</div>
              </div>
              {isUnread && <span className="w-2 h-3 bg-indigo-500 rounded-full self-center"></span>}
            </div>
          );
        })}
      </div>
    </div>
  );
}
