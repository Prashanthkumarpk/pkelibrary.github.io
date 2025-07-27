import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Heart, Users, Handshake, DollarSign, Mail, UserPlus } from "lucide-react";

const GetInvolvedSection = () => {
  const ways = [
    {
      title: "Volunteer with Us",
      description: "Join our team of dedicated volunteers and help create educational content, mentor students, or support community outreach programs.",
      icon: Users,
      color: "bg-secondary/10 border-secondary/20",
      buttonText: "Apply to Volunteer",
      buttonVariant: "secondary"
    },
    {
      title: "Partner with Us",
      description: "Collaborate with organizations, schools, and institutions to expand our reach and create sustainable impact in education.",
      icon: Handshake,
      color: "bg-hero/10 border-hero/20",
      buttonText: "Explore Partnerships",
      buttonVariant: "hero"
    },
    {
      title: "Support Our Mission",
      description: "Make a donation to help us continue providing free educational resources and expand our programs to reach more students.",
      icon: Heart,
      color: "bg-primary/10 border-primary/20",
      buttonText: "Donate Now",
      buttonVariant: "default"
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Get Involved
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Join us in transforming education and uplifting communities. There are many ways 
            you can contribute to our mission and make a lasting impact on students worldwide.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {ways.map((way, index) => {
            const IconComponent = way.icon;
            return (
              <Card 
                key={way.title}
                className={`${way.color} shadow-card hover:shadow-lg transition-smooth hover:scale-105 animate-fadeInUp`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center shadow-md">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{way.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center mb-6">{way.description}</p>
                  <Button 
                    variant={way.buttonVariant as any} 
                    className="w-full"
                    size="lg"
                  >
                    {way.buttonText}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Volunteer Application Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="animate-slideInLeft">
            <h3 className="text-3xl font-bold mb-6 text-primary">Ready to Make a Difference?</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <UserPlus className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Volunteer Opportunities</h4>
                  <p className="text-muted-foreground">Content creation, tutoring, community outreach, translation, and technical support.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-hero rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Handshake className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Partnership Benefits</h4>
                  <p className="text-muted-foreground">Expand your organization's impact, access to our global network, and collaborative opportunities.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <DollarSign className="w-4 h-4 text-background" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Donation Impact</h4>
                  <p className="text-muted-foreground">Your contribution directly supports free educational resources and mental health programs for students.</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="shadow-card animate-fadeInUp">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Mail className="w-6 h-6 mr-3 text-secondary" />
                Join Our Community
              </CardTitle>
              <p className="text-muted-foreground">Fill out this form to get started or subscribe to our newsletter for updates.</p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">I'm interested in:</Label>
                  <select 
                    id="interest" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-ring"
                  >
                    <option value="">Select your interest</option>
                    <option value="volunteer">Volunteering</option>
                    <option value="partnership">Partnership</option>
                    <option value="donation">Making a Donation</option>
                    <option value="newsletter">Newsletter Only</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message (Optional)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us more about your interest or ask any questions..."
                    rows={4}
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  Submit Application
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  By submitting this form, you agree to receive communications from PkeLibrary Foundation.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto shadow-card bg-gradient-to-r from-secondary/5 to-hero/5 border-secondary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Stay Connected</h3>
              <p className="text-muted-foreground mb-6">
                Subscribe to our newsletter for updates on new resources, impact stories, and opportunities to get involved.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Input 
                  placeholder="Enter your email address" 
                  className="flex-1"
                />
                <Button variant="secondary" size="lg">
                  Subscribe
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;