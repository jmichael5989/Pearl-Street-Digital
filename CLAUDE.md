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

### Colors (LOCKED 2026-07-20 -- strict three-color monochrome; see .impeccable.md Resolved Decisions §5)
The whole site runs on three colors, scoped under the `.rpm3` class in `app/globals.css`. There is no fourth hue; hierarchy comes from type, hairlines, and black/white inversion -- never from color.
- **Black** `#000` -- primary. Text, headings, solid CTA fills, inverted (dark) sections.
- **Grey** `#9C9C9C` -- the single mid-tone. Hairline dividers and borders (`--line`), ghost section numerals (`--ghost`), captions and mono micro-copy (`--muted`).
- **White** `#FFF` -- body background (`--bg`), and text/hairlines on inverted sections.
- **Tokens** (under `.rpm3`): `--black`, `--grey`, `--white`, `--line`, `--ghost`, `--muted`, `--text`, plus the `--display` / `--body` / `--mono` font vars.
- **CTA buttons (`.btn`)**: solid black background, white text, 1px black border. **No gradient.** Hover/focus inverts to white background + black text.
- **Secondary buttons (`.btn-ghost`)**: transparent background, black text, 1px black border.
- **Inverted (dark) sections (`.inverted`)**: black background, white text; any `.btn` inside flips to white background + black text. Used for the inner-page heroes (/contact, /industries, /privacy, /terms) and the pre-footer + footer.
- **Only surviving warm mark**: the footer wordmark "RANK POINT MEDIA" stays brass-soft `#B78F3E` (see Footer Badge). It is the single deliberate exception to the monochrome rule.
- **Retired (zero tolerance for reintroduction as active tokens)**: the entire prior navy system -- Navy `#14213D`, Navy-soft `#1F3057`, Warm-white `#FAFAF6`, Parchment `#F1EDE4`, Graphite `#3A3F4B`, Edge `#D9D2C3`, Mute `#6A6E78`, Brass `#836021` (brass-soft `#B78F3E` survives ONLY as the footer wordmark) -- plus the older teal `#14B8A6`, violet `#8B5CF6`, mint `#F0FDFA`. Any of these as an active design token or utility (outside the footer wordmark) is a bug to fix, not a pattern to follow.
- Reference renders: the approved mocks under [public/mocks/hero/](public/mocks/hero/) (home = `voxel-drop.html`).

### Typography (LOCKED 2026-07-20 -- see .impeccable.md Resolved Decisions §5)
- Display/Headings: **Fraunces** (Google Fonts, variable serif). The editorial primary face -- H1s, section headings, pull quotes, spine numerals.
- Body/UI: **Inter Tight** (Google Fonts, variable sans). Body copy, ledes, UI text.
- Mono: **JetBrains Mono** (Google Fonts, variable). Kickers/eyebrows, small labels, metadata, ghost numerals.
- The `.impeccable.md` anti-reference bans "Inter/Geist as the PRIMARY typeface" -- that targets Inter-as-display driving a generic Vercel/Linear look. Here the PRIMARY/display face is Fraunces (an editorial serif); Inter Tight is only the workhorse body face, so that ban is honored, not broken. See §5.
- License: SIL Open Font License (all three). Free, commercial use, perpetual, no attribution.
- Load via `next/font/google` in `app/layout.tsx` as `--ff-fraunces` / `--ff-inter-tight` / `--ff-jetbrains`; exposed as `font-fraunces` / `font-inter-tight` / `font-jetbrains` utilities and as `--display` / `--body` / `--mono` inside `.rpm3`.
- NEVER use Inter (non-Tight) as display, Geist, Roboto, Outfit, DM Sans, Arial, or system fonts as a primary face. The prior **Source Serif 4 / Source Sans 3 / Source Code Pro** family is retired (still loaded in `app/layout.tsx` with `preload:false` as legacy; used by no live component -- safe to remove).
- Section labels/eyebrows (`.kicker`): JetBrains Mono, ~12px, letter-spacing 0.16em, uppercase, with a trailing 1px hairline rule.
- **No italics** except the "Point" wordmark (see Absolute Rules).

### Design System
- **Body background**: White `#FFF` (`.rpm3`). No warm-white, no parchment alternating bands -- sections are separated by 1px grey hairlines, not fills.
- **Hairlines**: 1px grey `#9C9C9C` (`--line`) for section tops, list-row dividers, and card/box borders.
- **Inverted sections**: black `#000` (`.inverted`) for the inner-page heroes (/contact, /industries, /privacy, /terms) and the pre-footer + footer. The homepage hero is the VoxelHero (see Hero Section).
- **Kickers/eyebrows**: mono uppercase label + trailing hairline, usually prefixed with a two-digit section numeral ("01 / Services").
- **Spine numerals**: large ghost-grey Fraunces numerals (`.spine`) on section headers -- the numbering motif carried over from the editorial concept.
- **Buttons**: `.btn` (solid black) and `.btn-ghost` (outline); both invert inside `.inverted`. No colored glow, no heavy shadows.
- **Motion**: `.appear` elements reveal on scroll via the `ScrollReveal` / `ScrollRevealOnRoute` client components. Above-the-fold hero clusters are force-painted (LCP-safe) via the cluster in `app/globals.css` -- NEVER gate an H1 / LCP element behind the reveal.
- **Header**: `VoxelHeader` (hamburger + full-screen menu) is the global default via `components/ui/HeaderRouter.tsx` -- `hero` variant over the homepage voxel hero, `bar` variant (sticky white) on every other route.
- **Footer**: `ThreeColorFooter` on every page. **Mobile CTA bar**: `MobileCTABar`, black/white, on every route.

### Hero Section (LOCKED 2026-07-20 -- see [components/home/VoxelHero.tsx](components/home/VoxelHero.tsx))
The homepage hero is the **VoxelHero**: a three.js + Rapier physics "voxel drop" composition, dynamically imported client-side so it stays off the server bundle and the LCP path. Prototyped at [public/mocks/hero/voxel-drop.html](public/mocks/hero/voxel-drop.html). This supersedes the retired Orbit hero (`HeroOrbit.tsx`) and, before it, the editorial two-column hero (`Hero.tsx`) -- both files are now deleted.
- **Centered headline -- server-rendered and fully visible on first paint. It is the LCP element and must NEVER be gated behind the animation** (no opacity/blur reveal on the H1). H1 is the locked tagline "Websites that Rank" (no italic, no terminal period).
- `prefers-reduced-motion: reduce` and the no-WebGL fallback drop to a static composition -- no physics, no motion. An IntersectionObserver pauses any loop off-screen (protects INP/battery and the Lighthouse 95+ mandate).
- **Inner-page heroes are three-color** (NOT the old navy DarkHero, deleted):
  - **Inverted black hero** (`.ind-hero.inverted` / `ContactHero` / `LegalHero`): /contact, /industries (+ detail), /privacy, /terms.
  - **Light hero** (`.svc-hero`, `.about-hero`, `.cs-hero`, `.blog-hero`, `.price-hero`): /services (+ detail), /about, /case-studies, /blog (+ posts), /pricing.
- Every hero's above-the-fold cluster is registered in the force-paint list in `app/globals.css`, so its H1 is LCP-safe.

### Footer Badge
- Rendered by `ThreeColorFooter` (`.foot-badge`) on every page. **Solid colors only** per the `.impeccable.md` absolute ban on gradient text (`background-clip: text` + any gradient = forbidden site-wide).
  - "DESIGN BY:" in muted white `rgba(255, 255, 255, 0.5)` (the footer sits on a dark/inverted band)
  - "RANK POINT MEDIA" in brass-soft `#B78F3E` -- the single warm mark retained from the prior palette
- Mono, all caps, letter-spacing 0.18em
- Must appear on every page footer

### Absolute Rules
- **ZERO EMOJIS** anywhere in the codebase, UI, content, buttons, headings, or copy. Use SVG icons (Lucide-style) only.
- **NO GEOGRAPHIC GATING** — the agency works with clients anywhere in the US. Do not reintroduce "San Antonio", "Texas", "Leon Springs", or any city/state framing in user-facing copy, page titles, meta descriptions, JSON-LD, or rendered OG image text. Case study client descriptions that happen to reference where a real client is based (Modern Day Pest Control, Bernal Trust) and Jon/Stacie's UTSA degrees in their bios are factual exceptions. Anything else surfacing SA is a bug. (Locked 2026-06-08.)
- **NO ITALICS** anywhere on the site. The three-color chrome renders the "Point" wordmark via color/weight, not slant (`components/home/VoxelHeader.tsx` shows "Point" in grey; `components/home/ThreeColorFooter.tsx` renders it plain). The ONE remaining italic in the codebase is the "Point" span in the OG image (`app/opengraph-image.tsx`), which still carries the pre-redesign navy/brass/italic branding and is pending a three-color refresh. Any new `italic` Tailwind class, `<em>` without `not-italic`, or `font-style: italic` elsewhere is a bug. Emphasis comes from weight, size, and serif/sans/mono contrast -- not slant. (Locked 2026-06-07; wordmark de-italicized in the redesign 2026-07-20.)
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
