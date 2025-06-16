import React from 'react';
import { ArrowRight } from 'lucide-react';

type BlogPostProps = {
  title: string;
  excerpt: string;
  date: string;
  url: string;
};

const BlogPost: React.FC<BlogPostProps> = ({ title, excerpt, date, url }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 group">
      <span className="text-sm text-gray-500 dark:text-gray-400 mb-2 block">{date}</span>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">{excerpt}</p>
      <a 
        href={url} 
        className="inline-flex items-center text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors group-hover:translate-x-1 duration-300"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read More <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      title: "Building Self-Healing Test Automation Frameworks",
      excerpt: "Learn how to create robust test automation frameworks that can adapt to UI changes and reduce maintenance overhead.",
      date: "May 15, 2025",
      url: "https://blog.rakeshvardan.com/self-healing-frameworks"
    },
    {
      title: "Implementing Shift-Left Testing in Agile Teams",
      excerpt: "Strategies for integrating testing earlier in the development lifecycle to catch issues sooner and improve quality.",
      date: "April 3, 2025",
      url: "https://blog.rakeshvardan.com/shift-left-testing"
    },
    {
      title: "Modern CI/CD Pipelines for Test Automation",
      excerpt: "A deep dive into designing efficient CI/CD pipelines specifically optimized for test automation workflows.",
      date: "March 18, 2025",
      url: "https://blog.rakeshvardan.com/cicd-for-testing"
    }
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on test automation, CI/CD, and software engineering practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {blogPosts.map((post, index) => (
            <BlogPost
              key={index}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              url={post.url}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://blog.rakeshvardan.com" 
            className="inline-flex items-center justify-center px-6 py-3 border border-emerald-500 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-500 hover:text-white rounded-md transition-colors duration-200"
            target="_blank"
            rel="noopener noreferrer"
          >
            View All Articles <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;