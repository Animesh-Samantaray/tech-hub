import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Navbar from './Navbar';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Blob from '../assets/blob.svg';
import HeroPng from '../assets/hero.png';
import { animate, motion } from 'framer-motion';

const slideInFromRight = (delay = 0) => ({
  initial: {
    x: 200,      // start off-screen right
    opacity: 0,
  },
  animate: {
    x: 0,        // slide to original position
    opacity: 1,
    transition: {
      duration: 1,
      delay: delay,
      ease: 'easeOut',
    },
  },
});

export const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
      x: 100,
    },
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
  };
};

const Hero = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section className="bg-[#f7f7f7] overflow-hidden relative px-[20px] md:px-[80px]">
      <Navbar />
      <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px]">
        {/* Brand Info */}
        <div className="flex flex-col py-14 md:py-0 relative z-20">
          <div className="text-center md:text-left space-y-10 lg:max-w-[400px]">
            <motion.h1
              variants={FadeUp(0.6)}
              initial="initial"
              animate="animate"
              className="text-3xl lg:text-5xl font-bold !leading-snug"
            >
              Let's Learn to build a{' '}
              <span className="text-[#69a79c]">website</span> for your business
            </motion.h1>
            <motion.div
              variants={FadeUp(0.7)}
              initial="initial"
              animate="animate"
              className="flex justify-center md:justify-start"
            >
              <button
                onClick={() => navigate('/service')} // Use navigate for routing
                className="bg-[#f7ba34] text-white font-semibold py-2 px-6 rounded-lg 
                           hover:bg-[#69a79c] duration-200 shadow-[0px_10px_8px_-7px_#ffd978] 
                           hover:shadow-[0px_10px_8px_-7px_#69a79c] flex items-center gap-2 group"
              >
                Get Started
                <IoIosArrowRoundForward className="text-xl group-hover:translate-x-2 group-hover:-rotate-60 duration-300" />
              </button>
            </motion.div>
          </div>
        </div>

        {/* Brand Image */}
        <div className="flex justify-center items-center">
          <motion.img
            variants={slideInFromRight(0.9)}
            initial="initial"
            animate="animate"
            src={HeroPng}
            alt="Hero"
            className="w-[400px] xl:w-[600px] relative z-10 drop-shadow"
          />
          <motion.img
            variants={FadeUp(0.2)}
            initial="initial"
            animate="animate"
            src={Blob}
            alt="Blob"
            className="absolute -bottom-32 w-[800px] md:w-[1500px] z-[1] hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;