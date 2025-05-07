import React from 'react';
import { motion } from 'framer-motion';

const Aimlcrs = () => {
  return (
    <motion.div 
      className="w-full min-h-screen bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-16 px-4"
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
            src="https://source.unsplash.com/1600x900/?artificial-intelligence,ai,machine-learning" 
            alt="AI & Machine Learning" 
            className="w-full h-96 object-cover rounded-t-xl sm:h-72 md:h-80 lg:h-96"
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.5 }}
          />
          <div className="absolute top-1/4 left-0 w-full text-center text-white px-6 sm:top-1/3 md:top-1/4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-4 animate-pulse-glow text-yellow-400">
              AI & Machine Learning
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-200">Unlock the Future of Technology</p>
            <p className="text-md sm:text-lg md:text-xl font-medium mt-4 text-green-500">$199.99</p>
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
            Dive into the world of AI and Machine Learning with cutting-edge technologies! Our course will equip you with
            the knowledge to understand and apply AI & ML in real-world applications. You'll work with Python, TensorFlow, 
            and Keras, learning everything from basic algorithms to deep learning.
          </p>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-4">Skills You'll Gain</h3>
          <ul className="list-disc pl-6 text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
            <li>Hands-on experience with Python and AI frameworks</li>
            <li>Mastering supervised and unsupervised learning</li>
            <li>Building neural networks and deep learning models</li>
            <li>Real-world applications in AI-driven industries</li>
          </ul>

          <h3 className="text-2xl sm:text-3xl md:text-4xl font-medium text-gray-800 mb-4">Why Choose Us?</h3>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-6">
            This course is designed for both beginners and professionals looking to upgrade their skills. With expert instructors,
            real-world examples, and practical exercises, you'll be ready to make an impact in the AI & ML space.
          </p>

          {/* Learn More Button */}
          <motion.div 
            className="flex justify-center mt-8"
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <a 
              href="https://3skill.shop/checkouts/cn/Z2NwLWFzaWEtc291dGhlYXN0MTowMUpUTjU4UjE4UkdUU1g5RUZGSEpLVDdZTQ"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 text-lg sm:text-xl md:text-2xl"
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

export default Aimlcrs;
