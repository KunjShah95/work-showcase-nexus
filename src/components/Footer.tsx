
import React from 'react';

const Footer = () => {
  const universities = [
    "Stanford", "MIT", "Berkeley", "Harvard", "CMU"
  ];

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-16 px-4 transition-colors duration-300">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1">
            <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Portfolios.tech
            </div>
            <p className="text-gray-300 dark:text-gray-400 text-sm transition-colors duration-300">
              Beyond resumes - showcase your work, not just words.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">For Professionals</h4>
            <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Build Portfolio</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">AI Optimization</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Success Stories</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">For Employers</h4>
            <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Find Talent</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Recruiter Tools</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Team Plans</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Integration</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2 text-sm text-gray-300 dark:text-gray-400">
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-white dark:hover:text-gray-200 transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 transition-colors duration-300">
          <div className="text-center mb-8">
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-4 transition-colors duration-300">Used by students at</p>
            <div className="flex flex-wrap justify-center gap-6">
              {universities.map((university, index) => (
                <div key={index} className="text-gray-300 dark:text-gray-400 font-medium text-sm transition-colors duration-300">
                  {university}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 dark:text-gray-500">
            <div className="transition-colors duration-300">
              © 2024 Portfolios.tech. All rights reserved.
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">Twitter</a>
              <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white dark:hover:text-gray-300 transition-colors">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
