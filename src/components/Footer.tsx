import React from 'react';
import { Code, Linkedin, Github, Mail, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center gap-2">
              <Code className="h-6 w-6 text-emerald-500" />
              <span className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Rakesh Vardan
              </span>
            </a>
            <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md">
              Principal Software Engineer specializing in Test Automation Architecture, 
              CI/CD pipelines, and full-stack engineering.
            </p>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Projects', 'Blog', 'Resume', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-gray-900 dark:text-white font-medium mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="mailto:contact@rakeshvardan.com" 
                className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {currentYear} Rakesh Vardan. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-400 flex items-center mt-4 md:mt-0">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> using Bolt.new
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;