
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Users, Clock, Award, Target, BarChart3 } from 'lucide-react';

const EmployersSection = () => {
  const stats = [
    { 
      value: "40%", 
      label: "Reduction in hiring time", 
      color: "text-green-600 dark:text-green-400",
      icon: Clock
    },
    { 
      value: "85%", 
      label: "Candidate quality improvement", 
      color: "text-blue-600 dark:text-blue-400",
      icon: Award
    },
    { 
      value: "60%", 
      label: "Faster screening process", 
      color: "text-purple-600 dark:text-purple-400",
      icon: TrendingUp
    },
    { 
      value: "92%", 
      label: "Recruiter satisfaction rate", 
      color: "text-orange-600 dark:text-orange-400",
      icon: Target
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: "Smart Candidate Matching",
      description: "AI-powered algorithms match candidates based on skills and portfolio quality, not just keywords."
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      description: "Get detailed insights into candidate work quality with automated portfolio analysis."
    },
    {
      icon: Target,
      title: "Skill Verification",
      description: "Verify candidate skills through live projects and measurable results, not just claims."
    }
  ];

  return (
    <section id="employers" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-brand-900 dark:from-gray-950 dark:to-brand-950 text-white transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            For Smart <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Employers</span>
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Stop sifting through identical resumes. Find candidates who can actually deliver results.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 dark:bg-black/20 backdrop-blur-sm border-white/20 dark:border-gray-700/30 transition-colors duration-300 hover-lift">
              <CardContent className="p-6 text-center">
                <benefit.icon className="h-12 w-12 text-brand-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 dark:text-gray-400">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Hiring Made Intelligent</h3>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center bg-white/5 dark:bg-white/10 p-4 rounded-lg backdrop-blur-sm">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-brand-400" />
                  <div className={`text-3xl font-bold ${stat.color} mb-2 transition-colors duration-300`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">{stat.label}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white transition-colors duration-200">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-gray-300 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors duration-200">
                Watch Demo
              </Button>
            </div>
          </div>

          <Card className="shadow-2xl bg-white/10 dark:bg-black/20 backdrop-blur-sm border-white/20 dark:border-gray-700/30 transition-colors duration-300">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                Recruiter Dashboard Preview
                <Badge variant="secondary" className="bg-green-500 dark:bg-green-600 text-white">
                  Live Demo
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/5 dark:bg-white/10 p-4 rounded-lg transition-colors duration-300">
                <h4 className="text-white font-semibold mb-3">AI-Matched Candidates</h4>
                <div className="space-y-3">
                  {[
                    { name: "Sarah Chen", match: "95%", skills: "React, TypeScript", projects: "12 live projects" },
                    { name: "Marcus Johnson", match: "87%", skills: "UX Design, Figma", projects: "8 case studies" },
                    { name: "Priya Patel", match: "82%", skills: "Growth Marketing", projects: "15 campaigns" }
                  ].map((candidate, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/10 dark:bg-white/20 p-3 rounded transition-colors duration-300">
                      <div>
                        <div className="text-white font-medium">{candidate.name}</div>
                        <div className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">{candidate.skills}</div>
                        <div className="text-gray-400 dark:text-gray-500 text-xs transition-colors duration-300">{candidate.projects}</div>
                      </div>
                      <Badge variant="secondary" className="bg-green-500 dark:bg-green-600">
                        {candidate.match} match
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 dark:bg-white/10 p-4 rounded-lg transition-colors duration-300">
                <h4 className="text-white font-semibold mb-2">Portfolio Insights</h4>
                <p className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">
                  View live projects, code samples, and measurable results - all in one place.
                </p>
                <div className="mt-3 flex items-center space-x-4 text-xs">
                  <span className="text-green-400">✓ Code Quality: A+</span>
                  <span className="text-blue-400">✓ Performance: 95/100</span>
                  <span className="text-purple-400">✓ Innovation: High</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-white/5 dark:bg-white/10 backdrop-blur-sm rounded-2xl p-8 transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
          <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-2xl mx-auto transition-colors duration-300">
            Join innovative companies who've already reduced their time-to-hire while improving candidate quality. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900 dark:border-gray-300 dark:hover:bg-gray-100 dark:hover:text-gray-900 transition-colors duration-200">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployersSection;
