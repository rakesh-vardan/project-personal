import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

type TechBadgeProps = {
  tech: string;
};

const TechBadge: React.FC<TechBadgeProps> = ({ tech }) => {
  return (
    <span className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-2 py-1 text-xs rounded-md mr-2 mb-2 border border-gray-200 dark:border-gray-700">
      {tech}
    </span>
  );
};

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
  image?: string;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ 
  title, 
  description, 
  tech, 
  github, 
  demo, 
  image 
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 hover:border-emerald-500 dark:hover:border-emerald-500 group">
      <div className="h-48 bg-gray-100 dark:bg-gray-700 relative overflow-hidden">
        {image ? (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
            <span className="text-gray-500 dark:text-gray-400">{title}</span>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        
        <p className="text-gray-600 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="mb-4">
          {tech.map((item, index) => (
            <TechBadge key={index} tech={item} />
          ))}
        </div>
        
        <div className="flex gap-4">
          {github && (
            <a 
              href={github} 
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center gap-1 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-4 w-4" />
              <span>Code</span>
            </a>
          )}
          
          {demo && (
            <a 
              href={demo} 
              className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 flex items-center gap-1 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectsSection: React.FC = () => {
  const projects = [
    {
      title: 'Test Automation Framework (REST APIs)',
      description: 'Enterprise-grade Test Automation Framework for REST APIs using layered architecture. Features include extensive HTTP methods coverage, data-driven testing with TestNG, CI/CD pipeline integration, detailed test reporting with Allure, and containerized test execution.',
      tech: ['Java', 'TestNG', 'REST Assured', 'Allure', 'Maven', 'Docker', 'CI/CD'],
      github: 'https://github.com/rakesh-vardan/TAF_API_RESTAssured',
      image: '/projects/api-framework.svg'
    },
    {
      title: 'Full Stack Test Automation Framework',
      description: 'Comprehensive end-to-end testing solution covering both UI and API layers. Features page object model, cross-browser testing, parallel execution, cloud integration with LambdaTest, and rich HTML reporting. Demonstrates enterprise-level test architecture patterns.',
      tech: ['Java', 'TestNG', 'Selenium', 'REST Assured', 'ExtentReports', 'Jenkins', 'Log4j2', 'Maven'],
      github: 'https://github.com/rakesh-vardan/Learn_TestAutomationFramework',
      image: '/projects/hybrid-framework.svg'
    },
    {
      title: 'Modern Personal Portfolio',
      description: 'A responsive, accessible, and modern personal portfolio built with React, TypeScript, and Tailwind CSS. Features dark mode, smooth scroll navigation, dynamic content sections, and optimized performance. You\'re looking at it right now!',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'ESLint'],
      github: 'https://github.com/rakesh-vardan/project-personal',
      image: '/projects/portfolio.svg'
    },
    {
      title: 'CI Pipeline Examples',
      description: 'Collection of real-world CI/CD pipeline implementations using popular tools like SemaphoreCI, TravisCI, and Jenkins. Includes Docker integration, parallel test execution, and cloud testing platform integrations. Perfect reference for DevOps practices in test automation.',
      tech: ['CI/CD', 'Docker', 'Selenium', 'LambdaTest', 'Zalenium', 'TestNG', 'Maven'],
      github: 'https://github.com/rakesh-vardan/semaphoreci-selenium-lambdatest',
      image: '/projects/ci-cd.svg'
    },
    {
      title: 'API Testing Approaches Comparison',
      description: 'In-depth comparison and implementation of various API testing approaches in Java. Covers native HTTP clients, modern frameworks like REST Assured, and Spring ecosystem solutions. Includes performance benchmarks and best practices guide.',
      tech: ['Java', 'REST Assured', 'Spring', 'HttpClient', 'WebClient', 'JUnit'],
      github: 'https://github.com/rakesh-vardan/restassured-vs-native-clients',
      image: '/projects/api-comparison.svg'
    },
    {
      title: 'Testing Interview Guide',
      description: 'Comprehensive resource for test automation engineers featuring coding challenges, design patterns, and best practices. Includes hands-on examples covering core Java concepts, testing frameworks, and real interview questions from top tech companies.',
      tech: ['Java', 'Data Structures', 'Algorithms', 'Testing', 'Design Patterns'],
      github: 'https://github.com/rakesh-vardan/nm-coding-practice',
      image: '/projects/interview-guide.svg'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my notable projects including test automation frameworks, CI/CD implementations,
            educational resources, and web development work. Each project demonstrates my commitment to
            code quality, innovation, and knowledge sharing.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;