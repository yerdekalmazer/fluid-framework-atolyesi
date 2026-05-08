import { useState } from "react";
import { Icon } from "../icons/Icon.jsx";

export function TopBar({ username, onUsernameChange, search, onSearchChange, onOpenNotif, openNotif, onMenuClick }) {
  const [editing, setEditing] = useState(false);
  return (
    <header className="sticky top-0 bg-white border-b border-slate-200 px-6 py-3.5">
      <div className="flex">
        <button onClick={onMenuClick} className="lg:hidden mr-3 w-9 h-9 rounded-lg hover:bg-slate-100 flex items-center justify-center text-slate-700">
          <Icon name="menu" className="w-5 h-5" />
        </button>
        <div className="flex-1 max-w-md">
          <input
            type="text"
            value={search}
            onChange={e => onSearchChange(e.target.value)}
            placeholder="Atölye, mentor veya kaynak ara..."
            className="w-full bg-slate-100 rounded-lg px-3 py-1.5 text-sm focus:outline-none"
          />
        </div>
        <div className="ml-auto flex gap-3">
          <button onClick={onOpenNotif} className="relative w-9 h-9 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-700">
            <Icon name="bell" className="w-4 h-4" />
            <span className="absolute top-0 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex gap-2">
            <div className="w-12 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm">
              {username.split(" ").map(s => s[0]).join("").slice(0, 2).toUpperCase()}
            </div>
            {editing ? (
              <input autoFocus value={username} onChange={e => onUsernameChange(e.target.value)} onBlur={() => setEditing(false)}
                className="self-center text-sm font-medium bg-slate-100 rounded px-2 py-1 focus:outline-none" />
            ) : (
              <span onClick={() => setEditing(true)} className="self-center text-sm font-medium text-slate-700 cursor-pointer hover:text-indigo-600">
                {username}
              </span>
            )}
          </div>
        </div>
        {openNotif && (
          <div className="absolute right-6 top-14 bg-white shadow-lg rounded-xl border border-slate-200 w-72 py-2 z-10">
            <div className="px-4 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wide">Bildirimler</div>
            <div className="px-4 py-2 hover:bg-slate-50 text-sm">Eda K. yorumunuza yanıt verdi</div>
            <div className="px-4 py-2 hover:bg-slate-50 text-sm">Murat T. atölyeyi onayladı</div>
            <div className="px-4 py-2 hover:bg-slate-50 text-sm">Yeni mentor başvurusu</div>
          </div>
        )}
      </div>
    </header>
  );
}
