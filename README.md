# Sripadh Guptha Yedire — Personal Site

A fast, dependency-free static site. Plain HTML/CSS/JS — no build step, no framework.
It runs anywhere you can serve static files (GitHub Pages, Netlify, Vercel, Cloudflare Pages).

## Structure

```
index.html          # the whole page (single scroll)
css/styles.css      # all styling
js/main.js          # nav, scroll reveals, metric count-up
assets/cv/          # downloadable CV (PDF)
.nojekyll           # tells GitHub Pages to serve files as-is
```

## Preview locally

Any static server works. For example:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy to GitHub Pages

1. Create a repo and push these files:
   ```bash
   git init
   git add .
   git commit -m "Personal site"
   git branch -M main
   git remote add origin https://github.com/<you>/<repo>.git
   git push -u origin main
   ```
2. In the repo: **Settings → Pages → Build and deployment**.
   Set **Source: Deploy from a branch**, **Branch: `main` / `/ (root)`**, then Save.
3. Your site publishes at `https://<you>.github.io/<repo>/` within a minute or two.

**Tip:** If you name the repo `<you>.github.io`, it serves at the clean root URL
`https://<you>.github.io/` instead of a subpath.

## Custom domain (optional)

1. Buy a domain (e.g. `sripadhyedire.com`).
2. Add a file named `CNAME` in the repo root containing just your domain.
3. Point DNS at GitHub Pages (four A records for the apex, or a CNAME for `www`) —
   GitHub's [custom domain docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) list the exact IPs.
4. Enable **Enforce HTTPS** in Settings → Pages.

## Deploy elsewhere (same files, no changes)

- **Netlify / Vercel / Cloudflare Pages:** drag-and-drop the folder, or connect the repo.
  No build command; publish directory is the root.

## Updating content

Everything is in `index.html` — edit the text directly. To swap the CV, replace
`assets/cv/Sripadh_Yedire_CV.pdf` (keep the filename, or update the two links in `index.html`).
