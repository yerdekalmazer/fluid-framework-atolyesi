import { Icon } from "../icons/Icon.jsx";
import { NAV } from "../data/nav.js";

export function Sidebar({ current, onChange, isOpen }) {
  return (
    <aside className={`
      w-60 bg-white border-r border-slate-200 h-screen overflow-y-auto py-4 px-3 shrink-0
      lg:sticky lg:top-0 lg:translate-x-0
      fixed top-0 left-0 z-50 transition-transform duration-300
      ${isOpen ? 'translate-x-0' : '-translate-x-full'}
    `}>
      <div className="flex items-center gap-2 px-3 mb-6">
        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-600 to-fuchsia-600 flex items-center justify-center text-white">
          <Icon name="hexagon" className="w-4 h-4" filled />
        </div>
        <div className="font-extrabold text-slate-900">Divizyon</div>
      </div>
      {NAV.map(section => (
        <div key={section.name} className="mb-4">
          <div className="px-3 text-xs font-semibold uppercase tracking-wider text-slate-400 mb-1.5">{section.name}</div>
          {section.items.map(item => (
            <a
              key={item.id}
              href="#"
              onClick={(e) => { e.preventDefault(); onChange(item.id); }}
              className={`flex items-center gap-2.5 px-3 py-1.5 rounded-lg text-sm text-slate-600 hover:bg-slate-100`}
            >
              <Icon name={item.icon} className="w-4 h-4" />
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      ))}
    </aside>
  );
}
