import { useEffect, useState } from "react";
import { supabase, isSupabaseConfigured } from "./supabase.js";

export function useSession() {
  const [session, setSession] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isSupabaseConfigured) {
      setLoading(false);
      return;
    }

    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setLoading(false);
    });

    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  useEffect(() => {
    if (!session?.user) {
      setProfile(null);
      return;
    }
    let cancelled = false;
    supabase
      .from("profiles")
      .select("id, handle, display_name, started_at")
      .eq("id", session.user.id)
      .maybeSingle()
      .then(({ data }) => { if (!cancelled) setProfile(data); });
    return () => { cancelled = true; };
  }, [session?.user?.id]);

  return { session, profile, loading };
}
