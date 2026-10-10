create table if not exists public.favorite_character_votes (
  character text primary key check (
    character in ('Ritsu', 'Tatsuya', 'Ryuji', 'Toji', 'Itsuki', 'Can’t pick!')
  ),
  votes bigint not null default 0 check (votes >= 0)
);

alter table public.favorite_character_votes enable row level security;

drop policy if exists "Anyone can read favorite character vote totals"
  on public.favorite_character_votes;
create policy "Anyone can read favorite character vote totals"
  on public.favorite_character_votes
  for select
  to anon, authenticated
  using (true);

revoke all on table public.favorite_character_votes from anon, authenticated;
grant select on table public.favorite_character_votes to anon, authenticated;

insert into public.favorite_character_votes (character, votes)
values
  ('Ritsu', 0),
  ('Tatsuya', 0),
  ('Ryuji', 0),
  ('Toji', 0),
  ('Itsuki', 0),
  ('Can’t pick!', 0)
on conflict (character) do nothing;

create or replace function public.vote_favorite_character(p_character text)
returns void
language plpgsql
security definer
set search_path = public, pg_temp
as $$
begin
  if p_character is null or p_character not in (
    'Ritsu', 'Tatsuya', 'Ryuji', 'Toji', 'Itsuki', 'Can’t pick!'
  ) then
    raise exception 'Invalid favorite character';
  end if;

  insert into public.favorite_character_votes (character, votes)
  values (p_character, 1)
  on conflict (character)
  do update set votes = favorite_character_votes.votes + 1;
end;
$$;

revoke all on function public.vote_favorite_character(text) from public;
grant execute on function public.vote_favorite_character(text) to anon, authenticated;

do $$
begin
  if not exists (
    select 1
    from pg_publication_tables
    where pubname = 'supabase_realtime'
      and schemaname = 'public'
      and tablename = 'favorite_character_votes'
  ) then
    alter publication supabase_realtime
      add table public.favorite_character_votes;
  end if;
end;
$$;
