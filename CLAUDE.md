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

### Colors (FINAL -- never deviate)
- Primary Teal: #14B8A6
- Accent Violet: #8B5CF6
- Dark: #0F172A
- Light: #F0FDFA
- Gray: #6B7280
- Text: #1F2937
- CTA buttons: Violet gradient (135deg, #8B5CF6 to #7C3AED) with box-shadow rgba(139,92,246,0.35)
- Hero primary CTA: Teal gradient (135deg, #14B8A6 to #0D9488)
- Secondary buttons: #0F172A dark with white text

### Typography (FINAL -- never deviate)
- Headings/Display: Outfit (Google Fonts), weights 600-800
- Body text: DM Sans (Google Fonts), weights 400-600
- NEVER use Inter, Roboto, Arial, or system fonts
- Section labels: 0.78rem, weight 600, letter-spacing 0.12em, uppercase

### Design System
- **Body background**: #FFFFFF white
- **Alternating sections**: #F0FDFA (mint) for Why Us, Process; #F9FAFB (gray) for Testimonials, FAQ
- **Dark sections**: #0F172A for Hero, CTA banner, Footer ONLY
- **Card borders**: #E5E7EB, hover transitions to brand teal or violet
- **Card hover**: translateY(-4px) + colored box-shadow glow
- **Service icon backgrounds**: #F0FDFA with #CCFBF1 border
- **Industry icon backgrounds**: #F5F3FF with #EDE9FE border
- **Navbar**: Transparent over dark hero, transitions to white (rgba(255,255,255,0.97)) with backdrop-blur(16px) on scroll

### Hero Section
- Tower of Americas photo on LEFT (42% width), absolute positioned
- Three gradient overlays: right fade, bottom fade, top fade blending into #0F172A
- Text centered with text-shadow for readability over photo bleed
- H1 text-shadow: 0 2px 20px rgba(15,23,42,0.8), 0 0 40px rgba(15,23,42,0.5)

### Footer Badge
- CSS gradient text: "DESIGN BY:" in #475569, "RANK POINT MEDIA" in linear-gradient(90deg, #94A3B8, #14B8A6)
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
- Show ONE-TIME BUILDS only: Starter $250, Business $500 (featured/dark card), Growth $1,000
- Monthly retainers ($497/$997/$1,997) exist in code but are HIDDEN at launch
- Hosting add-on: $100/mo
- Business tier gets dark #0F172A card, violet border, "MOST POPULAR" badge

### SEO Rules
- Every page title: "[Service/Page] San Antonio | Rank Point Media"
- Single H1 per page
- LocalBusiness JSON-LD schema on every page
- Service schema on service pages
- FAQ schema on pages with FAQ sections
- Proper hreflang tags for English/Spanish page pairs

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
- [ ] Outfit font for headings, DM Sans for body confirmed
- [ ] Footer badge present
