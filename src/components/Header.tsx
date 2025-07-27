import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Download, BookOpen } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About Us", href: "#about" },
    { name: "Our Impact", href: "#impact" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/e71507a1-62ed-4d93-a920-097f273efa26.png" 
              alt="PkeLibrary Foundation Logo" 
              className="h-10 w-auto"
            />
          </div>

          {/* Resources Button - Prominent Left/Center Position */}
          <div className="hidden md:flex items-center flex-1 justify-center lg:justify-start lg:ml-8">
            <Button 
              variant="resource" 
              size="lg" 
              className="animate-pulse-glow"
              onClick={() => document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <BookOpen className="w-5 h-5" />
              Resources
              <Download className="w-4 h-4" />
            </Button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-secondary transition-smooth font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fadeInUp">
            <div className="flex flex-col space-y-4">
              {/* Mobile Resources Button */}
              <Button 
                variant="resource" 
                size="lg" 
                className="w-full justify-center"
                onClick={() => {
                  document.getElementById('resources')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMenuOpen(false);
                }}
              >
                <BookOpen className="w-5 h-5" />
                Resources
                <Download className="w-4 h-4" />
              </Button>
              
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-secondary transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;