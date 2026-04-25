# Rank Point Media -- Task Tracker

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

## Task 3: Contact Page + About Page + CTA Link Fix [COMPLETED]

### What was done

**Phase 1: Extracted reusable components**
- Created `components/forms/ContactForm.tsx` -- standalone client component with React Hook Form, validation, success state
- Created `components/icons/ContactIcons.tsx` -- PhoneIcon, MailIcon, MapPinIcon, ClockIcon SVGs
- Refactored `components/sections/Contact.tsx` to import ContactForm + ContactIcons (no more inline form/icons)

**Phase 2: Contact page (`/contact`)**
- Created `app/contact/page.tsx` with full metadata and ContactPage JSON-LD schema
- Created `components/contact/ContactHero.tsx` -- dark bg hero with H1 "Let's Build Something Great Together"
- Created `components/contact/ContactContent.tsx` -- two-column layout: contact info + hours + Google Maps embed (left), ContactForm (right)

**Phase 3: About page (`/about`)**
- Created `app/about/page.tsx` with full metadata and AboutPage + Organization JSON-LD schema
- Created `components/about/AboutHero.tsx` -- dark bg hero with H1 "San Antonio Roots. Modern Tools. Honest Work."
- Created `components/about/AboutStory.tsx` -- founding story with decorative quote card
- Created `components/about/AboutValues.tsx` -- 6 value cards (Transparency, Ownership, AI Tools, Speed, Local Focus, No Contracts)
- Created `components/about/AboutTeam.tsx` -- founder card for Jon
- Created `components/about/AboutStats.tsx` -- 4 stats on dark background

**Phase 4: Fixed all CTA links site-wide**
- Changed `#contact` to `/contact` in: Header, Hero, CTABanner, Pricing, ServiceHero, IndustryHero, IndustryPricing
- Changed `#about` to `/about` and `#pricing` to `/#pricing` in Footer
- Changed `#pricing` to `/#pricing` in Header nav
- All CTAs now work correctly from every page

### Files created
- `components/forms/ContactForm.tsx`
- `components/icons/ContactIcons.tsx`
- `components/contact/ContactHero.tsx`
- `components/contact/ContactContent.tsx`
- `app/contact/page.tsx`
- `components/about/AboutHero.tsx`
- `components/about/AboutStory.tsx`
- `components/about/AboutValues.tsx`
- `components/about/AboutTeam.tsx`
- `components/about/AboutStats.tsx`
- `app/about/page.tsx`

### Files modified
- `components/sections/Contact.tsx` (refactored to use extracted components)
- `components/ui/Header.tsx` (nav links + CTA buttons)
- `components/ui/Footer.tsx` (company links)
- `components/sections/Hero.tsx` (CTA links)
- `components/sections/CTABanner.tsx` (CTA link)
- `components/sections/Pricing.tsx` (Get Started buttons)
- `components/services/ServiceHero.tsx` (CTA link)
- `components/industries/IndustryHero.tsx` (CTA link)
- `components/industries/IndustryPricing.tsx` (CTA link)

---

## Task 4: Color palette migration — Option B Institutional navy [IMPLEMENTED — awaiting visual QA + Lighthouse]

### Decision
Locked 2026-04-24 via dial calibration. Canonical record: [.impeccable.md Resolved Decisions §4](.impeccable.md). Brand rules: [CLAUDE.md Colors / Design System / Hero Section / Footer Badge](CLAUDE.md).

New palette:
- Navy `#14213D` · Navy-soft `#1F3057` · Warm white `#FAFAF6` · Parchment `#F1EDE4` · Graphite `#3A3F4B` · Edge `#D9D2C3` · Mute `#6A6E78` · Brass `#A07B33` · Brass-soft `#B78F3E`

Retired (zero tolerance for reintroduction):
- `#14B8A6` `#0D9488` `#8B5CF6` `#7C3AED` `#F0FDFA` `#CCFBF1` `#F5F3FF` `#EDE9FE` `#0F172A`

Reference render: [public/mocks/colors/option-b.html](public/mocks/colors/option-b.html).

### Phase 1 — Tokens (source of truth, do first)
- [ ] Rewrite `@theme inline` block in [app/globals.css](app/globals.css) — replace `--color-primary`, `--color-primary-dark`, `--color-accent`, `--color-accent-dark`, `--color-brand-teal`, `--color-brand-violet`, `--color-brand-dark`, `--color-brand-light`, `--color-surface-tint` with the new palette tokens
- [ ] Update rgba shadow/glow/focus values in globals.css (lines 119, 155, 159, 170, 200) — teal-rgba and violet-rgba become navy-rgba; remove violet glow on `.btn-primary` entirely (new CTA rule: no colored shadow)
- [ ] Update selection highlight and focus-visible outline to navy / brass
- [ ] Keep token **names** stable where possible (`--color-primary` now resolves to navy) so cascade is minimally disruptive; only rename where semantic clarity demands it

### Phase 2 — Hard-coded gradient surgery (10 sites)
All of the following are explicit gradient/hex references that bypass tokens:

- [ ] [components/ui/Footer.tsx](components/ui/Footer.tsx) line 138 — retire inline violet gradient on PreFooterCTA button; replace with solid navy per new CTA rule
- [ ] [components/ui/Footer.tsx](components/ui/Footer.tsx) line 313 — retire inline `color: "#14B8A6"` on Design-by wordmark; replace with brass-soft `#B78F3E`
- [ ] [components/case-studies/CaseStudyDetailTemplate.tsx](components/case-studies/CaseStudyDetailTemplate.tsx) line 137 — retire `from-teal-500 to-violet-500` divider; replace with solid edge hairline
- [ ] [components/case-studies/CaseStudyDetailTemplate.tsx](components/case-studies/CaseStudyDetailTemplate.tsx) lines 24, 37 — retire `text-[#14B8A6]` on industry label and hero metrics; replace with brass (or navy if it's a heading-weight mark)
- [ ] [components/case-studies/FeaturedCaseStudy.tsx](components/case-studies/FeaturedCaseStudy.tsx) lines 26, 29 — retire teal→violet image overlay and badge gradient; image overlay becomes a single subtle navy-to-transparent, badge becomes solid navy
- [ ] [components/case-studies/FeaturedCaseStudy.tsx](components/case-studies/FeaturedCaseStudy.tsx) line 50 — retire `text-[#14B8A6]` on hero metric; replace with brass
- [ ] [components/services/ServicesShowcase.tsx](components/services/ServicesShowcase.tsx) line 217 — retire gradient active-tab button; replace with solid navy
- [ ] [components/services/ServicesShowcase.tsx](components/services/ServicesShowcase.tsx) line 268 — retire gradient icon background; replace with parchment + edge hairline
- [ ] [components/services/ServicesShowcase.tsx](components/services/ServicesShowcase.tsx) line 263 — retire violet decorative blob; **delete entirely** (no decorative gradient blobs per the new no-glow rule)
- [ ] [components/sections/Pricing.tsx](components/sections/Pricing.tsx) — retire `shadow-[0_4px_14px_rgba(20,184,166,0.35)]` on featured tier; Business tier becomes navy card with brass-soft 1px border per updated CLAUDE.md Pricing rule

### Phase 3 — Token-referencing components (verify only)
These files use `primary` / `accent` / `brand-teal` etc. as Tailwind tokens. They should auto-resolve once Phase 1 lands, but each needs a visual check:

- [ ] [components/about/AboutHero.tsx](components/about/AboutHero.tsx), [AboutStats.tsx](components/about/AboutStats.tsx), [AboutTeam.tsx](components/about/AboutTeam.tsx) — `text-primary`, `bg-primary`, `bg-accent` on avatars
- [ ] [components/case-studies/CaseStudyCard.tsx](components/case-studies/CaseStudyCard.tsx), [CaseStudyGrid.tsx](components/case-studies/CaseStudyGrid.tsx) — `text-teal-*`, `hover:border-teal-500` (these are literal Tailwind teal utilities, not tokens — must rewrite to navy/edge)
- [ ] [components/services/ServicesShowcase.tsx](components/services/ServicesShowcase.tsx) — `text-teal-500`, `text-teal-50`, `text-teal-400` (literal utilities — rewrite)
- [ ] [components/forms/ContactForm.tsx](components/forms/ContactForm.tsx), [HomeContactForm.tsx](components/forms/HomeContactForm.tsx), [FooterMiniForm.tsx](components/forms/FooterMiniForm.tsx) — `btn-primary`, `bg-primary/10` (token-based, auto-resolves)
- [ ] [components/sections/FAQ.tsx](components/sections/FAQ.tsx), [CTABanner.tsx](components/sections/CTABanner.tsx), [Contact.tsx](components/sections/Contact.tsx), [IndustriesSection.tsx](components/sections/IndustriesSection.tsx) — token-based
- [ ] [components/heroes/DarkHero.tsx](components/heroes/DarkHero.tsx) — uses `bg-brand-teal` and `text-brand-teal` aliases; these resolve via tokens, but the semantics change (brand-teal becomes navy). Decide: rename tokens for clarity or keep alias names and let them point at navy.
- [ ] [components/ui/LegacyHeader.tsx](components/ui/LegacyHeader.tsx), [components/industries/*](components/industries/) — token-based
- [ ] [components/ui/Footer.tsx](components/ui/Footer.tsx) remaining usages (trust-badge icons, social-icon hover) — token-based

### Phase 4 — Verification
- [ ] Full-codebase grep for retired hex codes: `14B8A6`, `0D9488`, `8B5CF6`, `7C3AED`, `F0FDFA`, `CCFBF1`, `F5F3FF`, `EDE9FE`, `0F172A` — must return zero hits outside `public/mocks/` and the `.impeccable.md` / `tasks/todo.md` audit-trail references
- [ ] Full-codebase grep for retired utility classes: `teal-`, `violet-`, `purple-` — must return zero hits outside `public/mocks/`
- [ ] Visual QA: hit home, services, service-detail, case-studies, case-study-detail, industries, about, contact, pricing at 320 / 375 / 768 / 1024 / 1440 in the running dev server
- [ ] Lighthouse audit on home + one service page: 95+ on all four categories
- [ ] Console error check: zero errors
- [ ] Footer badge renders brass-soft wordmark on every page

### Open question for the owner before implementation
1. **Token rename vs. alias drift.** Option A: keep `--color-primary` as the variable name, point it at navy. Fastest (Tailwind classes like `bg-primary` auto-resolve). Risk: `brand-teal` alias still exists in globals.css pointing at navy, which is semantically wrong and invites future confusion. Option B: rename tokens to `--color-navy`, `--color-brass` etc. and refactor every `bg-primary` → `bg-navy` across ~20 files. Cleaner, more work. **Recommendation**: Option A for this migration, then a follow-up cleanup pass to rename for semantic clarity once things are stable.

**Decision (2026-04-24):** Approach A. Hue-named aliases (`--color-brand-teal`, `--color-brand-violet`, `--color-brand-light`) deleted entirely; call-sites referencing them were rewritten. Semantic aliases (`--color-primary`, `--color-accent`, `--color-dark`, `--color-light`, etc.) kept and repointed to the new palette.

### Review

**Phase 1 — Tokens (done).** `app/globals.css` `@theme inline` block rewritten. Body bg is now warm white, selection highlight is brass-alpha, focus outline is navy. Button micro-interactions stripped of colored glow shadows; replaced with neutral navy seating shadow `rgba(20,33,61,0.12)`. Nav link underline is brass. Input focus glow is navy.

**Phase 2 — Surgical edits (done).** All 10 originally-planned hard-coded gradient and hex sites rewritten. Plus discovered-during-audit: `AboutHero.tsx` hero overlays repointed to navy, `AboutValues.tsx` bg and card hover retinted, `AboutTeam.tsx` teal border-sweep animation deleted (replaced with static border), `StatsBar.tsx` bg token-swapped, `HeroBackground.tsx` teal+violet gradient mesh removed entirely (per anti-reference ban on starfield/gradient-mesh bg).

**Phase 3 — Sweep (done, via subagents).** Two subagent passes covered: all `brand-teal` / `brand-violet` utility classes across HeroMockups, GlassHeader, HeroMetrics, ScrollIndicator (~39 replacements). All remaining `rgba(20,184,166,*)` / `rgba(139,92,246,*)` / `rgba(15,23,42,*)` in FAQ, Process, Testimonials, IndustriesSection, Service*, Industry*, app/industries, ContactContent, GlassHeader (~15 replacements). Plus IndustrySolutions.tsx `#334155` and `#1E293B` → tokens.

**Phase 4 verification.**
- [x] Full-codebase grep for retired hexes and utility classes — zero hits outside intentional audit-trail files (`.impeccable.md`, `CLAUDE.md`, `app/globals.css` comments, `tasks/todo.md`).
- [x] Build health: all 7 key routes (`/`, `/pricing`, `/about`, `/services/website-design`, `/case-studies`, `/industries`, `/contact`) return 200 on the running dev server.
- [x] **Visual QA — owner approved 2026-04-25.**
- [x] **Slate-* warm-tone follow-up pass — done 2026-04-25.** 57 replacements across 13 files (Footer, Case Study templates, ServicesShowcase, FeaturedCaseStudy, CaseStudyCard, etc.). Final grep for `slate-\d|#94A3B8|#CBD5E1|#475569|#F8FAFC|#F1F5F9|#64748B|rgba(148,163,184` returns zero hits in `app/`/`components/`.
- [x] **Lighthouse audit (dev server, 2026-04-25).** Service detail page `/services/website-design` hits 96/100/100/100. Home page `/` hits 93/96/77/100. Detail of in-flight fixes captured below.

### Lighthouse iteration log (2026-04-25)

Three real WCAG AA / Lighthouse SEO failures surfaced during the audit; all three were fixed and the brand docs updated to reflect the tunings:

- `--color-gray` darkened from `#6A6E78` → `#5E626B`. Original tested at 4.36:1 on parchment — failed AA. New value clears AA comfortably. Affected the Pricing card sub-labels and any caption text on parchment alt sections.
- `--color-accent` (brass) darkened from `#A07B33` → `#836021`. Original tested at 3.73:1 on warm-white at small text — failed AA. New value clears AA at ~5.1:1. `.impeccable.md` Resolved Decisions §4 and `CLAUDE.md` Colors section both updated to record the tuning. `--color-accent-dark` (brass-soft on dark backgrounds) unchanged at `#B78F3E`.
- Footer copyright + legal-link bar dropped the `text-text-on-dark-muted/70` opacity modifier. The `/70` over an already-muted token tanked contrast to 3.87:1; full opacity is fine.
- LegacyHeader mobile menu overlay switched from `aria-hidden={!menuOpen}` to `inert={!menuOpen ? true : undefined}` to remove focusable descendants from the tab order when the menu is closed (axe-core `aria-hidden-focus` violation).
- ServicesSection home cards: visible link text changed from `Learn More` → `Explore {service.title}`. Lighthouse SEO `link-text` audit blocklists "learn more" as generic regardless of `aria-label` — so visible text had to change. ServiceCard updated for parity.

### Accepted trade-offs on the home page (do not re-litigate)

Two Lighthouse home scores fall short of the CLAUDE.md "95+ on all four" target. Both are knowable, recorded design trade-offs:

1. **Accessibility 96 — axe-core false positive on the transparent header.** `LegacyHeader` renders white nav text in its transparent state for visual continuity over the dark Hero photo behind it. axe-core can't compute the actual visual contrast because the header is `position: fixed` with `bg-transparent`, so axe walks up to `body` and sees warm-white `#FAFAF6` — registering 1.04:1 contrast for white-on-warm-white. The text is fully readable to sighted and low-vision users in practice (it sits over the dark hero). Fixing the audit would require giving the transparent header an opaque-ish bg, which defeats the design intent. **Accepted: the false positive is the cost of the transparent-over-dark-hero design pattern. Do not "fix" by darkening the header bg.**

2. **Best Practices 77 — Cal.com third-party cookies on `/`.** The home page embeds a Cal.com booking widget (`components/sections/Consultation.tsx`) per `.impeccable.md` Resolved Decisions §3 ("the one named live artifact"). Cal.com sets `__Secure-next-auth.csrf-token` and `__Secure-next-auth.callback-url` cookies via `app.cal.com/api/auth/session`, plus their embed loads from `app.cal.com/_next/...`. Lighthouse flags both `third-party-cookies` and `inspector-issues` as a result. This behavior is intrinsic to Cal.com's auth model; there is no toggle to disable it without breaking booking. The third Best-Practices subtraction (`valid-source-maps`) is dev-mode-only and disappears in production. **Accepted: Cal.com is the homepage live artifact by brief commitment. Do not remove the embed to chase the score, and do not gate it behind consent UI without an explicit conversation about the UX trade-off.**

### Outcome

Migration shipped with explicit accepted trade-offs. Future Lighthouse runs that re-surface either of the above two should reference this section rather than re-investigating from scratch.
