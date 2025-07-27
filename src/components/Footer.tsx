import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const footerLinks = {
    resources: [
      { name: "Study Materials", href: "#resources" },
      { name: "Mental Health Toolkit", href: "#resources" },
      { name: "Research Papers", href: "#resources" },
      { name: "Interactive Learning", href: "#resources" }
    ],
    about: [
      { name: "Our Story", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Mission & Vision", href: "#about" },
      { name: "Annual Reports", href: "#" }
    ],
    getInvolved: [
      { name: "Volunteer", href: "#get-involved" },
      { name: "Partnerships", href: "#get-involved" },
      { name: "Donations", href: "#get-involved" },
      { name: "Careers", href: "#" }
    ],
    support: [
      { name: "Contact Us", href: "#contact" },
      { name: "FAQ", href: "#" },
      { name: "Technical Support", href: "#" },
      { name: "Feedback", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
    { name: "YouTube", icon: Youtube, href: "#" }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <img 
                src="/lovable-uploads/e71507a1-62ed-4d93-a920-097f273efa26.png" 
                alt="PkeLibrary Foundation Logo" 
                className="h-12 w-auto mb-4 filter brightness-0 invert"
              />
              <h3 className="text-lg font-semibold mb-2">PkeLibrary Foundation</h3>
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                Empowering students and inspiring humanity through accessible education, 
                right guidance at the right time.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <Mail className="w-4 h-4 mr-3 text-secondary" />
                <span>info@pkelibraryfoundation.org</span>
              </div>
              <div className="flex items-center text-sm">
                <Phone className="w-4 h-4 mr-3 text-secondary" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-start text-sm">
                <MapPin className="w-4 h-4 mr-3 text-secondary mt-0.5" />
                <span>123 Education Way<br />Learning City, LC 12345</span>
              </div>
            </div>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">About Us</h4>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-3">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-primary-foreground/80 hover:text-secondary transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mb-12">
          <div className="max-w-md">
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-primary-foreground/80 text-sm mb-4">
              Subscribe to our newsletter for the latest educational resources and impact stories.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Enter your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="default">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <Separator className="mb-8 bg-primary-foreground/20" />

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-primary-foreground/80 text-sm">
            <p>&copy; 2024 PkeLibrary Foundation. All rights reserved.</p>
            <p className="mt-1">
              <a href="#" className="hover:text-secondary transition-smooth">Privacy Policy</a>
              {" • "}
              <a href="#" className="hover:text-secondary transition-smooth">Terms of Service</a>
              {" • "}
              <a href="#" className="hover:text-secondary transition-smooth">Cookie Policy</a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-primary-foreground/80 text-sm mr-2">Follow us:</span>
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-secondary rounded-full flex items-center justify-center transition-smooth hover:scale-110"
                  aria-label={social.name}
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Attribution */}
        <div className="mt-8 pt-6 border-t border-primary-foreground/20 text-center">
          <p className="text-primary-foreground/60 text-xs">
            Transforming Education • Empowering Communities • Inspiring Humanity
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;