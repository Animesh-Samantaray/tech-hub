import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Pic from '../assets/banner.png';
import { useNavigate } from 'react-router-dom';
// Animations
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const sectionVariants = {
  initial: { opacity: 0, x: -100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 100 },
  transition: { duration: 0.7, ease: 'easeInOut' },
};

const imgVariants = {
  initial: { opacity: 0, scale: 0.7, rotate: -10 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  whileHover: { scale: 1.05, rotate: 5 },
  transition: { duration: 0.7, type: 'spring', stiffness: 120 },
};

const buttonVariants = {
  initial: { scale: 1 },
  whileHover: { scale: 1.1 },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 300 },
};

const cards = [
  {
    img: "https://cdn-icons-png.flaticon.com/512/226/226777.png",
    title: "Java Programming",
    desc: "Master Java from scratch and build robust applications.",
    path: "/java",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/5968/5968350.png",
    title: "Python Programming",
    desc: "Automate, analyze, and innovate with Python.",
    path: "/python",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/512/2721/2721297.png",
    title: "Programming Basics",
    desc: "Start with core logic, loops, and conditions.",
    path: "/webdev",
  }
];

const Service = () => {
  const navigate = useNavigate()
  return (
    <motion.section
      className="bg-gray-900 text-white py-16 px-4 sm:px-8 lg:px-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUp}
    >
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold text-center mb-8 text-purple-400"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        Explore Our Free Courses
      </motion.h2>

      <motion.p
        className="text-center text-xl text-gray-300 mb-16 max-w-2xl mx-auto"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Get hands-on with programming languages and fundamentals. Designed for complete beginners.
      </motion.p>

      {/* Course Cards */}
      <motion.div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto mb-20">
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="bg-gray-800 rounded-xl shadow-md hover:shadow-lg p-6 flex flex-col items-center transition-shadow duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.img
              src={card.img}
              alt={card.title}
              className="w-24 h-24 mb-4 object-contain"
              whileHover={{ scale: 1.1 }}
            />
            <h3 className="text-2xl font-semibold text-purple-300 text-center">{card.title}</h3>
            <p className="text-gray-400 text-center mt-2">{card.desc}</p>
            <Link
              to={card.path}
              className="mt-6 inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg transition duration-300 font-medium"
            >
              Start Course
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Banner */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between gap-8 bg-gray-800 p-8 rounded-2xl shadow-xl max-w-6xl mx-auto"
        variants={fadeUp}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="flex-1 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4">
            🚀 Start Your Learning Journey Today
          </h3>
          <motion.button
            onClick={() =>{navigate('/java')} }
            className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg font-medium transition"
            variants={buttonVariants}
            initial="initial"
            whileHover="whileHover"
            whileTap="whileTap"
            transition={buttonVariants.transition}
          >
            Register Now
          </motion.button>
        </div>

        <motion.img
          src={Pic}
          alt="Course Promotion"
          className="w-full max-w-xs md:max-w-sm lg:max-w-md rounded-xl object-cover shadow-lg"
          variants={imgVariants}
          whileHover="whileHover"
          transition={imgVariants.transition}
        />
      </motion.div>
    </motion.section>
  );
};

export default Service;
