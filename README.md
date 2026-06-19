# Ryan Matthew Silveira — Portfolio

A responsive, single-page portfolio site built with plain HTML, CSS, and JavaScript — no build step, no framework, deploys as-is.

## Structure

```
.
├── index.html      # all page content
├── style.css       # design tokens + layout + responsive rules
├── script.js       # nav toggle, smooth scroll, active-link highlight, graph clicks
└── README.md
```

## Run it locally

Just open `index.html` in a browser, or serve it locally:

```bash
npx serve .
```

## Push to GitHub

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/<your-username>/<your-repo>.git
git push -u origin main
```

(Create the empty repo on GitHub first — github.com/new — then use the URL it gives you in `git remote add origin`.)

## Host on Vercel

**Option A — Vercel dashboard (no CLI needed)**
1. Go to vercel.com → **Add New → Project**.
2. Import the GitHub repo you just pushed.
3. Framework preset: choose **Other**.
4. Build command: leave blank. Output directory: leave as `.` (root).
5. Click **Deploy**. Vercel gives you a live URL in under a minute.

**Option B — Vercel CLI**
```bash
npm install -g vercel
cd portfolio
vercel        # follow prompts, accept defaults for a static site
vercel --prod # promote to production URL
```

Every future `git push` to `main` will auto-redeploy if you used Option A (Git integration).

## Editing content

All resume content lives directly in `index.html` — experience, education, certifications, and skills are plain markup, so updating a bullet or date is a direct text edit, no rebuild required.
