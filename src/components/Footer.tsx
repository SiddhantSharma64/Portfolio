
import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-tech-darkBlue text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h3 className="text-xl font-heading font-bold mb-2">Siddhant Sharma</h3>
            <p className="text-gray-300">Aspiring AI Engineer & ML Enthusiast</p>
          </div>
          
          <div className="mt-6 md:mt-0 flex space-x-4">
            <a href="https://github.com/SiddhantSharma64" target="_blank" rel="noopener noreferrer"
               className="p-2 text-white hover:text-tech-blue transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/in/siddhant--sharma" target="_blank" rel="noopener noreferrer"
               className="p-2 text-white hover:text-tech-blue transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:siddhantsharma6403@gmail.com"
               className="p-2 text-white hover:text-tech-blue transition-colors">
              <Mail className="h-5 w-5" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 bg-tech-blue/20 rounded-full hover:bg-tech-blue/50 transition-colors ml-4"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
        
        <hr className="my-6 border-gray-700" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright text removed */}
          <div className="mt-4 md:mt-0">
            <nav className="flex space-x-6">
              <a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors fancy-underline">About</a>
              <a href="#projects" className="text-sm text-gray-400 hover:text-white transition-colors fancy-underline">Projects</a>
              <a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors fancy-underline">Contact</a>
            </nav>
          </div>
        </div>
        
        <div className="w-full flex justify-center mt-8">
          <div className="h-1 w-20 bg-gradient-to-r from-tech-blue to-tech-neonBlue rounded-full"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
