
import React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for students and beginners",
      features: [
        "1 Portfolio",
        "Basic Templates",
        "AI Health Check (Limited)",
        "Community Support",
        "Basic Analytics"
      ],
      cta: "Get Started Free",
      popular: false
    },
    {
      name: "Professional",
      price: "₹499",
      period: "per month",
      description: "For serious professionals",
      features: [
        "5 Portfolios",
        "Premium Templates",
        "Unlimited AI Optimization",
        "Priority Support",
        "Advanced Analytics",
        "Custom Domain",
        "Employer Visibility Boost"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Team",
      price: "₹1,999",
      period: "per month",
      description: "For agencies and teams",
      features: [
        "25 Portfolios",
        "All Premium Features",
        "Team Collaboration",
        "White-label Options",
        "Dedicated Support",
        "API Access",
        "Custom Integrations"
      ],
      cta: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 dark:text-white">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Choose the perfect plan for your career growth. All plans include our core features.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative hover-lift ${
                plan.popular 
                  ? 'border-brand-500 shadow-xl scale-105 dark:border-brand-400' 
                  : 'border-gray-200 dark:border-gray-700'
              } bg-white dark:bg-gray-800`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-primary text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8">
                <h3 className="text-2xl font-bold mb-2 dark:text-white">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-brand-600 dark:text-brand-400">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 ml-2">
                    {plan.period}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300">{plan.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-primary text-white hover:opacity-90' 
                      : 'border border-brand-500 text-brand-600 hover:bg-brand-50 dark:text-brand-400 dark:hover:bg-brand-900/20'
                  }`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            All plans include 14-day free trial • No setup fees • Cancel anytime
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Need a custom solution? <a href="#" className="text-brand-600 dark:text-brand-400 hover:underline">Contact our sales team</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
