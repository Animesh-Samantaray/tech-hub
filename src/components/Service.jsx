import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';
import Pic from '../assets/banner.png';
import Slider from './Slider';
import InternshipSection from './InternshipSection';
import aiml from '../assets/aiml.png';
import dataScience from '../assets/dataScience.png';
import webdev from '../assets/web-dev.png';
import useMediaQuery from '@mui/material/useMediaQuery';
import ThreeSkillAI from './3SkillAI';
import Colab from './colab';
import Aimlcrs from './courses/aimlcrs';
import DatascCr from './courses/Datasccrs';
import Webdevcrs from './courses/Webdevcrs';
// Animation variants
const fadeUp = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const cardVariants = {
  initial: { opacity: 0, scale: 0.8, rotate: -5 },
  animate: { opacity: 1, scale: 1, rotate: 0 },
  whileHover: { scale: 1.08, rotate: 2, boxShadow: '0 8px 32px rgba(80,0,255,0.15)' },
  transition: { type: 'spring', stiffness: 200, damping: 15 },
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
  initial: { scale: 1, boxShadow: '0 0px 0px rgba(0,0,0,0)' },
  whileHover: { scale: 1.1, boxShadow: '0 4px 24px rgba(128,0,255,0.25)' },
  whileTap: { scale: 0.95 },
  transition: { type: 'spring', stiffness: 300 },
};

const Service = () => {
  const navigate = useNavigate();

  const cards = [
    {
      img: aiml,
      title: "AI & Machine Learning",
      color: "text-blue-600",
      desc: "Learn the fundamentals and advanced concepts of AI and ML through hands-on projects and interactive workshops.",
      path: "/aimlPage",
    },
    {
      img: dataScience,
      title: "Data Science",
      color: "text-green-600",
      desc: "Dive into the world of Data Science, exploring data manipulation, analysis, and visualization techniques.",
      path: "/datascPage",
    },
    {
      img: webdev,
      title: "Web Development",
      color: "text-teal-600",
      desc: "Master the skills to build dynamic and responsive websites with cutting-edge technologies like React and Node.js.",
      path: "/webdevPage",
    }
  ];

  const detailSections = [
    {
      img: 'https://3skill.shop/cdn/shop/files/DALL_E_2025-03-20_20.35.28_-_A_modern_online_learning_setup_with_students_attending_a_virtual_workshop_on_AI_and_Data_Science._A_laptop_screen_displays_a_video_conference_with_an.webp?v=1742483148&width=750',
      title: "Our Online Workshops",
      color: "text-blue-600",
      desc: "At 3 Skill, we provide expert-led online workshops covering AI, Machine Learning, Data Science, Web Development, App Development, Robotics, and Cancer Biology. Learn from experienced professionals including IIT/NIT alumni through interactive sessions and hands-on projects.",
      path: "/aimlPage",
    },
    {
      img: 'https://3skill.shop/cdn/shop/files/DALL_E_2025-03-20_20.33.40_-_A_professional_workspace_with_a_young_intern_working_on_a_laptop_guided_by_a_mentor._The_scene_should_depict_collaboration_learning_and_mentorship.webp?v=1742483039&width=750',
      title: "Internship Programs",
      color: "text-green-600",
      desc: "Take your learning to the next level with our paid internship programs in AI, ML, and Data Science. Get real-world experience and work on industry-relevant projects.",
      path: "/datascPage",
      reverse: true
    },
    {
      img: 'https://3skill.shop/cdn/shop/files/DALL_E_2025-03-20_20.37.43_-_A_modern_and_professional_About_Us_concept_for_an_educational_platform._The_design_should_include_a_diverse_group_of_people_working_together_a_digi.webp?v=1742483285&width=750',
      title: "Why 3Skill",
      color: "text-teal-600",
      desc: "3 Skill is an innovative ed-tech platform dedicated to bridging the gap between learning and industry requirements. We offer a diverse range of online & offline workshops, internship programs, and professional courses to help learners develop in-demand skills.",
      path: "/webdevPage",
    }
  ];

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeb7GSwJJlvJoB0F83qBGDxlJyJZW1Wb6JXb3Qfk5c10DDxvg/viewform";

  return (
    <motion.section
      className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-20"
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeUp}
    >
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-black mb-12"
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.7, delay: 0.1 }}
        whileHover={{ scale: 1.05, color: "#7c3aed" }}
      >
      </motion.h2>

      <motion.p
        className="text-center text-black mt-4 text-3xl mb-[30px] font-bold"
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        Our 1 month internship programs
      </motion.p>

      {/* Service Cards */}
      <motion.div
        className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto mb-20"
      >
        {cards.map((service, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-4 cursor-default flex flex-col items-center"
            initial={{ opacity: 0, x: -150 + i * 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ scale: 1.06, boxShadow: '0 8px 32px rgba(80,0,255,0.15)' }}
            whileTap={{ scale: 0.97 }}
          >
            <motion.img
              src={service.img}
              className="w-full h-60 sm:h-72 object-cover rounded-xl"
              alt={service.title}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.08 }}
            />
            <motion.h3
              className={`text-xl sm:text-2xl font-semibold text-center mt-4 ${service.color}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <motion.p
              className="text-center text-gray-600 mt-2 text-sm sm:text-base"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.2, duration: 0.5 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              {service.desc}
            </motion.p>
            <Link
              to={service.path}
              target="_blank"
              className="mt-6 px-6 py-2 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300"
            >
              Visit
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <InternshipSection />

      <Slider />
      <ThreeSkillAI />
      <Colab />
      {/* Detail Sections */}
      {detailSections.map((section, i) => (
        <motion.div
          key={i}
          onClick={() => navigate(section.path)}
          className={`flex flex-col ${section.reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center justify-center gap-8 mb-16 max-w-6xl mx-auto cursor-pointer`}
          variants={sectionVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
          whileHover={{ scale: 1.02, boxShadow: '0 8px 32px rgba(0,0,0,0.10)' }}
        >
          <motion.img
            src={section.img}
            alt={section.title}
            className="w-full max-w-md sm:max-w-lg md:max-w-xl h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-md"
            variants={imgVariants}
            whileHover="whileHover"
            transition={imgVariants.transition}
          />
          <motion.div
            className="text-left px-4 md:px-0 max-w-xl"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
          >
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-black mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.2, duration: 0.5 }}
            >
              {section.title}
            </motion.h3>
            <motion.p
              className="text-base sm:text-lg text-gray-800"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.2, duration: 0.5 }}
            >
              {section.desc}
            </motion.p>
          </motion.div>
        </motion.div>
      ))}

      {/* Internship Banner */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 bg-white p-6 sm:p-8 rounded-2xl shadow-xl max-w-6xl mx-auto mt-12"
        variants={fadeUp}
        initial="initial"
        animate="animate"
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{ scale: 1.01, boxShadow: '0 8px 32px rgba(128,0,255,0.10)' }}
      >
        <motion.div
          className="text-center md:text-left flex-1"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold text-black mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            🚀 Join 3skill as an Intern – Learn, Grow & Build Your Career (Free Internship)
          </motion.h3>
          <motion.button
            className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300"
            onClick={() => window.open(formUrl, "_blank")}
            variants={buttonVariants}
            initial="initial"
            whileHover="whileHover"
            whileTap="whileTap"
            transition={buttonVariants.transition}
          >
            Enroll Now
          </motion.button>
        </motion.div>
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <motion.img
            src={Pic}
            alt="Internship Promotion"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md rounded-xl object-cover shadow-lg"
            variants={imgVariants}
            whileHover="whileHover"
            transition={imgVariants.transition}
          />
        </motion.div>
      </motion.div>

      {/* Slider and InternshipSection */}
      <motion.div
        className="mt-20 px-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        viewport={{ once: true }}
      >
        
      </motion.div>
      <motion.div
        className="mt-16 px-2"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        viewport={{ once: true }}
      >
        
      </motion.div>
    </motion.section>
  );
};

export default Service;