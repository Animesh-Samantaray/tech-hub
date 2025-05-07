import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const students = [
  {
    name: "Pradeep Kumar Singha",
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
    role: "3 SKILL (Design & Data Analysis Intern)",
  },
  {
    name: "Anjali Sharma",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
    role: "Wipro (Frontend Developer Intern)",
  },
  {
    name: "Rahul Mehta",
    photo: "https://randomuser.me/api/portraits/men/48.jpg",
    role: "TCS (Backend Developer Intern)",
  },
];

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    setIndex((prev) => (prev + 1) % students.length);
  };

  const handlePrev = () => {
    setIndex((prev) => (prev - 1 + students.length) % students.length);
  };

  return (
    <div className="mt-20 py-10 px-4 rounded-2xl shadow-lg max-w-5xl mx-auto relative">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        Our Placed Students
      </h2>

      <div className="relative flex items-center justify-center">
        {/* Left Button */}
        <button
          onClick={handlePrev}
          className="absolute left-0 bg-transparent text-gray-800 p-4 rounded-full shadow-xl hover:bg-gray-100 transform transition-all duration-300 hover:scale-125 hover:rotate-12"
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Card */}
        <div className="bg-gray-50 p-6 md:p-8 rounded-xl shadow-lg w-full max-w-md text-center mx-12 transform transition-all duration-700 ease-out hover:scale-105 hover:rotate-2">
          <img
            src={students[index].photo}
            alt={students[index].name}
            className="w-24 h-24 md:w-28 md:h-28 rounded-full mx-auto border-4 border-white shadow-xl object-cover transition-all duration-300"
          />
          <h3 className="mt-4 text-xl font-semibold text-gray-900">
            {students[index].name}
          </h3>
          <p className="mt-1 text-sm text-gray-600">
            {students[index].role}
          </p>
        </div>

        {/* Right Button */}
        <button
          onClick={handleNext}
          className="absolute right-0 bg-transparent text-gray-800 p-4 rounded-full shadow-xl hover:bg-gray-100 transform transition-all duration-300 hover:scale-125 hover:rotate-12"
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
