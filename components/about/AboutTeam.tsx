export default function AboutTeam() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-accent">
            Leadership
          </p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-dark sm:text-4xl">
            Who Is Behind the Work
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-lg">
          <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-sm">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-icon-service-border bg-light">
              <svg
                width={40}
                height={40}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-primary"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx={12} cy={7} r={4} />
              </svg>
            </div>
            <h3 className="mt-4 font-heading text-xl font-bold text-dark">
              Jon
            </h3>
            <p className="mt-1 text-sm font-medium text-primary">Founder</p>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed text-gray">
              San Antonio native with a passion for helping local businesses grow
              online. Combines hands-on marketing expertise with AI-powered tools
              to deliver results that actually move the needle for small
              businesses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
