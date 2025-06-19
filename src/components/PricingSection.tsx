
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, X } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        { name: "1 Portfolio", included: true },
        { name: "Basic Templates", included: true },
        { name: "Limited Customization", included: true },
        { name: "Community Support", included: true },
        { name: "Custom Domain", included: false },
        { name: "Advanced Analytics", included: false },
        { name: "Priority Support", included: false }
      ],
      popular: false,
      buttonText: "Get Started"
    },
    {
      name: "Pro",
      price: "₹299",
      period: "per month",
      description: "Best for professionals",
      features: [
        { name: "Unlimited Portfolios", included: true },
        { name: "Premium Templates", included: true },
        { name: "Advanced Customization", included: true },
        { name: "AI Optimization", included: true },
        { name: "Priority Support", included: true },
        { name: "Custom Domain", included: true },
        { name: "Advanced Analytics", included: true }
      ],
      popular: true,
      buttonText: "Choose Plan"
    },
    {
      name: "Enterprise",
      price: null,
      period: "",
      description: "For teams and organizations",
      features: [
        { name: "Everything in Pro", included: true },
        { name: "Team Collaboration", included: true },
        { name: "Advanced Analytics", included: true },
        { name: "White Label Solution", included: true },
        { name: "Dedicated Support", included: true },
        { name: "API Access", included: true },
        { name: "Custom Integrations", included: true }
      ],
      popular: false,
      buttonText: "Contact Us"
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
            Choose the plan that's right for you. Upgrade or downgrade at any time.
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
                  {plan.price ? (
                    <>
                      <span className="text-4xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                        {plan.price}
                      </span>
                      <span className="text-gray-600 dark:text-gray-400 ml-2 transition-colors duration-300">
                        {plan.period}
                      </span>
                    </>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900 dark:text-white transition-colors duration-300">
                      Custom Pricing
                    </span>
                  )}
                </div>
                <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors duration-300">
                  {plan.description}
                </p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      {feature.included ? (
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      ) : (
                        <X className="h-5 w-5 text-gray-400 mr-3 flex-shrink-0" />
                      )}
                      <span className={`transition-colors duration-300 ${
                        feature.included 
                          ? 'text-gray-700 dark:text-gray-300' 
                          : 'text-gray-400 dark:text-gray-500 line-through'
                      }`}>
                        {feature.name}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full mt-6 transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-primary text-white hover:opacity-90'
                      : plan.name === 'Enterprise'
                      ? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                      : 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100'
                  }`}
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            All plans include SSL certificate, 99.9% uptime guarantee, and 24/7 support
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-500">
            No setup fees • Cancel anytime • 30-day money-back guarantee
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
