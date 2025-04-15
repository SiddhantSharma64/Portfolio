
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Github, Linkedin, Mail, Send, ArrowRight, Check } from 'lucide-react';

const ContactSection: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = (fieldName: string) => {
    setFocusedField(fieldName);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      url: "https://www.linkedin.com/in/siddhant--sharma",
      color: "#0077B5",
      username: "siddhant--sharma"
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      url: "https://github.com/SiddhantSharma64",
      color: "#333",
      username: "SiddhantSharma64"
    },
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      url: "mailto:siddhantsharma6403@gmail.com",
      color: "#ea4335",
      username: "siddhantsharma6403@gmail.com"
    }
  ];

  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-white dark:bg-tech-gray">
      {/* Neural network background patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 dark:opacity-10 pointer-events-none z-0 neural-network-grid"></div>
      
      {/* Animated blobs */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-tech-blue/10 dark:bg-tech-blue/20 rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-40 -left-40 w-96 h-96 bg-tech-neonBlue/10 dark:bg-tech-neonBlue/20 rounded-full filter blur-3xl animate-blob animation-delay-4000"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block text-tech-blue text-sm font-semibold tracking-wide uppercase mb-2 ai-badge px-3 py-1 rounded-full">Connect With Me</span>
          <h2 className="section-title mb-3">Get In Touch</h2>
          <p className="max-w-xl mx-auto text-gray-600 dark:text-gray-300 leading-relaxed">Let's collaborate on innovative AI solutions or discuss the latest trends in machine learning and neural networks.</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white/50 dark:bg-tech-gray/50 backdrop-blur-md rounded-xl p-4 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-xl">
          <div className="transform hover:scale-[1.01] transition-transform duration-500">
            <div className="space-y-6 animate-fade-in">
            <h3 className="text-2xl font-semibold text-tech-darkBlue dark:text-white">Let's Connect</h3>
            <p className="text-gray-600 dark:text-gray-300">
              I'm always open to new opportunities, collaborations, or just a friendly chat about technology and AI.
              Feel free to reach out through the form or connect with me on social media.
            </p>
            
            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4 text-tech-darkBlue dark:text-white flex items-center">
                <span className="inline-block w-8 h-8 bg-tech-blue/10 rounded-full flex items-center justify-center mr-2">                                 
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-tech-blue"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                </span>
                Connect with me on:
              </h4>
              <div className="flex flex-col space-y-4">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-tech-darkGray/70 transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-tech-blue/30 dark:hover:border-tech-blue/30 hover:shadow-md"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <div 
                      className="p-3 rounded-full mr-4 text-white transition-all group-hover:scale-110 group-hover:rotate-3 duration-300 shadow-md" 
                      style={{ backgroundColor: link.color }}
                    >
                      {link.icon}
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium group-hover:text-tech-blue transition-colors duration-300">{link.name}</h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm">{link.username}</p>
                    </div>
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-2 transition-all duration-300 transform group-hover:bg-tech-blue/10 group-hover:scale-110">
                      <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-tech-blue transform translate-x-0 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
            
            <Card className="p-6 mt-10 border-none bg-gradient-to-br from-tech-blue/5 to-tech-neonBlue/5 dark:from-tech-blue/10 dark:to-tech-neonBlue/10 shadow-lg hover:shadow-xl transition-all duration-500 overflow-hidden relative rounded-xl">
              <div className="absolute right-0 top-0 w-32 h-32 bg-tech-blue/10 rounded-full blur-2xl -mr-10 -mt-10 opacity-70"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-tech-blue/90 flex items-center justify-center text-white mr-3 shadow-md">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><path d="M16 13H8"></path><path d="M16 17H8"></path><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  <h4 className="font-semibold text-lg text-tech-darkBlue dark:text-white">Looking for a dedicated AI engineer?</h4>
                </div>
                
                <div className="pl-12 mb-6">
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I'm currently exploring exciting opportunities in AI/ML projects, focusing on computer vision, NLP, and generative AI implementations.
                  </p>
                </div>
                
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <span className="inline-block w-3 h-3 rounded-full bg-green-500"></span>
                    <span className="text-sm text-gray-600 dark:text-gray-300">Available for new opportunities</span>
                  </div>
                  
                  <Button asChild className="bg-tech-blue hover:bg-tech-darkBlue group shadow-lg hover:shadow-tech-blue/20 transition-all duration-300 transform hover:translate-y-[-2px]">
                    <a href="/siddhant_sharma_resume.pdf" download="Siddhant_Sharma_Resume.pdf" className="flex items-center justify-center">
                      <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4V16M12 16L8 12M12 16L16 12M6 20H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <Card className="p-8 shadow-lg border-none overflow-hidden relative rounded-xl bg-gradient-to-br from-white to-gray-50 dark:from-tech-gray dark:to-tech-darkGray/95">
              <div className="absolute top-0 right-0 w-40 h-40 bg-tech-blue/10 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-tech-neonBlue/10 rounded-full blur-3xl -z-10"></div>
              
              <div className="mb-6 flex items-center">
                <div className="w-10 h-10 rounded-full bg-tech-blue flex items-center justify-center text-white mr-3 shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2H2v20h20V2ZM2 10h20M12 2v20"></path></svg>
                </div>
                <h3 className="text-xl font-semibold text-tech-darkBlue dark:text-white">Send Me a Message</h3>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="relative">
                  <label 
                    htmlFor="name" 
                    className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                      focusedField === 'name' || formData.name 
                        ? 'text-xs text-tech-blue -top-2 bg-white dark:bg-tech-darkGray px-1' 
                        : 'text-gray-500 top-3'
                    }`}
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    onFocus={() => handleFocus('name')}
                    onBlur={handleBlur}
                    required
                    className={`w-full pt-3 transition-all border ${
                      focusedField === 'name' ? 'border-tech-blue ring-1 ring-tech-blue/20' : 'border-gray-300'
                    }`}
                  />
                </div>
                
                <div className="relative">
                  <label 
                    htmlFor="email" 
                    className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                      focusedField === 'email' || formData.email 
                        ? 'text-xs text-tech-blue -top-2 bg-white dark:bg-tech-darkGray px-1' 
                        : 'text-gray-500 top-3'
                    }`}
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    onFocus={() => handleFocus('email')}
                    onBlur={handleBlur}
                    required
                    className={`w-full pt-3 transition-all border ${
                      focusedField === 'email' ? 'border-tech-blue ring-1 ring-tech-blue/20' : 'border-gray-300'
                    }`}
                  />
                </div>
                
                <div className="relative">
                  <label 
                    htmlFor="message" 
                    className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                      focusedField === 'message' || formData.message 
                        ? 'text-xs text-tech-blue -top-2 bg-white dark:bg-tech-darkGray px-1' 
                        : 'text-gray-500 top-3'
                    }`}
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => handleFocus('message')}
                    onBlur={handleBlur}
                    required
                    rows={5}
                    className={`w-full pt-3 transition-all border ${
                      focusedField === 'message' ? 'border-tech-blue ring-1 ring-tech-blue/20' : 'border-gray-300'
                    }`}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-tech-blue hover:bg-tech-darkBlue transition-all duration-300 flex items-center justify-center h-12 mt-4 shadow-lg hover:shadow-tech-blue/30 transform hover:translate-y-[-2px] group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 group-hover:translate-x-1 transition-transform"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                      Submit Message
                    </span>
                  )}
                </Button>
                
                {!isSubmitting && (
                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-4 opacity-80">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1"><circle cx="12" cy="12" r="10"></circle><path d="m16 10-4 4-4-4"></path></svg>
                    I typically respond within 24-48 hours
                  </p>
                )}
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
