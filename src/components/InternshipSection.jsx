import { motion } from "framer-motion";

// The Google Form URL
const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeb7GSwJJlvJoB0F83qBGDxlJyJZW1Wb6JXb3Qfk5c10DDxvg/viewform";

const InternshipSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="w-full mt-10 bg-white rounded-2xl shadow-xl px-2 py-6 sm:p-6 flex flex-col md:flex-row items-center gap-6 sm:gap-10 max-w-6xl mx-auto"
    >
      {/* Animated Image */}
      <motion.img
        src="https://3skill.shop/cdn/shop/files/ChatGPT_Image_Apr_23_2025_05_03_51_PM.png?v=1745408727&width=750"
        alt="Internship Visual"
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="w-full max-w-xs sm:max-w-sm md:max-w-[350px] h-48 sm:h-64 md:h-[350px] object-cover rounded-2xl shadow-2xl border-2 border-purple-400"
      />

      {/* Text Content */}
      <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
          🚀 Join 3skill as an Intern – Learn, Grow & Build Your Career (Free Internship)
        </h2>
        <button
          className="mt-4 px-5 py-2.5 sm:px-6 sm:py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300 text-base sm:text-lg"
          onClick={() => window.open(formUrl, "_blank")}
        >
          Enroll Now
        </button>
      </div>
    </motion.div>
  );
};

export default InternshipSection;