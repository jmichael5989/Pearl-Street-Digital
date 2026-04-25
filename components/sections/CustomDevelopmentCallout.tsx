export default function CustomDevelopmentCallout() {
  return (
    <section className="bg-light-surface py-16 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="font-heading text-2xl md:text-3xl font-bold italic text-dark leading-snug">
          Every site we build is custom-coded from the ground up -- no WordPress
          templates, no drag-and-drop page builders, no shortcuts.
        </p>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <p className="font-heading text-base font-semibold text-dark">
              Custom Schema Markup
            </p>
            <p className="mt-2 text-sm text-gray leading-relaxed">
              Hand-coded structured data tags that tell Google exactly what your
              business does, where you are, and what services you offer -- giving
              you rich results that generic sites never get.
            </p>
          </div>
          <div>
            <p className="font-heading text-base font-semibold text-dark">
              Performance-First Code
            </p>
            <p className="mt-2 text-sm text-gray leading-relaxed">
              No bloated plugins or unused CSS. Every line of code serves a
              purpose, which is why our sites load in under 2 seconds and score
              95+ on Google Lighthouse.
            </p>
          </div>
          <div>
            <p className="font-heading text-base font-semibold text-dark">
              Built for Your Business
            </p>
            <p className="mt-2 text-sm text-gray leading-relaxed">
              Your site is designed around your specific goals, customers, and
              market -- not squeezed into a template that a thousand other
              businesses already use.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
