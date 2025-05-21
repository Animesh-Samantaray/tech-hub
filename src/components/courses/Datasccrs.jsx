import React from 'react';
import { motion } from 'framer-motion';

const DatascCr = () => {
  return (
    <motion.div 
      className="w-full min-h-screen bg-gradient-to-br from-green-100 via-teal-100 to-blue-200 py-10 px-2"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.2 }} 
    >
      {/* Main Card */}
      <motion.div 
        className="w-full max-w-4xl bg-white shadow-lg rounded-2xl mx-auto overflow-hidden"
        initial={{ scale: 0.97 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <div className="relative">
          <img 
            src="https://datascience-hitechcity.com/wp-content/uploads/2022/11/37-The-Techniques-Team-and-Tools-for-Effective-Data-Science.jpg" 
            alt="Data Science & Analytics"
            className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 rounded-t-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow">
              Data Science & Analytics
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">
              Unlock the Power of Data
            </p>
            <span className="inline-block mt-3 px-4 py-1 bg-green-100 text-green-700 font-semibold rounded-full text-base shadow-sm w-fit">
              $149.99
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6 sm:p-10 bg-gradient-to-br from-gray-50 via-gray-100 to-white">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            What This Course Offers
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Master the skills required to excel in the field of Data Science! This course covers everything from data wrangling,
            statistical analysis, and visualization to building predictive models and applying machine learning techniques.
            You'll work with industry-standard tools like Python, Pandas, Matplotlib, and Seaborn.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Skills You'll Gain</h3>
          <ul className="list-disc pl-6 text-base sm:text-lg text-gray-700 mb-6 space-y-1">
            <li>Data wrangling and cleaning with Python and Pandas</li>
            <li>Statistical analysis and hypothesis testing</li>
            <li>Building predictive models using machine learning algorithms</li>
            <li>Visualizing complex data sets with Matplotlib and Seaborn</li>
            <li>Real-world case studies and projects to apply your skills</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Why Choose This Course?</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            This course is designed for aspiring data scientists, analysts, and anyone looking to dive into data-driven decision-making.
            With expert guidance, hands-on projects, and access to real-world datasets, you will gain practical experience that will help you
            tackle complex data challenges.
          </p>

          {/* Enroll Button */}
          <div className="flex justify-center mt-8">
            <a 
              href="https://3skill.shop/checkouts/cn/Z2NwLXVzLWVhc3QxOjAxSlZTVjNNUDFHSFczVlRNQlYzQ0Y4SEFX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-green-600 via-teal-500 to-blue-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:bg-green-700 transition-all duration-300 text-lg"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default DatascCr;