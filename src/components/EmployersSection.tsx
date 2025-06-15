
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const EmployersSection = () => {
  const stats = [
    { value: "40%", label: "Reduction in hiring time", color: "text-green-600" },
    { value: "85%", label: "Candidate quality improvement", color: "text-blue-600" },
    { value: "60%", label: "Faster screening process", color: "text-purple-600" },
    { value: "92%", label: "Recruiter satisfaction rate", color: "text-orange-600" }
  ];

  return (
    <section id="employers" className="py-20 px-4 bg-gradient-to-br from-gray-900 to-brand-900 text-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            For Smart <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Employers</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Stop sifting through identical resumes. Find candidates who can actually deliver results.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold mb-6">Hiring Made Intelligent</h3>
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 w-full sm:w-auto">
              Start Free Trial
            </Button>
          </div>

          <Card className="shadow-2xl bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-white flex items-center justify-between">
                Recruiter Dashboard Preview
                <Badge variant="secondary" className="bg-green-500 text-white">
                  Live Demo
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-3">AI-Matched Candidates</h4>
                <div className="space-y-3">
                  {[
                    { name: "Sarah Chen", match: "95%", skills: "React, TypeScript" },
                    { name: "Marcus Johnson", match: "87%", skills: "UX Design, Figma" },
                    { name: "Priya Patel", match: "82%", skills: "Growth Marketing" }
                  ].map((candidate, index) => (
                    <div key={index} className="flex items-center justify-between bg-white/10 p-3 rounded">
                      <div>
                        <div className="text-white font-medium">{candidate.name}</div>
                        <div className="text-gray-300 text-sm">{candidate.skills}</div>
                      </div>
                      <Badge variant="secondary" className="bg-green-500">
                        {candidate.match} match
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Portfolio Insights</h4>
                <p className="text-gray-300 text-sm">
                  View live projects, code samples, and measurable results - all in one place.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8">
          <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Hiring?</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join innovative companies who've already reduced their time-to-hire while improving candidate quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary text-white hover:opacity-90">
              Book a Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
              View Pricing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployersSection;
