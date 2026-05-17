import HeroSection from "@/components/HeroSection";
import InfoSections from "@/components/InfoSections";
import FaqSection from "@/components/FaqSection";
import FormSection from "@/components/FormSection";

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground font-ibm">
      <HeroSection />
      <InfoSections />
      <FaqSection />
      <FormSection />
    </div>
  );
}
