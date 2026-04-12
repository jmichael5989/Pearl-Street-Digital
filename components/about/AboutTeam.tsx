import Image from "next/image";

const teamMembers = [
  {
    name: "Jon Michael",
    role: "Founder & Lead Web Developer",
    initials: "JM",
    accentClass: "bg-primary",
    photo: "/images/team/jon.png",
    photoPosition: "center top",
    bio: "Jon is the founder of Rank Point Media and the lead developer behind every site we build. Before launching the agency, he spent years in product and technology roles at multiple Fortune 150 companies, giving him a deep technical foundation that most web designers simply don't have. He's passionate about AI and applies the latest tools to every project -- from smarter SEO strategies to faster development workflows. Jon personally handles all web development, technical SEO, and performance optimization, ensuring every site we deliver exceeds customer expectations. When he's not building, you'll find him exploring San Antonio's food scene or testing the newest AI tools to find better ways to serve our clients.",
  },
  {
    name: "Stacie Michael",
    role: "Marketing Lead & Social Media Manager",
    initials: "SM",
    accentClass: "bg-accent",
    photo: "/images/team/stacie.jpg",
    photoPosition: "center top",
    bio: "Stacie leads all marketing strategy and social media management at Rank Point Media. She brings a sharp eye for brand storytelling and a deep understanding of what makes local audiences engage. From crafting scroll-stopping social content to managing Google Business Profiles and building review generation campaigns, Stacie ensures our clients stay visible and top-of-mind in their communities. She's the voice behind the strategy calls and the one making sure every marketing dollar our clients spend is working hard. A proud San Antonian, Stacie knows the local market inside and out.",
  },
  {
    name: "George",
    role: "Chief Brand Officer & Morale Manager",
    initials: "G",
    accentClass: "bg-primary",
    photo: "/images/team/george.jpg",
    photoPosition: "center center",
    bio: "George is the four-legged brains behind the operation. When he's not supervising deadlines from his corner of the office, he's reminding us that every great agency needs frequent walk breaks and unconditional loyalty to the team. His contributions to client satisfaction are immeasurable -- mostly because he gets paid in treats, not billable hours. Fluent in barks, fetch, and belly rubs.",
  },
];

export default function AboutTeam() {
  return (
    <section className="bg-white py-16 lg:py-24">
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
        <div className="mx-auto mt-12 grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                    className="h-full w-full object-cover"
                    style={{ objectPosition: member.photoPosition }}
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
