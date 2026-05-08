import { useState } from "react";
import { supabase } from "../lib/supabase.js";

export function AuthModal({ open, onClose, onSuccess }) {
  const [mode, setMode] = useState("login"); // 'login' | 'signup'
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [handle, setHandle] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState(null);

  if (!open) return null;

  const reset = () => {
    setEmail(""); setPassword(""); setHandle(""); setDisplayName("");
    setErr(null); setBusy(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErr(null);
    setBusy(true);
    try {
      if (mode === "signup") {
        if (handle.length < 3 || handle.length > 20) {
          throw new Error("Kullanıcı adı 3-20 karakter olmalı");
        }
        if (!/^[a-z0-9_]+$/i.test(handle)) {
          throw new Error("Kullanıcı adı sadece harf, rakam ve _ içerebilir");
        }
        const { data, error } = await supabase.auth.signUp({
          email, password,
          options: { data: { handle, display_name: displayName || handle } },
        });
        if (error) throw error;
        if (!data.user) throw new Error("Hesap oluşturulamadı");

        // Profile'ı oluştur (auth.users tetiklendi, profiles boş)
        const { error: pErr } = await supabase.from("profiles").insert({
          id: data.user.id,
          handle,
          display_name: displayName || handle,
        });
        if (pErr && pErr.code !== "23505") throw pErr; // duplicate izinli

        onSuccess?.(data.session);
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        onSuccess?.();
      }
      reset();
      onClose();
    } catch (e) {
      setErr(e.message || String(e));
    } finally {
      setBusy(false);
    }
  };

  return (
    <div
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4"
    >
      <div className="bg-white rounded-xl w-full max-w-md p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-stone-500">
              Divizyon Destek Paneli
            </div>
            <h2 className="font-serif text-2xl font-bold text-stone-900">
              {mode === "login" ? "Giriş yap" : "Kayıt ol"}
            </h2>
          </div>
          <button onClick={onClose} className="text-stone-400 hover:text-stone-700 text-2xl leading-none">×</button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1">E-posta</label>
            <input
              type="email" required value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400"
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-stone-600 mb-1">Şifre</label>
            <input
              type="password" required minLength={6} value={password}
              onChange={e => setPassword(e.target.value)}
              className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400"
            />
          </div>

          {mode === "signup" && (
            <>
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Kullanıcı adı (handle) <span className="text-stone-400">— leaderboard'da görünür</span>
                </label>
                <input
                  type="text" required minLength={3} maxLength={20}
                  value={handle}
                  onChange={e => setHandle(e.target.value.toLowerCase())}
                  placeholder="orn. ali_yilmaz"
                  className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-stone-600 mb-1">
                  Görünen ad <span className="text-stone-400">(opsiyonel)</span>
                </label>
                <input
                  type="text" maxLength={50}
                  value={displayName}
                  onChange={e => setDisplayName(e.target.value)}
                  placeholder="Ali Yılmaz"
                  className="w-full border border-stone-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-stone-400 focus:border-stone-400"
                />
              </div>
            </>
          )}

          {err && (
            <div className="bg-rose-50 border border-rose-200 text-rose-800 text-sm rounded-lg px-3 py-2">
              {err}
            </div>
          )}

          <button
            type="submit" disabled={busy}
            className="w-full bg-stone-900 hover:bg-stone-800 disabled:opacity-60 text-white font-semibold py-2.5 rounded-lg transition"
          >
            {busy ? "İşleniyor..." : (mode === "login" ? "Giriş yap" : "Kayıt ol ve giriş yap")}
          </button>
        </form>

        <div className="mt-4 text-center text-sm text-stone-600">
          {mode === "login" ? (
            <>Hesabın yok mu? <button onClick={() => { setMode("signup"); setErr(null); }} className="text-stone-900 font-semibold underline">Kayıt ol</button></>
          ) : (
            <>Zaten hesabın var mı? <button onClick={() => { setMode("login"); setErr(null); }} className="text-stone-900 font-semibold underline">Giriş yap</button></>
          )}
        </div>
      </div>
    </div>
  );
}
