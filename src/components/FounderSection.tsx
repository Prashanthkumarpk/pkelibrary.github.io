import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Award, Users, BookOpen, MessageCircle, FileText, Heart } from "lucide-react";

const FounderSection = () => {
  return (
    <section id="founder" className="py-20 bg-gradient-to-br from-muted/30 via-background to-muted/20 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-hero/5 to-secondary/5"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-hero/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-hero/10 rounded-full text-hero font-medium mb-4">
            Meet Our Visionary
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-primary">Prasanth Kumar Yernagula</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            From digital innovation to transforming lives - the journey of empowering millions
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="overflow-hidden shadow-hero border-0 bg-gradient-to-br from-card via-card to-muted/50">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Content Side */}
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="mb-8">
                    <h3 className="text-3xl md:text-4xl font-bold mb-3 text-primary">The Founder</h3>
                    <p className="text-xl text-hero mb-6 font-medium">Digital Pioneer • Educational Innovator • Community Builder</p>
                    
                    <div className="space-y-4 text-muted-foreground leading-relaxed">
                      <p>
                        Prasanth Kumar Yernagula founded <span className="text-primary font-semibold">"PK e Library"</span> as 
                        a groundbreaking digital initiative that revolutionized how students access educational resources.
                      </p>
                      <p>
                        Starting with innovative <span className="text-secondary font-semibold">automated Telegram chatbots</span>, 
                        the platform has delivered <span className="text-hero font-bold">over 1 million PDFs</span> to students worldwide.
                      </p>
                      <p>
                        Today, PKELibrary operates as an <span className="text-primary font-semibold">NGO</span> with the 
                        powerful motto: <span className="text-hero font-bold italic">"Right guidance at the right time."</span>
                      </p>
                    </div>
                  </div>
                  
                  {/* Journey Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-gradient-to-r from-hero/10 to-secondary/10 rounded-xl">
                    <div className="text-center">
                      <MessageCircle className="w-8 h-8 text-hero mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">1M+</div>
                      <div className="text-xs text-muted-foreground">PDFs Delivered</div>
                    </div>
                    <div className="text-center">
                      <FileText className="w-8 h-8 text-secondary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">5+</div>
                      <div className="text-xs text-muted-foreground">Years Impact</div>
                    </div>
                    <div className="text-center">
                      <Heart className="w-8 h-8 text-hero mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">∞</div>
                      <div className="text-xs text-muted-foreground">Lives Touched</div>
                    </div>
                  </div>

                  <Button 
                    variant="hero" 
                    size="lg"
                    className="w-fit"
                    onClick={() => window.open('https://in.linkedin.com/in/techie-prasanth', '_blank')}
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Connect on LinkedIn
                  </Button>
                </div>
                
                {/* Visual Side */}
                <div className="bg-gradient-to-br from-hero/20 via-secondary/20 to-hero/30 flex items-center justify-center p-8 md:p-12 relative">
                  <div className="relative">
                    {/* Main Avatar */}
                    <div className="w-48 h-48 md:w-64 md:h-64 bg-gradient-to-br from-hero to-secondary rounded-full flex items-center justify-center text-white text-6xl md:text-7xl font-bold shadow-hero relative z-10">
                      PK
                    </div>
                    
                    {/* Floating Elements */}
                    <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-secondary to-hero rounded-full flex items-center justify-center animate-bounce">
                      <BookOpen className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-hero to-secondary rounded-full flex items-center justify-center animate-pulse">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    
                    {/* Background Glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-hero/30 to-secondary/30 rounded-full blur-xl scale-110 -z-10"></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quote Section */}
        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto bg-gradient-to-r from-hero/5 to-secondary/5 border-hero/20">
            <CardContent className="p-8 md:p-12">
              <blockquote className="text-2xl md:text-3xl italic text-primary font-medium mb-6 leading-relaxed">
                "Right guidance at the right time can transform not just individual lives, 
                but entire communities. Technology is our bridge to making education accessible to all."
              </blockquote>
              <cite className="block text-lg font-semibold text-hero">
                - Prasanth Kumar Yernagula, Founder & Visionary
              </cite>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default FounderSection;