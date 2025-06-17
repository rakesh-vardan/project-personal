import React, { useRef } from 'react';
import { Download, Briefcase, GraduationCap, Award } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import Button from './Button';

// Types
type ExperienceItemProps = {
  title: string;
  company: string;
  period: string;
  description: string[];
};

type SkillItemProps = {
  category: string;
  skills: string[];
};

// Data
const experiences: ExperienceItemProps[] = [
  {
    title: "Principal Software Engineer",
    company: "Medtronic",
    period: "Nov 2024 - Present",
    description: [
      "Lead quality engineering and deliver compliant solutions for medical device software.",
      "Build scalable test automation frameworks and drive CI/CD in healthcare environments.",
      "Leverage Generative AI and develop utilities to boost automation efficiency and coverage.",
      "Collaborate cross-functionally to ensure safe, high-quality med-tech software delivery."
    ]
  },
  {
    title: "Lead SDET",
    company: "EPAM Systems",
    period: "Dec 2020 - Nov 2024",
    description: [
      "Led design of enterprise test automation frameworks and drove DevOps transformation at Mastercard.",
      "Mentored and managed a team of 4 engineers, providing technical guidance and career development.",
      "Drove organizational initiatives at EPAM, including interviews, training, and knowledge-sharing.",
      "Led Generative AI PoC and evangelized AI-driven quality practices through demos and workshops."
    ]
  },
  {
    title: "Senior SDET",
    company: "EPAM Systems",
    period: "Apr 2017 - Dec 2020",
    description: [
      "Led QA team to deliver a GDPR-compliant product for a global financial client in 9 months.",
      "Established test strategy, automation frameworks, and CI pipelines in an enterprise environment.",
      "Built robust test automation to support continuous integration and frequent releases.",
      "Collaborated with developers and stakeholders to ensure quality and enable fast feedback cycles."
    ]
  },
  {
    title: "Senior Professional Engineer",
    company: "DXC Technology (formerly Computer Sciences Corporation)",
    period: "Jul 2014 - Feb 2017",
    description: [
      "Delivered automation and functional testing solutions for telecom and insurance clients, including onsite work in Sweden.",
      "Conducted real-device mobile testing and validated end-to-end telecom service lifecycles.",
      "Focused on system-level testing and collaborated with clients to ensure high-quality solutions.",
      "Identified automation opportunities and aligned testing with project timelines and quality goals."
    ]
  },
  {
    title: "Professional Engineer",
    company: "DXC Technology (formerly Computer Sciences Corporation)",
    period: "Apr 2011 - Jun 2014",
    description: [
      "Worked on functional testing for a U.S.-based insurance client, ensuring application quality through detailed test plans and regression execution.",
      "Verified fixes and maintained traceability using defect tracking tools to support release readiness.",
      "Automated test reporting by developing Excel macros, improving efficiency across the QA team.",
      "Took on early team coordination responsibilities, laying the foundation for future leadership roles."
    ]
  },
  {
    title: "System Engineer",
    company: "DXC Technology (formerly Computer Sciences Corporation)",
    period: "Jan 2010 - Mar 2011",
    description: [
      "Performed functional testing for a major healthcare client (NHS UK), ensuring system reliability and compliance.",
      "Logged reproducible bugs, verified fixes, and worked closely with developers on resolutions.",
      "Contributed to stable test automation using HP QTP, and explored early-stage automation with Selenium."
    ]
  }
];

const skills: SkillItemProps[] = [
  {
    category: "Languages",
    skills: ["Java", "JavaScript", "TypeScript", "C#", "Python", "HTML/CSS"]
  },
  {
    category: "Test Automation",
    skills: ["Cypress", "Playwright", "Selenium", "Appium", "Postman", "RestAssured", "JUnit", "Jest", "TestNG", "SeeTest", "QTP"]
  },
  {
    category: "CI/CD & DevOps",
    skills: ["Jenkins", "GitHub Actions", "Azure DevOps", "CircleCI", "Docker", "Kubernetes", "AWS", "Azure", "GCP", "Terraform", "Ansible"]
  },
  {
    category: "Development Frameworks & Libraries",
    skills: ["Node.js", "React", "Express", "Spring Boot", "Spring Cloud", "Flask"]
  },
  {
    category: "AI & ML",
    skills: ["OpenAI", "Semantic Kernel", "Azure AI", "Google AI", "Machine Learning Concepts"]
  }
];

// Components
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
        {description.map((item) => (
          <li key={`${title}-${item.substring(0, 20)}`} className="text-gray-600 dark:text-gray-400 mb-1">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const SkillItem: React.FC<SkillItemProps> = ({ category, skills }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm border border-gray-200 dark:border-gray-700"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

const ResumeContent: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Rakesh Vardan</h3>
          <p className="text-emerald-600 dark:text-emerald-400 text-lg">Principal Software Engineer & Test Automation Architect</p>
        </div>

        {/* Summary */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
            <Award className="mr-2 h-5 w-5 text-emerald-500" /> Professional Summary
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            Experienced Principal Software Engineer and Test Automation Architect with 15+ years of experience
            designing and implementing scalable test automation frameworks, CI/CD pipelines, and quality
            engineering practices. Proven track record of leading teams, mentoring engineers, and driving
            technical excellence across organizations.
          </p>
        </div>

        {/* Experience Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <Briefcase className="mr-2 h-5 w-5 text-emerald-500" /> Work Experience
          </h3>
          <div>
            {experiences.map((exp) => (
              <ExperienceItem
                key={`${exp.company}-${exp.period}`}
                {...exp}
              />
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6 flex items-center">
            <GraduationCap className="mr-2 h-5 w-5 text-emerald-500" /> Education
          </h3>
          <div className="pl-8 relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-emerald-500 before:to-blue-500">
            <div className="absolute -left-1.5 top-1.5 h-3 w-3 rounded-full bg-emerald-500"></div>
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Bachelors of Technology</h4>
            <div className="flex justify-between items-center">
              <p className="text-emerald-600 dark:text-emerald-400">Jawaharlal Nehru Technological University, Anantapur</p>
              <p className="text-sm text-gray-500 dark:text-gray-400">2005 - 2009</p>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Technical Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill) => (
              <SkillItem
                key={skill.category}
                {...skill}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Component
const ResumeSection: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null);
  
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle: 'Rakesh_Vardan_Resume',
    pageStyle: `
      @page {
        size: A4;
        margin: 20mm;
      }
      @media print {
        body {
          color: #000;
          background: #fff;
        }
        .no-print {
          display: none !important;
        }
        a {
          text-decoration: none !important;
          color: #000 !important;
        }
      }
    `,
  });

  return (
    <section id="resume" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Resume</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
        </div>

        <div ref={componentRef}>
          <ResumeContent />
        </div>

        <div className="flex justify-center mt-16 no-print">
          <Button
            onClick={handlePrint}
            variant="outline"
            size="lg"
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF Resume
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;