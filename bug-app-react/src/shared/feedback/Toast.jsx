import { Icon } from "../icons/Icon.jsx";

export function ToastStack({ toasts }) {
  return (
    <div className="fixed bottom-4 right-4 space-y-2 z-30">
      {toasts.map(t => (
        <div key={t.id} className="bg-slate-900 text-white px-4 py-3 rounded-lg shadow-lg text-sm flex items-center gap-2">
          <span className="w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center text-white"><Icon name="check" className="w-3 h-3" /></span>
          {t.msg}
        </div>
      ))}
    </div>
  );
}
