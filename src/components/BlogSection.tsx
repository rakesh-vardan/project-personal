import React, { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import axios from 'axios';
import { XMLParser } from 'fast-xml-parser';

type BlogPostProps = {
  title: string;
  excerpt: string;
  date: string;
  url: string;
};

type RSSItem = {
  title: string;
  description: string;
  link: string;
  pubDate: string;
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
  const [blogPosts, setBlogPosts] = useState<BlogPostProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWithRetry = async (retries = 3, delay = 1000) => {
      for (let attempt = 1; attempt <= retries; attempt++) {
        try {
          setIsLoading(true);
          setError(null);

          // Using a CORS proxy to fetch the RSS feed
          const corsProxy = 'https://api.allorigins.win/raw?url=';
          const response = await axios.get(`${corsProxy}${encodeURIComponent('https://blog.rakeshvardan.com/rss.xml')}`);

          const parser = new XMLParser();
          const result = parser.parse(response.data);

          const items: RSSItem[] = result.rss.channel.item;
          const latestPosts = items.slice(0, 3).map(item => ({
            title: item.title,
            excerpt: item.description.replace(/<[^>]+>/g, '').substring(0, 150) + '...',
            date: new Date(item.pubDate).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            }),
            url: item.link
          }));

          setBlogPosts(latestPosts);
          setIsLoading(false);
          return;
        } catch (err) {
          if (attempt === retries) {
            console.error('Error fetching blog posts:', err);
            setError('Failed to load blog posts. Please try again later.');
            setIsLoading(false);
          } else {
            // Wait before retrying
            await new Promise(res => setTimeout(res, delay));
          }
        }
      }
    };

    fetchWithRetry();
  }, []);

  return (
    <section id="blog" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Blog</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto"></div>
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on test automation, CI/CD, Generative AI, and software engineering practices.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {isLoading ? (
            // Loading skeleton
            [...Array(3)].map((_, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700 animate-pulse">
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-1/4 mb-4"></div>
                <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2"></div>
                <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-2/3"></div>
              </div>
            ))
          ) : error ? (
            <div className="col-span-3 text-center text-red-500 dark:text-red-400">
              {error}
            </div>
          ) : (
            blogPosts.map((post, index) => (
              <BlogPost
                key={index}
                title={post.title}
                excerpt={post.excerpt}
                date={post.date}
                url={post.url}
              />
            ))
          )}
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