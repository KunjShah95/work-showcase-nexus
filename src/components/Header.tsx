
import React from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hero')}
              className="text-2xl font-bold gradient-text hover:opacity-80 transition-opacity"
            >
              Portfolios.tech
            </button>
            <div className="hidden md:flex items-center space-x-6">
              <button 
                onClick={() => scrollToSection('professionals')}
                className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                For Professionals
              </button>
              <button 
                onClick={() => scrollToSection('employers')}
                className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                For Employers
              </button>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="text-gray-600 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
              >
                Pricing
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Sun className="h-4 w-4 text-gray-600 dark:text-gray-300" />
              <Switch
                checked={isDarkMode}
                onCheckedChange={toggleDarkMode}
                className="data-[state=checked]:bg-brand-600"
              />
              <Moon className="h-4 w-4 text-gray-600 dark:text-gray-300" />
            </div>
            <Button variant="ghost" className="hidden sm:inline-flex dark:text-gray-300 dark:hover:text-white">
              Login
            </Button>
            <Button className="bg-gradient-primary text-white hover:opacity-90">
              Sign Up
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
