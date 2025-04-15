
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X, Moon, Sun, Code, Zap, Cpu, Binary } from 'lucide-react';

interface NavbarProps {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleDarkMode, isDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 dark:bg-tech-gray/90 backdrop-blur-lg shadow-lg border-b border-tech-blue/20' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-heading font-bold text-2xl text-tech-blue flex items-center gap-2 group relative">
          <span className="p-1.5 bg-tech-blue text-white rounded flex items-center justify-center group-hover:rotate-12 transition-transform">
            <Code size={18} />
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-tech-neonBlue rounded-full animate-ping opacity-75"></span>
          </span>
          <span className="group-hover:text-tech-darkBlue dark:group-hover:text-white transition-colors">SS</span>
          <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-tech-blue to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
        </a>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-tech-darkBlue dark:text-white hover:text-tech-blue dark:hover:text-tech-blue transition-colors fancy-underline"
            >
              {link.name}
            </a>
          ))}
          
          <Button
            variant="outline"
            size="sm"
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            className="ml-2 relative overflow-hidden group border border-tech-blue/30 hover:border-tech-blue transition-all"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-tech-blue/10 to-tech-neonBlue/10 group-hover:opacity-100 opacity-0 transition-opacity"></span>
            <div className="flex items-center space-x-2 z-10 relative">
              {isDarkMode ? (
                <>
                  <Sun className="h-4 w-4 text-yellow-400" />
                  <span className="text-sm">Light</span>
                  <Cpu className="h-3 w-3 text-tech-blue animate-pulse" />
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-tech-blue" />
                  <span className="text-sm">Dark</span>
                  <Binary className="h-3 w-3 text-tech-blue animate-pulse" />
                </>
              )}
            </div>
          </Button>

          <Button asChild className="bg-tech-blue hover:bg-tech-darkBlue shadow-md hover:shadow-tech-blue/30 transition-all">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        
        <div className="md:hidden flex items-center">
          <Button
            variant="outline"
            size="sm"
            aria-label="Toggle dark mode"
            onClick={toggleDarkMode}
            className="mr-2 relative overflow-hidden group border border-tech-blue/30 hover:border-tech-blue transition-all"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-tech-blue/10 to-tech-neonBlue/10 group-hover:opacity-100 opacity-0 transition-opacity"></span>
            <div className="flex items-center space-x-2 z-10 relative">
              {isDarkMode ? (
                <>
                  <Sun className="h-4 w-4 text-yellow-400" />
                  <Zap className="h-3 w-3 text-yellow-400 animate-pulse" />
                </>
              ) : (
                <>
                  <Moon className="h-4 w-4 text-tech-blue" />
                  <Zap className="h-3 w-3 text-tech-blue animate-pulse" />
                </>
              )}
            </div>
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            className="hover:bg-tech-blue/10"
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/90 dark:bg-tech-gray/90 backdrop-blur-lg p-6 animate-fade-in shadow-lg">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-tech-darkBlue dark:text-white hover:text-tech-blue dark:hover:text-tech-blue transition-colors py-2 border-b border-gray-100 dark:border-gray-800"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <Button asChild className="bg-tech-blue hover:bg-tech-darkBlue w-full mt-2">
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Get in Touch</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
