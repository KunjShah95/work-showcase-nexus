
import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowUp, ArrowDown } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "Portfolios.tech helped me showcase my React projects with interactive demos. I got 3 job offers within 2 weeks!",
      author: "Emily Rodriguez",
      role: "Frontend Developer",
      company: "Tech Startup",
      category: "student"
    },
    {
      quote: "The AI recommendations were spot-on. Adding metrics to my UX case studies increased my profile views by 300%.",
      author: "David Kim",
      role: "UX Designer",
      company: "Design Agency",
      category: "student"
    },
    {
      quote: "We've reduced our screening time by 60%. Seeing actual work samples makes hiring decisions so much easier.",
      author: "Sarah Johnson",
      role: "Head of Talent",
      company: "Fortune 500",
      category: "recruiter"
    },
    {
      quote: "The portfolio health checker identified gaps I never noticed. Now I get contacted by recruiters weekly.",
      author: "Alex Chen",
      role: "Full Stack Engineer",
      company: "Remote First",
      category: "student"
    },
    {
      quote: "Interactive portfolios give us insights into candidates' actual capabilities, not just what they claim.",
      author: "Michael Brown",
      role: "Engineering Manager",
      company: "Scale-up",
      category: "recruiter"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-brand-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white transition-colors duration-300">
            What Our Community <span className="gradient-text">Says</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto transition-colors duration-300">
            From students landing their dream jobs to recruiters finding perfect matches.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl border-none bg-white dark:bg-gray-800 relative overflow-hidden transition-colors duration-300">
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-primary"></div>
            
            <CardContent className="p-12 text-center">
              <div className="mb-6">
                <Badge 
                  variant="secondary" 
                  className={`${current.category === 'student' ? 'bg-blue-100 dark:bg-blue-900/40 text-blue-800 dark:text-blue-200' : 'bg-green-100 dark:bg-green-900/40 text-green-800 dark:text-green-200'} transition-colors duration-300`}
                >
                  {current.category === 'student' ? 'Job Seeker' : 'Recruiter'}
                </Badge>
              </div>

              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-8 leading-relaxed transition-colors duration-300">
                "{current.quote}"
              </blockquote>

              <div className="space-y-2">
                <div className="text-xl font-bold text-gray-900 dark:text-white transition-colors duration-300">{current.author}</div>
                <div className="text-brand-600 dark:text-brand-400 font-medium transition-colors duration-300">{current.role}</div>
                <div className="text-gray-500 dark:text-gray-400 transition-colors duration-300">{current.company}</div>
              </div>
            </CardContent>
          </Card>

          <div className="flex items-center justify-center mt-8 space-x-4">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              aria-label="Previous testimonial"
            >
              <ArrowUp className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>

            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-brand-600 dark:bg-brand-400 scale-125' : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              aria-label="Next testimonial"
            >
              <ArrowDown className="h-5 w-5 text-gray-600 dark:text-gray-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
