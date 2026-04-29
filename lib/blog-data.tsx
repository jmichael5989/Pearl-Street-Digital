import type { ReactNode } from "react";

/**
 * Blog/journal data. Posts are TypeScript objects with JSX bodies for
 * now — no MDX dependency until we have enough essays to justify the
 * authoring workflow change.
 *
 * Per .impeccable.md (Frank Chimero reference), the journal is the
 * site's editorial register at full length. Posts should read as real
 * essays from Jon, signed and dated, 1,200-1,800 words. The single
 * sample below is a layout placeholder only — replace with real
 * content before launch.
 *
 * Body markup conventions (so the article-body wrapper styles them
 * consistently): use plain <p>, <h2>, <h3>, <ul>, <li>, <blockquote>,
 * <figure>, <figcaption>. Tailwind utility classes inside the body
 * are fine for one-offs but the wrapper handles the editorial
 * defaults (typography, spacing, color).
 */

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string; // ISO date — yyyy-mm-dd
  author: string;
  readingTime: string; // e.g. "4 min read"
  body: ReactNode;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "the-website-is-the-code-not-the-canvas",
    title: "The website is the code, not the canvas.",
    excerpt:
      "Why we write the code ourselves instead of dragging blocks around in a builder, and what changed in the last two years to make that practical.",
    publishedAt: "2026-04-28",
    author: "Jon",
    readingTime: "3 min read",
    body: (
      <>
        <p>
          Most websites for small businesses in this city are built on the
          same five or six platforms. You can usually tell which one in about
          ninety seconds. There&rsquo;s the stock photo with a dark gradient
          over it, the rounded buttons that all look the same, the Powered by
          line tucked into the footer.
        </p>

        <p>
          Nothing wrong with any of that. A template website is faster than
          no website, and faster than a website that took eight months and a
          fight. For a lot of businesses it&rsquo;s the right call.
        </p>

        <p>It isn&rsquo;t what we do.</p>

        <p>
          We write the code ourselves, page by page, component by component.
          The site we ship for your business has never existed before, and
          won&rsquo;t exist again. Put it next to the site we built last
          month for a different client and you wouldn&rsquo;t guess they
          came from the same shop.
        </p>

        <h2>What changed.</h2>

        <p>
          Two years ago, building a custom site from scratch took weeks of
          typing. Most of those weeks went into work that didn&rsquo;t
          matter much: wiring up a contact form, getting the tablet
          breakpoints right, copying the same navigation pattern
          you&rsquo;ve already built fifty times before. The interesting
          part of the job (the design decisions, the copy, the way the site
          argues for the business) was a small slice of the total time. The
          rest was plumbing.
        </p>

        <p>
          The plumbing has gotten faster. A lot faster. What used to take
          six weeks now takes two, and what used to require a team of three
          can be done by one person who knows the stack and has the right
          tools open.
        </p>

        <p>
          We&rsquo;ve structured the shop around that fact. Every project
          runs on the same foundation &mdash; Next.js, Tailwind, Vercel
          &mdash; and inside the same locked design system, so we&rsquo;re
          not relitigating typography on every build. The constraint is
          what makes the speed possible.
        </p>

        <h2>Why this matters for the business that hires us.</h2>

        <p>
          A roofer in Stone Oak doesn&rsquo;t care that we wrote the
          navigation in TypeScript. What they care about is that the site
          loads in under a second on a four-year-old Android, ranks for the
          right neighborhoods, and won&rsquo;t break the next time Google
          changes its algorithm. Custom code, written carefully, is how you
          get all three. Templates can usually nail the first one and
          rarely survive the third.
        </p>

        <p>
          But that same roofer doesn&rsquo;t have three months to wait,
          either. They have a season. The traditional answer (pick the
          template, get something live this weekend) solves the timing
          problem and creates a worse one: six months later they&rsquo;re
          stuck on a platform they can&rsquo;t extend without paying its
          monthly tax.
        </p>

        <p>
          What we&rsquo;re trying to make routine is the version where you
          get the custom site and you get it in two or three weeks. Not
          because we cut corners. Because the corners that used to take a
          week each don&rsquo;t take a week anymore.
        </p>

        <h2>What we don&rsquo;t do.</h2>

        <p>
          We don&rsquo;t drag blocks around in a builder and call the
          result custom. We don&rsquo;t start from a theme and reskin it.
          We don&rsquo;t ship a site whose source code, if you opened it,
          would look identical to fifty other clients&rsquo; with the
          names swapped out.
        </p>

        <p>
          If we did, we&rsquo;d be cheaper. We&rsquo;d also be one of fifty
          shops in San Antonio doing the same thing, and the only thing
          left to compete on would be price. That&rsquo;s a race we have
          no interest in running.
        </p>

        <p>
          The site we ship for you is yours. You own the domain and the
          code, the way every agency claims. And nobody else has it, the
          way most agencies don&rsquo;t.
        </p>

        <p>&mdash; Jon</p>
      </>
    ),
  },
  {
    slug: "about-this-journal",
    title: "About this journal.",
    excerpt:
      "Why we're writing essays instead of blog posts, and what to expect here.",
    publishedAt: "2026-04-25",
    author: "Jon",
    readingTime: "3 min read",
    body: (
      <>
        <p>
          This is a sample essay. It exists to validate the layout of the
          journal before any real writing lands here. When we ship the first
          actual essay, this placeholder gets deleted and the index page
          starts with whichever piece replaces it.
        </p>

        <p>
          Most agencies have a blog. The blog is mostly there because
          someone&rsquo;s SEO consultant said it should be. The posts are
          short, optimized for keywords nobody searches for in earnest, and
          forgotten the day after they ship. We&rsquo;re going to try
          something different.
        </p>

        <h2>What this is</h2>

        <p>
          A journal. Long-form essays about how we build websites, how we
          think about marketing for small San Antonio businesses, and what
          we&rsquo;ve learned along the way. Each essay is signed by the
          person who wrote it. Each one takes the time it takes to read.
          We&rsquo;d rather publish four essays a year that are worth your
          attention than forty posts a year that aren&rsquo;t.
        </p>

        <h2>What it isn&rsquo;t</h2>

        <p>
          Here are the things you won&rsquo;t find:
        </p>

        <ul>
          <li>Listicles. No &ldquo;7 SEO tips for 2026.&rdquo;</li>
          <li>Posts written to rank for a keyword.</li>
          <li>Recycled content from someone else&rsquo;s newsletter.</li>
          <li>AI-generated filler. Every word is written by Jon or Stacie.</li>
          <li>
            Calls to book a free consultation at the end of every paragraph.
          </li>
        </ul>

        <p>
          The point isn&rsquo;t to convert you. The point is to share the
          work in a way that respects your time.
        </p>

        <blockquote>
          The best blogs read like letters from a person you&rsquo;d want to
          have coffee with. Not press releases from a company.
        </blockquote>

        <h2>What to expect</h2>

        <p>
          Essays will land when they&rsquo;re ready. Sometimes once a month,
          sometimes less often, occasionally a flurry. The first few will
          probably be about the work itself &mdash; what custom-coded
          actually means, why we don&rsquo;t do long-term contracts, how
          much a Lighthouse score actually matters for your phone calls. As
          we go, the topics will widen.
        </p>

        <p>
          If you have something you want us to write about, the email is at
          the bottom of every page.
        </p>

        <p>
          &mdash; Jon
        </p>
      </>
    ),
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getSortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}
