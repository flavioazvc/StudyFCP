-- StudyFCP — schema inicial Supabase
-- Não contém senhas. Crie os usuários em Authentication > Users.
create extension if not exists pgcrypto;

create table if not exists public.student_directory (
  login text primary key,
  display_name text not null,
  role text not null check (role in ('admin', 'student')),
  class_name text,
  allowed boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.subjects (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  category text not null check (category in ('curricular', 'technical')),
  created_at timestamptz not null default now()
);

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  login text not null unique references public.student_directory(login),
  display_name text not null,
  role text not null check (role in ('admin', 'student')),
  class_name text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.student_subjects (
  profile_id uuid not null references public.profiles(id) on delete cascade,
  subject_id uuid not null references public.subjects(id) on delete cascade,
  primary key (profile_id, subject_id)
);

create table if not exists public.grades (
  id uuid primary key default gen_random_uuid(),
  profile_id uuid not null references public.profiles(id) on delete cascade,
  subject_id uuid not null references public.subjects(id),
  trimester smallint not null check (trimester between 1 and 3),
  category text not null check (category in ('PO', 'AC', 'SI')),
  assessment_label text not null,
  grade numeric(5,2) not null check (grade >= 0 and grade <= 10),
  max_grade numeric(5,2) not null default 10 check (max_grade > 0),
  assessment_date date,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists grades_profile_trimester_idx on public.grades(profile_id, trimester);

alter table public.student_directory enable row level security;
alter table public.subjects enable row level security;
alter table public.profiles enable row level security;
alter table public.student_subjects enable row level security;
alter table public.grades enable row level security;

drop policy if exists "authenticated can read directory" on public.student_directory;
create policy "authenticated can read directory" on public.student_directory for select to authenticated using (allowed = true);
drop policy if exists "authenticated can read subjects" on public.subjects;
create policy "authenticated can read subjects" on public.subjects for select to authenticated using (true);
drop policy if exists "users read own profile" on public.profiles;
create policy "users read own profile" on public.profiles for select to authenticated using (auth.uid() = id);
drop policy if exists "users create own profile" on public.profiles;
create policy "users create own profile" on public.profiles for insert to authenticated with check (auth.uid() = id);
drop policy if exists "users update own profile" on public.profiles;
create policy "users update own profile" on public.profiles for update to authenticated using (auth.uid() = id) with check (auth.uid() = id);
drop policy if exists "users read own subjects" on public.student_subjects;
create policy "users read own subjects" on public.student_subjects for select to authenticated using (profile_id = auth.uid());
drop policy if exists "users manage own subjects" on public.student_subjects;
create policy "users manage own subjects" on public.student_subjects for all to authenticated using (profile_id = auth.uid()) with check (profile_id = auth.uid());
drop policy if exists "users manage own grades" on public.grades;
create policy "users manage own grades" on public.grades for all to authenticated using (profile_id = auth.uid()) with check (profile_id = auth.uid());

-- Sincroniza o perfil inicial após o login, sem expor senha.
create or replace function public.bootstrap_profile(p_login text)
returns public.profiles
language plpgsql security invoker set search_path = public
as $$
declare directory_row public.student_directory; profile_row public.profiles;
begin
  select * into directory_row from public.student_directory where login = lower(trim(p_login)) and allowed = true;
  if directory_row.login is null then raise exception 'LOGIN_NOT_AUTHORIZED'; end if;
  insert into public.profiles (id, login, display_name, role, class_name)
  values (auth.uid(), directory_row.login, directory_row.display_name, directory_row.role, directory_row.class_name)
  on conflict (id) do update set login = excluded.login, display_name = excluded.display_name, role = excluded.role, class_name = excluded.class_name, updated_at = now()
  returning * into profile_row;
  return profile_row;
end; $$;

-- Dados institucionais iniciais
insert into public.subjects (name, category) values
  ('Arte', 'curricular'),
  ('Biologia', 'curricular'),
  ('Direito e Ética', 'curricular'),
  ('Química', 'curricular'),
  ('Física', 'curricular'),
  ('Geografia', 'curricular'),
  ('Gramática', 'curricular'),
  ('História', 'curricular'),
  ('Redação', 'curricular'),
  ('Literatura', 'curricular'),
  ('Matemática', 'curricular'),
  ('Tecnologias Interativas', 'curricular'),
  ('Robótica', 'technical'),
  ('Linguagem de Programação', 'technical'),
  ('Lógica de Programação', 'technical'),
  ('Sistemas Operacionais', 'technical'),
  ('Manutenção e Suporte de Computadores', 'technical'),
  ('Web Design', 'technical'),
  ('Fotografia', 'technical'),
  ('Fundamentos e Inovações em Publicidade', 'technical'),
  ('Direção de Arte', 'technical'),
  ('Segurança da Informação', 'technical'),
  ('Rede de Computadores', 'technical'),
  ('Banco de Dados', 'technical'),
  ('Arquitetura de Dados', 'technical'),
  ('Soluções para IA', 'technical'),
  ('Áudio', 'technical'),
  ('Composição Gráfica', 'technical'),
  ('Inglês Instrumental', 'technical'),
  ('Comércio Internacional', 'technical') on conflict (name) do update set category = excluded.category;

insert into public.student_directory (login, display_name, role, class_name) values
  ('fac', 'Flávio Azevedo', 'admin', '1º H - Informática'),
  ('lbc', 'Lívia Covo', 'student', '1º H - Publicidade'),
  ('glm', 'Gustavo Lopez', 'student', '1º H - Inteligência Artificial'),
  ('djvb', 'Davi Vilela', 'student', '1º H - Cibersegurança'),
  ('mvsa', 'Maya Victalino', 'student', '1º H - Multimídia'),
  ('gaf', 'Giovana Fugulin', 'student', '1º H - Comércio Exterior'),
  ('mfm', 'Mel Moraes', 'student', '1º C - Informática'),
  ('glr', 'Guilherme Lima', 'student', '1º D - Informática'),
  ('ceam', 'Carlos Melo', 'student', '1º F - Informática '),
  ('dtb', 'Diogo Trajano', 'student', '1º B - Informática') on conflict (login) do update set display_name=excluded.display_name, role=excluded.role, class_name=excluded.class_name, allowed=true;

