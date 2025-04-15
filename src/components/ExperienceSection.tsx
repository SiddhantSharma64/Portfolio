
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Award } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
}

interface Certification {
  name: string;
  provider: string;
  icon: string;
}

const ExperienceSection: React.FC = () => {
  const experiences: Experience[] = [
    {
      title: "Data Science Intern",
      company: "Prodigy Infotech",
      period: "May 2024 - June 2024",
      description: "Developed 5 beginner-to-intermediate level data science projects using Python and machine learning techniques."
    }
  ];

  const certifications: Certification[] = [
    {
      name: "Internet of Things",
      provider: "Fice",
      icon: "🌐"
    },
    {
      name: "Machine Learning",
      provider: "Fice",
      icon: "🤖"
    },
    {
      name: "Generative AI",
      provider: "Google",
      icon: "🧠"
    },
    {
      name: "Networking",
      provider: "Cisco",
      icon: "🔌"
    },
    {
      name: "Python Certification",
      provider: "HackerRank",
      icon: "🐍"
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-tech-darkGray">
      <div className="container mx-auto">
        <h2 className="section-title mb-10">Experience & Certifications</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase className="mr-2 text-tech-blue" /> Work Experience
            </h3>
            
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="mb-6 animate-fade-in shadow-md border-l-4 border-l-tech-blue"
              >
                <CardHeader>
                  <CardTitle>{exp.title}</CardTitle>
                  <CardDescription className="text-base">
                    <span className="font-medium">{exp.company}</span> • {exp.period}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{exp.description}</p>
                </CardContent>
              </Card>
            ))}
            
            {experiences.length === 0 && (
              <p className="text-gray-500 italic">Currently seeking internship opportunities.</p>
            )}
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Award className="mr-2 text-tech-blue" /> Certifications
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index} 
                  className="animate-scale-in hover:shadow-lg transition-shadow flex"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-tech-blue/10 flex items-center justify-center w-16 text-2xl">
                    {cert.icon}
                  </div>
                  <div className="p-4">
                    <h4 className="font-semibold">{cert.name}</h4>
                    <p className="text-sm text-gray-500">{cert.provider}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
