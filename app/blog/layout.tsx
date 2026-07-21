import PreFooterCta from "@/components/home/PreFooterCta";
import ThreeColorFooter from "@/components/home/ThreeColorFooter";
import ScrollRevealOnRoute from "@/components/home/ScrollRevealOnRoute";

// Shared footer for both /blog (index) and /blog/[slug] (posts) in the
// three-color system. Mirrors app/services/layout.tsx: the .rpm3 wrapper
// scopes the three-color CSS for the pre-footer CTA + footer, and
// ScrollRevealOnRoute reveals .appear elements on client navigation.
export default function BlogLayout({
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
      <ScrollRevealOnRoute />
    </div>
  );
}
