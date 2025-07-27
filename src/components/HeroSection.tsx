import { Button } from "@/components/ui/button";
import { ArrowDown, BookOpen, Heart, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-hero opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-hero/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-24 h-24 bg-secondary/10 rounded-full animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main tagline */}
          <div className="mb-4 animate-fadeInUp">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              <span className="text-hero">PkeLibrary Foundation</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold">
              <span className="text-primary">Empowering Students</span>
              <span className="text-muted-foreground"> | </span>
              <span className="text-secondary">Inspiring Humanity</span>
            </h2>
          </div>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fadeInUp delay-200 font-medium italic">
            "Right Guidance at the Right Time"
          </p>

          {/* Impact stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 animate-fadeInUp delay-300">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">1M+</div>
              <div className="text-sm text-muted-foreground">Study Materials Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">5</div>
              <div className="text-sm text-muted-foreground">Years of Impact</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-secondary mb-2">1000s</div>
              <div className="text-sm text-muted-foreground">Lives Transformed</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fadeInUp delay-400">
            <Button 
              variant="hero" 
              size="xl"
              onClick={() => window.location.href = '/resources'}
            >
              <BookOpen className="w-5 h-5" />
              Explore Resources
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              onClick={() => document.getElementById('get-involved')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Heart className="w-5 h-5" />
              Get Involved
            </Button>
          </div>

          {/* Scroll indicator */}
          <div className="animate-fadeInUp delay-500">
            <Button
              variant="ghost"
              size="icon"
              className="mx-auto animate-bounce"
              onClick={() => document.getElementById('principles')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <ArrowDown className="w-6 h-6 text-secondary" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;