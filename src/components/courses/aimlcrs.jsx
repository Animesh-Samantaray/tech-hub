import React from 'react';
import { motion } from 'framer-motion';

const Aimlcrs = () => {
  return (
    <motion.div 
      className="w-full min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-indigo-200 py-10 px-2"
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
            src="https://t3.ftcdn.net/jpg/09/33/83/82/360_F_933838289_TS8PCfgl9RFC1Z6dRwkpxpsG9gSgObnB.jpg" 
            alt="AI & Machine Learning" 
            className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-t-2xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 rounded-t-2xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow">
              AI & Machine Learning
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-100 font-medium">
              Unlock the Future of Technology
            </p>
            <span className="inline-block mt-3 px-4 py-1 bg-green-100 text-green-700 font-semibold rounded-full text-base shadow-sm w-fit">
              $199.99
            </span>
          </div>
        </div>

        {/* Course Content */}
        <div className="p-6 sm:p-10 bg-gradient-to-br from-gray-50 via-gray-100 to-white">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            What This Course Offers
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Dive into the world of AI and Machine Learning with hands-on projects and practical knowledge! This course covers everything from the basics to advanced topics, including Python, TensorFlow, and Keras. Learn to build, train, and deploy your own AI models for real-world applications.
          </p>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Skills You'll Gain</h3>
          <ul className="list-disc pl-6 text-base sm:text-lg text-gray-700 mb-6 space-y-1">
            <li>Python programming for AI</li>
            <li>Supervised & Unsupervised Learning</li>
            <li>Neural Networks & Deep Learning</li>
            <li>Real-world AI project experience</li>
          </ul>

          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">Why Choose This Course?</h3>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Designed for both beginners and professionals, our course features expert instructors, interactive lessons, and practical exercises to ensure you gain job-ready skills in AI & ML.
          </p>

          {/* Enroll Button */}
          <div className="flex justify-center mt-8">
            <a 
              href="https://3skill.shop/checkouts/cn/Z2NwLWFzaWEtc291dGhlYXN0MTowMUpUTjU4UjE4UkdUU1g5RUZGSEpLVDdZTQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 via-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:bg-blue-700 transition-all duration-300 text-lg"
            >
              Enroll Now
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Aimlcrs;