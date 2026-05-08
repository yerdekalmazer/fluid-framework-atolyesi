import { useState } from "react";
import { supabase, isSupabaseConfigured } from "../lib/supabase.js";
import { AuthModal } from "./AuthModal.jsx";

export function AuthBar({ session, profile }) {
  const [open, setOpen] = useState(false);

  if (!isSupabaseConfigured) {
    return (
      <div className="bg-amber-100 border-b border-amber-300 text-amber-900 text-xs px-4 py-1.5 text-center">
        ⚠️ Supabase yapılandırılmadı — leaderboard çalışmaz. <code className="font-mono">.env.local</code>'i ayarla, README'ye bak.
      </div>
    );
  }

  if (!session) {
    return (
      <>
        <div className="bg-stone-900 text-stone-200 text-xs px-4 py-2 flex items-center justify-end gap-3">
          <span className="text-stone-400">Misafir mod — ilerlemen sadece bu cihazda kalır</span>
          <button
            onClick={() => setOpen(true)}
            className="bg-white text-stone-900 hover:bg-stone-100 font-semibold px-3 py-1 rounded text-xs"
          >
            Giriş yap / Kayıt ol
          </button>
        </div>
        <AuthModal open={open} onClose={() => setOpen(false)} />
      </>
    );
  }

  return (
    <div className="bg-stone-900 text-stone-200 text-xs px-4 py-2 flex items-center justify-end gap-3">
      <span>Merhaba <strong className="font-mono text-white">@{profile?.handle ?? "..."}</strong></span>
      <button
        onClick={() => supabase.auth.signOut()}
        className="text-stone-400 hover:text-white underline underline-offset-2"
      >
        Çıkış yap
      </button>
    </div>
  );
}
