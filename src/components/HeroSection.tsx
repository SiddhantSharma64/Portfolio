
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowDown, Download, ExternalLink } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [text, setText] = useState("");
  const fullText = "Aspiring AI Engineer | Machine Learning Enthusiast";
  const [index, setIndex] = useState(0);
  
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(prev => prev + fullText[index]);
        setIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [index, fullText]);

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10 py-20 md:py-0">
        <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0 md:space-x-10">
          <div className="w-full md:w-7/12 space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-tech-darkBlue dark:text-white leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-tech-blue to-tech-neonBlue bg-clip-text text-transparent">Siddhant Sharma</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-heading h-8">
              {text}<span className="animate-pulse">|</span>
            </p>
            <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
              Building the future with AI and ML technologies. Computer Science student passionate about creating intelligent solutions that make an impact.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button asChild className="bg-tech-blue hover:bg-tech-darkBlue group shadow-lg transition-all hover:shadow-tech-blue/30">
                <a href="#projects" className="flex items-center gap-2">
                  View My Work
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button asChild variant="outline" className="border-tech-blue text-tech-blue dark:text-tech-blue hover:bg-tech-blue/10 transition-all">
                <a href="/siddhant_sharma_resume.pdf" download="Siddhant_Sharma_Resume.pdf" className="flex items-center gap-2">
                  Download CV
                  <Download size={18} className="group-hover:translate-y-1 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          <div className="w-full md:w-5/12 flex justify-center animate-scale-in">
            <div className="relative">
              {/* Enhanced background effects */}
              <div className="absolute inset-0 bg-gradient-to-br from-tech-blue to-tech-neonBlue opacity-15 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-tech-blue/10 rounded-full blur-xl animate-blob animation-delay-2000"></div>
              
              {/* Neural network pattern overlay */}
              <div className="absolute inset-0 rounded-full neural-network-grid opacity-5 mix-blend-overlay"></div>
              
              {/* Profile image container */}
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full p-1.5 overflow-hidden relative z-10 border-2 border-tech-blue/40 animate-float shadow-2xl shadow-tech-blue/20 bg-gradient-to-br from-white/10 to-tech-blue/10 backdrop-blur-md">
                <img
                  src="/LinkedIn Photo.jpg"
                  alt="Siddhant Sharma"
                  className="w-full h-full object-cover rounded-full transform hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle inner glow */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-tech-blue/10 to-transparent mix-blend-overlay"></div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-tech-neonBlue/15 rounded-full blur-xl animate-blob animation-delay-4000"></div>
              
              {/* Tech badges floating around */}
              <div className="absolute top-10 -right-4 px-3 py-1.5 rounded-full bg-white/80 dark:bg-tech-darkGray/80 shadow-md text-xs font-medium backdrop-blur-sm border border-tech-blue/20 animate-float-slow">
                <span className="text-tech-blue">ML</span>
              </div>
              <div className="absolute bottom-10 -left-4 px-3 py-1.5 rounded-full bg-white/80 dark:bg-tech-darkGray/80 shadow-md text-xs font-medium backdrop-blur-sm border border-tech-blue/20 animate-float-medium">
                <span className="text-tech-blue">AI</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to About section" className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-tech-blue/30 hover:bg-tech-blue/20 transition-colors">
            <ArrowDown className="w-6 h-6 text-tech-blue" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
