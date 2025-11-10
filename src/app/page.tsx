import Navbar from "@/components/layout/Navbar";
import HeroV2 from "@/components/sections/HeroV2";
import FeaturesV2 from "@/components/sections/FeaturesV2";
import ArchitectureV2 from "@/components/sections/ArchitectureV2";
import PricingV2 from "@/components/sections/PricingV2";
import TrustedPlatforms from "@/components/sections/TrustedPlatforms";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 cyber-grid-bg opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nocry-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <Navbar />
      <HeroV2 />
      <FeaturesV2 />
      <ArchitectureV2 />
      <PricingV2 />
      <TrustedPlatforms />
      <CTA />
      <Footer />
    </main>
  );
}
