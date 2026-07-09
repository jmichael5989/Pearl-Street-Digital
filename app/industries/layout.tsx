import PreFooterCta from "@/components/home/PreFooterCta";
import ThreeColorFooter from "@/components/home/ThreeColorFooter";
import ScrollRevealOnRoute from "@/components/home/ScrollRevealOnRoute";

export default function IndustriesLayout({
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
