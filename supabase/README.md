# Shared favorite-character poll

The poll uses Supabase for shared counts and realtime updates.

1. In the Supabase Dashboard, open **SQL Editor** for project `qufpslbqcvbalgiktoxi`.
2. Open `favorite-character-poll.sql` from this folder, paste its contents into a new query, and run it.
3. Reload the published site. The totals should load from the shared table and update as visitors vote.

The site uses the project's public publishable key. The database migration allows public reads and routes votes through a restricted function that accepts only the six poll choices; it does not expose direct table writes. Never place a database password or `service_role`/secret key in the website.
