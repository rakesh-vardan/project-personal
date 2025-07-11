import React from 'react';
import Button from './Button';
import { ChevronRight, Download, Mail } from 'lucide-react';
import myPic from '../assets/my_pic.jpeg';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              <span className="block">Hi, I'm</span>
              <span className="block mt-2 bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                Rakesh Vardan
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
              Principal Software Engineer | Test Automation Architect
            </h2>
            
            <p className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0">
              Designing robust, scalable, and future-ready test automation and CI/CD systems.
              With 15+ years of experience crafting innovative solutions for complex engineering challenges.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#resume" variant="primary" size="lg" className="group">
                View Resume <Download className="ml-2 h-5 w-5 group-hover:translate-y-0.5 transition-transform" />
              </Button>
              <Button href="#contact" variant="outline" size="lg" className="group">
                Contact Me <Mail className="ml-2 h-5 w-5 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button href="#projects" variant="secondary" size="lg" className="group">
                Explore Projects <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative group">
              {/* Background decoration */}
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-2xl opacity-30 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Ring decoration */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur-sm opacity-50"></div>
              
              {/* Main image container */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden">
                {/* Border gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-400 to-blue-500 p-1 rounded-full">
                  {/* Image container */}
                  <div className="w-full h-full rounded-full overflow-hidden bg-white dark:bg-gray-800">
                    <img
                      src={myPic}
                      alt="Rakesh Vardan"
                      className="w-full h-full object-cover object-center scale-105 hover:scale-110 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              {/* Decorative dots */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-full blur-sm opacity-50"></div>
              <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full blur-sm opacity-50"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;