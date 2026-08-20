-- Run this once in Supabase SQL Editor.

create table if not exists public.vocab_aru_state (
  user_id uuid primary key references auth.users(id) on delete cascade,
  state jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

alter table public.vocab_aru_state enable row level security;

drop policy if exists "Users can read own vocab state" on public.vocab_aru_state;
create policy "Users can read own vocab state"
on public.vocab_aru_state
for select
using (auth.uid() = user_id);

drop policy if exists "Users can insert own vocab state" on public.vocab_aru_state;
create policy "Users can insert own vocab state"
on public.vocab_aru_state
for insert
with check (auth.uid() = user_id);

drop policy if exists "Users can update own vocab state" on public.vocab_aru_state;
create policy "Users can update own vocab state"
on public.vocab_aru_state
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);
