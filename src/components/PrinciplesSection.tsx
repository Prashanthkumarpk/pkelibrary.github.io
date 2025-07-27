import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCheck, BookOpen, Heart, Smile, Home } from "lucide-react";

const PrinciplesSection = () => {
  const principles = [
    {
      title: "Right Guidance at the Right Time",
      description: "Providing timely and accurate educational support when students need it most",
      icon: UserCheck,
      color: "bg-secondary/10 border-secondary/20"
    },
    {
      title: "Education for All",
      description: "Making quality education accessible to everyone, regardless of background or circumstances",
      icon: BookOpen,
      color: "bg-hero/10 border-hero/20"
    },
    {
      title: "Nurturing Humanity in Youth",
      description: "Fostering compassion, empathy, and human values in the next generation",
      icon: Heart,
      color: "bg-primary/10 border-primary/20"
    },
    {
      title: "Emotional Well-being & Mental Health",
      description: "Supporting student mental health and emotional resilience for holistic development",
      icon: Smile,
      color: "bg-accent/10 border-accent/20"
    },
    {
      title: "Rural Empowerment through Education",
      description: "Bridging educational gaps in rural communities and empowering underserved areas",
      icon: Home,
      color: "bg-secondary/10 border-secondary/20"
    }
  ];

  return (
    <section id="principles" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Our 5 Guiding Principles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            These core principles drive everything we do at PkeLibrary Foundation, 
            shaping our mission to create lasting impact in education and community development.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* First row - 2 cards */}
          <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {principles.slice(0, 2).map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card 
                  key={principle.title}
                  className={`${principle.color} shadow-card hover:shadow-lg transition-smooth hover:scale-105 animate-fadeInUp`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center shadow-md">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Second row - 3 cards */}
          {principles.slice(2).map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <Card 
                key={principle.title}
                className={`${principle.color} shadow-card hover:shadow-lg transition-smooth hover:scale-105 animate-fadeInUp`}
                style={{ animationDelay: `${(index + 2) * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center shadow-md">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{principle.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{principle.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="flex overflow-x-auto space-x-4 pb-4 scrollbar-hide">
            {principles.map((principle, index) => {
              const IconComponent = principle.icon;
              return (
                <Card 
                  key={principle.title}
                  className={`${principle.color} shadow-card flex-shrink-0 w-80 animate-slideInLeft`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardHeader className="text-center pb-4">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center shadow-md">
                      <IconComponent className="w-8 h-8 text-secondary" />
                    </div>
                    <CardTitle className="text-xl font-semibold">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-center">{principle.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-4">Swipe to see all principles →</p>
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;