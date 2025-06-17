import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length);
  };

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
          <div className="overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 p-8"
                >
                  <div className="h-full flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {achievement.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-6">
                      {achievement.description}
                    </p>
                    {achievement.link && (
                      <a
                        href={achievement.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                      >
                        {achievement.linkText}
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {achievements.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-emerald-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
