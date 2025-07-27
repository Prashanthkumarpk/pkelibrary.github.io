import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, Users, BookOpen } from "lucide-react";

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-primary">Meet Our Founder</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The visionary behind PkeLibrary Foundation's mission to empower students worldwide
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2 text-primary">Prasanth</h3>
                  <p className="text-xl text-hero mb-4 font-medium">Founder & Visionary</p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    A passionate educator and technology enthusiast dedicated to democratizing education. 
                    With years of experience in educational technology and community development, 
                    Prasanth founded PkeLibrary to bridge the gap between quality education and accessibility.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <BookOpen className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">Education<br />Advocate</div>
                    </div>
                    <div className="text-center">
                      <Users className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">Community<br />Builder</div>
                    </div>
                    <div className="text-center">
                      <Award className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-sm text-muted-foreground">Tech<br />Innovator</div>
                    </div>
                  </div>

                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={() => window.open('https://in.linkedin.com/in/techie-prasanth', '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
                
                <div className="flex justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-hero/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <div className="w-48 h-48 bg-gradient-to-br from-hero to-secondary rounded-full flex items-center justify-center text-white text-6xl font-bold">
                      P
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <blockquote className="text-2xl italic text-muted-foreground max-w-3xl mx-auto">
            "Education is not just about acquiring knowledge; it's about empowering individuals to 
            transform their communities and create a better world for everyone."
          </blockquote>
          <cite className="block mt-4 text-lg font-medium text-primary">- Prasanth, Founder</cite>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;