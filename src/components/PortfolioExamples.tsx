
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const PortfolioExamples = () => {
  const [hoveredPortfolio, setHoveredPortfolio] = useState(null);

  const portfolios = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Frontend Developer",
      tags: ["React", "TypeScript", "UI/UX"],
      preview: "Interactive e-commerce dashboard with real-time analytics",
      metrics: "Increased conversion by 23%",
      color: "from-blue-400 to-purple-500"
    },
    {
      id: 2,
      name: "Marcus Johnson",
      role: "UX Designer",
      tags: ["Figma", "Prototyping", "Research"],
      preview: "Mobile app redesign case study with user journey mapping",
      metrics: "Improved user satisfaction by 40%",
      color: "from-green-400 to-blue-500"
    },
    {
      id: 3,
      name: "Priya Patel",
      role: "Digital Marketer",
      tags: ["Analytics", "SEO", "Content"],
      preview: "Growth hacking campaign with interactive ROI calculator",
      metrics: "Generated 150% increase in leads",
      color: "from-pink-400 to-red-500"
    },
    {
      id: 4,
      name: "Alex Rivera",
      role: "Full Stack Engineer",
      tags: ["Node.js", "Python", "AWS"],
      preview: "Scalable microservices architecture with live monitoring",
      metrics: "Reduced server costs by 35%",
      color: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
            Real Portfolios, <span className="gradient-text">Real Results</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            See how professionals across different fields showcase their work and achievements.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {portfolios.map((portfolio) => (
            <Card
              key={portfolio.id}
              className="group cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-none overflow-hidden bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
              onMouseEnter={() => setHoveredPortfolio(portfolio.id)}
              onMouseLeave={() => setHoveredPortfolio(null)}
            >
              <div className={`h-32 bg-gradient-to-br ${portfolio.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    View Portfolio
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1 transition-colors duration-300">{portfolio.name}</h3>
                  <p className="text-brand-600 dark:text-brand-400 font-medium transition-colors duration-300">{portfolio.role}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {portfolio.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-300">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className={`space-y-3 transition-all duration-300 ${
                  hoveredPortfolio === portfolio.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <p className="text-sm text-gray-600 dark:text-gray-400 transition-colors duration-300">{portfolio.preview}</p>
                  <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-400 dark:border-green-500 transition-colors duration-300">
                    <p className="text-sm font-medium text-green-800 dark:text-green-200 transition-colors duration-300">{portfolio.metrics}</p>
                  </div>
                </div>

                <div className={`mt-4 transition-all duration-300 ${
                  hoveredPortfolio === portfolio.id ? 'opacity-0' : 'opacity-100'
                }`}>
                  <p className="text-sm text-gray-500 dark:text-gray-400 transition-colors duration-300">
                    Hover to see portfolio highlights
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4 transition-colors duration-300">Ready to create your own standout portfolio?</p>
          <button className="bg-gradient-primary text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Get Started Free
          </button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioExamples;
