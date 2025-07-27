import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Send us a message anytime",
      detail: "info@pkelibraryfoundation.org",
      action: "mailto:info@pkelibraryfoundation.org"
    },
    {
      icon: Phone,
      title: "Call Us",
      description: "Speak with our team",
      detail: "+1 (555) 123-4567",
      action: "tel:+15551234567"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      description: "Our main office",
      detail: "123 Education Way, Learning City, LC 12345",
      action: "#"
    },
    {
      icon: Clock,
      title: "Office Hours",
      description: "When we're available",
      detail: "Mon-Fri: 9AM-6PM EST",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">
            Contact Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Have questions, suggestions, or want to collaborate? We'd love to hear from you. 
            Reach out to us and join our mission to transform education worldwide.
          </p>
          <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => {
            const IconComponent = info.icon;
            return (
              <Card 
                key={info.title}
                className="shadow-card hover:shadow-lg transition-smooth text-center animate-fadeInUp"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-secondary/10 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">{info.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{info.description}</p>
                  {info.action ? (
                    <a 
                      href={info.action}
                      className="text-secondary hover:underline font-medium"
                    >
                      {info.detail}
                    </a>
                  ) : (
                    <p className="text-secondary font-medium">{info.detail}</p>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Contact Form and Map */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-card animate-slideInLeft">
            <CardHeader>
              <CardTitle className="flex items-center text-2xl">
                <Send className="w-6 h-6 mr-3 text-secondary" />
                Send Us a Message
              </CardTitle>
              <p className="text-muted-foreground">
                Fill out the form below and we'll get back to you as soon as possible.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="contactFirstName">First Name *</Label>
                    <Input id="contactFirstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactLastName">Last Name *</Label>
                    <Input id="contactLastName" placeholder="Doe" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactEmail">Email Address *</Label>
                  <Input id="contactEmail" type="email" placeholder="john.doe@example.com" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactPhone">Phone Number</Label>
                  <Input id="contactPhone" type="tel" placeholder="+1 (555) 123-4567" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactSubject">Subject *</Label>
                  <select 
                    id="contactSubject" 
                    className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:ring-2 focus:ring-ring focus:border-ring"
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="resources">Resource Request</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="volunteer">Volunteer Application</option>
                    <option value="technical">Technical Support</option>
                    <option value="media">Media Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contactMessage">Message *</Label>
                  <Textarea 
                    id="contactMessage" 
                    placeholder="Please provide details about your inquiry..."
                    rows={5}
                    required
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full">
                  <Send className="w-4 h-4" />
                  Send Message
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  We typically respond within 24-48 hours during business days.
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Additional Information */}
          <div className="space-y-8 animate-fadeInUp">
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-primary">Let's Connect</h3>
                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    Whether you're a student looking for resources, an educator wanting to collaborate, 
                    or an organization interested in partnership, we're here to help.
                  </p>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">What you can expect:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span className="text-sm">Quick response within 24-48 hours</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span className="text-sm">Personalized assistance from our team</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span className="text-sm">Follow-up support when needed</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span className="text-sm">Resources and guidance tailored to your needs</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-to-br from-secondary/5 to-hero/5 border-secondary/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Join Our Community</h3>
                <p className="text-muted-foreground mb-6">
                  Follow us on social media for daily inspiration, educational tips, 
                  and updates on our latest resources and impact stories.
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="outline" size="sm">Facebook</Button>
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">Instagram</Button>
                  <Button variant="outline" size="sm">LinkedIn</Button>
                  <Button variant="outline" size="sm">YouTube</Button>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Emergency Resources</h3>
                <p className="text-muted-foreground mb-4">
                  If you're in crisis and need immediate mental health support:
                </p>
                <div className="space-y-2">
                  <p className="text-sm">
                    <strong>Crisis Hotline:</strong> <a href="tel:988" className="text-secondary hover:underline">988</a> (US)
                  </p>
                  <p className="text-sm">
                    <strong>International:</strong> <a href="https://findahelpline.com" className="text-secondary hover:underline">Find A Helpline</a>
                  </p>
                  <p className="text-sm">
                    <strong>Text Support:</strong> Text HOME to 741741
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;