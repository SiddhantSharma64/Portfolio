
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, X } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  image: string;
  details?: string;
  category: string;
  featured?: boolean;
  size?: 'small' | 'medium' | 'large';
}

const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const [isMobile, setIsMobile] = useState<boolean>(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const projects: Project[] = [
    {
      id: 1,
      title: "Custom Video Broadcaster",
      description: "Developed an AI-powered virtual camera system using YOLOv8 for real-time person isolation, with a FastAPI-based streaming solution and GPU acceleration (CUDA/MPS).",
      technologies: ["YOLOv8", "FastAPI", "CUDA/MPS", "Computer Vision"],
      link: "https://github.com/SiddhantSharma64/Custom_Video_Broadcaster.git",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8QUl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      details: "The Custom Video Broadcaster is designed to create a seamless virtual camera experience using state-of-the-art AI. It uses YOLOv8 to detect and isolate a person in real-time from video input, allowing for background replacement and clean video outputs. The system is optimized for performance with GPU acceleration via CUDA/MPS, enabling real-time processing even on consumer hardware. The streaming solution uses FastAPI for low-latency delivery to various platforms.",
      category: "Computer Vision",
      featured: true,
      size: "medium"
    },
    {
      id: 2,
      title: "Resume Parsing & Recommendation System",
      description: "Built a Flask-based system using NLP (TF-IDF) and Random Forest Classifier (85% accuracy) for resume analysis and job recommendations.",
      technologies: ["Flask", "NLP", "TF-IDF", "Random Forest", "Machine Learning"],
      link: "https://github.com/SiddhantSharma64/Resume-Parsing_Recommendation-System.git",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJlc3VtZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      details: "This system automates the resume screening process by extracting key information from resumes using Natural Language Processing techniques. It analyzes resumes to identify skills, experience, and qualifications, then uses TF-IDF vectorization to represent the text data. A Random Forest Classifier with 85% accuracy matches candidates to suitable job openings based on their resume content and job requirements.",
      category: "NLP",
      size: "medium"
    },
    {
      id: 3,
      title: "Covid-19 Detection System",
      description: "Created a real-time image analysis tool using TensorFlow, Keras, and OpenCV for efficient Covid-19 diagnosis.",
      technologies: ["TensorFlow", "Keras", "OpenCV", "Deep Learning"],
      link: "https://github.com/SiddhantSharma64/Covid-19_Detection_System.git",
      image: "https://images.unsplash.com/photo-1584036561566-baf8f5f1b144?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y292aWR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      details: "This detection system uses deep learning to analyze chest X-ray images and identify potential COVID-19 cases. The model was trained on a dataset of X-ray images from COVID-19 patients and healthy individuals using TensorFlow and Keras. OpenCV is used for real-time image processing and visualization of results. The system achieved high accuracy in preliminary testing and aims to assist healthcare professionals in rapid diagnosis.",
      category: "Computer Vision",
      size: "medium"
    },
    {
      id: 4,
      title: "US Visa Approval Prediction (MLOps)",
      description: "Developed an end-to-end MLOps pipeline with KNN, AWS, Docker, FastAPI APIs, and CI/CD automation.",
      technologies: ["KNN", "AWS", "Docker", "FastAPI", "Evidently AI", "MLOps"],
      link: "https://github.com/SiddhantSharma64/US_Visa_Approval-MLOPs.git",
      image: "images.jpeg",
      details: "This project implements a complete MLOps pipeline for predicting US visa approvals. Using K-Nearest Neighbors algorithm for prediction, the system is deployed with AWS services for scalability and Docker for containerization. FastAPI provides the API layer for making predictions, while Evidently AI is used for model monitoring. The entire pipeline includes automated CI/CD processes for continuous integration and deployment of model updates.",
      category: "MLOps",
      size: "medium"
    }
  ];
  
  const categories = ["all", ...Array.from(new Set(projects.map(p => p.category)))];
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);
    
  // Find featured project
  const featuredProject = projects.find(p => p.featured);

  return (
    <section id="projects" className="section-padding bg-white dark:bg-tech-gray">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        
        {/* Enhanced Filter tabs */}
        <div className="mb-12 max-w-4xl mx-auto">
          <div className="text-center mb-5">
            <span className="inline-block text-tech-blue text-sm font-semibold tracking-wide uppercase mb-2 ai-badge px-3 py-1 rounded-full">Filter Projects</span>
            <p className="text-gray-600 dark:text-gray-300 text-sm max-w-lg mx-auto">Browse my projects by category</p>
          </div>
          <Tabs defaultValue="all" className="w-full" onValueChange={setFilter}>
            <TabsList className="mx-auto flex flex-wrap justify-center mb-8 p-3 bg-white/90 dark:bg-tech-gray/90 backdrop-blur-md rounded-lg border border-tech-blue/20 shadow-lg gap-1 max-w-3xl w-full overflow-hidden">
              
              {categories.map(category => {
                // Add icons based on category
                let icon;
                switch(category) {
                  case 'all':
                    icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>;
                    break;
                  case 'Computer Vision':
                    icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>;
                    break;
                  case 'NLP':
                    icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>;
                    break;
                  case 'MLOps':
                    icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="8" height="8" x="2" y="2" rx="2"></rect><path d="M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2"></path><path d="M20 2c1.1 0 2 .9 2 2v14c0 1.1-.9 2-2 2"></path><path d="M2 14c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"></path><path d="M2 20c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2"></path></svg>;
                    break;
                  default:
                    icon = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>;
                }
                
                return (
                  <TabsTrigger 
                    key={category} 
                    value={category} 
                    className="m-0.5 px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-300 data-[state=active]:bg-tech-blue data-[state=active]:text-white data-[state=active]:shadow-md relative group capitalize whitespace-nowrap"
                  >
                    <span className="flex items-center justify-center gap-2">
                      <span className="group-data-[state=active]:animate-pulse">{icon}</span>
                      {category}
                    </span>
                    <span className="absolute inset-0 bg-tech-blue/10 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-0 transition-opacity"></span>
                  </TabsTrigger>
                );
              })}
            </TabsList>
          </Tabs>
        </div>
        
        {/* Mobile View: Carousel */}
        {isMobile && (
          <Carousel className="w-full">
            <CarouselContent>
              {filteredProjects.map((project) => (
                <CarouselItem key={project.id}>
                  <div className="p-1">
                    <Card className="project-card">
                      <div className="h-48 overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform hover:scale-105"
                        />
                      </div>
                      <CardHeader>
                        <CardTitle className="text-tech-darkBlue dark:text-white">{project.title}</CardTitle>
                        <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex flex-wrap gap-1 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="bg-tech-lightGray dark:bg-tech-darkGray">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline">+{project.technologies.length - 3}</Badge>
                          )}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={() => setSelectedProject(project)}>
                          View Details
                        </Button>
                        <Button asChild variant="ghost" className="px-2">
                          <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            aria-label={`View ${project.title} on GitHub`}
                          >
                            <Github className="h-5 w-5" />
                          </a>
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-4 gap-2">
              <CarouselPrevious className="static transform-none" />
              <CarouselNext className="static transform-none" />
            </div>
          </Carousel>
        )}
        
        {/* Desktop View: Standardized Grid for Equal-Sized Projects */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 px-4 max-w-6xl mx-auto mt-4">
            {filteredProjects.map((project, index) => {
              // All projects now have the same size
              
              return (
                <div 
                  key={project.id} 
                  className="h-full transform transition-all duration-500" 
                  style={{ 
                    opacity: 0,
                    animationName: 'fadeInUp',
                    animationDuration: '0.6s',
                    animationTimingFunction: 'ease-out',
                    animationFillMode: 'forwards',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  <Card 
                    className="h-full overflow-hidden group border border-gray-200 dark:border-gray-700 hover:border-tech-blue/40 dark:hover:border-tech-blue/40 transition-all duration-300 hover:shadow-xl hover:scale-[1.03] flex flex-col relative rounded-xl"
                  >
                    {/* Category badge as a pill displayed top-right */}
                    <Badge className="absolute top-3 right-3 z-20 bg-tech-blue text-white font-medium shadow-md opacity-90 px-2.5 py-1">
                      {project.category}
                    </Badge>
                    
                    <div className="relative overflow-hidden" style={{ height: '280px' }}>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform group-hover:scale-110 duration-700"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <div className="transform translate-y-4 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-100">
                          <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{project.title}</h3>
                          <p className="text-sm text-white/90 mb-4 line-clamp-2 drop-shadow-sm">{project.description}</p>
                          <div className="flex gap-2 flex-wrap">
                            <Button 
                              size="sm" 
                              onClick={() => setSelectedProject(project)} 
                              className="bg-tech-blue hover:bg-tech-darkBlue text-white shadow-lg transition-all duration-300 hover:scale-105"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                <circle cx="11" cy="11" r="8"></circle>
                                <path d="m21 21-4.3-4.3"></path>
                              </svg>
                              View Details
                            </Button>
                            {project.link !== "#" && (
                              <Button 
                                asChild 
                                size="sm" 
                                variant="outline" 
                                className="border-white text-white hover:bg-white/20 shadow-lg transition-all duration-300 hover:scale-105"
                              >
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                  <Github className="h-4 w-4 mr-1" /> View Code
                                </a>
                              </Button>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-2 pt-4">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-tech-darkBlue dark:text-white group-hover:text-tech-blue transition-colors duration-300">{project.title}</CardTitle>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="pt-0 flex-grow">
                      <p className="text-gray-700 dark:text-gray-300 mb-6 line-clamp-2 h-12">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {project.technologies.slice(0, project.size === 'large' ? 8 : 6).map((tech) => (
                          <Badge 
                            key={tech} 
                            variant="outline" 
                            className="bg-gray-100/80 dark:bg-tech-darkGray/60 text-gray-800 dark:text-gray-200 hover:bg-tech-blue/20 hover:border-tech-blue/50 transition-colors duration-300 text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {project.technologies.length > (project.size === 'large' ? 8 : 6) && (
                          <Badge 
                            variant="outline" 
                            className="bg-gray-100/80 dark:bg-tech-darkGray/60 text-gray-800 dark:text-gray-200 hover:bg-tech-blue/20 hover:border-tech-blue/50 transition-colors duration-300 text-xs"
                          >
                            +{project.technologies.length - (project.size === 'large' ? 8 : 6)}
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    
                    {/* Visual indicator for hovering */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-tech-blue to-tech-neonBlue scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300"></div>
                  </Card>
                </div>
              );
            })}
          </div>
        )}
        
        {/* Featured Project Section */}
        {featuredProject && filter === "all" && (
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-center mb-8 relative inline-block ai-section-title mx-auto">
              <span className="bg-gradient-to-r from-tech-blue to-tech-neonBlue bg-clip-text text-transparent">
                Featured Project
              </span>
            </h3>
            <div className="bg-white dark:bg-tech-darkGray border border-tech-blue/20 rounded-lg overflow-hidden shadow-lg">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={featuredProject.image} 
                    alt={featuredProject.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                    <Badge className="self-start mb-2 bg-tech-neonBlue text-tech-darkBlue">Featured</Badge>
                    <h4 className="text-2xl font-bold text-white">{featuredProject.title}</h4>
                    <p className="text-white/90">{featuredProject.category}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-4 text-tech-darkBlue dark:text-white">About this project</h4>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">{featuredProject.details}</p>
                  <div className="mb-6">
                    <h5 className="font-semibold mb-2 text-tech-blue">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {featuredProject.technologies.map(tech => (
                        <Badge key={tech}>{tech}</Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button onClick={() => setSelectedProject(featuredProject)} className="bg-tech-blue hover:bg-tech-darkBlue">
                      View Details
                    </Button>
                    {featuredProject.link !== "#" && (
                      <Button asChild variant="outline">
                        <a href={featuredProject.link} target="_blank" rel="noopener noreferrer" className="flex items-center">
                          <Github className="mr-2 h-4 w-4" /> View Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-fade-in">
            <div className="bg-white dark:bg-tech-gray max-w-3xl w-full max-h-[90vh] overflow-auto rounded-lg shadow-xl animate-scale-in">
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-2xl font-bold text-tech-blue">{selectedProject.title}</h3>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close details"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              
              <div className="p-6">
                <div className="h-64 overflow-hidden mb-6 rounded-lg">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Description</h4>
                  <p>{selectedProject.description}</p>
                </div>
                
                {selectedProject.details && (
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold mb-2">Details</h4>
                    <p>{selectedProject.details}</p>
                  </div>
                )}
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                </div>
                
                {selectedProject.link !== "#" && (
                  <Button asChild className="bg-tech-blue hover:bg-tech-darkBlue">
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center gap-2"
                    >
                      View Project <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsSection;
