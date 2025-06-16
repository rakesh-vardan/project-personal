import React from 'react';
import { Code, Server, Database, GitBranch, Workflow, Bot } from 'lucide-react';

type SkillCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
      <div className="text-emerald-500 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
};

const AboutSection: React.FC = () => {
  const skills = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Test Automation",
      description: "Expert in designing end-to-end test automation frameworks using Cypress, Selenium, and Playwright."
    },
    {
      icon: <Server className="h-8 w-8" />,
      title: "CI/CD Architecture",
      description: "Designing scalable CI/CD pipelines with Jenkins, GitHub Actions, and Docker."
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Full-Stack Development",
      description: "Experienced in JavaScript, TypeScript, Node.js, React, and various backend technologies."
    },
    {
      icon: <GitBranch className="h-8 w-8" />,
      title: "DevOps Practices",
      description: "Implementing containerization, infrastructure as code, and cloud deployment strategies."
    },
    {
      icon: <Workflow className="h-8 w-8" />,
      title: "Engineering Leadership",
      description: "Mentoring teams, driving best practices, and fostering a culture of quality and innovation."
    },
    {
      icon: <Bot className="h-8 w-8" />,
      title: "Test Automation AI",
      description: "Exploring AI-powered testing solutions and self-healing test automation frameworks."
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            With over 15 years of experience in the software industry, I've specialized in designing robust, scalable test automation frameworks
            and CI/CD pipelines that enable teams to deliver high-quality software with confidence.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            As a Principal Software Engineer and Test Automation Architect, I'm passionate about creating efficient, maintainable automation
            solutions that solve real engineering challenges. My expertise spans across end-to-end testing, API testing, performance testing,
            and implementing DevOps practices that bridge the gap between development and operations.
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Beyond my technical work, I'm dedicated to mentoring SDETs, sharing knowledge through my blog at{" "}
            <a href="https://blog.rakeshvardan.com" className="text-emerald-500 hover:text-emerald-400 transition-colors ml-1">blog.rakeshvardan.com</a>,
            and contributing to the wider developer community through open-source projects and speaking engagements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard 
              key={index}
              icon={skill.icon}
              title={skill.title}
              description={skill.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;