
import React, { useState } from 'react';
import { Download, ChevronDown, ChevronUp, BookOpen, Briefcase, GraduationCap, Code, User } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { Badge } from '@/components/ui/badge';

interface ResumeSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

const InteractiveResume: React.FC = () => {
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({
    personal: false,
    education: false,
    experience: false,
    skills: false,
  });

  const toggleSection = (id: string) => {
    setOpenSections(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const resumeSections: ResumeSection[] = [
    {
      id: 'personal',
      title: 'Personal Information',
      icon: <User className="h-5 w-5 text-tech-blue" />,
      content: (
        <div className="space-y-2">
          <p><span className="font-medium">Name:</span> Siddhant Sharma</p>
          <p><span className="font-medium">Location:</span> OP Jindal University</p>
          <p><span className="font-medium">Email:</span> siddhant.sharma@example.com</p>
          <p><span className="font-medium">Expected Graduation:</span> 2026</p>
        </div>
      )
    },
    {
      id: 'education',
      title: 'Education',
      icon: <GraduationCap className="h-5 w-5 text-tech-blue" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg">B.Tech in Computer Science and Engineering</h4>
            <p>OP Jindal University</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">2022 - 2026 (Expected)</p>
          </div>
        </div>
      )
    },
    {
      id: 'experience',
      title: 'Experience',
      icon: <Briefcase className="h-5 w-5 text-tech-blue" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-lg">Data Science Intern</h4>
            <p>Prodigy Infotech</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">May 2024 - June 2024</p>
            <p className="mt-2">Developed 5 beginner-to-intermediate level data science projects using Python and machine learning techniques.</p>
          </div>
        </div>
      )
    },
    {
      id: 'skills',
      title: 'Skills',
      icon: <Code className="h-5 w-5 text-tech-blue" />,
      content: (
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Programming Languages</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>Java</Badge>
              <Badge>C++</Badge>
              <Badge>Python</Badge>
              <Badge>MySQL</Badge>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Technical Skills</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>Flask</Badge>
              <Badge>Machine Learning</Badge>
              <Badge>Deep Learning</Badge>
              <Badge>Computer Vision</Badge>
              <Badge>NLP</Badge>
              <Badge>AWS</Badge>
              <Badge>Docker</Badge>
              <Badge>FastAPI</Badge>
              <Badge>PyTorch</Badge>
              <Badge>TensorFlow</Badge>
              <Badge>Scikit-learn</Badge>
              <Badge>Linux</Badge>
              <Badge>NumPy</Badge>
              <Badge>Pandas</Badge>
              <Badge>Tableau</Badge>
              <Badge>Big Data</Badge>
              <Badge>Networking</Badge>
              <Badge>Gen AI</Badge>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Areas of Interest</h4>
            <div className="flex flex-wrap gap-2">
              <Badge>Artificial Intelligence</Badge>
              <Badge>Competitive Programming</Badge>
              <Badge>Software Design/Development</Badge>
            </div>
          </div>
        </div>
      )
    },
  ];

  return (
    <div className="space-y-6 bg-white dark:bg-tech-darkGray p-6 rounded-lg shadow-lg animate-fade-in">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-heading font-bold flex items-center">
          <BookOpen className="mr-2 text-tech-blue" />
          Interactive Resume
        </h3>
        <Button asChild className="bg-tech-blue hover:bg-tech-darkBlue">
          <a href="/siddhant_sharma_resume.pdf" download="Siddhant_Sharma_Resume.pdf" className="flex items-center gap-2">
            Download PDF <Download size={16} />
          </a>
        </Button>
      </div>
      
      <div className="space-y-3">
        {resumeSections.map(section => (
          <Collapsible
            key={section.id}
            open={openSections[section.id]}
            onOpenChange={() => toggleSection(section.id)}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
          >
            <CollapsibleTrigger className="w-full flex items-center justify-between p-4 text-left focus:outline-none">
              <div className="flex items-center space-x-2">
                {section.icon}
                <h4 className="text-lg font-medium">{section.title}</h4>
              </div>
              {openSections[section.id] ? 
                <ChevronUp className="h-4 w-4 text-gray-500" /> : 
                <ChevronDown className="h-4 w-4 text-gray-500" />
              }
            </CollapsibleTrigger>
            <CollapsibleContent className="p-4 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-tech-gray animate-accordion-down">
              {section.content}
            </CollapsibleContent>
          </Collapsible>
        ))}
      </div>
    </div>
  );
};

export default InteractiveResume;
