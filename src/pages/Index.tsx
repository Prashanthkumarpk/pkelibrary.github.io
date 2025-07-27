import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ResourcesSection from "@/components/ResourcesSection";
import PrinciplesSection from "@/components/PrinciplesSection";
import AboutSection from "@/components/AboutSection";
import ImpactSection from "@/components/ImpactSection";
import GetInvolvedSection from "@/components/GetInvolvedSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ResourcesSection />
        <PrinciplesSection />
        <AboutSection />
        <ImpactSection />
        <GetInvolvedSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;