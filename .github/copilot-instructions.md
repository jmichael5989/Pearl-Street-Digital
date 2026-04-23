# Rank Point Media — Design Context for Non-Claude-Code Tooling

This file is the portable design brief for IDE-embedded coding agents (GitHub Copilot, GPT-5 Codex, other non-Claude-Code tooling). The authoritative design brief lives at [`.impeccable.md`](../.impeccable.md) in the project root. This file mirrors the `## Design Context` section of that document verbatim so that tools which cannot read `.impeccable.md` automatically still inherit the core design principles.

For the full brief — including positioning, early-stage disclosure posture, resolved typography / bilingual / Cal.com decisions, Pre-Launch Checklist, Roadmap, and sequencing of work — read `.impeccable.md`. If `.impeccable.md` and this file ever diverge, `.impeccable.md` is canonical; re-sync this file.

---

## Design Context

### Users

#### Primary persona: Melissa Flores

Forty-one, founder of Flores Family Law, PLLC. Left Jackson Walker two years ago to start her own practice. Divorce, custody, and a growing piece of her book is Hispanic heritage and immigration-adjacent family matters. Office in a converted bungalow off Broadway near Alamo Heights, shared receptionist with two other solos in the same building. St. Mary's law, Trinity undergrad. Married to David, an orthopedic surgeon — money is not the driver of her practice; autonomy is. Two kids, ages nine and twelve.

**She does her own intake calls. She does her own billing on QuickBooks. She does her own marketing at 9pm after her kids are in bed.**

Her practice is four years old and she is profitable but not where she wants to be. She is still taking cases she does not want because the pipeline is not consistent.

**The 4:15pm Tuesday moment.** She just got off a phone consult with a woman whose husband served her divorce papers last week; the woman chose Melissa because a friend at her MOPS group recommended her. Melissa is grateful for the referral and tired of being dependent on them. Her current site was built by a "lawyer marketing company" that charges her $450/month for hosting, SEO reports she does not understand, and quarterly blog posts titled "5 Things to Know About Texas Divorce" that she suspects are AI-generated. Her site ranks for nothing. She opens Google and types "San Antonio family law website" to see what her competitors' sites look like. Every result is the same: stock photo of scales of justice, a gavel, a diverse family hugging. She closes the tab.

**Her three working anxieties, in order.**
1. She built her reputation on being the attorney who actually returns the call, and she worries her site does not communicate that.
2. Her Hispanic clients have been telling her for two years that her site should have a Spanish version. Her current vendor quoted her $4,000 to add one. She said no.
3. "Divorce coaches" and "collaborative divorce" practices are appearing in San Antonio, marketing themselves on Instagram with a softness that makes traditional family-law sites look hostile. She does not know whether to fight that trend or adapt to it.

**Who she trusts.** Former colleagues at Jackson Walker. Two financial advisors who refer her high-net-worth divorces. Her MOPS group and her kids' school community. A specific Facebook group for San Antonio women attorneys. Her CPA.

**Who she does not trust.** Lawyer-referral services. LinkedIn. Yelp. The legal-marketing vendors who send her PDF reports she cannot interpret.

**Instantly distrusts a website when she sees.** Stock photos of gavels, scales, courthouses, or "diverse family hugging" imagery. A homepage that says "Aggressive Representation." Testimonials from clients (which, depending on phrasing, can be a bar-ethics violation). Chatbots. "Free Case Evaluation" buttons leading to 14-field forms. Results claims ("We've won $50M for our clients!"). Any design that looks like it was built for a personal-injury mill and awkwardly relabeled.

**Instantly trusts a website when she sees.** Clean, quiet design that treats her intelligence with respect. A photo of her, specifically, in her actual office. Clear service-area definitions ("I handle divorces with complex asset division; I do not handle adoptions or CPS cases"). A Spanish-language version that is genuinely native, not Google-translated. (See Roadmap: Spanish-language capability ships only when deliverable at native quality.) Real prices or honest pricing ranges. A blog that has six posts, each 1,500 words of real insight, written by her.

**Closing signals.**
- A first call where we ask: *"What is the 15% of cases you wish you were not taking, and why are you taking them?"* That question is the voice of Rank Point Media. It is diagnostic, not promotional. It is the entire site in seven words: *we ask better questions than your last vendor did.*
- A written quote within 48 hours, priced in plain dollars, with a real scope statement.
- A four-week build timeline.
- A site that launches and gets her her first non-referral lead within 90 days.
- She stays for five years because Rank Point Media becomes the team that thinks about her practice's growth with her, not the vendor that keeps her server online.

#### Secondary personas

Melissa is the persona the site is built *for first*. The site must work for her. Other archetypes — the two-truck HVAC owner in Helotes, the taqueria owner off Bandera Road, the solo CPA, the specialty medical practice — will be addressed through service-specific and industry-specific content, but their needs do not override design decisions that serve Melissa. If a decision is good for Melissa and neutral for them, we ship it. If it is good for them and bad for her, we do not.

---

### Brand Personality

**Five adjectives, each with its design consequence.** These are the load-bearing descriptors for every typography, color, layout, copy, and motion decision on the site.

- **Plainspoken.** Sets the language register. Rejects agency-ese. This is Melissa's own voice projected onto ours. The test: *would Melissa say this sentence out loud at a dinner party?*
- **Considered.** Sets the craft bar. Every decision looks like it was made on purpose, not generated. Failure mode shifts from "boring" to "sloppy." Disproportionate effort goes into detail-level polish — kerning, spacing, alignment, the exact radius on a card, whether a line of text wraps to an orphan.
- **Unhurried.** Sets the rhythm. Uncrowded layouts, legible pacing, no urgency pills, no shimmer loaders, no marquees. Permission for generous vertical space. Economically brave — rejects conversion-rate-optimization folk wisdom.
- **Editorial.** Sets the visual reference class. Magazines and books, not brochures and landing pages. Tall column measure, wide margins, captions, pull quotes, section numbers. Photography is treated with the respect a magazine gives its images.
- **A little dry.** Sets the wit register. The site does not try to charm. The hero does not end with a joke. The About page says "Jon built the site. Stacie designed it and shot the photography," not "Meet the Dream Team." The 404 is not a pun. Dry earns trust from someone like Melissa because it treats her like a colleague, not a mark.

**Synthesis.** The five adjectives resolve to one phrase: **polished restraint meets unvarnished candor.** Editorial pulls toward magazine polish; dry and plainspoken pull toward unvarnished candor. The product is the site that holds both.

**The house voice test.** For any sentence of copy, ask two questions. Would Melissa say it? Would the editor of The Gentlewoman print it? If both answers are not yes, rewrite.

---

### Aesthetic Direction

#### The operable test

The single most load-bearing principle in this document, to be applied at every shipping decision:

> **Does this element treat the visitor as an intelligent adult, or does it assume they need to be convinced?**

If the latter, cut it.

This principle was synthesized from the three reference sites below. All three share the same posture: **they trust the reader.** The Gentlewoman assumes you can read numbered entries and figure out what is worth clicking. Cal.com assumes you can look at a live booking widget and understand what the product does. Frank Chimero assumes you are there because you wanted to read. That posture — treating the visitor as an intelligent adult — is the posture every San Antonio agency site lacks, and it is the posture Melissa would immediately recognize and trust.

#### References (specific moves to steal)

**1. The Gentlewoman (thegentlewoman.co.uk).** The homepage is a numbered grid of editorial entries (1 / 8, 2 / 8, ...), each a single image paired with a short section label and a sentence of actual editorial copy. No marketing language. The navigation treats the site like an issue of the magazine itself.

*What we steal:* The services page is a **numbered editorial table of contents**, not a feature grid with icons. **The exact count (5 to 8) is determined at Phase 3C** by what Rank Point Media genuinely delivers at craft level, not inherited from the current site's list. Rationale: two people cannot hand-build eight genuinely distinct services at the quality this brief commits to. Secondary offerings either fold into adjacent services as capabilities, or move below the numbered index as "What else we do," presented honestly as adjacent rather than headlined. The numbering device — whichever count is landed — becomes a **structural motif** we reuse across the services index, the process page, case studies, and the journal index. Section labels throughout the site are **typographic, not iconographic.** Lucide-style SVG icons remain permitted for inline UI affordances (form fields, controls) but are forbidden above headings.

**2. Cal.com.** The homepage shows a living, embedded booking widget with a named real person, right on the page. Not a screenshot — the actual UI you would get if you booked. It is the software version of "taste the soup."

*What we steal:* The homepage contains **one live, embedded, real artifact** — not a screenshot. Candidates: the actual Cal.com consultation-booking widget we use; a live iframe of a real client site with its live Lighthouse score pulled from PageSpeed Insights; a small live performance dashboard pulling real data from a real client with permission. Preferred option: the Cal.com booking widget, because it demonstrates how we operate, not only what we build. The "Trusted by [fake names]" section is replaced with **one named real person** (a founding client's quote with their real firm name, once we have permission). Vanity-metric tiles with context-free percentages are banned.

**3. Frank Chimero (frankchimero.com).** The site reads like a book. The typography has weight, the margins breathe, the writing is a single specific person thinking out loud. There is no visual distinction between essay, portfolio, and shop — typography carries all three. The site is optimized for being read, not for conversion.

*What we steal:* The site has a **Journal** (or Notes, Dispatches, Library — name to be decided). It is load-bearing. Not "Blog." It is where Jon and Stacie think out loud about small-business websites.

**Launch contents.** Three to five seed posts, each signed by its author, each 1,200–1,800 words. Working titles:
- The $450/month lawyer-marketing trap.
- What "custom-coded" actually means to a small business.
- Why we do not have a Spanish version yet.
- What we asked our first client on the first call.

**Cadence after launch.** One post per month for six months, then reassess. The Journal is a *writing practice*, not a content-marketing channel. If the monthly cadence slips, it slips honestly — we do not fill the gap with AI-generated placeholder posts. The honesty of the slip is itself part of the positioning.

Essays, case studies, and service pages share the **same typographic treatment.** Reading is the primary action on every page type. The site shows visible fingerprints of having been made by humans, slowly, over time.

#### Anti-references (banned moves)

The through-line across all four anti-references is that **each of them is a performance**: performance of legal aggression, of agency taste, of Silicon Valley product-thinking, of lifestyle-brand entrepreneurship. **The site's job is to be read, trusted, and acted on — not admired.** The bans below make the rule operable.

**Banned moves from the family-law-mill aesthetic (1 of 4).**
- Centered uppercase hero headlines with verbs like "fight," "win," "defend," "transform," "elevate."
- Stock photography of legal iconography: gavels, scales of justice, courthouses, libraries of law books, American flags.
- Stock photography of multi-generational families hugging, handshakes, or "diverse team around a laptop."
- Red "FREE [X]" buttons. Any variant of the red-button "FREE [noun] [noun]" pattern.
- TV station logo carousels, "As Seen On" rows, or aggregated-award strips.
- Any copy that performs aggression or urgency.

**Banned moves from the boutique-agency showreel aesthetic (2 of 4).**
- **Auto-playing hero video of any kind** — full stop. Not for showreels, not for client work, not muted, not looped.
- Oversized uppercase hero headlines, especially with abstract verbs ("move," "transform," "elevate," "create").
- Ghost-button CTAs with aspirational labels: "Start The Conversation," "Let's Create," "Begin Your Journey."
- Single-word scroll-triggered sections in caps: "STRATEGY." / "DESIGN." / "GROWTH."
- Case-study tiles dominated by colored backgrounds and context-free percentages ("+347%," "2.4x," "$1.2M").
- "WE" as the opening word of anything.

**Banned moves from the Vercel/Linear template family (3 of 4).**
- **Inter or Geist as the primary typeface.** Explicitly.
- Starfield / animated gradient mesh / radial glow backgrounds.
- Bento grid layouts for feature sections. (The numbered editorial grid from The Gentlewoman replaces them.)
- Ghost buttons with `→` arrow affixes as a default CTA pattern.
- Monochrome "Trusted by" logo rows.

**Banned moves from the Squarespace-template-ad aesthetic (4 of 4).**
- Soft-lit, desaturated, shallow-depth-of-field "small-business-owner" photography.
- "Founder at laptop in white studio with succulent" imagery.
- The words **passion**, **journey**, **dream**, **meaningful work** are banned from site copy.
- Pastel lifestyle palettes signaling "aesthetically-minded solopreneur."
- Any visual vocabulary suggesting the site was made by someone who sells a course about building a brand.

#### Also banned (inherited from CLAUDE.md and Impeccable)

- **Zero emojis** anywhere in the codebase, UI, content, buttons, headings, or copy. SVG icons only, and only where they do real UI work. (CLAUDE.md.)
- **No gradient text** — `background-clip: text` combined with any gradient background is forbidden. Solid colors only for text. (Impeccable absolute ban.)
- **No decorative side-stripe borders** — `border-left` or `border-right` greater than 1px as a colored accent on cards, list items, callouts, or alerts. (Impeccable absolute ban.)
- **No chatbots, no popup modals on load, no exit-intent modals, no "Your session will expire" banners.**
- **No client testimonials from Melissa's category** until we have confirmed bar-ethics-safe phrasing with each attorney client individually. Testimonials from other categories (home services, restaurants, professional services excluding regulated bar) are permitted with the named-and-attributed standard below.
- **Named-and-attributed standard.** Every quote on the site carries a real name, a real firm or business, and a real role. Anonymous or first-name-only testimonials are banned.

#### Theme (light vs. dark)

**Light, primarily.** Melissa reads the site on her laptop at 4:15pm on a Tuesday and at 9pm on a Thursday after her kids are in bed. Both contexts want a warm, calm, readable light background. Dark mode is not a requirement and should not be built as a toggle. **Dark sections are used sparingly and deliberately** — for the hero and for a CTA banner or footer — and they are styled with the same editorial restraint as the light sections (no glowing accents, no neon, no starfields).

#### Photography direction

- **Real, not stock.** Photographs of Jon, Stacie, and George — the Chief Bark Officer — taken in their actual working spaces. George appears in at least three places on the site (About page, one Journal post, and one additional location). He is not a cameo; he is a small load-bearing proof that the agency is a real small place with a real small life around it. Photographs of real San Antonio places where client work lives. Photographs of actual screens of actual client sites.
- **Warm but not soft.** Not the Instagram-influencer desaturated-pastel look. Photography has contrast, grain, and specific light sources. Natural light is fine; shallow depth of field is *not* the reflex.
- **Specific, not generic.** A photograph of Melissa's actual bungalow office on Broadway is better than a photograph of "a law office." A photograph of Jon's actual desk is better than a photograph of "a designer's desk."
- **Captioned.** Images carry a small, typographic caption where relevant, in the tradition of magazine photography. A caption is one short sentence; it is not a headline.
- **Stacie's editorial authority.** Stacie's photography practice has final say on whether a given image ships or is replaced with a typographic treatment. The test matches the House Voice Test: would The Gentlewoman print this image? If not, the page ships with typography instead. A beautiful blank page is better than a page dragged down by one weak photograph.

---

### Design Principles

Five operable principles. Every shipping decision on this site is tested against them.

1. **Trust the reader.** Does this element treat the visitor as an intelligent adult, or does it assume they need to be convinced? If the latter, cut it.
2. **Do not perform.** Every aesthetic we rejected in the anti-references was a performance. Legal aggression, agency taste, developer-tool minimalism, lifestyle entrepreneurship. The site is to be read, trusted, and acted on — not admired.
3. **Proof is a thing the reader can see work.** Not a logo. Not a percentage. A named person, a live artifact, a real paragraph of reasoning, a photograph of the actual thing. Melissa will not be convinced by claims; she will be convinced by evidence that is visible from her chair.
4. **Two-person agency is the product.** Every section must reinforce that there is no team hidden behind the site. The people you see are the people who do the work. Copy, photography, signed writing, and the absence of account-manager-layer imagery must all agree with this.
5. **Say the thing in the plainest words it can be said in.** Plainspoken is a discipline, not an aesthetic. If a sentence uses more words than the idea requires, cut. If a headline performs confidence instead of demonstrating it, rewrite.

#### Pricing transparency (design principle)

Every price on the site is a real price.

- **No "starting at" hooks** that conceal typical engagements.
- **No "contact us for pricing"** on the Services page.
- **No budget-qualifying form fields** before a prospect sees any number.
- **No tiers where the top one is replaced with "Let's talk."**

The pricing page publishes three real tiers with real monthly numbers. Services-index pricing references route to the pricing page directly. Every inline pricing claim points at a real line item on the pricing page.

**Audit at Phase 3C.** The current site's "Starting at $99/month" language must be audited. Either the $99 is genuinely purchasable (as a starter, maintenance, or hosting-only tier a prospect can actually buy), or the copy is rewritten as an honest range ("most of our work is $X to $Y per month"). The hook-price-without-substance pattern is banned.

**Why this matters to Melissa.** This is her trust trigger. Her scar tissue from the $450/month lawyer-marketing vendor was built on pricing opacity. The fastest way to lose her at the hero is to repeat the pattern.

---

*Synced from `.impeccable.md` on 2026-04-23. If this file and `.impeccable.md` diverge, `.impeccable.md` is canonical; re-sync this file.*
