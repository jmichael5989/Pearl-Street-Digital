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
    slug: "ranking-first-is-not-getting-found",
    title: "Ranking first is not the same as getting found.",
    excerpt:
      "Google now answers a majority of questions without sending anyone anywhere. Here is what the research actually says about getting cited inside those answers, and which two popular fixes do nothing at all.",
    publishedAt: "2026-07-29",
    author: "Jon",
    readingTime: "6 min read",
    body: (
      <>
        <p>
          For twenty years the job was easy to explain. Get to the top of
          the results page, get the clicks. Every dollar spent on search
          pointed at that one number, and everyone in the room understood
          what winning looked like.
        </p>

        <p>That deal has changed.</p>

        <p>
          <a
            href="https://ahrefs.com/blog/ai-overviews-reduce-clicks/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ahrefs studied 300,000 keywords
          </a>{" "}
          and found that when Google shows an AI answer above the results,
          the top-ranked page loses 58% of its clicks. Their earlier run of
          the same study, in April 2025, put the loss at 34.5%. In roughly a
          year, the damage nearly doubled.
        </p>

        <p>
          Sit with that for a second, because the implication is
          uncomfortable. You can win the ranking and still lose the
          customer. Position one is now a good seat in a waiting room that
          a lot of people walk straight past.
        </p>

        <h2>What replaced the click</h2>

        <p>
          The answer is the destination now. Someone asks a question, an AI
          writes them a paragraph, and the paragraph either mentions your
          business or it does not. If it does not, you were not outranked.
          You were left out of the sentence.
        </p>

        <p>
          This is not a small channel anymore. AI Overviews appear on a
          large share of Google results pages, and ChatGPT alone serves
          hundreds of millions of people every week. A meaningful and
          growing slice of the questions your customers ask never reaches a
          blue link at all.
        </p>

        <p>
          So the question worth asking is no longer only where do I rank.
          It is whether an AI writing an answer about your industry has any
          reason to name you.
        </p>

        <h2>What actually gets you cited</h2>

        <p>
          There is real research on this, and it is more specific than the
          advice you will hear from most people selling it.
        </p>

        <p>
          The foundational study came out of{" "}
          <a
            href="https://arxiv.org/abs/2311.09735"
            target="_blank"
            rel="noopener noreferrer"
          >
            Princeton and was published at KDD in 2024
          </a>
          . The researchers built a benchmark of roughly ten thousand
          queries and tested which changes actually made a page more likely
          to get pulled into a generated answer. The methods that worked
          lifted visibility by somewhere between 22% and 41%, depending on
          the method and the subject. Two of the strongest were adding
          relevant statistics and adding quotations from credible sources.
        </p>

        <p>
          That is the whole game in one sentence: AI systems reach for
          pages that contain checkable facts and name where those facts
          came from.
        </p>

        <p>
          It makes sense when you think about what these systems are
          doing. A model writing an answer is looking for something it can
          safely assert. A page that says we are the leading provider of
          quality service gives it nothing. A page that says the average
          build takes five days, verified across every project we shipped
          last year gives it a sentence it can use and attribute.
        </p>

        <p>
          Structure matters too, independent of how good the writing is.
          Content organized as clear questions with direct answers
          underneath gets pulled more often than the same information
          buried in flowing prose. Not because the prose is worse, but
          because a direct answer is easier to lift cleanly.
        </p>

        <h2>Two things being sold that do not work</h2>

        <p>Here is where I will lose some friends.</p>

        <p>
          The first is llms.txt. This is a file you put at the root of
          your site, meant to give AI crawlers a tidy summary of what is on
          it. It sounds sensible. It is being sold as a GEO deliverable
          right now.
        </p>

        <p>
          The evidence says the crawlers ignore it. One monitoring effort
          tracked over 500 million AI bot visits and found a few hundred
          that requested the file at all. GPTBot, ClaudeBot, PerplexityBot
          and the rest overwhelmingly skip it and crawl the HTML like
          everybody else. Google&rsquo;s Gary Illyes said plainly in 2025
          that Google does not support it and has no plans to, and
          compared it to the old keywords meta tag, which is about as
          harsh as that comparison gets.
        </p>

        <p>
          It is not harmful. We keep one on this site because it costs
          nothing and the standard may yet find its footing. But if
          someone is charging you for it as an AI visibility service, you
          are paying for a file almost nothing reads. The one place it
          genuinely earns its keep is developer documentation, where
          coding assistants can be pointed at it directly.
        </p>

        <p>
          The second is schema markup, sold as the thing that gets you
          into AI answers. This one is subtler, because schema is
          genuinely useful. We ship it on every build. It earns rich
          results in classic Google search, it helps machines resolve what
          your business is, and leaving it off is a mistake.
        </p>

        <p>
          But a 2026 study looking specifically at AI citations found that
          adding JSON-LD did not measurably move them. What moved them was
          the question-and-answer structure in the visible content of the
          page. The schema describes the page. The content is what gets
          quoted. Keep the schema, but do not let anyone tell you it is
          the lever.
        </p>

        <h2>The platforms do not agree with each other</h2>

        <p>
          One more thing that surprises people. These systems do not
          converge on the same sources.
        </p>

        <p>
          An analysis of hundreds of millions of citations found that only
          about one in ten domains cited by ChatGPT were also cited by
          Perplexity. They run on different retrieval logic and land in
          different places. Separate work looking at tens of thousands of
          AI responses found the rate at which brands get named differs by
          more than an order of magnitude between platforms, with
          Perplexity naming brands far more readily than ChatGPT does.
        </p>

        <p>
          The practical read: if you are a small business, Perplexity is
          the realistic near-term win, and treating all AI search as one
          channel will give you a distorted picture of how you are doing.
        </p>

        <h2>How you measure any of this</h2>

        <p>
          Honestly, and with some manual labor. There is no Search Console
          for AI answers.
        </p>

        <p>
          What works is unglamorous. Write down the twenty or thirty
          questions a customer would actually ask before hiring someone in
          your industry. Run them across ChatGPT and Perplexity, several
          times each, because the answers vary between runs. Record three
          separate things: whether you were mentioned at all, whether you
          were cited with a link, and whether you were actually
          recommended. Those are not the same outcome and collapsing them
          into one number hides what is happening.
        </p>

        <p>
          Then repeat it monthly. There are paid tools that automate this,
          from about thirty dollars a month up to several hundred, and
          some are good. But the spreadsheet version works, and it forces
          you to read the answers your customers are getting, which is
          worth more than a dashboard.
        </p>

        <h2>What this changes about the work</h2>

        <p>Not as much as you would think, and that is the good news.</p>

        <p>
          The fundamentals that made a page worth ranking still make it
          worth citing. Load fast. Say true things. Answer the question
          the person actually asked, near the top, in plain language. Put
          your prices where people can see them. What changes is the
          emphasis: vague marketing language, which used to be merely
          forgettable, is now actively disqualifying, because there is
          nothing in it for a machine to quote.
        </p>

        <p>
          The uncomfortable part is that the most citable thing you can
          publish is information nobody else has. Your own numbers. What
          you charge, what you measured, how long something actually took,
          what happened to a client after you did the work. That is the
          material AI systems cannot get anywhere else, which is exactly
          why they reach for it.
        </p>

        <p>
          Most businesses are sitting on that data and have never
          published a line of it. We are working on our own version of
          that problem right now.
        </p>

        <p>
          If you want the short version: stop optimizing to be found, and
          start writing things worth quoting.
        </p>

        <p>&mdash; Jon</p>
      </>
    ),
  },
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
          Most websites for businesses in this city are built on the
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
