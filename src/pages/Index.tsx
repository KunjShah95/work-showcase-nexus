
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import ValuePropositionSection from '@/components/ValuePropositionSection';
import AIFeaturesSection from '@/components/AIFeaturesSection';
import PortfolioExamples from '@/components/PortfolioExamples';
import EmployersSection from '@/components/EmployersSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ValuePropositionSection />
      <AIFeaturesSection />
      <PortfolioExamples />
      <EmployersSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
