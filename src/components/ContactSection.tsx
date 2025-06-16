import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Let's Connect</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-6 mb-8">
            I'm always open to discussing new projects, opportunities in test automation, 
            and collaborative ventures. Whether you have a specific project in mind or just want to connect, 
            I'd love to hear from you.
          </p>
          
          <div className="flex items-center justify-center mb-6">
            <Mail className="h-5 w-5 text-emerald-500 mr-4" />
            <a href="mailto:hello@rakeshvardan.com" className="text-gray-600 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
              hello@rakeshvardan.com
            </a>
          </div>
          
          <div className="flex items-center justify-center space-x-8 mt-8">
            <a 
              href="https://www.linkedin.com/in/rakeshvardan/" 
              className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-8 w-8" />
            </a>
            <a 
              href="https://github.com/rakesh-vardan" 
              className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <Github className="h-8 w-8" />
            </a>
            <a 
              href="mailto:hello@rakeshvardan.com" 
              className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
              aria-label="Send Email"
            >
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;