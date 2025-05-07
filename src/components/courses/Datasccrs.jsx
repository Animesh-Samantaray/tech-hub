import React from 'react';
import { motion } from 'framer-motion';

const DatascCr = () => {
  return (
    <motion.div 
      className="w-full min-h-screen bg-gradient-to-r from-green-600 via-teal-600 to-blue-700 py-16 px-4"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }} 
    >
      {/* Container for the course section */}
      <motion.div 
        className="w-full max-w-5xl bg-white shadow-xl rounded-xl overflow-hidden mx-auto"
        initial={{ scale: 0.95 }} 
        animate={{ scale: 1 }} 
        transition={{ duration: 0.7 }}
      >
        
        {/* Top Section with Image, Title, and Price */}
        <div className="relative">
          <motion.img 
            src="https://source.unsplash.com/1600x900/?data-science,analytics,machine-learning" 
            alt="Data Science & Analytics"
            className="w-full h-96 object-cover rounded-t-xl sm:h-72 md:h-80 lg:h-96"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.5 }}
          />
          <div className="absolute top-1/4 left-0 w-full text-center text-white px-6 sm:top-1/3 md:top-1/4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 animate-pulse-glow text-yellow-400">
              Data Science & Analytics
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200">Unlock the Power of Data</p>
            <p className="text-md sm:text-lg md:text-xl font-medium mt-4 text-green-500">$149.99</p>
          </div>
        </div>

        {/* Course Description Section */}
        <motion.div 
          className="p-8 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-200"
          initial={{ y: 30, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.7 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
            What This Course Offers
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
            Master the skills required to excel in the field of Data Science! This course covers everything from data wrangling,
            statistical analysis, and visualization to building predictive models and applying machine learning techniques.
            You'll work with industry-standard tools like Python, Pandas, Matplotlib, and Seaborn.
          </p>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-4">Skills You'll Gain</h3>
          <ul className="list-disc pl-6 text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
            <li>Data wrangling and cleaning with Python and Pandas</li>
            <li>Statistical analysis and hypothesis testing</li>
            <li>Building predictive models using machine learning algorithms</li>
            <li>Visualizing complex data sets with Matplotlib and Seaborn</li>
            <li>Real-world case studies and projects to apply your skills</li>
          </ul>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-4">Why Choose Us?</h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
            This course is designed for aspiring data scientists, analysts, and anyone looking to dive into data-driven decision-making.
            With expert guidance, hands-on projects, and access to real-world datasets, you will gain practical experience that will help you
            tackle complex data challenges.
          </p>

          {/* Learn More Button */}
          <motion.div 
            className="flex justify-center mt-8"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <a 
              href="https://www.coursera.org/learn/data-science"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300 text-lg sm:text-xl md:text-2xl"
            >
              Enroll Now
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Inline CSS for Glowing Effect */}
      <style jsx>{`
        @keyframes pulseGlow {
          0% {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff, 0 0 35px #ff00ff;
          }
          50% {
            text-shadow: 0 0 10px #fff, 0 0 20px #ff00ff, 0 0 30px #ff00ff, 0 0 40px #ff00ff, 0 0 50px #ff00ff, 0 0 60px #ff00ff, 0 0 70px #ff00ff;
          }
          100% {
            text-shadow: 0 0 5px #fff, 0 0 10px #fff, 0 0 15px #ff00ff, 0 0 20px #ff00ff, 0 0 25px #ff00ff, 0 0 30px #ff00ff, 0 0 35px #ff00ff;
          }
        }

        .animate-pulse-glow {
          animation: pulseGlow 2s infinite;
        }
      `}</style>
    </motion.div>
  );
};

export default DatascCr;
