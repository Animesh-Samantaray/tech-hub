import React from 'react';
import { motion } from 'framer-motion';

const ThreeSkillAI = () => {
  return (
    <div className="w-full max-w-7xl mx-auto my-8 sm:my-12 p-2 sm:p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Explore AI with 3Skill
      </h2>
      <div className="w-full flex justify-center">
        <motion.div
          className="w-full aspect-video"
          style={{ minHeight: 250 }}
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <iframe
            width="100%"
            height="100%"
            src="https://3skill.shop/cdn/shop/videos/c/vp/438183b5f8a94c5998ecaae7ac67f754/438183b5f8a94c5998ecaae7ac67f754.HD-720p-1.6Mbps-43955664.mp4?v=0"
            title="3Skill AI Introduction"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="rounded-lg w-full h-full shadow-2xl"
            style={{ minHeight: 250, maxHeight: 600 }}
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ThreeSkillAI;
