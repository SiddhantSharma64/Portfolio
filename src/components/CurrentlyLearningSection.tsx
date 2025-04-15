
import React from 'react';
import { BookOpen, TrendingUp, AlertCircle } from 'lucide-react';
import { Progress } from "@/components/ui/progress";

interface LearningItem {
  name: string;
  progress: number;
  description: string;
  goal: string;
}

const CurrentlyLearningSection: React.FC = () => {
  const learningItems: LearningItem[] = [
    {
      name: "Large Language Models",
      progress: 35,
      description: "Developing advanced prompt engineering techniques and fine-tuning foundation models to create specialized AI solutions",
      goal: "To create AI solutions that address unsolved human needs and make life easier through natural language interfaces"
    }
  ];

  return (
    <section id="learning" className="section-padding bg-gradient-to-br from-tech-lightGray to-white dark:from-tech-darkGray dark:to-tech-gray">
      <div className="container mx-auto">
        <h2 className="section-title">Currently Learning</h2>
        
        <div className="grid grid-cols-1 gap-6 max-w-3xl mx-auto">
          {learningItems.map((item, index) => (
            <div 
              key={index}
              className="glass-effect p-6 rounded-xl shadow-lg hover:shadow-tech-blue/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center mb-4">
                <BookOpen className="text-tech-blue h-5 w-5 mr-2" />
                <h3 className="text-xl font-semibold">{item.name}</h3>
              </div>
              
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Learning to use and customize AI language models for practical applications
              </p>
              
              <div className="mb-2">
                <div className="flex justify-between text-sm mb-1">
                  <span>Progress</span>
                  <span>{item.progress}%</span>
                </div>
                <Progress value={item.progress} className="h-2 bg-gray-200 dark:bg-gray-700">
                  <div 
                    className="h-full bg-gradient-to-r from-tech-blue to-tech-neonBlue rounded-full"
                    style={{ width: `${item.progress}%` }}
                  />
                </Progress>
              </div>
              
              <div className="flex items-start mt-4 text-sm">
                <TrendingUp className="text-green-500 h-4 w-4 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">Goal: {item.goal}</span>
              </div>
              
              <div className="flex items-start mt-2 text-sm">
                <AlertCircle className="text-amber-500 h-4 w-4 mr-2 mt-0.5" />
                <span className="text-gray-600 dark:text-gray-300">
                  {item.progress < 50 ? "Early stages" : (item.progress < 80 ? "Making good progress" : "Advanced learning")}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CurrentlyLearningSection;
