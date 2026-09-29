import { HeroSection } from "@/components/features/home/hero-section";
import { TrustedLogos } from "@/components/features/home/trusted-logos";

export default function HomePage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <HeroSection />
      {/* companies */}
      <TrustedLogos />
    </div>
  );
}
