# Tony Martingetti Website

React + Vite + Tailwind CSS (v4) + react-router-dom + Lucide React icons.

## Structure (aligned with evolve-strength-client)

- `src/components/` – Layout, Navbar, Footer, ScrollToTop, shared UI
- `src/pages/` – Route-level pages (Home, About, Contact, PageNotFound)
- `src/assets/` – Styles, images, fonts
- `src/constants/` – App constants
- `src/utils/` – Utility functions
- `src/lib/` – Helpers / third-party setup
- `src/services/` – API / external services

## Scripts

- `npm run dev` – Start dev server
- `npm run build` – Production build
- `npm run preview` – Preview production build

## Routing

- Layout wraps main routes (navbar + outlet + footer).
- Routes: `/` (Home), `/about`, `/contact`, `*` (404).
