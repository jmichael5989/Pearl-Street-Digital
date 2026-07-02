import VoxelHero from "@/components/home/VoxelHero";
import DesignQuote from "@/components/home/DesignQuote";
import Build from "@/components/home/Build";
import ServicesList from "@/components/home/ServicesList";
import SpecTable from "@/components/home/SpecTable";
import CtaBand from "@/components/home/CtaBand";
import ContactSection from "@/components/home/ContactSection";
import ThreeColorFooter from "@/components/home/ThreeColorFooter";
import ScrollReveal from "@/components/home/ScrollReveal";

// Homepage — the three-color redesign (phase 1). Self-contained under
// .voxel-hero (WebGL hero) and .rpm3 (three-color body); the navy/brass system
// on the other routes is untouched. The single <h1> is the hero statement.
export default function Home() {
  return (
    <>
      <VoxelHero />
      <main className="rpm3">
        <DesignQuote />
        <Build />
        <ServicesList />
        <SpecTable />
        <CtaBand />
        <ContactSection />
      </main>
      <div className="rpm3">
        <ThreeColorFooter />
      </div>
      <ScrollReveal />
    </>
  );
}
