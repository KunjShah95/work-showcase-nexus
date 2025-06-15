
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const AIFeaturesSection = () => {
  const [activeDemo, setActiveDemo] = useState('health-check');

  const demos = {
    'health-check': {
      title: 'Portfolio Health Checker',
      feedback: "Your React projects would stand out more with 2-3 metrics showing impact. Consider adding user engagement stats or performance improvements.",
      score: 85,
      improvements: [
        "Add quantifiable metrics to projects",
        "Include more diverse project types",
        "Optimize project descriptions for keywords"
      ]
    },
    'skill-constellation': {
      title: 'Skill Constellation Map',
      feedback: "Your frontend skills cluster strongly, but adding some backend technologies would make you more versatile to employers.",
      score: 78,
      improvements: [
        "Strengthen backend skill connections",
        "Add more cross-functional skills",
        "Highlight unique skill combinations"
      ]
    }
  };

  const currentDemo = demos[activeDemo];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-brand-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">AI-Powered</span> Portfolio Optimization
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get personalized insights and recommendations to make your portfolio irresistible to employers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="flex gap-4">
              <Button
                variant={activeDemo === 'health-check' ? 'default' : 'outline'}
                onClick={() => setActiveDemo('health-check')}
                className="flex-1"
              >
                Health Checker
              </Button>
              <Button
                variant={activeDemo === 'skill-constellation' ? 'default' : 'outline'}
                onClick={() => setActiveDemo('skill-constellation')}
                className="flex-1"
              >
                Skill Map
              </Button>
            </div>

            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  {currentDemo.title}
                  <Badge variant="secondary" className="text-lg px-3 py-1">
                    {currentDemo.score}/100
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded">
                  <p className="text-blue-800 font-medium">
                    AI Insight: {currentDemo.feedback}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">Recommended Improvements:</h4>
                  <ul className="space-y-2">
                    {currentDemo.improvements.map((improvement, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-brand-500 rounded-full"></div>
                        <span className="text-gray-700">{improvement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Portfolio Strength</span>
                    <span>{currentDemo.score}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-primary h-3 rounded-full transition-all duration-1000" 
                      style={{ width: `${currentDemo.score}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-brand-400 to-purple-400 rounded-2xl transform rotate-3 opacity-20"></div>
            <Card className="relative shadow-2xl bg-white">
              <CardContent className="p-8">
                <div className="text-center space-y-6">
                  <h3 className="text-2xl font-bold">Interactive Demo</h3>
                  
                  {activeDemo === 'health-check' && (
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-green-100 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-green-800">12</div>
                          <div className="text-sm text-green-600">Strong Projects</div>
                        </div>
                        <div className="bg-yellow-100 p-4 rounded-lg">
                          <div className="text-2xl font-bold text-yellow-800">3</div>
                          <div className="text-sm text-yellow-600">Need Metrics</div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Live analysis of portfolio completeness and impact
                      </div>
                    </div>
                  )}

                  {activeDemo === 'skill-constellation' && (
                    <div className="space-y-4">
                      <div className="relative h-40 bg-gray-100 rounded-lg flex items-center justify-center">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-20 h-20 bg-brand-500 rounded-full opacity-80 animate-pulse"></div>
                          <div className="absolute w-12 h-12 bg-purple-400 rounded-full top-8 right-12 animate-pulse delay-500"></div>
                          <div className="absolute w-8 h-8 bg-blue-400 rounded-full bottom-8 left-12 animate-pulse delay-1000"></div>
                        </div>
                      </div>
                      <div className="text-sm text-gray-600">
                        Visual mapping of skill relationships and strengths
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIFeaturesSection;
