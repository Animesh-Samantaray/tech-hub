import { motion } from "framer-motion";

const InternshipSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-16 bg-white rounded-2xl shadow-xl p-8 flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto"
    >
      {/* Animated Image */}
      <motion.img
        src="https://3skill.shop/cdn/shop/files/ChatGPT_Image_Apr_23_2025_05_03_51_PM.png?v=1745408727&width=750"
        alt="Internship Visual"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full md:w-[450px] h-[500px] object-cover rounded-2xl shadow-2xl border-4 border-purple-500"
      />

      {/* Text Content */}
      <div className="text-center md:text-left flex-1">
        <h2 className="text-3xl font-bold text-gray-900 leading-tight">
          🚀 Real-World Internships That Build Careers
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Work on live projects, learn from mentors, and grow your tech career the practical way. We’re here to help you level up.
        </p>
        <button className="mt-6 px-8 py-3 bg-purple-600 text-white text-base font-semibold rounded-xl hover:bg-purple-700 transition-all duration-300">
          Explore Internships
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipSection;
