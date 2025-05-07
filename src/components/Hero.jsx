import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Blob from '../assets/blob.svg';
import HeroPng from '../assets/hero.png';
import { motion } from 'framer-motion';

// Slide-in animation
const slideInFromRight = (delay = 0) => ({
  initial: { x: 200, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: { duration: 1, delay: delay, ease: 'easeOut' },
  },
});

// Fade-up animation
const FadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: delay,
      type: 'spring',
      stiffness: 100,
      ease: 'easeInOut',
    },
  },
});

// Text loop for futuristic skills
const AnimatedTextLoop = () => {
  const items = ['AI', 'ML', 'Web Dev', 'Robotics', 'Data Science'];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const loop = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 2000);
    return () => clearInterval(loop);
  }, []);

  return (
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#69a79c] to-[#f7ba34] font-bold animate-pulse">
      {items[index]}
    </span>
  );
};

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#f7f7f7] overflow-hidden relative px-4 md:px-10 lg:px-20">
      <Navbar />

      <div className="grid grid-cols-1 md:grid-cols-2 items-center min-h-[80vh] pt-10 pb-16 gap-10">
        {/* Text Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 z-10">
          <motion.h1
            variants={FadeUp(0.4)}
            initial="initial"
            animate="animate"
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
          >
            Upgrade Your Skills
          </motion.h1>

          <motion.h2
            variants={FadeUp(0.5)}
            initial="initial"
            animate="animate"
            className="text-2xl md:text-3xl lg:text-4xl font-semibold"
          >
            with <AnimatedTextLoop /> & more!
          </motion.h2>

          <motion.div
            variants={FadeUp(0.6)}
            initial="initial"
            animate="animate"
          >
            <button
              onClick={() => navigate('/service')}
              className="bg-[#f7ba34] text-white font-semibold py-2 px-6 rounded-lg 
                         hover:bg-[#69a79c] duration-200 shadow-md flex items-center gap-2 group"
            >
              Get Started
              <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-45 duration-300" />
            </button>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="relative flex justify-center items-center">
          <motion.img
            variants={slideInFromRight(0.9)}
            initial="initial"
            animate="animate"
            src={HeroPng}
            alt="Hero"
            className="w-[250px] md:w-[350px] lg:w-[500px] xl:w-[600px] z-10 drop-shadow-lg"
          />
          <motion.img
            variants={FadeUp(0.2)}
            initial="initial"
            animate="animate"
            src={Blob}
            alt="Blob"
            className="absolute -bottom-20 w-[700px] md:w-[1000px] lg:w-[1200px] z-0 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
