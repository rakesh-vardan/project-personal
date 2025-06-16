import React from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import Button from './Button';

type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

const ExperienceItem: React.FC<ExperienceItemProps> = ({ title, company, period, description }) => {
  return (
    <div className="mb-8 relative pl-8 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:to-blue-500">
      <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-emerald-500"></div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
      <div className="flex justify-between items-center mb-2">
        <p className="text-emerald-600 dark:text-emerald-400">{company}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">{period}</p>
      </div>
      <ul className="list-disc pl-5">
        {description.map((item, index) => (
          <li key={index} className="text-gray-600 dark:text-gray-400 mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

type SkillItemProps = {
  category: string;
  skills: string[];
};

const SkillItem: React.FC<SkillItemProps> = ({ category, skills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span 
            key={index}
            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const ResumeSection: React.FC = () => {
  const experiences = [
    {
      title: "Principal Software Engineer",
      company: "TechInnovate Solutions",
      period: "2021 - Present",
      description: [
        "Lead architect for enterprise-wide test automation strategy, increasing test coverage by 40%",
        "Designed modular test framework with Playwright and TypeScript used by 5 cross-functional teams",
        "Implemented CI/CD pipelines with GitHub Actions, reducing deployment time by 60%",
        "Mentored team of 8 SDETs, establishing best practices and career development plans"
      ]
    },
    {
      title: "Senior SDET Lead",
      company: "Global Software Inc.",
      period: "2018 - 2021",
      description: [
        "Developed end-to-end test automation framework using Cypress and JavaScript",
        "Integrated visual regression testing with Percy, reducing UI bugs by 35%",
        "Established API testing strategy with Postman and Newman integrated into CI pipeline",
        "Led team of 5 QA engineers, transitioning from manual to automated testing"
      ]
    },
    {
      title: "Software Engineer in Test",
      company: "Innovation Labs",
      period: "2015 - 2018",
      description: [
        "Implemented Selenium-based test automation framework for web applications",
        "Created Jenkins pipelines for continuous testing across multiple environments",
        "Developed test data management solution for complex testing scenarios",
        "Collaborated with dev teams to integrate unit and integration tests"
      ]
    }
  ];

  const skills = [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "HTML/CSS"]
    },
    {
      category: "Test Automation",
      skills: ["Cypress", "Playwright", "Selenium", "Appium", "Postman", "RestAssured", "JUnit", "Jest", "TestNG"]
    },
    {
      category: "CI/CD & DevOps",
      skills: ["Jenkins", "GitHub Actions", "CircleCI", "Docker", "Kubernetes", "AWS", "Azure DevOps"]
    },
    {
      category: "Frameworks & Libraries",
      skills: ["Node.js", "React", "Express", "Spring Boot", "Flask"]
    }
  ];

  return (
    <section id="resume" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Rakesh Vardan</h3>
                <p className="text-emerald-600 dark:text-emerald-400">Principal Software Engineer & Test Automation Architect</p>
              </div>
              <Button variant="primary" className="mt-4 md:mt-0">
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Award className="mr-2 h-5 w-5 text-emerald-500" /> Professional Summary
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Experienced Principal Software Engineer and Test Automation Architect with 12+ years of experience
                designing and implementing scalable test automation frameworks, CI/CD pipelines, and quality
                engineering practices. Proven track record of leading teams, mentoring engineers, and driving
                technical excellence across organizations.
              </p>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <Briefcase className="mr-2 h-5 w-5 text-emerald-500" /> Work Experience
              </h3>
              <div>
                {experiences.map((exp, index) => (
                  <ExperienceItem 
                    key={index}
                    title={exp.title}
                    company={exp.company}
                    period={exp.period}
                    description={exp.description}
                  />
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <GraduationCap className="mr-2 h-5 w-5 text-emerald-500" /> Education
              </h3>
              <div className="pl-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:to-blue-500">
                <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-emerald-500"></div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Master of Computer Science</h3>
                <div className="flex justify-between items-center">
                  <p className="text-emerald-600 dark:text-emerald-400">University of Technology</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">2010 - 2012</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <SkillItem 
                    key={index}
                    category={skill.category}
                    skills={skill.skills}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;