
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "1 Portfolio",
        "Basic Templates",
        "Limited Customization",
        "Community Support"
      ],
      popular: false
    },
    {
      name: "Pro",
      price: "₹299",
      period: "per month",
      description: "Best for professionals",
      features: [
        "Unlimited Portfolios",
        "Premium Templates",
        "Advanced Customization",
        "AI Optimization",
        "Priority Support",
        "Custom Domain"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₹999",
      period: "per month",
      description: "For teams and organizations",
      features: [
        "Everything in Pro",
        "Team Collaboration",
        "Advanced Analytics",
        "White Label Solution",
        "Dedicated Support",
        "API Access"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            Choose the plan that's right for you. All plans include our core features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover-lift transition-all duration-300 ${
                plan.popular 
                  ? 'border-2 border-brand-500 dark:border-brand-400 shadow-xl scale-105 bg-white dark:bg-gray-900' 
                  : 'border border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-900'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-primary text-white px-4 py-2 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                  {plan.name}
                </CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400 ml-2 transition-colors duration-300">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-primary text-white hover:opacity-90'
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                  }`}
                  size="lg"
                >
                  {plan.name === 'Free' ? 'Get Started' : 'Choose Plan'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
