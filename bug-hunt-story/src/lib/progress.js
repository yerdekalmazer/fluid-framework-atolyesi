import { supabase, isSupabaseConfigured } from "./supabase.js";

const STORAGE_KEY = "bug-hunt-story-checked-v1";

export function loadLocal() {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch { return {}; }
}

export function saveLocal(map) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(map)); } catch {}
}

export async function fetchRemoteProgress(userId) {
  if (!isSupabaseConfigured || !userId) return {};
  const { data, error } = await supabase
    .from("progress")
    .select("case_id")
    .eq("user_id", userId);
  if (error) {
    console.error("[progress] fetch failed", error);
    return {};
  }
  const map = {};
  data.forEach(r => { map[r.case_id] = true; });
  return map;
}

// Login sonrası: local'deki işaretlemeleri remote'a upsert et, sonra remote'u tekrar oku ve döndür.
export async function syncLocalToRemote(userId) {
  if (!isSupabaseConfigured || !userId) return loadLocal();
  const local = loadLocal();
  const localIds = Object.keys(local).filter(id => local[id]);
  if (localIds.length > 0) {
    const rows = localIds.map(case_id => ({ user_id: userId, case_id }));
    const { error } = await supabase
      .from("progress")
      .upsert(rows, { onConflict: "user_id,case_id", ignoreDuplicates: true });
    if (error) console.error("[progress] sync upsert failed", error);
  }
  const remote = await fetchRemoteProgress(userId);
  // Birleştir (remote zaten local'in supersetidir)
  saveLocal(remote);
  return remote;
}

export async function markCaseRemote(userId, caseId) {
  if (!isSupabaseConfigured || !userId) return;
  const { error } = await supabase
    .from("progress")
    .upsert({ user_id: userId, case_id: caseId }, { onConflict: "user_id,case_id", ignoreDuplicates: true });
  if (error) console.error("[progress] mark failed", error);
}

export async function unmarkCaseRemote(userId, caseId) {
  if (!isSupabaseConfigured || !userId) return;
  const { error } = await supabase
    .from("progress")
    .delete()
    .eq("user_id", userId)
    .eq("case_id", caseId);
  if (error) console.error("[progress] unmark failed", error);
}

export async function clearAllRemote(userId) {
  if (!isSupabaseConfigured || !userId) return;
  const { error } = await supabase
    .from("progress")
    .delete()
    .eq("user_id", userId);
  if (error) console.error("[progress] clear failed", error);
}
