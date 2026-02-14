# Amazon Clone (React + Vite)

A responsive Amazon-style storefront UI built with React and Vite. This repository contains a client-only mock of an e-commerce homepage showcasing components such as a header, hero carousel, product cards, horizontal scrollers, sponsored banners, and footer sections.

## Features

- Modern React + Vite starter with fast HMR
- Responsive layout and components for desktop and mobile
- Reusable UI pieces: `Header`, `HeroCarousel`, `AmazonCard`, `HorizontalScroller`, `Footer`, and more
- Static assets under `public/` for images and fonts
- Clean, component-driven structure in `src/components/`

## Tech Stack

- React (JSX)
- Vite for dev server + build
- Plain CSS modules/styles (see `src/` files)
- No backend — static demo purely for UI/prototyping

## Project Structure (high level)

- `index.html` — app entry
- `src/` — application source
	- `main.jsx` — React app bootstrap
	- `App.jsx` — top-level app component
	- `components/` — UI components (Header, HeroCarousel, product rows, footer, etc.)
- `public/` — static assets (images, fonts)
- `package.json` — scripts and dependencies

Notable components: `src/components/Header/Header.jsx`, `src/components/HeroCarousel/HeroCarousel.jsx`, `src/components/AmazonCard.jsx`, and `src/components/HorizontalScroller/HorizontalScroller.jsx`.

## Getting Started

Prerequisites: Node.js (v16+ recommended) and npm (or Yarn).

1. Install dependencies

```bash
npm install
```

2. Run the development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build locally

```bash
npm run preview
```

## Usage

This project is a UI prototype. Edit components in `src/components/` to change layout, styling, or behavior. Replace static images in `public/images/` to customize banners and product visuals.

## Deployment

Because this is a static frontend, you can deploy the build output to any static host (Vercel, Netlify, GitHub Pages, etc.). Common steps:

- Build: `npm run build`
- Deploy the `dist/` folder created by Vite to your host

## Contributing

Feel free to open issues or pull requests to improve components, accessibility, or responsive behavior. Suggested improvements:

- Add keyboard navigation and ARIA labels for interactive elements
- Add unit tests for key components
- Integrate a product API or mock server for dynamic content

## License

This project is provided as a demo. Add a license file if you want to publish this project under an open-source license.

---

Enjoy exploring and customizing the Amazon-style UI!
