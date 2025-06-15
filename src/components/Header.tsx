
import React from 'react';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold gradient-text">
              Portfolios.tech
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#professionals" className="text-gray-600 hover:text-brand-600 transition-colors">
                For Professionals
              </a>
              <a href="#employers" className="text-gray-600 hover:text-brand-600 transition-colors">
                For Employers
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-brand-600 transition-colors">
                Pricing
              </a>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
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
