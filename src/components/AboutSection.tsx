import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, Eye, Users, ArrowRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            About PkeLibrary Foundation
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Formerly known as Pkelibrary, we are a non-profit organization dedicated to transforming 
            lives through accessible education and community empowerment. Our journey began with a 
            simple belief: education should be a right, not a privilege.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Mission, Vision, Values Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          <Card className="shadow-card hover:shadow-lg transition-smooth animate-fadeInUp">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-secondary/10 flex items-center justify-center">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-muted-foreground">
                Empowering Students | Inspiring Humanity through accessible, quality education 
                and comprehensive support systems that nurture both academic excellence and 
                personal growth.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-lg transition-smooth animate-fadeInUp delay-200">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-hero/10 flex items-center justify-center">
                <Eye className="w-8 h-8 text-hero" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
              <p className="text-muted-foreground">
                A world where every individual has access to quality education and the tools 
                needed for personal development, creating empowered communities that thrive 
                through knowledge and compassion.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card hover:shadow-lg transition-smooth animate-fadeInUp delay-400">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary">Our Values</h3>
              <p className="text-muted-foreground">
                Inclusivity, integrity, innovation, and impact. We believe in creating 
                sustainable change through collaborative efforts, ensuring no one is left 
                behind in their educational journey.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slideInLeft">
            <h3 className="text-3xl font-bold mb-6 text-primary">Our Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                PkeLibrary Foundation was born from a vision to democratize education. What started 
                as a small initiative to share study materials with local students has grown into 
                a global movement impacting millions of lives.
              </p>
              <p>
                Our founder recognized that many talented students were held back not by lack of 
                ability, but by lack of access to quality educational resources. This realization 
                sparked the creation of our platform, designed to bridge educational gaps and 
                provide equal opportunities for all.
              </p>
              <p>
                Today, we continue to evolve, incorporating mental health support, community 
                engagement, and innovative learning approaches to ensure holistic development 
                for every learner we serve.
              </p>
            </div>
            <Button variant="secondary" size="lg" className="mt-6">
              Learn More About Our Journey
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="animate-fadeInUp">
            <Card className="shadow-card bg-gradient-to-br from-secondary/5 to-hero/5 border-secondary/20">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-6 text-primary">Why Choose Us?</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-background rounded-full"></div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Completely Free</h5>
                      <p className="text-sm text-muted-foreground">All our resources are provided at no cost to learners worldwide</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-background rounded-full"></div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Quality Assured</h5>
                      <p className="text-sm text-muted-foreground">All materials are carefully curated and reviewed by education experts</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-background rounded-full"></div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Holistic Approach</h5>
                      <p className="text-sm text-muted-foreground">Beyond academics, we support mental health and personal development</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-background rounded-full"></div>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1">Global Reach</h5>
                      <p className="text-sm text-muted-foreground">Serving students and communities across multiple countries and cultures</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Leadership Team Preview */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-6 text-primary">Meet Our Team</h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our diverse team of educators, technologists, and community advocates work tirelessly 
            to ensure every student has access to quality education and support.
          </p>
          <Button variant="outline" size="lg">
            View Full Team
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;