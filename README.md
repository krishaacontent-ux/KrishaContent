# Krisha Content — The Creative Archive

A responsive React + Vite website for Krisha Content, styled around the brand's editorial, cinematic identity.

## Stack
- React + Vite
- Vercel deployment
- Neon Postgres for project enquiries
- `@neondatabase/serverless` in a Vercel serverless function

## Local setup
1. Install Node.js (LTS).
2. In this folder run:
   ```bash
   npm install
   npm run dev
   ```
3. Open the local URL printed by Vite.

The website can be previewed without a database, but the enquiry form needs Neon configured to save submissions.

## Connect Neon
1. Create a Neon project at https://neon.tech.
2. Open the SQL Editor and run the contents of `schema.sql`.
3. Copy the pooled connection string from Neon.
4. Set `DATABASE_URL` in a local `.env` file for local Vercel development, or use Vercel Project Settings → Environment Variables for deployment.
5. For the local serverless API, install Vercel CLI and run `vercel dev`. The Vite-only `npm run dev` command does not run `/api` functions.

## Deploy with GitHub + Vercel
1. Create a GitHub repository and push this project.
2. Import the repository into Vercel.
3. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.
4. Add `DATABASE_URL` to Vercel Environment Variables for Production (and Preview if needed).
5. Deploy. After running the SQL schema, test the enquiry form with a real submission.

## Brand implementation
- Archive Ivory `#F5F0E8`
- Warm Sand `#D8C8B5`
- Deep Espresso `#30251F`
- Muted Rose `#B99A91`
- Antique Gold `#B59A72`
- Charcoal `#171514`
- Cormorant Garamond for editorial headlines
- Montserrat for information and interface
- Allura for occasional handwritten accents

The hero uses your supplied logo asset. The supplied brand-elements board is included in `public/assets/brand-elements.png` for reference.

## Before launch
- Confirm the contact email in `src/main.jsx` (currently `krishacontentstudio@gmail.com`) is the right inbox.
- Add real portfolio imagery and project case studies when ready; the archive section is currently an art-directed brand placeholder rather than fabricated client work.
- Consider adding privacy terms and a consent notice if you later add analytics or marketing integrations.
- Configure a spam-protection strategy before public launch.
