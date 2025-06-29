import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const aboutData = [
  {
    title: "Our Mission",
    description:
      "We aim to make Java and Python education simple, free, and accessible for anyone curious about programming. No fees. No noise. Just pure learning.",
  },
  {
    title: "Who We Help",
    description:
      "Whether you're a student, career switcher, or first-time coder — our beginner-friendly approach helps you start with confidence.",
  },
  {
    title: "What We Offer",
    description:
      "Structured tutorials, example-driven lessons, and mini projects in Java and Python that build real programming logic step by step.",
  },
  {
    title: "Why Choose Us",
    description:
      "Our content is crafted by learners, for learners. We keep it clear, concise, and practical — without overcomplicating things.",
  },
  {
    title: "What's Next",
    description:
      "We’re just getting started. Expect quizzes, career tips, advanced modules, and collaborative tools — all coming soon.",
  },
];

const About = () => {
  return (
    <section className="bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800 py-16 px-4 sm:px-6 lg:px-20 min-h-screen">
      <motion.h2
        className="text-3xl sm:text-4xl font-bold text-center text-white mb-12"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        About Us
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto">
        {aboutData.map((item, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 border border-gray-700"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={cardVariant}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-purple-300 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;