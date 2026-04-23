-- ============================================
-- LYSTORA DATABASE SCHEMA
-- Run this in Supabase SQL Editor
-- ============================================

-- 1. PROFILES TABLE
-- Stores user info, linked to Supabase Auth
-- Automatically created when a user signs up
create table public.profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  email text,
  avatar_url text,
  created_at timestamptz default now()
);

-- 2. LISTINGS TABLE
-- Every business in the directory
create table public.listings (
  id uuid default gen_random_uuid() primary key,
  slug text unique not null,
  name text not null,
  category text not null,
  category_label text,
  description text,
  address text,
  city text,
  country text,
  location text,
  phone text,
  email text,
  website text,
  hours text,
  image_url text,
  verified boolean default false,
  featured boolean default false,
  owner_id uuid references public.profiles(id) on delete set null,
  owner_name text,
  owner_email text,
  created_at timestamptz default now()
);

-- 3. REVIEWS TABLE
-- Reviews linked to a listing and optionally a user
create table public.reviews (
  id uuid default gen_random_uuid() primary key,
  listing_id uuid references public.listings(id) on delete cascade not null,
  user_id uuid references public.profiles(id) on delete set null,
  name text not null,
  rating integer not null check (rating >= 1 and rating <= 5),
  text text not null,
  created_at timestamptz default now()
);

-- 4. SAVED LISTINGS TABLE
-- Which users saved which listings (favorites)
create table public.saved_listings (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  listing_id uuid references public.listings(id) on delete cascade not null,
  created_at timestamptz default now(),
  unique(user_id, listing_id)
);

-- ============================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- Controls who can read/write what
-- ============================================

-- Enable RLS on all tables
alter table public.profiles enable row level security;
alter table public.listings enable row level security;
alter table public.reviews enable row level security;
alter table public.saved_listings enable row level security;

-- PROFILES: Anyone can read, users can update their own
create policy "Public profiles are viewable by everyone"
  on public.profiles for select using (true);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

create policy "Users can insert own profile"
  on public.profiles for insert with check (auth.uid() = id);

-- LISTINGS: Anyone can read, authenticated users can create, owners can update
create policy "Listings are viewable by everyone"
  on public.listings for select using (true);

create policy "Authenticated users can create listings"
  on public.listings for insert with check (auth.uid() is not null);

create policy "Owners can update their listings"
  on public.listings for update using (auth.uid() = owner_id);

create policy "Owners can delete their listings"
  on public.listings for delete using (auth.uid() = owner_id);

-- REVIEWS: Anyone can read, authenticated users can create, authors can delete
create policy "Reviews are viewable by everyone"
  on public.reviews for select using (true);

create policy "Authenticated users can create reviews"
  on public.reviews for insert with check (auth.uid() is not null);

create policy "Users can delete own reviews"
  on public.reviews for delete using (auth.uid() = user_id);

-- SAVED LISTINGS: Users can only see/manage their own saves
create policy "Users can view own saved listings"
  on public.saved_listings for select using (auth.uid() = user_id);

create policy "Users can save listings"
  on public.saved_listings for insert with check (auth.uid() = user_id);

create policy "Users can unsave listings"
  on public.saved_listings for delete using (auth.uid() = user_id);

-- ============================================
-- AUTO-CREATE PROFILE ON SIGNUP
-- When a user signs up via Auth, this trigger
-- automatically creates a profile row for them
-- ============================================

create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, email)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'full_name', ''),
    new.email
  );
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ============================================
-- INDEXES for performance
-- ============================================

create index idx_listings_category on public.listings(category);
create index idx_listings_slug on public.listings(slug);
create index idx_listings_owner on public.listings(owner_id);
create index idx_reviews_listing on public.reviews(listing_id);
create index idx_saved_user on public.saved_listings(user_id);
create index idx_saved_listing on public.saved_listings(listing_id);
