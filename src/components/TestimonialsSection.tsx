import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  review: string;
  date?: string;
  type: 'long-term' | 'single-session';
}

const testimonials: Testimonial[] = [
  {
    name: 'Subhasish Sengupta',
    review: 'Rakesh Vardhan has been an outstanding mentor in my journey to mastering automation testing. His expertise in Cypress, design patterns, JavaScript, and TypeScript, combined with his use of effective tools like Notion, has greatly enhanced my learning experience. Rakesh simplifies complex topics and makes them accessible, providing hands-on projects and tailored guidance. His approach fosters a growth mindset, encouraging continuous improvement and confidence in tackling testing challenges. I highly recommend Rakesh Vardhan to anyone looking to advance their automation testing skills. His mentorship has been invaluable.',
    date: '10 months ago',
    type: 'long-term'
  },
  {
    name: 'Nikhil Marathe',
    review: 'Hello, I am privileged to have a mentor like Rakesh. He is extremely talented and have a very good understanding of QA related profiles. His expertise have helped me in gaining good understanding of Automation testing. He has also helped me in preparing for interviews, set of questions required to crack the interview and has helped in improving my programming skills. I would without a doubt recommend Rakesh as a mentor, if you want to give boost to your IT career.',
    date: '10 months ago',
    type: 'long-term'
  },
  {
    name: 'Rahul M',
    review: 'I have been mentored by Rakesh for the past few weeks, and his guidance has been valuable to my professional growth. Rakesh possesses deep understanding of Automation Testing and its tools, and his ability to convey complex concepts in an understandable manner has greatly enhanced my learning experience. He consistently provides feedback and helps me to identify my strengths and areas for improvement. Looking forward for another few months of my mentorship with him.',
    date: '8 months ago',
    type: 'long-term'
  },
  {
    name: 'PRASHANTH SASANAKOTA',
    review: 'The way Rakesh has shown his interest towards my learning journey and his step-by-step process of learning may help in my going forward career.',
    type: 'single-session'
  },
  {
    name: 'Jayanth Bonala',
    review: 'Got some very good insights from rakesh that greatly helps in making decisions about career path and also clear understanding on how mentorship process works.',
    date: '4 months ago',
    type: 'single-session'
  },
  {
    name: 'Nehal Singh',
    review: 'The session was really helpful. I was confused and scared which domain shall I choose but after talking with Rakesh I am clear now. Once again thank you so much for your time, it was really helpful and a great session.',
    type: 'single-session'
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedType, setSelectedType] = useState<'all' | 'long-term' | 'single-session'>('all');

  const filteredTestimonials = testimonials.filter(t => 
    selectedType === 'all' ? true : t.type === selectedType
  );

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredTestimonials.length) % filteredTestimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Reviews & Testimonials
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-400 to-blue-500 mx-auto mb-8"></div>
          
          <div className="flex justify-center gap-4 mb-12">
            <button
              onClick={() => {
                setSelectedType('all');
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedType === 'all'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Reviews
            </button>
            <button
              onClick={() => {
                setSelectedType('long-term');
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedType === 'long-term'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Long Term Mentorship
            </button>
            <button
              onClick={() => {
                setSelectedType('single-session');
                setCurrentIndex(0);
              }}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedType === 'single-session'
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Single Sessions
            </button>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {filteredTestimonials.map((testimonial, index) => (
                <div
                  key={`${testimonial.name}-${index}`}
                  className="w-full flex-shrink-0 p-8"
                >
                  <div className="h-full flex flex-col items-center bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg">
                    <Quote className="h-10 w-10 text-emerald-500 mb-6" />
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-center italic">
                      "{testimonial.review}"
                    </p>
                    <div className="mt-auto">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white text-center">
                        {testimonial.name}
                      </h4>
                      {testimonial.date && (
                        <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-1">
                          {testimonial.date}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {filteredTestimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-emerald-500'
                    : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
