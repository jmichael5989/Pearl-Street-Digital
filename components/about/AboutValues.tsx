import Image from "next/image";

const values = [
  {
    title: "Transparency First",
    image: "/images/values/transparency.jpg",
    description:
      "No hidden fees, no confusing reports. You get a clear dashboard showing exactly where your money goes and what results it's driving.",
  },
  {
    title: "You Own Everything",
    image: "/images/values/ownership.jpg",
    description:
      "Your website, your content, your accounts. If you ever leave, everything goes with you. No hostage situations.",
  },
  {
    title: "AI-Powered Tools",
    image: "/images/values/ai-tools.jpg",
    description:
      "We use artificial intelligence to write smarter ad copy, analyze competitors faster, and optimize campaigns in real time -- saving you money and getting better results.",
  },
  {
    title: "Speed to Launch",
    image: "/images/values/speed.jpg",
    description:
      "Most agencies take months. We launch starter websites in under two weeks and full builds in four. Your business cannot afford to wait.",
  },
  {
    title: "Local Focus",
    image: "/images/values/local-focus.jpg",
    description:
      "We know local markets inside and out -- the neighborhoods, the competition, and what customers actually search for. That context makes our strategies sharper.",
  },
  {
    title: "No Long-Term Contracts",
    image: "/images/values/no-contracts.jpg",
    description:
      "We earn your business every month. Our clients stay because the results speak for themselves, not because they are locked into a contract.",
  },
];

export default function AboutValues() {
  return (
    <section id="approach" className="bg-white py-16 lg:py-24">
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
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-[0_12px_32px_rgba(37,99,235,0.1)]"
            >
              <div className="relative h-36 overflow-hidden">
                <Image
                  src={value.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  loading="lazy"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to bottom, rgba(15,23,42,0.3) 0%, rgba(255,255,255,0.4) 60%, #ffffff 100%)",
                  }}
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h3 className="font-heading text-lg font-semibold text-dark">
                  {value.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
