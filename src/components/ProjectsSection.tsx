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
      title: "CI/CD Framework with GitHub Actions and Docker",
      description: "A comprehensive CI/CD pipeline using GitHub Actions, Docker, and AWS for automated testing and deployment.",
      tech: ["GitHub Actions", "Docker", "AWS", "Node.js", "Jest"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Cross-browser Testing with Playwright",
      description: "End-to-end testing framework using Playwright for cross-browser automation with parallel execution.",
      tech: ["Playwright", "TypeScript", "GitHub Actions", "Allure"],
      github: "https://github.com"
    },
    {
      title: "Visual Regression Suite using Percy",
      description: "Automated visual testing framework integrating Percy with Cypress for pixel-perfect UI testing.",
      tech: ["Cypress", "Percy", "JavaScript", "CircleCI"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Test Reporting Dashboard with Allure & Jenkins",
      description: "Custom test reporting solution with Allure, Jenkins, and Grafana for real-time test analytics.",
      tech: ["Allure", "Jenkins", "Grafana", "Docker"],
      github: "https://github.com"
    },
    {
      title: "API Testing Framework with Postman and Newman",
      description: "Scalable API testing framework using Postman collections and Newman for CI integration.",
      tech: ["Postman", "Newman", "Jenkins", "JavaScript"],
      github: "https://github.com",
      demo: "https://demo.com"
    },
    {
      title: "Test Data Management System",
      description: "Custom solution for managing test data across environments with database integration.",
      tech: ["Node.js", "MongoDB", "Express", "React"],
      github: "https://github.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of my professional projects showcasing my expertise in test automation, CI/CD, Generative AI, and software engineering.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tech={project.tech}
              github={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;