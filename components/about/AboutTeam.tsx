import Image from "next/image";

const teamMembers = [
  {
    name: "Jon Michael",
    role: "Founder & Lead Web Developer",
    initials: "JM",
    accentClass: "bg-primary",
    photo: "/images/team/jon.png",
    bio: "Jon is the founder of Rank Point Media and the lead developer behind every website we build. With a background in technology and a passion for clean, fast-loading web design, he specializes in building high-performance sites that rank well on Google and convert visitors into customers. Jon handles all web development, technical SEO implementation, and performance optimization -- ensuring every site we deliver hits Lighthouse 95+ scores and loads in under 2 seconds. When he's not coding, you'll find him exploring San Antonio's food scene or tinkering with the latest AI tools to find better ways to serve our clients.",
  },
  {
    name: "Stacie Michael",
    role: "Marketing Lead & Social Media Manager",
    initials: "SM",
    accentClass: "bg-accent",
    photo: "/images/team/stacie.jpg",
    bio: "Stacie leads all marketing strategy and social media management at Rank Point Media. She brings a sharp eye for brand storytelling and a deep understanding of what makes local audiences engage. From crafting scroll-stopping social content to managing Google Business Profiles and building review generation campaigns, Stacie ensures our clients stay visible and top-of-mind in their communities. She's the voice behind the strategy calls and the one making sure every marketing dollar our clients spend is working hard. A proud San Antonian, Stacie knows the local market inside and out.",
  },
];

export default function AboutTeam() {
  return (
    <section className="bg-white py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[0.78rem] font-semibold uppercase tracking-[0.12em] text-primary">
            Leadership
          </p>
          <h2 className="mt-3 font-heading font-bold text-dark" style={{ fontSize: "var(--text-h2)", lineHeight: 1.2 }}>
            Who Is Behind the Work
          </h2>
          <p className="mt-4 text-gray max-w-lg mx-auto">
            A husband-and-wife team that treats your business like our own.
            No account managers. No runaround. Just two people who care about
            getting you results.
          </p>
        </div>
        <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group rounded-2xl border border-border bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/40"
            >
              {member.photo ? (
                <div className="mx-auto h-48 w-48 overflow-hidden rounded-full border-4 border-icon-service-border">
                  <Image
                    src={member.photo}
                    alt={`${member.name} headshot`}
                    width={192}
                    height={192}
                    className="h-full w-full object-cover object-top"
                  />
                </div>
              ) : (
                <div
                  className={`mx-auto flex h-48 w-48 items-center justify-center rounded-full ${member.accentClass}`}
                  role="img"
                  aria-label={`${member.name} headshot placeholder`}
                >
                  <span className="font-heading text-4xl font-bold text-white">
                    {member.initials}
                  </span>
                </div>
              )}
              <h3 className="mt-6 font-heading text-xl font-bold text-dark">
                {member.name}
              </h3>
              <p className="mt-1 text-sm font-medium text-primary">
                {member.role}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-gray">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
