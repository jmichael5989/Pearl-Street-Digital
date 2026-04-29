import Image from "next/image";

/**
 * About-page Team section. Editorial register matching the locked
 * homepage pattern, with rectangular portrait photos and typographic
 * captions per .impeccable.md Photography Direction §"Captioned" — not
 * the prior centered-circle-avatar SaaS team-page pattern.
 *
 * Replaces the prior section that violated multiple locks: bg-white
 * (retired surface), max-w-7xl (wrong container), text-primary +
 * hover:border-primary + bg-primary + bg-accent (retired tokens),
 * font-bold serif H2 (locked weight is 400), centered text alignment
 * (locked register is left-aligned), rounded-2xl + double-wrapped div
 * card geometry (banned), border-4 rounded-full circular avatars (the
 * 2018 SaaS team-page pattern the brief explicitly contrasts against
 * The Gentlewoman / Cal.com register), and George's bio in the jokey
 * register (.impeccable.md Brand Personality §"A little dry": "the
 * site does not try to charm... the 404 is not a pun").
 *
 * Bios now lead with the working role and treat credentials as quiet
 * facts per .impeccable.md Positioning §"Credentials are proof".
 *
 * Surface alternates with AboutValues (parchment) → bg-light
 * (warm-white).
 */

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  photoPosition: string;
  caption: string;
  bio: string;
}

const teamMembers: TeamMember[] = [
  {
    name: "Jon Michael",
    role: "Web development & technical SEO",
    photo: "/images/team/jon.png",
    photoPosition: "center top",
    caption: "Photograph by Stacie Michael, 2026.",
    bio: "Jon writes the code, runs technical SEO, and tunes performance at Rank Point Media. He holds an undergraduate degree in Economics and a Master of Science from the University of Texas at San Antonio, and spent 15+ years as a product manager at Fortune 150 companies before founding RPM. The work here is custom-built, not configured from a template.",
  },
  {
    name: "Stacie Michael",
    role: "Design, marketing & social",
    photo: "/images/team/stacie.jpg",
    photoPosition: "center top",
    caption: "Photograph by Jon Michael, 2026.",
    bio: "Stacie heads up design, marketing, and social media for Rank Point Media. She holds a graphic design degree from the University of Texas at San Antonio and has built her career inside both web and interior design firms — a background that shapes how RPM approaches visual identity for local businesses.",
  },
  {
    name: "George",
    role: "Office presence",
    photo: "/images/team/george.jpg",
    photoPosition: "center center",
    caption: "Photograph by Stacie Michael, 2026.",
    bio: "George supervises from her corner of the office.",
  },
];

export default function AboutTeam() {
  return (
    <section
      aria-labelledby="team-heading"
      className="bg-light-surface border-t border-border"
      style={{
        paddingTop: "clamp(72px, 12vh, 144px)",
        paddingBottom: "clamp(72px, 12vh, 144px)",
      }}
    >
      <div className="mx-auto max-w-[82rem] px-6 sm:px-10 lg:px-24">
        {/* Eyebrow */}
        <header className="mb-6">
          <div className="text-xs font-semibold uppercase tracking-[0.16em] text-accent">
            <span className="font-heading text-base font-normal italic mr-1">
              03
            </span>
            &nbsp;/&nbsp; The team
          </div>
        </header>

        {/* H2 */}
        <h2
          id="team-heading"
          className="font-heading text-text text-balance"
          style={{
            fontSize: "var(--text-h2)",
            lineHeight: 1.1,
            letterSpacing: "-0.015em",
            fontWeight: 400,
            maxWidth: "24ch",
            margin: 0,
          }}
        >
          Who you actually talk to.
        </h2>

        {/* Lede */}
        <p
          className="mt-5 font-body"
          style={{
            fontSize: "1.0625rem",
            lineHeight: 1.6,
            color: "var(--color-brand-text)",
            maxWidth: "58ch",
            marginBottom: "clamp(48px, 6vh, 64px)",
          }}
        >
          Two people, plus a dog. Every email, every call, every line of
          code &mdash; one of us. No layers in between.
        </p>

        {/* 3-col grid of editorial portraits */}
        <div className="grid gap-10 lg:grid-cols-3 lg:gap-8">
          {teamMembers.map((member) => (
            <article key={member.name} className="flex flex-col">
              {/* Rectangular portrait — aspect 4/5, no rounded, no border */}
              <div className="relative w-full overflow-hidden bg-light-surface" style={{ aspectRatio: "4 / 5" }}>
                <Image
                  src={member.photo}
                  alt={`${member.name} portrait`}
                  fill
                  className="object-cover"
                  style={{ objectPosition: member.photoPosition }}
                  sizes="(min-width: 1024px) 26vw, (min-width: 640px) 80vw, 100vw"
                />
              </div>

              {/* Photo caption — italic graphite, beneath photo */}
              <p
                className="mt-3 font-body italic"
                style={{
                  fontSize: "0.8125rem",
                  lineHeight: 1.5,
                  color: "var(--color-gray)",
                }}
              >
                {member.caption}
              </p>

              {/* Name */}
              <h3
                className="mt-6 font-heading text-text"
                style={{
                  fontSize: "1.5rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.01em",
                  fontWeight: 400,
                  margin: 0,
                }}
              >
                {member.name}
              </h3>

              {/* Role — sans uppercase letter-spaced caption */}
              <p
                className="mt-1 font-body text-xs font-semibold uppercase"
                style={{
                  letterSpacing: "0.12em",
                  color: "var(--color-gray)",
                }}
              >
                {member.role}
              </p>

              {/* Bio */}
              <p
                className="mt-4 font-body"
                style={{
                  fontSize: "0.9375rem",
                  lineHeight: 1.58,
                  color: "var(--color-brand-text)",
                }}
              >
                {member.bio}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
