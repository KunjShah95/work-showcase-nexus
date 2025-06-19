
import React from 'react';
import Header from '@/components/Header';
import EmployersSection from '@/components/EmployersSection';
import PricingSection from '@/components/PricingSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <EmployersSection />
      <PricingSection />
      <Footer />
    </div>
  );
};

export default Index;
