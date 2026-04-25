@AGENTS.md

# Rank Point Media -- Claude Code Configuration

You are building the website for Rank Point Media, an AI-powered digital marketing agency in San Antonio, TX. Follow every rule in this file on every task. No exceptions.

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
- **Location**: San Antonio, TX (Leon Springs area)
- **Tagline**: "Higher rankings. More customers."

### Colors (LOCKED 2026-04-24 -- see .impeccable.md Resolved Decisions §4)
- **Navy** `#14213D` -- primary. Body text, headings, CTA buttons, dark sections, footer.
- **Navy-soft** `#1F3057` -- primary hover only.
- **Warm white** `#FAFAF6` -- body background.
- **Parchment** `#F1EDE4` -- alternating section background (replaces former mint).
- **Graphite** `#3A3F4B` -- body paragraph text.
- **Edge** `#D9D2C3` -- card borders, dividers.
- **Mute** `#6A6E78` -- captions, micro-copy.
- **Brass** `#836021` -- single accent. Links, selection highlight, section-number italics, underlines, footer brand wordmark **only**. Never on CTAs, never on headings, never as a card or chip fill. (Tuned 2026-04-25 from `#A07B33` to clear WCAG AA on warm-white at small text sizes.)
- **Brass-soft** `#B78F3E` -- brass on dark backgrounds only (raised for legibility against navy).
- **CTA buttons (on light)**: Solid navy `#14213D` background, warm-white `#FAFAF6` text, 1px navy border. **No gradient.** Hover: navy-soft background.
- **CTA buttons (on dark)**: Inverted -- warm-white background, navy text. Hover: brass background, warm-white text.
- **Secondary buttons**: Transparent background, navy text, navy border. Hover inverts (navy bg, warm-white text).
- **Retired hues (zero tolerance for reintroduction)**: Teal `#14B8A6`, Violet `#8B5CF6`, Mint `#F0FDFA`, Mint-border `#CCFBF1`, Violet-bg `#F5F3FF`, Violet-border `#EDE9FE`, Slate-dark `#0F172A`. If you see any of these in code, it is a bug to fix, not a pattern to follow.
- Reference render: [public/mocks/colors/option-b.html](public/mocks/colors/option-b.html).

### Typography (LOCKED 2026-04-24 -- see .impeccable.md Resolved Decisions §1)
- Headings/Display: **Source Serif 4** (Google Fonts, variable — weight axis 200-900, optical-size axis 8-60, italic). Regular + Medium at launch. Optical-size 48 for display, 12 for body.
- Body text: **Source Sans 3** (Google Fonts, variable — weight axis 200-900, italic). Regular + Medium at launch.
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

### Hero Section (LOCKED 2026-04-25 — see [components/sections/Hero.tsx](components/sections/Hero.tsx))
The homepage hero matches the option-b.html mock's editorial two-column composition; the dark Tower-of-Americas treatment that lived here previously is **retired on the homepage** and is not to be reintroduced. Dark sections on the homepage are now the footer only — `Hero`, `Consultation`, `WhyUs`, `ServicesSection`, `CustomDevelopmentCallout` are all on warm-white or parchment.
- Section background: `bg-light` (warm white `#FAFAF6`), bottom hairline `border-border`.
- Editorial section header (eyebrow): italic-serif section number "01" in `text-accent` (brass) + sans uppercase letter-spaced label "Rank Point Media" (`text-xs font-semibold uppercase tracking-[0.16em]`). Same pattern repeats on every homepage section's header — the numbering is a **structural motif** per `.impeccable.md` Reference 1 (The Gentlewoman).
- Two-column grid on desktop (`lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]`); stacks on mobile.
- **Left column**: H1 "Nobody is ever \"looped in.\"" with italic emphasis on the quoted phrase (the positioning-spine line from `.impeccable.md`). Subhead beneath: "Two people who build small-business websites in San Antonio. In front of the work, not behind a layer of account managers." CTA row: primary navy button "Book a consultation" anchoring to `#talk-to-us` (the Cal.com Consultation section); secondary outline button "See how we work" linking to `/about`.
- **Right column (aside)**: pull-quote in italic Source Serif 4 with the rest of the positioning spine: "When the site launches, you talk to the person who wrote the CSS. When a campaign misfires, you talk to the person who set it up." Cited "Jon Michael · Rank Point Media" with a hairline divider above the citation. On desktop, aside has `lg:border-l lg:border-border lg:pl-8 xl:pl-12`.
- **No photography in the hero.** Real photos of Jon, Stacie, and George are a Pre-Launch Checklist item (`.impeccable.md`); when those exist, they may be added as a dedicated section below the hero or composed into the aside slot. **Do not add photo placeholders.**
- **No text-shadows.** The light editorial register makes them unnecessary, and they would read as "hero on photo bleed" performance — the brief's "do not perform" principle applies.
- Inner-page heroes (About, Industry, Service, Case Study detail) may still use the dark navy treatment with the Tower-of-Americas photo and three gradient overlays blending into navy `#14213D` — that pattern is **inner-page-only** now, not homepage.

### Footer Badge
- **Solid colors only per `.impeccable.md` absolute ban on gradient text (background-clip: text + any gradient = forbidden site-wide).**
  - "DESIGN BY:" in `rgba(250, 250, 246, 0.5)` (muted warm-white on navy footer)
  - "RANK POINT MEDIA" in brass-soft `#B78F3E`
- All caps, letter-spacing 0.18em
- Must appear on every page footer

### Absolute Rules
- **ZERO EMOJIS** anywhere in the codebase, UI, content, buttons, headings, or copy. Use SVG icons (Lucide-style) only.
- **No stock photo aesthetic** -- use real SA imagery or abstract patterns
- **No lorem ipsum** -- all placeholder copy must be realistic SA-focused content
- **Mobile-first** -- test at 320px, 375px, 768px, 1024px, 1440px
- **Performance** -- Lighthouse 95+ on all categories, page load under 2 seconds
- **Accessibility** -- WCAG 2.1 AA, keyboard navigation, proper alt text

### Pricing (LAUNCH CONFIG)
- Toggle on /pricing defaults to Build + Hosting (monthly): Starter $99/mo, Business $149/mo (featured/dark card), Growth $249/mo -- 12-month term, hosting + security + backups + ongoing updates included
- Build Only (one-time) option available via toggle: Starter $500, Business $1,000, Growth $1,500 -- no hosting, client owns and hosts after delivery
- Business tier gets dark navy `#14213D` card, brass-soft `#B78F3E` 1px border, "MOST POPULAR" badge (only shown under Build + Hosting toggle)
- **Phase disclosure handled per `.impeccable.md` Early-stage Disclosure Posture (Position 2: Disclosed, not sold).** No founding-client badges, no scarcity mechanics, no slot counts, no "limited time" framing. A single plainspoken paragraph on the About page and one line on the pricing page carry the phase acknowledgement; the homepage does not.
- **Pricing transparency is a design principle**, per `.impeccable.md`. No "starting at" hooks that conceal typical engagements. No "contact us for pricing" on the Services page. No budget-qualifying form fields before a prospect sees any number. No tiers where the top one is replaced with "Let's talk."

### SEO Rules
- Every page title: "[Service/Page] San Antonio | Rank Point Media"
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
