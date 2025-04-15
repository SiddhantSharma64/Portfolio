
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SkillsSection from '@/components/SkillsSection';
import ProjectsSection from '@/components/ProjectsSection';
import ExperienceSection from '@/components/ExperienceSection';
import ContactSection from '@/components/ContactSection';
// InteractiveResume removed as requested
import CurrentlyLearningSection from '@/components/CurrentlyLearningSection';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { toast } = useToast();

  // Check user preference for dark mode
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    setIsDarkMode(darkModeMediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    darkModeMediaQuery.addEventListener('change', handleChange);
    
    // Set loaded state after a small delay to allow for animations
    setTimeout(() => {
      setIsLoaded(true);
      toast({
        title: "Welcome to my portfolio!",
        description: "Feel free to explore my projects and skills. Let me know if you have any questions.",
        duration: 5000,
      });
    }, 500);
    
    return () => darkModeMediaQuery.removeEventListener('change', handleChange);
  }, [toast]);

  // Apply dark mode class to html element
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  // Section transitions removed as requested
  
  return (
    <div className={`min-h-screen bg-tech-lightGray dark:bg-tech-darkGray text-tech-darkBlue dark:text-white transition-colors duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* AI-themed background elements */}
      <div className="fixed inset-0 bg-circuit-pattern dark:bg-tech-grid pointer-events-none" aria-hidden="true"></div>
      <div className="neural-bg"></div>

      {/* Section transition overlay removed as requested */}
      
      <Navbar toggleDarkMode={toggleDarkMode} isDarkMode={isDarkMode} />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CurrentlyLearningSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Index;
