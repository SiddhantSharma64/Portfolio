
import React from 'react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-tech-gray">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-lg mb-6">
              I'm a Computer Science student at OP Jindal University, passionate about artificial intelligence and machine learning. 
              With a strong foundation in programming and advanced technologies, I aim to build innovative solutions that make an impact.
            </p>
            <p className="text-lg mb-6">
              Currently pursuing my B.Tech (expected 2026), I enjoy exploring AI, competitive programming, and software development. 
              My goal is to leverage AI technologies to create applications that solve real-world problems efficiently.
            </p>
            <p className="text-lg">
              When I'm not coding or experimenting with machine learning algorithms, I enjoy participating in hackathons, 
              contributing to open-source projects, and staying updated with the latest advancements in AI research.
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg animate-scale-in">
            <div className="relative">
              <div className="bg-gradient-to-br from-tech-blue to-tech-darkBlue p-6 text-white">
                <h3 className="text-2xl font-bold mb-4">Education</h3>
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">B.Tech in Computer Science & Engineering</h4>
                  <p>OP Jindal University</p>
                  <p className="text-sm opacity-80">2022 - 2026 (Expected)</p>
                </div>
                
                <h3 className="text-2xl font-bold mt-6 mb-4">Career Objective</h3>
                <p>
                  To secure a challenging position where I can effectively contribute my skills as a Software 
                  Professional, possessing competent technical skills and a passion for learning new technologies.
                </p>
              </div>
              
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-8 border-white dark:border-tech-gray rounded-lg transform rotate-12 bg-tech-lightBlue"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
