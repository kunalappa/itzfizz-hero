# ItzFizz – Scroll-Driven Hero

A hero section whose animation is tied to scroll position.
Built with **Next.js (App Router)**, **React**, **Tailwind CSS** and **GSAP + ScrollTrigger**.

## What it does

- **On load:** the headline letters rise in one by one, the car slides in, and the stats fade in with a delay while their numbers count up.
- **On scroll:** the hero is pinned. The car drives across the screen, the wheels spin, the lane markings move backwards, and the headline and stats fade out. The motion follows scroll progress and is smoothed with `scrub`.
- Only `transform` and `opacity` are animated, so scrolling does not cause layout reflow.
- Respects `prefers-reduced-motion`.

## Project structure

```
app/
  layout.jsx        fonts, metadata, page shell
  page.jsx          hero + a follow-on section
  globals.css       Tailwind + a few custom styles
components/
  Hero.jsx          composes the hero and runs the animation hook
  Headline.jsx      letter-spaced headline, one span per letter
  Car.jsx, Wheel.jsx  SVG car
  Stats.jsx         statistics row
hooks/
  useHeroAnimation.js   intro timeline + scroll timeline (GSAP)
lib/
  stats.js          the numbers and labels
```

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy to GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository go to **Settings → Pages**, and under **Source** choose **GitHub Actions**.
3. Push again (or run the workflow from the **Actions** tab). The site is published at
   `https://<your-username>.github.io/<repo-name>/`.

The workflow in `.github/workflows/deploy.yml` builds a static export and sets the
base path from the repository name automatically.

To test the static build locally: `npm run build`, then `npm start` (serves the `out` folder).

## Customise

- Statistics: `lib/stats.js`
- Colours and fonts: `tailwind.config.js` and `app/layout.jsx`
- Animation timing: `hooks/useHeroAnimation.js`
