const values = [
  {
    title: "Transparency First",
    description:
      "No hidden fees, no confusing reports. You get a clear dashboard showing exactly where your money goes and what results it's driving.",
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx={12} cy={12} r={10} />
        <circle cx={12} cy={12} r={3} />
      </svg>
    ),
  },
  {
    title: "You Own Everything",
    description:
      "Your website, your content, your accounts. If you ever leave, everything goes with you. No hostage situations.",
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" />
      </svg>
    ),
  },
  {
    title: "AI-Powered Tools",
    description:
      "We use artificial intelligence to write smarter ad copy, analyze competitors faster, and optimize campaigns in real time -- saving you money and getting better results.",
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    title: "Speed to Launch",
    description:
      "Most agencies take months. We launch starter websites in under two weeks and full builds in four. Your business cannot afford to wait.",
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09zM12 15l-3-3" />
        <path d="m22 2-7 20-4-9-9-4z" />
      </svg>
    ),
  },
  {
    title: "Local Focus",
    description:
      "We know local markets inside and out -- the neighborhoods, the competition, and what customers actually search for. That context makes our strategies sharper.",
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx={12} cy={10} r={3} />
      </svg>
    ),
  },
  {
    title: "No Long-Term Contracts",
    description:
      "We earn your business every month. Our clients stay because the results speak for themselves, not because they are locked into a contract.",
    icon: (
      <svg
        width={20}
        height={20}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
      </svg>
    ),
  },
];

export default function AboutValues() {
  return (
    <section className="bg-gray-bg py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            Our Approach
          </p>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            What Sets Us Apart
          </h2>
          <p className="mt-4 leading-relaxed text-gray">
            We built Rank Point Media around the principles we wish every
            agency followed. Here is what you can expect when you work with us.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-border bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_32px_rgba(20,184,166,0.1)]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-icon-service-border bg-icon-service-bg text-primary">
                {value.icon}
              </div>
              <h3 className="font-heading text-lg font-semibold text-dark">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
