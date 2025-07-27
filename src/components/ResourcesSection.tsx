import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Download, BookOpen, Brain, Heart, FileText, Video, Headphones } from "lucide-react";

const ResourcesSection = () => {
  const resourceCategories = [
    {
      title: "Study Materials",
      description: "Comprehensive guides and textbooks for all subjects",
      icon: BookOpen,
      items: ["Mathematics Guides", "Science Textbooks", "Language Arts", "History Resources"],
      color: "bg-secondary/10 border-secondary/20",
      buttonColor: "secondary"
    },
    {
      title: "Mental Health Toolkit",
      description: "Resources for emotional well-being and mental health",
      icon: Heart,
      items: ["Stress Management", "Mindfulness Guides", "Counseling Resources", "Self-Help Materials"],
      color: "bg-hero/10 border-hero/20",
      buttonColor: "hero"
    },
    {
      title: "Research Papers",
      description: "Academic papers and research documentation",
      icon: FileText,
      items: ["Educational Research", "Impact Studies", "Best Practices", "Case Studies"],
      color: "bg-primary/10 border-primary/20",
      buttonColor: "default"
    },
    {
      title: "Interactive Learning",
      description: "Multimedia content for enhanced learning",
      icon: Video,
      items: ["Video Tutorials", "Interactive Quizzes", "Audio Lessons", "Digital Workbooks"],
      color: "bg-accent/10 border-accent/20",
      buttonColor: "resource"
    }
  ];

  return (
    <section id="resources" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Educational Resources Hub
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Access our curated collection of free educational materials, study guides, and mental health resources. 
            Everything you need for academic success and personal growth.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Resource Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resourceCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title} 
                className={`${category.color} shadow-card hover:shadow-lg transition-smooth hover:scale-105 animate-fadeInUp`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center shadow-md">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{category.title}</CardTitle>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="text-sm flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant={category.buttonColor as any} 
                    className="w-full"
                    size="sm"
                  >
                    <Download className="w-4 h-4" />
                    Access Resources
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Downloads */}
        <div className="bg-background rounded-lg p-8 shadow-card">
          <h3 className="text-2xl font-bold text-center mb-8 text-primary">Featured Downloads</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-secondary/5 to-secondary/10 border border-secondary/20">
              <Brain className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Study Success Guide</h4>
              <p className="text-sm text-muted-foreground mb-4">Complete guide to effective study techniques</p>
              <Button variant="secondary" size="sm">
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-hero/5 to-hero/10 border border-hero/20">
              <Heart className="w-12 h-12 text-hero mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Mental Wellness Kit</h4>
              <p className="text-sm text-muted-foreground mb-4">Tools for maintaining mental health</p>
              <Button variant="hero" size="sm">
                <Download className="w-4 h-4" />
                Download Kit
              </Button>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-b from-primary/5 to-primary/10 border border-primary/20">
              <Headphones className="w-12 h-12 text-primary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Audio Learning Series</h4>
              <p className="text-sm text-muted-foreground mb-4">Educational podcasts and audio content</p>
              <Button variant="default" size="sm">
                <Download className="w-4 h-4" />
                Listen Now
              </Button>
            </div>
          </div>
        </div>

        {/* Resource Request */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Can't find what you're looking for?
          </p>
          <Button variant="outline" size="lg">
            Request New Resources
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;