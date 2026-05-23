# Aura Unisex Salon (Luxury Salon Client SPA)

A polished single-page salon website built with React + Vite, crafted for a premium Canadian unisex salon experience. The app includes a luxury landing page, interactive service booking flow, animated feature sections, and a contact/reservation layout.

## 🧩 What’s Included

- **Single-page app** with tab-based content navigation
- **Interactive home experience** with hero, marquee ticker, testimonials, transformation gallery, and social feed cards
- **Service discovery grid** with service selection and preselection flow
- **Multi-step booking wizard** with calendar selection, stylist choices, and reservation summary
- **About section** with curated space showcases and brand storytelling
- **Contact view** for customer messaging and business details
- **Custom cursor** and loading screen for polished UX
- **Responsive layout** with Tailwind CSS utility styling

## 🛠️ Tech Stack

- **React** 19
- **Vite** 6
- **TypeScript**
- **Tailwind CSS** 4
- **Motion** for animation
- **Lucide React** icons
- **Express** and **dotenv** included in dependencies for future backend support

## 📁 Project Structure

- `src/App.tsx` — app shell, tab navigation, home states, and selected service handling
- `src/main.tsx` — Vite React entry point
- `src/components/layout/` — `Navbar`, `Footer`, `CustomCursor`, `LoadingScreen`
- `src/components/home/` — `HeroSection`, `TransformationShowcase`, `ServicesCarousel`, `StatsCounter`, `Testimonials`, `CTABanner`
- `src/components/services/ServicesGrid.tsx` — grid-driven service selection
- `src/components/about/AboutView.tsx` — brand story and space showcase
- `src/components/reservation/BookingWizard.tsx` — multi-step reservation workflow
- `src/components/contact/ContactView.tsx` — contact and inquiry view
- `src/components/shared/AnimatedSection.tsx` — reusable reveal animation wrapper
- `src/lib/` — shared constants and formatters

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Then open the local app at `http://localhost:3000`.

## 📦 Available Scripts

- `npm run dev` — start the development server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build
- `npm run clean` — remove generated build files
- `npm run lint` — run TypeScript type checking

## ✨ Notes

- The app is optimized for a luxury salon brand presentation with modern motion effects and polished UI elements.
- The booking flow includes service preselection and tab-based navigation to simulate a salon appointment experience.
- The project includes a `.gitattributes` file and a clean `.gitignore` for development.
