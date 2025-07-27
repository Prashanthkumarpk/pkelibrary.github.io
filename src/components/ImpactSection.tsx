import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Users, BookOpen, Heart, Globe, Award, TrendingUp } from "lucide-react";

const ImpactSection = () => {
  const [counters, setCounters] = useState({
    materials: 0,
    students: 0,
    communities: 0,
    countries: 0
  });

  const finalCounts = {
    materials: 1000000,
    students: 50000,
    communities: 500,
    countries: 25
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepTime = duration / steps;

    const timer = setInterval(() => {
      setCounters(prev => ({
        materials: Math.min(prev.materials + finalCounts.materials / steps, finalCounts.materials),
        students: Math.min(prev.students + finalCounts.students / steps, finalCounts.students),
        communities: Math.min(prev.communities + finalCounts.communities / steps, finalCounts.communities),
        countries: Math.min(prev.countries + finalCounts.countries / steps, finalCounts.countries)
      }));
    }, stepTime);

    const timeout = setTimeout(() => {
      clearInterval(timer);
      setCounters(finalCounts);
    }, duration);

    return () => {
      clearInterval(timer);
      clearTimeout(timeout);
    };
  }, []);

  const stats = [
    {
      icon: BookOpen,
      value: Math.floor(counters.materials).toLocaleString() + "+",
      label: "Study Materials Delivered",
      description: "Comprehensive educational resources across all subjects",
      color: "text-secondary"
    },
    {
      icon: Users,
      value: Math.floor(counters.students).toLocaleString() + "+",
      label: "Students Impacted",
      description: "Lives transformed through quality education",
      color: "text-hero"
    },
    {
      icon: Heart,
      value: Math.floor(counters.communities).toLocaleString() + "+",
      label: "Communities Served",
      description: "Rural and urban areas receiving educational support",
      color: "text-primary"
    },
    {
      icon: Globe,
      value: Math.floor(counters.countries).toLocaleString() + "+",
      label: "Countries Reached",
      description: "Global impact across multiple nations",
      color: "text-accent"
    }
  ];

  const testimonials = [
    {
      quote: "PkeLibrary Foundation's resources helped me pass my exams and get into university. Their mental health support was invaluable during stressful times.",
      author: "Sarah M.",
      role: "University Student",
      location: "Rural Kenya"
    },
    {
      quote: "As a teacher, I've seen firsthand how these materials have transformed my classroom. My students are more engaged and performing better than ever.",
      author: "James O.",
      role: "High School Teacher",
      location: "Nigeria"
    },
    {
      quote: "The guidance I received through their platform helped me make the right career choices. I'm now studying medicine thanks to their support.",
      author: "Priya K.",
      role: "Medical Student",
      location: "India"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Celebrating 5 Years of Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Over the past five years, we've made significant strides in transforming education 
            and empowering communities worldwide. Here's our journey in numbers.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Impact Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <Card 
                key={stat.label}
                className="text-center shadow-card hover:shadow-lg transition-smooth bg-background animate-counter-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                    <IconComponent className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-primary">
                    {stat.value}
                  </div>
                  <h3 className="font-semibold mb-2">{stat.label}</h3>
                  <p className="text-sm text-muted-foreground">{stat.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Impact Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-slideInLeft">
            <h3 className="text-3xl font-bold mb-6 text-primary">Our Journey of Transformation</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Award className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Free Education Initiative</h4>
                  <p className="text-muted-foreground">Launched our platform to provide free educational resources to underserved communities globally.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <TrendingUp className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Rapid Growth & Impact</h4>
                  <p className="text-muted-foreground">Expanded our reach to millions of students, delivering quality content across multiple subjects and languages.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Heart className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Holistic Development</h4>
                  <p className="text-muted-foreground">Integrated mental health support and emotional well-being resources into our educational framework.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-fadeInUp">
            <Card className="shadow-card bg-gradient-to-br from-secondary/5 to-hero/5 border-secondary/20">
              <CardContent className="p-8">
                <h4 className="text-2xl font-bold mb-4 text-primary">What We've Achieved</h4>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Over 1 million educational materials delivered globally</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Free education provided to thousands of learners</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Mental health support integrated into learning</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Rural communities empowered through education</span>
                  </li>
                  <li className="flex items-center">
                    <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                    <span>Partnerships with schools and organizations worldwide</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12 text-primary">Voices of Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className="shadow-card hover:shadow-lg transition-smooth animate-fadeInUp"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="text-secondary text-4xl font-serif">"</div>
                    <p className="text-muted-foreground italic">{testimonial.quote}</p>
                  </div>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    <p className="text-sm text-secondary">{testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;