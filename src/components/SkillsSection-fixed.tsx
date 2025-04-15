import React, { useState, useEffect } from 'react';
import { Badge } from "@/components/ui/badge";
import { 
  RadarChart, 
  PolarGrid, 
  PolarAngleAxis, 
  PolarRadiusAxis, 
  Radar, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

interface SkillCategory {
  title: string;
  skills: string[];
}

interface SkillData {
  subject: string;
  A: number;
  fullMark: number;
  experience?: string;
}

const SkillsSection: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<string | null>(null);
  const [activeDataIndex, setActiveDataIndex] = useState<number | null>(null);
  
  const skillCategories: SkillCategory[] = [
    {
      title: "Programming Languages",
      skills: ["Java", "C++", "Python", "MySQL"]
    },
    {
      title: "Frameworks & Libraries",
      skills: ["Flask", "FastAPI", "PyTorch", "TensorFlow", "Scikit-learn", "NumPy", "Pandas"]
    },
    {
      title: "AI & Data Science",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Big Data", "Gen AI"]
    },
    {
      title: "Tools & Technologies",
      skills: ["AWS", "Docker", "Linux", "Tableau", "Networking", "Git", "CUDA"]
    }
  ];
  
  // Proficiency data for radar chart with enhanced information
  const radarData: SkillData[] = [
    { subject: 'Python', A: 90, fullMark: 100, experience: '4+ years' },
    { subject: 'Machine Learning', A: 85, fullMark: 100, experience: '3+ years' },
    { subject: 'Deep Learning', A: 80, fullMark: 100, experience: '2+ years' },
    { subject: 'TensorFlow', A: 75, fullMark: 100, experience: '2+ years' },
    { subject: 'PyTorch', A: 70, fullMark: 100, experience: '1+ years' },
    { subject: 'Computer Vision', A: 85, fullMark: 100, experience: '3+ years' },
    { subject: 'NLP', A: 75, fullMark: 100, experience: '2+ years' },
  ];
  
  // Map skills to projects for the interactive visualization
  const skillToProject: Record<string, string[]> = {
    "Python": ["Custom Video Broadcaster", "Resume Parsing & Recommendation System"],
    "Machine Learning": ["Resume Parsing & Recommendation System", "US Visa Approval Prediction"],
    "Deep Learning": ["Covid-19 Detection System", "Custom Video Broadcaster"],
    "TensorFlow": ["Covid-19 Detection System"],
    "PyTorch": ["Custom Video Broadcaster"],
    "Computer Vision": ["Custom Video Broadcaster", "Covid-19 Detection System"],
    "NLP": ["Resume Parsing & Recommendation System"],
    "AWS": ["US Visa Approval Prediction"],
    "Docker": ["US Visa Approval Prediction"],
    "FastAPI": ["Custom Video Broadcaster", "US Visa Approval Prediction"],
    "Flask": ["Resume Parsing & Recommendation System"],
    "CUDA": ["Custom Video Broadcaster"]
  };

  // Custom tooltip component that doesn't call setState during render
  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const skill = payload[0].payload.subject;
      const value = payload[0].value;
      const experience = payload[0].payload.experience;
      const relatedProjects = skillToProject[skill] || [];
      
      return (
        <div className="bg-white/95 dark:bg-tech-gray/95 backdrop-blur-md p-5 rounded-lg shadow-xl border border-tech-blue/30 dark:border-tech-blue/40 transition-all duration-300 transform scale-100 hover:scale-102">
          <div className="flex items-center gap-2 mb-2 border-b border-tech-blue/10 pb-2">
            <div className="w-8 h-8 rounded-full bg-tech-blue/90 dark:bg-tech-blue flex items-center justify-center text-white shadow-md pulse-animation">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m12 14 4-4"/><path d="M3.34 19a10 10 0 1 1 17.32 0"/>
              </svg>
            </div>
            <p className="font-bold text-tech-darkBlue dark:text-white text-xl tracking-tight">{skill}</p>
          </div>
          
          <div className="flex items-center gap-2 mb-2">
            <span className="text-tech-blue font-medium">Proficiency:</span>
            <span className="text-tech-darkBlue dark:text-white font-bold">{value}%</span>
          </div>
          
          {experience && (
            <div className="flex items-center gap-2 mb-2">
              <span className="text-tech-blue font-medium">Experience:</span>
              <span className="text-tech-darkBlue dark:text-white">{experience}</span>
            </div>
          )}
          
          {relatedProjects.length > 0 && (
            <div className="mt-3 pt-2 border-t border-tech-blue/10">
              <p className="font-medium text-tech-blue mb-1">Related Projects:</p>
              <ul className="list-disc pl-5 space-y-1">
                {relatedProjects.map((project, i) => (
                  <li key={i} className="text-tech-darkBlue dark:text-gray-200">{project}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  // Effect for handling data point interactions properly
  useEffect(() => {
    // This will safely update the state outside of render
    const handleDataPoint = (index: number | null) => {
      setActiveDataIndex(index);
    };

    // Any cleanup can go here
    return () => {
      // Cleanup if needed
    };
  }, []);

  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-tech-darkGray neural-pattern">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        
        <Tabs defaultValue="visual" className="w-full">
          <TabsList className="flex w-full max-w-md mx-auto mb-8 p-1.5 bg-white/80 dark:bg-tech-gray/80 backdrop-blur-md rounded-lg border border-tech-blue/20 shadow-md overflow-hidden">
            <TabsTrigger 
              value="visual" 
              className="flex-1 text-lg px-6 py-3 font-medium rounded-md transition-all duration-300 data-[state=active]:bg-tech-blue data-[state=active]:text-white data-[state=active]:shadow-md relative group"
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-data-[state=active]:animate-pulse"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
                Visual
              </span>
              <span className="absolute inset-0 bg-tech-blue/10 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-0 transition-opacity"></span>
            </TabsTrigger>
            
            <TabsTrigger 
              value="categories" 
              className="flex-1 text-lg px-6 py-3 font-medium rounded-md transition-all duration-300 data-[state=active]:bg-tech-blue data-[state=active]:text-white data-[state=active]:shadow-md relative group"
            >
              <span className="flex items-center justify-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-data-[state=active]:animate-pulse"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>
                Categories
              </span>
              <span className="absolute inset-0 bg-tech-blue/10 opacity-0 group-hover:opacity-100 group-data-[state=active]:opacity-0 transition-opacity"></span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="visual" className="mt-4">
            <div className="bg-white dark:bg-tech-gray p-6 rounded-lg shadow-md mb-8">
              <h3 className="text-xl font-semibold mb-4 text-tech-blue">Skill Proficiency</h3>
              <div className="w-full h-80 md:h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                    <PolarGrid stroke="#8884d8" strokeDasharray="3 3" />
                    <PolarAngleAxis 
                      dataKey="subject" 
                      tick={{ fill: '#555', fontSize: 12 }}
                      stroke="#8884d8"
                    />
                    <PolarRadiusAxis 
                      angle={30} 
                      domain={[0, 100]} 
                      tick={{ fill: '#666' }}
                      stroke="#8884d8"
                    />
                    <Radar 
                      name="Skills" 
                      dataKey="A" 
                      stroke="#3B82F6" 
                      fill="#3B82F6" 
                      fillOpacity={0.5}
                      dot
                      onMouseOver={(data, index) => {
                        if (activeDataIndex !== index) {
                          setActiveDataIndex(index);
                        }
                      }}
                      onMouseLeave={() => setActiveDataIndex(null)}
                      activeDot={{
                        r: 6,
                        fill: '#3B82F6',
                        stroke: 'white',
                        strokeWidth: 2,
                        className: 'active-radar-dot-pulse'
                      }}
                    />
                    <Tooltip content={<CustomTooltip />} />
                  </RadarChart>
                </ResponsiveContainer>
              </div>
            </div>
                        
            <div className="bg-white dark:bg-tech-gray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-tech-blue">Skill Cloud</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillCategories.flatMap(category => category.skills).map((skill, index) => {
                  // Generate varying sizes based on "expertise"
                  const isSelected = skill === selectedSkill;
                  const fontSize = Math.floor(Math.random() * 3) + 1; // 1, 2, or 3
                  
                  return (
                    <Button
                      key={skill}
                      variant={isSelected ? "default" : "outline"}
                      className={`transition-all duration-300 ${isSelected ? 'bg-tech-blue text-white' : ''} 
                      ${fontSize === 3 ? 'text-lg' : fontSize === 2 ? 'text-base' : 'text-sm'}`}
                      onClick={() => setSelectedSkill(isSelected ? null : skill)}
                    >
                      {skill}
                    </Button>
                  );
                })}
              </div>
              
              {selectedSkill && skillToProject[selectedSkill] && (
                <div className="mt-6 p-4 border rounded-lg border-tech-blue/30 bg-tech-lightGray/50 dark:bg-tech-darkGray/50 animate-fade-in">
                  <h4 className="font-semibold text-tech-blue mb-2">Projects using {selectedSkill}:</h4>
                  <ul className="list-disc ml-5">
                    {skillToProject[selectedSkill].map((project, i) => (
                      <li key={i}>{project}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="categories">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title} 
                  className="bg-white dark:bg-tech-gray p-6 rounded-lg shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <h3 className="text-xl font-semibold mb-4 text-tech-blue">{category.title}</h3>
                  <div className="flex flex-wrap">
                    {category.skills.map(skill => (
                      <div 
                        key={skill} 
                        className="group relative m-1"
                      >
                        <Badge 
                          className="skill-tag group-hover:bg-tech-blue group-hover:text-white transition-all duration-300"
                        >
                          {skill}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white dark:bg-tech-gray p-6 rounded-lg shadow-md animate-scale-in">
              <h3 className="text-xl font-semibold mb-4 text-tech-blue">Areas of Interest</h3>
              <div className="flex flex-wrap justify-center">
                {["Artificial Intelligence", "Machine Learning", "Competitive Programming", "Software Design/Development", "Computer Vision", "Natural Language Processing"].map(interest => (
                  <div key={interest} className="m-2">
                    <Badge variant="outline" className="px-4 py-2 text-base border-tech-blue text-tech-darkBlue dark:text-white hover:bg-tech-blue hover:text-white transition-colors">
                      {interest}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default SkillsSection;
