@AGENTS.md

# Rank Point Media -- Claude Code Configuration

You are building the website for Rank Point Media, a two-person digital agency. Jon writes code and runs technical SEO; Stacie runs design, marketing, and social. They build custom-coded websites and run local SEO, Google Ads, and digital marketing for businesses across the US. Follow every rule in this file on every task. No exceptions.

---

## 1. Plan Mode Default
- Enter plan mode for ANY non-trivial task (3+ steps or architectural decisions)
- If something goes sideways, STOP and re-plan immediately -- don't keep pushing
- Use plan mode for verification steps, not just building
- Write detailed specs upfront to reduce ambiguity

## 2. Subagent Strategy
- Use subagents liberally to keep main context window clean
- Offload research, exploration, and parallel analysis to subagents
- For complex problems, throw more compute at it via subagents
- One task per subagent for focused execution

## 3. Self-Improvement Loop
- After ANY correction from the user: update `tasks/lessons.md` with the pattern
- Write rules for yourself that prevent the same mistake
- Ruthlessly iterate on these lessons until mistake rate drops
- Review lessons at session start for relevant project

## 4. Verification Before Done
- Never mark a task complete without proving it works
- Diff behavior between main and your changes when relevant
- Ask yourself: "Would a staff engineer approve this?"
- Run tests, check logs, demonstrate correctness
- Run Lighthouse audit before marking any page task complete -- target 95+ on all four categories

## 5. Demand Elegance (Balanced)
- For non-trivial changes: pause and ask "is there a more elegant way?"
- If a fix feels hacky: "Knowing everything I know now, implement the elegant solution"
- Skip this for simple, obvious fixes -- don't over-engineer
- Challenge your own work before presenting it

## 6. Autonomous Bug Fixing
- When given a bug report: just fix it. Don't ask for hand-holding
- Point at logs, errors, failing tests -- then resolve them
- Zero context switching required from the user
- Go fix failing CI tests without being told how

---

## Task Management

1. **Plan First**: Write plan to `tasks/todo.md` with checkable items
2. **Verify Plan**: Check in before starting implementation
3. **Track Progress**: Mark items complete as you go
4. **Explain Changes**: High-level summary at each step
5. **Document Results**: Add review section to `tasks/todo.md`
6. **Capture Lessons**: Update `tasks/lessons.md` after corrections

---

## Core Principles

- **Simplicity First**: Make every change as simple as possible. Impact minimal code.
- **No Laziness**: Find root causes. No temporary fixes. Senior developer standards.
- **Own Your Mistakes**: If you break something, fix it immediately without being asked.
- **Stay Focused**: One task at a time. Don't drift into unrelated changes.

---

## Rank Point Media -- Brand Rules (ALWAYS ENFORCE)

### Identity
- **Brand Name**: Rank Point Media (DBA for JSL Innovations LLC)
- **Scope**: Nationwide digital agency. Works with clients across the US. Geographic gating (e.g. "San Antonio", "Texas", "[City] businesses") was removed sitewide 2026-06-08. The site no longer carries a registered business address in JSON-LD or visible copy. Case studies and biographical facts that happen to be SA-based are factual exceptions; everything else is geo-neutral.
- **Tagline**: "Websites that Rank." (set 2026-05-03; previously "Higher rankings. More customers.")

### Colors (LOCKED 2026-04-24 -- see .impeccable.md Resolved Decisions §4)
- **Navy** `#14213D` -- primary. Body text, headings, CTA buttons, dark sections, footer.
- **Navy-soft** `#1F3057` -- primary hover only.
- **Warm white** `#FAFAF6` -- body background.
- **Parchment** `#F1EDE4` -- alternating section background (replaces former mint).
- **Graphite** `#3A3F4B` -- body paragraph text.
- **Edge** `#D9D2C3` -- card borders, dividers.
- **Mute** `#6A6E78` -- captions, micro-copy.
- **Brass** `#836021` -- single accent. Links, selection highlight, section numerals, underlines, footer brand wordmark **only**. Never on CTAs, never on headings, never as a card or chip fill. (Tuned 2026-04-25 from `#A07B33` to clear WCAG AA on warm-white at small text sizes.)
- **Brass-soft** `#B78F3E` -- brass on dark backgrounds only (raised for legibility against navy).
- **CTA buttons (on light)**: Solid navy `#14213D` background, warm-white `#FAFAF6` text, 1px navy border. **No gradient.** Hover: navy-soft background.
- **CTA buttons (on dark)**: Inverted -- warm-white background, navy text. Hover: brass background, warm-white text.
- **Secondary buttons**: Transparent background, navy text, navy border. Hover inverts (navy bg, warm-white text).
- **Retired hues (zero tolerance for reintroduction)**: Teal `#14B8A6`, Violet `#8B5CF6`, Mint `#F0FDFA`, Mint-border `#CCFBF1`, Violet-bg `#F5F3FF`, Violet-border `#EDE9FE`, Slate-dark `#0F172A`. If you see any of these in code, it is a bug to fix, not a pattern to follow.
- Reference render: [public/mocks/colors/option-b.html](public/mocks/colors/option-b.html).

### Typography (LOCKED 2026-04-24, italic-rule updated 2026-06-07 -- see .impeccable.md Resolved Decisions §1)
- Headings/Display: **Source Serif 4** (Google Fonts, variable — weight axis 200-900, optical-size axis 8-60). Regular + Medium at launch. Optical-size 48 for display, 12 for body. **Italic axis is loaded but reserved exclusively for the "Point" wordmark in the Rank Point Media brand name (Header, Footer, OG image).** No other italic usage anywhere on the site.
- Body text: **Source Sans 3** (Google Fonts, variable — weight axis 200-900). Regular + Medium at launch. Italic axis is not loaded.
- License: SIL Open Font License. Free, commercial use allowed, perpetual, no attribution required.
- Load via `next/font/google` in `app/layout.tsx` with `display: 'swap'` for Source Serif 4 and `display: 'optional'` for Source Sans 3; tune `adjustFontFallback` against Georgia (serif) and Arial (sans) so CLS stays near zero.
- NEVER use Inter, Geist, Roboto, Arial, Outfit, DM Sans, or system fonts as primary.
- Section labels: 0.78rem, weight 600, letter-spacing 0.12em, uppercase (set in Source Sans 3).

### Design System
- **Body background**: Warm white `#FAFAF6`
- **Alternating sections**: Parchment `#F1EDE4` (Why Us, Process, Services); optional warmer parchment `#E4DFD3` for Testimonials and FAQ if a second step is needed for hierarchy
- **Dark sections**: Navy `#14213D` for Hero, CTA banner, Footer ONLY
- **Card borders**: Edge `#D9D2C3`; hover transitions to navy `#14213D`. Never to brass.
- **Card hover**: `translateY(-3px)` plus border-color transition. **No colored glow. No box-shadow beyond a subtle `0 1px 0 rgba(20,33,61,0.08)` for seating.**
- **Service icon chips**: Parchment `#F1EDE4` background, edge `#D9D2C3` hairline border. Icon stroke color is brass `#A07B33` when a small amount of color is needed for hierarchy; otherwise navy.
- **Industry icon chips**: Same treatment as service chips. No separate violet-tinted variant.
- **Navbar**: Transparent over the dark hero, transitions to warm white `rgba(250,250,246,0.95)` with `backdrop-blur(12px)` and a 1px edge `#D9D2C3` bottom border on scroll.

### Hero Section (LOCKED 2026-06-07 — see [components/sections/HeroOrbit.tsx](components/sections/HeroOrbit.tsx))
The homepage hero is the **"Orbit" entrance**: real client-work screenshots fly in from the screen edges, resolve into a circular ring, then spin perpetually with occasional card flips. It is a brand-adapted production port of Codrops "Entrance Animation for Images" **variation 2** (github.com/d3adrabbit/EntranceAnimationForImages, MIT), prototyped at [public/mocks/hero/orbit.html](public/mocks/hero/orbit.html). This **supersedes the prior editorial two-column hero** (option-b.html / `Hero.tsx`); that composition is retired on the homepage (the `Hero.tsx` file is retained, unreferenced, pending removal). Dark sections on the homepage remain the footer only.
- Full-viewport section (`min-h-[100svh]`), centered composition, warm-white → parchment radial background.
- **Centered headline — server-rendered and fully visible on first paint. It is the LCP element and must NEVER be gated behind the animation** (no opacity/blur reveal on the H1). Eyebrow "Websites, SEO, Google Ads" in brass; H1 the locked tagline "Websites that Rank" (no italic, no terminal period); subhead "Two people in front of the work — not behind a layer of account managers."; CTA row — primary navy "Book a consultation" → `/contact#talk-to-us`, secondary outline "See how we work" → `/about`. Legibility over the cards is handled by a warm-white radial scrim, not text-shadows.
- **Orbit cards = real case-study screenshots** from `lib/case-studies-data.ts` (thumbnails + heroes). This is the one sanctioned use of photography in the homepage hero, and it agrees with `.impeccable.md`'s photography direction ("Photographs of actual screens of actual client sites"). **No stock imagery and no SVG/photo placeholders in production.** Built for 8 cards; reaching 8 fully-distinct images is a follow-up (3 of the 4 projects currently ship thumb≈hero).
- **Motion is GSAP**, dynamically imported client-side so it stays off the server bundle and the LCP path. Entrance plays once, then the ring spins perpetually (20s) with random `rotateY` card flips. `prefers-reduced-motion: reduce` drops the cards straight into the static ring — no entrance, no perpetual motion. An IntersectionObserver pauses the loop when the hero is off-screen (protects INP/battery and the Lighthouse 95+ mandate).
- **The "01 / Rank Point Media" section numeral is not rendered in the orbit hero** (the composition is centered, not a left-aligned editorial header). The numbering motif still governs the *following* homepage sections.
- Inner-page heroes (About, Industry, Service, Case Study detail) may still use the dark navy treatment with the Tower-of-Americas photo and three gradient overlays blending into navy `#14213D` — that pattern is **inner-page-only**, not homepage.

### Footer Badge
- **Solid colors only per `.impeccable.md` absolute ban on gradient text (background-clip: text + any gradient = forbidden site-wide).**
  - "DESIGN BY:" in `rgba(250, 250, 246, 0.5)` (muted warm-white on navy footer)
  - "RANK POINT MEDIA" in brass-soft `#B78F3E`
- All caps, letter-spacing 0.18em
- Must appear on every page footer

### Absolute Rules
- **ZERO EMOJIS** anywhere in the codebase, UI, content, buttons, headings, or copy. Use SVG icons (Lucide-style) only.
- **NO GEOGRAPHIC GATING** — the agency works with clients anywhere in the US. Do not reintroduce "San Antonio", "Texas", "Leon Springs", or any city/state framing in user-facing copy, page titles, meta descriptions, JSON-LD, or rendered OG image text. Case study client descriptions that happen to reference where a real client is based (Modern Day Pest Control, Bernal Trust) and Jon/Stacie's UTSA degrees in their bios are factual exceptions. Anything else surfacing SA is a bug. (Locked 2026-06-08.)
- **NO ITALICS** anywhere on the site except the "Point" italic in the brand wordmark (`<em className="font-normal italic ...">Point</em>` in `components/ui/GlassHeader.tsx`, `components/ui/Footer.tsx`, and the OG image at `app/opengraph-image.tsx`). Removed 2026-06-07. Any new `italic` Tailwind class, `<em>` without `not-italic`, or `font-style: italic` is a bug. Emphasis comes from weight, size, color, and serif/sans contrast — not slant. (Locked 2026-06-07.)
- **No stock photo aesthetic** -- use real SA imagery or abstract patterns
- **No lorem ipsum** -- all placeholder copy must be realistic SA-focused content
- **Mobile-first** -- test at 320px, 375px, 768px, 1024px, 1440px
- **Performance** -- Lighthouse 95+ on all categories, page load under 2 seconds
- **Accessibility** -- WCAG 2.1 AA, keyboard navigation, proper alt text

### Pricing (LAUNCH CONFIG)
- Toggle on /pricing defaults to Build + Hosting (monthly): Starter $99/mo, Business $149/mo (featured/dark card), Growth $249/mo -- 12-month term, hosting + security + backups + ongoing updates included
- Build Only (one-time) option available via toggle: Starter $500, Business $1,000, Growth $1,500 -- no hosting, client owns and hosts after delivery
- Business tier gets dark navy `#14213D` card, brass-soft `#B78F3E` 1px border, "MOST POPULAR" badge (only shown under Build + Hosting toggle)
- **Phase disclosure handled per `.impeccable.md` Early-stage Disclosure Posture (Position 2: Disclosed, not sold).** No founding-client badges, no scarcity mechanics, no slot counts, no "limited time" framing. The AI-agents acknowledgment paragraph that previously appeared on the About page, the homepage WhyUs card iv, and /pricing was removed 2026-06-08; the site no longer surfaces the build-stack disclosure in copy. The broader Position 2 stance still holds — don't reintroduce founding-client framing or scarcity tactics.
- **Pricing transparency is a design principle**, per `.impeccable.md`. No "starting at" hooks that conceal typical engagements. No "contact us for pricing" on the Services page. No budget-qualifying form fields before a prospect sees any number. No tiers where the top one is replaced with "Let's talk."

### SEO Rules
- Every page title: "[Service/Page] | Rank Point Media"
- Single H1 per page
- LocalBusiness JSON-LD schema on every page
- Service schema on service pages
- FAQ schema on pages with FAQ sections
- **English-only at launch.** No `hreflang` tags for Spanish pairs. Spanish-language capability is a roadmap item per `.impeccable.md` Resolved Decisions §2 — it ships only when deliverable at native quality, and SEO hreflang/alternate-language tagging is added at that time, not before.

### Tech Stack
- Framework: Next.js 14+ (App Router)
- Styling: Tailwind CSS
- Deployment: Vercel
- Forms: React Hook Form + server action
- Analytics: Google Analytics 4 + Google Tag Manager

---

## Quality Checklist (Run Before Completing ANY Page Task)

- [ ] Lighthouse 95+ (Performance, Accessibility, Best Practices, SEO)
- [ ] Mobile responsive at all 5 breakpoints
- [ ] All CTAs link to contact page or trigger form
- [ ] Meta title and description set with SA keywords
- [ ] Schema markup implemented
- [ ] Images optimized (WebP, lazy loaded, proper alt text)
- [ ] Internal links to related pages
- [ ] No console errors
- [ ] Phone number clickable (tel: link)
- [ ] Page loads in < 2 seconds
- [ ] Zero emojis in output
- [ ] Source Serif 4 for headings, Source Sans 3 for body confirmed
- [ ] Footer badge present
