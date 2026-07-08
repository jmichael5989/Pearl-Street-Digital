import PreFooterCta from "@/components/home/PreFooterCta";
import ThreeColorFooter from "@/components/home/ThreeColorFooter";
import ScrollReveal from "@/components/home/ScrollReveal";

// Shared footer for every /services route — the three-color overview AND the
// still-navy service detail pages. Centralized here (was the navy <Footer />)
// so the detail pages get the black/white pre-footer CTA + footer without
// per-page duplication, and the overview no longer double-stacks a second
// footer. ScrollReveal (mounts here) reveals the .appear elements on any
// service page loaded directly; the overview keeps its own ScrollReveal for its
// body sections on client-side navigation.
export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-1">{children}</div>
      <div className="rpm3">
        <PreFooterCta />
        <ThreeColorFooter />
      </div>
      <ScrollReveal />
    </div>
  );
}
