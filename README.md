# Progmat Digital Group — Website

Static, multi-page website for Progmat Digital Group. Minimal, modern aesthetic with subtle animations.

## Structure
- `index.html`, `services.html`, `portfolio.html`, `about.html`, `contact.html`
- `public/css/style.css`, `public/js/main.js`
- `public/assets/images/logo.svg`

## Local preview
Open `index.html` in a browser.

## Deploy to GitHub Pages
Option A (GitHub CLI):
1. Install Git and GitHub CLI
2. Authenticate: `gh auth login`
3. Initialize and push:
```bash
git init -b main
echo node_modules/ > .gitignore
git add .
git commit -m "Initial commit: Progmat site"
gh repo create progmat-digital-group-site --public --source . --remote origin --push
```
4. Enable Pages from `main` branch root:
```bash
gh api repos/:owner/:repo/pages --method=POST -f source[branch]=main -f source[path]="/"
```
5. Your site will be at: `https://<your-username>.github.io/progmat-digital-group-site/`

Option B (Web UI): Create a new public repo, upload the files, then in Settings → Pages, set Source to `Deploy from a branch`, Branch: `main` (or default), Folder: `/ (root)`.
