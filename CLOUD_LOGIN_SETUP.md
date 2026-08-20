# VocabAru cloud login setup

This build contains email/password login and cloud progress sync using Supabase.

1. Create a free Supabase project.
2. Open Supabase -> SQL Editor and run `setup_supabase.sql`.
3. Open Supabase -> Project Settings -> API.
4. Copy the Project URL and the anon public key.
5. Paste them into `supabase-config.js`.
6. Host the VocabAru folder on a normal HTTPS website (recommended). Local `file://` mode may work for some browser features, but cloud authentication is more reliable when hosted.
7. Open VocabAru, click **Log in**, create an account, and sign in on every device with the same account.

Security:
- Only use the anon public key in the browser.
- Never put the service_role key in the website.
- Row Level Security in `setup_supabase.sql` ensures each user can only read/write their own learning state.

Sync behavior:
- The first login on a new account uploads existing local progress if the cloud has no state yet.
- On later devices, the cloud state is downloaded after login.
- Changes are saved locally immediately and cloud-synced shortly after.
