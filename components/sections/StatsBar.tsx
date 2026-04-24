// Plainspoken positioning facts, not performative guarantees.
// "24hr Response Time" and "Unlimited Build Revisions" were removed 2026-04-24
// per .impeccable.md anti-reference 1 (no aggressive urgency) and the general
// "do not perform" principle. Replacements are claims Rank Point Media can
// actually defend: ownership, a honest timeline, and the two-person-agency-is-
// the-product positioning spine.
const stats = [
  { value: "100%", label: "You Own Everything" },
  { value: "4 Weeks", label: "Typical Build" },
  { value: "2 People", label: "The Whole Company" },
  { value: "Direct", label: "Founder Access" },
];

export default function StatsBar() {
  return (
    <section className="border-b border-border bg-[#0F172A]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl font-bold text-white leading-none">
                {stat.value}
              </div>
              <div className="mt-1 text-xs font-medium uppercase tracking-[0.06em] text-white/70">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
