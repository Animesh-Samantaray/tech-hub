import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Pic from '../assets/banner.png';
import Slider from './Slider';
import InternshipSection from './InternshipSection';
import aiml from '../assets/aiml.png';
import dataScience from '../assets/dataScience.png';
import webdev from '../assets/web-dev.png';

const fadeUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
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

  // URL of the Google Form
  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeb7GSwJJlvJoB0F83qBGDxlJyJZW1Wb6JXb3Qfk5c10DDxvg/viewform";

  return (
    <section className="bg-gray-100 py-16">
      <motion.h2
        className="text-4xl font-bold text-center text-black mb-16"
        {...fadeUp}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h2>

      {/* Service Cards */}
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 mb-16">
        {cards.map((service, i) => (
          <motion.div
            key={i}
            onClick={() => navigate(service.path)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 cursor-pointer"
            whileHover={{ scale: 1.03 }}
            {...fadeUp}
            viewport={{ once: true }}
          >
            <img src={service.img} className="w-full h-80 object-cover rounded-xl" alt={service.title} />
            <h3 className={`text-2xl font-semibold text-center mt-6 ${service.color}`}>
              {service.title}
            </h3>
            <p className="text-center text-gray-600 mt-3 text-lg">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Detail Sections */}
      {detailSections.map((section, i) => (
        <motion.div
          key={i}
          onClick={() => navigate(section.path)}
          className={`flex flex-col md:flex-row ${section.reverse ? 'md:flex-row-reverse' : ''} justify-center items-center gap-10 mb-16 cursor-pointer`}
          {...fadeUp}
          viewport={{ once: true }}
        >
          <img
            src={section.img}
            alt={section.title}
            className="w-full max-w-xl h-96 object-cover rounded-xl shadow-lg"
          />
          <div className="text-left max-w-xl">
            <h3 className="text-3xl font-bold text-black mb-4">{section.title}</h3>
            <p className="text-xl text-gray-800">{section.desc}</p>
          </div>
        </motion.div>
      ))}

      {/* Internship Banner */}
      <motion.div
        className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 bg-white p-8 rounded-2xl shadow-xl max-w-6xl mx-auto mt-12"
        {...fadeUp}
        viewport={{ once: true }}
      >
        <div className="text-center md:text-left flex-1">
          <h3 className="text-3xl font-bold text-black mb-4">
            🚀 Join 3skill as an Intern – Learn, Grow & Build Your Career (Free Internship)
          </h3>
          <button 
            className="mt-4 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300"
            onClick={() => window.open(formUrl, "_blank")} // Open Google Form link in a new tab
          >
            Enroll Now
          </button>
        </div>
        <div className="flex-1 flex justify-center">
          <img src={Pic} alt="Internship Promotion" className="w-full max-w-sm rounded-xl object-cover shadow-lg" />
        </div>
      </motion.div>

      {/* Slider and InternshipSection */}
      <Slider />
      <InternshipSection />
    </section>
  );
};

export default Service;
