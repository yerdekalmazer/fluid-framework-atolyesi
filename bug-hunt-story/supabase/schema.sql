-- ============================================================
-- Bug Hunt Story — Supabase Şema
-- Çalıştırma: Supabase Dashboard > SQL Editor > "New query" > yapıştır > Run
-- ============================================================

-- 1. profiles: kullanıcı public bilgileri (handle + display name + başlangıç zamanı)
create table if not exists public.profiles (
  id           uuid primary key references auth.users(id) on delete cascade,
  handle       text unique not null check (length(handle) between 3 and 20),
  display_name text not null,
  started_at   timestamptz not null default now(),
  created_at   timestamptz not null default now()
);

-- 2. progress: hangi vakayı (case_id) ne zaman işaretledi
create table if not exists public.progress (
  user_id    uuid not null references auth.users(id) on delete cascade,
  case_id    text not null,
  marked_at  timestamptz not null default now(),
  primary key (user_id, case_id)
);

create index if not exists progress_user_idx on public.progress(user_id);
create index if not exists progress_marked_idx on public.progress(marked_at);

-- 3. RLS aç
alter table public.profiles enable row level security;
alter table public.progress enable row level security;

-- 4. profiles politikaları
drop policy if exists "profiles readable by everyone" on public.profiles;
create policy "profiles readable by everyone"
  on public.profiles for select using (true);

drop policy if exists "users insert own profile" on public.profiles;
create policy "users insert own profile"
  on public.profiles for insert with check (auth.uid() = id);

drop policy if exists "users update own profile" on public.profiles;
create policy "users update own profile"
  on public.profiles for update using (auth.uid() = id);

-- 5. progress politikaları
drop policy if exists "progress readable by everyone" on public.progress;
create policy "progress readable by everyone"
  on public.progress for select using (true);

drop policy if exists "users insert own progress" on public.progress;
create policy "users insert own progress"
  on public.progress for insert with check (auth.uid() = user_id);

drop policy if exists "users delete own progress" on public.progress;
create policy "users delete own progress"
  on public.progress for delete using (auth.uid() = user_id);

-- 6. Leaderboard view
--    solved_count: çözülmüş vaka sayısı
--    duration_seconds: ilk işaretlemeden son işaretlemeye geçen süre (ya da 0)
--    rank_score: count * 100000 - duration_seconds (sayı önce, süre tie-break)
create or replace view public.leaderboard as
select
  p.id,
  p.handle,
  p.display_name,
  p.started_at,
  count(pr.case_id) as solved_count,
  coalesce(min(pr.marked_at), p.started_at) as first_marked_at,
  coalesce(max(pr.marked_at), p.started_at) as last_marked_at,
  coalesce(
    extract(epoch from (max(pr.marked_at) - min(pr.marked_at))),
    0
  )::int as duration_seconds
from public.profiles p
left join public.progress pr on pr.user_id = p.id
group by p.id, p.handle, p.display_name, p.started_at;

grant select on public.leaderboard to anon, authenticated;
