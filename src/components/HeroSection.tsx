
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-br from-brand-50 via-purple-50 to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden transition-colors duration-300">
      <div className="absolute inset-0 bg-gradient-to-r from-brand-600/5 to-purple-600/5 dark:from-brand-400/10 dark:to-purple-400/10"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-gray-900 dark:text-white transition-colors duration-300">
            Beyond Resumes - 
            <span className="gradient-text block">
              Showcase Your Work, Not Just Words
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto transition-colors duration-300">
            Create AI-optimized portfolios that help you stand out with interactive work samples 
            and get discovered by top employers.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-primary text-white px-8 py-4 text-lg hover:opacity-90 hover-lift transition-all duration-200"
            >
              Build Your Free Portfolio
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="px-8 py-4 text-lg border-2 border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white dark:border-brand-400 dark:text-brand-400 dark:hover:bg-brand-400 dark:hover:text-gray-900 transition-all duration-200"
            >
              Find Talent
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-brand-400 dark:bg-brand-500 rounded-full opacity-20 animate-pulse transition-colors duration-300"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-purple-400 dark:bg-purple-500 rounded-full opacity-20 animate-pulse delay-1000 transition-colors duration-300"></div>
    </section>
  );
};

export default HeroSection;
