import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ThreeSkillAI = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize(); // Run once on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const videoSrcMobile = 'https://3skill.shop/cdn/shop/videos/c/vp/438183b5f8a94c5998ecaae7ac67f754/438183b5f8a94c5998ecaae7ac67f754.HD-360p.mp4'; // hypothetical lower-res
  const videoSrcDesktop = 'https://3skill.shop/cdn/shop/videos/c/vp/438183b5f8a94c5998ecaae7ac67f754/438183b5f8a94c5998ecaae7ac67f754.HD-720p-1.6Mbps-43955664.mp4?v=0';

  return (
    <div className="w-full max-w-7xl mx-auto my-8 sm:my-12 p-2 sm:p-6 bg-white rounded-xl shadow-lg flex flex-col items-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
        Explore AI with 3Skill
      </h2>

      <div className="w-full flex justify-center">
        <motion.div
          className="w-full max-w-3xl"
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.5 }}
        >
       <video
  controls
  muted
  playsInline
  preload="auto"
  poster="https://3skill.shop/cdn/shop/files/3skill-ai-poster.jpg"
  className="w-full rounded-lg shadow-2xl bg-black h-auto"
>
  <source
    src="https://3skill.shop/cdn/shop/videos/c/vp/438183b5f8a94c5998ecaae7ac67f754/438183b5f8a94c5998ecaae7ac67f754.HD-720p-1.6Mbps-43955664.mp4?v=0"
    type="video/mp4"
  />
  Your browser does not support the video tag.
</video>
        </motion.div>
      </div>
    </div>
  );
};

export default ThreeSkillAI;
