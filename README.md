# Jaxy's CodeCraft Studios

Modern, mobile-friendly website for a freelance web development business.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production build is output to `dist/`.

## Deploy to GitHub Pages

This repo includes a GitHub Actions workflow (`.github/workflows/deploy.yml`) that automatically builds and deploys the site to GitHub Pages on every push to `main`.

### One-time setup

1. Push this repository to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. On your next push to `main`, the site will be published at:
   `https://<your-username>.github.io/<your-repo-name>/`

## Tech Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Lucide React icons
