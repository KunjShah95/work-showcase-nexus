
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Wand2, Code, Search } from 'lucide-react';

const ValuePropositionSection = () => {
  const features = [
    {
      icon: Wand2,
      title: "AI-Optimized Portfolios",
      description: "Our AI analyzes your portfolio and provides personalized recommendations to increase your visibility and impact with recruiters."
    },
    {
      icon: Code,
      title: "Stand Out with Interactive Work",
      description: "Showcase live demos, interactive prototypes, and multimedia projects that tell your story better than static resumes ever could."
    },
    {
      icon: Search,
      title: "Get Discovered by Top Employers",
      description: "Our smart matching algorithm connects you with opportunities that align with your skills, experience, and career goals."
    }
  ];

  return (
    <section id="professionals" className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
            Why Choose <span className="gradient-text">Portfolios.tech</span>?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Traditional resumes only tell part of your story. Show employers what you can actually do.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="hover-lift border-none shadow-lg bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-750 relative overflow-hidden transition-all duration-300"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto animate-pulse-glow">
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed transition-colors duration-300">
                  {feature.description}
                </p>
              </CardContent>
              
              {/* Decorative gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-500/5 to-purple-500/5 dark:from-brand-400/10 dark:to-purple-400/10 pointer-events-none transition-colors duration-300"></div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuePropositionSection;
