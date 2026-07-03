/**
 * About-page Story section — three-color port of the approved mock at
 * public/mocks/hero/about.html. Server component; shared .rpm3 classes
 * (wrap / kicker) plus the About-specific .story rules in globals.css.
 * The `appear` class is animated in by the ScrollReveal client component.
 */
export default function AboutStory() {
  return (
    <section className="story">
      <div className="wrap">
        <p className="kicker appear">02 / Our story</p>
        <h2 className="appear">Why we started Rank Point Media.</h2>
        <div className="story-body appear">
          <p>
            Too many businesses have been burned, long contracts, recycled
            strategies, account managers who can&rsquo;t answer a question
            without escalating it. We started Rank Point Media because
            that&rsquo;s not how the work should feel.
          </p>
          <p>
            We&rsquo;re Jon and Stacie, a husband-and-wife team. Jon writes the
            code and runs technical SEO. Stacie runs design, marketing, and
            social. When the site launches, you talk to the person who wrote the
            CSS. When a campaign misfires, you talk to the person who set it up.
          </p>
          <p>
            Our reputation is personal. Every site we build, every campaign we
            run, every dollar of ad spend we manage is tied to our name, not to
            an account manager who&rsquo;ll be reassigned to someone else&rsquo;s
            account next quarter.
          </p>
        </div>
      </div>
    </section>
  );
}
