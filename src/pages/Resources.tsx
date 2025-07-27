import Header from "@/components/Header";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-primary">Educational Resources</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Access our comprehensive collection of study materials, guides, and tools designed 
              to support your educational journey. All resources are free and available for immediate download.
            </p>
          </div>
        </div>
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;