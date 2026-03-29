# Pearl Street Digital -- Task Tracker

---

## Task 1: Initial Next.js Scaffold [COMPLETED]

### What was done
- Initialized Next.js 16.2.1 project with App Router, React 19, TypeScript 5
- Configured Tailwind CSS v4 with CSS-native theme (no tailwind.config.ts -- v4 uses `@theme inline` in globals.css)
- Set up brand fonts via `next/font/google`: **Outfit** (headings, 400-900) and **DM Sans** (body, 400-700)
- Defined full brand color palette as Tailwind theme tokens (primary teal, accent violet, dark, light, gray, text, borders, icon backgrounds)
- Added global styles: smooth scrolling, scroll-padding for fixed nav, teal selection highlight, teal focus-visible outlines
- Created placeholder `app/page.tsx` with centered heading and tagline
- Created `app/layout.tsx` with metadata (title/description targeting San Antonio)
- Stubbed out directory structure: `components/`, `app/sections/`, `app/ui/`
- PostCSS configured with `@tailwindcss/postcss`
- ESLint 9 flat config with `eslint-config-next`

### What's ready to build on
- All brand colors available as Tailwind utilities (e.g., `text-primary`, `bg-dark`, `border-border`)
- Font families available as `font-heading` and `font-body` utilities
- Empty directories ready for components and page sections

---

## Task 2: Homepage Lower Sections + SEO [COMPLETED]

### What was done
- Built FAQ section with smooth accordion (CSS grid-rows animation), 7 SA-focused Q&As, and embedded FAQ JSON-LD schema
- Built CTA Banner section (dark #0F172A background) with violet gradient CTA button
- Built Contact section with two-column layout: contact info (phone tel: link, email, location) + React Hook Form (Name, Email, Phone, Service select, Message) with client+server validation
- Created server action (`app/actions/contact.ts`) for form submission (placeholder for email integration)
- Added LocalBusiness JSON-LD schema in layout.tsx (appears on every page)
- Enhanced metadata: OpenGraph, Twitter card, robots, canonical URL, SA-keyword title format
- Installed react-hook-form dependency

### Section order (final)
Hero, StatsBar, Services, WhyUs, Industries, Testimonials, Pricing, Process, About, FAQ, CTABanner, Contact

### What's ready to build on
- All homepage sections complete
- Contact form ready for email service integration (Resend/SendGrid)
- Phone number is placeholder (210) 555-1234 -- needs real number
- Schema markup in place for LocalBusiness + FAQ
- Ready for service pages, contact page, blog, etc.

---

## Task 3: TBD [NOT STARTED]

_(Next task TBD)_
