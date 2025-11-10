import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import HeroV2 from "@/components/sections/HeroV2";

// Lazy load componentes que não estão na viewport inicial
const FeaturesV2 = dynamic(() => import("@/components/sections/FeaturesV2"), {
  loading: () => <div className="h-screen bg-black" />,
});
const ArchitectureV2 = dynamic(() => import("@/components/sections/ArchitectureV2"), {
  loading: () => <div className="h-screen bg-black" />,
});
const PricingV2 = dynamic(() => import("@/components/sections/PricingV2"), {
  loading: () => <div className="h-screen bg-black" />,
});
const TrustedPlatforms = dynamic(() => import("@/components/sections/TrustedPlatforms"), {
  loading: () => <div className="h-96 bg-black" />,
});
const CTA = dynamic(() => import("@/components/sections/CTA"), {
  loading: () => <div className="h-96 bg-black" />,
});
const Footer = dynamic(() => import("@/components/sections/Footer"), {
  loading: () => <div className="h-96 bg-black" />,
});

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black">
      {/* Background Effects - Otimizado com will-change */}
      <div className="fixed inset-0 -z-10 will-change-transform">
        <div className="absolute inset-0 cyber-grid-bg opacity-20" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-nocry-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyber-purple/20 rounded-full blur-3xl animate-pulse-slow delay-1000" />
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
