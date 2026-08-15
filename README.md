# NEXORA WALLS

A premium, cinematic UI concept for a free 4K desktop wallpaper website — inspired by Wallhaven, Unsplash, Apple, and Steam.

**Live demo:** https://dmehras.github.io/NEXORA-WALLS/ *(enable GitHub Pages in repo Settings → Pages to activate this)*

![status](https://img.shields.io/badge/status-concept%20demo-00c8ff)

---

## What's inside

- **Animated landing page** — floating particles, blur-to-sharp logo reveal, glowing "ENTER" button, smooth fade into the main site
- **Sticky glassmorphism header** — live search, random-wallpaper button, theme toggle, Newest / Popular / Trending shortcuts
- **Sidebar navigation** — 21 categories (Anime, Gaming, Movies, Nature, Space, Neon, Minimal, and more) plus Favorites and Downloads
- **Masonry wallpaper grid** — hover zoom, glow border, quick-download button, resolution badge, lazy-loaded images
- **Wallpaper detail page** — hero preview, stats, tags, description, download / favorite / share / fullscreen actions, related wallpapers
- **Fullscreen viewer** — arrow-key navigation, click/double-click zoom, Esc to exit
- **Download system** — toast confirmation, session download tracking
- **Search & filters** — live search plus resolution, orientation, and sort filters
- **Donation section** — popup with QR code placeholder, copyable UPI/PayPal details, thank-you animation
- **Footer, scroll-to-top, skeleton-loading animations, reduced-motion support**

## Tech

Plain **HTML + CSS + vanilla JavaScript**. No build step, no framework, no dependencies. Just open `index.html` in a browser.

```
NEXORA-WALLS/
├── index.html   → page structure
├── style.css    → all styling, animations, responsive layout
├── script.js    → wallpaper data, filtering, modals, interactions
└── README.md
```

## Running locally

Clone the repo and open `index.html` directly in a browser — no server or install required:

```bash
git clone https://github.com/dmehras/NEXORA-WALLS.git
cd NEXORA-WALLS
open index.html   # or double-click the file
```

## Deploying with GitHub Pages

1. Go to **Settings → Pages** in this repo
2. Under "Build and deployment → Source," choose **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)` → **Save**
4. Your site goes live at `https://dmehras.github.io/NEXORA-WALLS/`

## Known limitations (this is a front-end concept, not a production app)

- Wallpaper images are placeholder photos from [picsum.photos](https://picsum.photos), not real curated wallpapers — swap the image URLs in `script.js` for real assets before shipping
- Favorites, downloads, and theme toggle are **session-only** (stored in JS variables) — they reset on page reload. Wiring up real persistence would need a backend (e.g. Supabase, Firebase) or `localStorage`
- No real user accounts, upload pipeline, or CDN — this is UI/UX only
- Search and filters run entirely client-side against the demo dataset generated in `script.js`

## License

Personal / portfolio project. No license specified yet — add one (e.g. MIT) if you plan to open it up for contributions.
