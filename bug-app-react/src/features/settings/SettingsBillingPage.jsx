import { PageHeader } from "../../shared/components/PageHeader.jsx";

export function SettingsBillingPage({ ctx }) {
  return (
    <div className="max-w-3xl">
      <PageHeader title="Faturalama" />
      <div className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white rounded-2xl p-6 mb-4">
        <div className="text-sm text-indigo-100 mb-1">Mevcut plan</div>
        <div className="text-2xl font-extrabold mb-3">Pro Plan</div>
        <div className="text-3xl font-extrabold">₺199<span className="text-sm font-normal text-indigo-200">/ay</span></div>
        <button onClick={() => ctx.addToast("Plan değişikliği için yönlendiriliyorsun...")} className="mt-4 bg-white text-indigo-700 hover:bg-indigo-50 h-8 px-4 py-3 rounded-lg font-semibold">Planı Değiştir</button>
      </div>
      <div className="bg-white rounded-2xl border border-slate-100 overflow-hidden">
        <div className="p-5 border-b border-slate-100">
          <h3 className="font-bold">Fatura Geçmişi</h3>
        </div>
        <table className="w-full text-sm">
          <thead className="bg-slate-50">
            <tr>
              <th className="text-left p-3">Tarih</th>
              <th className="text-left p-3">Plan</th>
              <th className="text-right p-3">Tutar</th>
              <th className="text-center p-3">Durum</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({length: 5}).map((_, i) => (
              <tr key={i} className="border-t border-slate-100">
                <td className="p-3">2026-0{5-i}-12</td>
                <td className="p-3">Pro Plan</td>
                <td className="p-3 text-right">₺199</td>
                <td className="p-3 text-left"><span className="bg-emerald-50 text-emerald-700 text-xs px-2 py-1 rounded">Ödendi</span></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
