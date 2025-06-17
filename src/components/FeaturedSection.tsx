import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  link?: string;
  linkText?: string;
}

const achievements: Achievement[] = [
  {
    title: 'Speaker at TestIstanbul 2024',
    description: `Presented "Leveraging LLM's on Your Local Machine: An Introduction to Ollama Framework" - A comprehensive talk on deploying LLMs locally using Ollama, addressing critical challenges in enterprise environments including data privacy, security, and cost-effectiveness. The presentation covered practical implementation strategies and the impact of local LLMs on businesses prioritizing privacy and security in their AI deployments.`,
    link: 'https://testistanbul.org/rakesh-vardan-2024/',
    linkText: 'View Conference Details'
  },
  {
    title: 'Technical Mentor at Preplaced',
    description: 'Mentoring and guiding software engineers in test automation, helping them advance their careers through personalized coaching, interview preparation, and hands-on technical guidance. Specializing in test automation frameworks, CI/CD practices, and modern testing methodologies to help engineers excel in their careers.',
    link: 'https://preplaced.in/profile/rakesh-vardan',
    linkText: 'View Mentor Profile'
  },
  {
    title: 'LambdaTest Technical Author',
    description: 'Contributing valuable insights to the testing community through technical articles on test automation, CI/CD, and software quality. My articles focus on practical implementations and best practices, helping teams improve their testing processes and delivery pipelines.',
    link: 'https://www.lambdatest.com/blog/author/rakeshbudugu/',
    linkText: 'Read Articles'
  },
  {
    title: 'GeeksForGeeks Course Creator',
    description: 'Developed a comprehensive Java test automation curriculum that combines theoretical knowledge with hands-on exercises. The course covers modern testing frameworks, best practices, and real-world scenarios to help students master test automation skills.',
    link: 'https://www.geeksforgeeks.org/courses/automation-testing-online-course',
    linkText: 'Explore Course'
  }
];

const FeaturedSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const navigateToSlide = (index: number) => {
    setIsAnimating(true);
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    navigateToSlide((currentIndex + 1) % achievements.length);
  };

  const prevSlide = () => {
    navigateToSlide((currentIndex - 1 + achievements.length) % achievements.length);
  };

  // Handle animation completion
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => setIsAnimating(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds

      return () => clearInterval(timer);
    }
  }, [currentIndex, isPaused]);

  return (
    <section id="featured" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Accomplishments
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <section 
            aria-label="Featured accomplishments carousel"
            className="overflow-hidden rounded-xl"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div 
              className={`flex transition-transform duration-500 ease-in-out ${isAnimating ? 'opacity-90' : ''}`}
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {achievements.map((achievement) => (
                <div
                  key={achievement.title}
                  className="w-full flex-shrink-0 p-8"
                >
                  <div className="h-full flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                      {achievement.description}
                    </p>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                      >
                        {achievement.linkText}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation Controls */}
          <div className="mt-8">
            {/* Progress Indicator */}
            <div className="flex items-center justify-center mb-4">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {currentIndex + 1} of {achievements.length}
              </span>
            </div>

            {/* Navigation Dots with Preview */}
            <div className="flex justify-center items-center gap-4">
              {achievements.map((achievement, i) => (
                <button
                  key={achievement.title}
                  onClick={() => navigateToSlide(i)}
                  className={`group relative ${
                    i === currentIndex
                      ? 'scale-125'
                      : 'hover:scale-110'
                  } transition-all duration-300`}
                  aria-label={`Go to slide ${i + 1}: ${achievement.title}`}
                >
                  <div 
                    className={`w-3 h-3 rounded-full transition-colors ${
                      i === currentIndex
                        ? 'bg-emerald-500'
                        : 'bg-gray-300 dark:bg-gray-600 hover:bg-emerald-400 dark:hover:bg-emerald-600'
                    }`}
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 py-1 px-2 bg-gray-900 dark:bg-gray-700 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    {achievement.title}
                  </div>
                </button>
              ))}
            </div>

            {/* Arrow Navigation */}
            <div className="flex justify-center items-center gap-6 mt-4">
              <button
                onClick={prevSlide}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                aria-label="Previous slide"
              >
                <ArrowLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-2 text-gray-500 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                aria-label="Next slide"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
