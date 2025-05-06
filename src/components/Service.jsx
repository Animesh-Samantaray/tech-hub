import React from 'react';
import Pic from '../assets/banner.png';
import Slider from './Slider';
import InternshipSection from './InternshipSection';

const Service = () => {
  return (
    <section className="bg-gray-100 py-10">
      <h2 className="text-4xl font-bold text-center text-black mb-12">
        Our Services
      </h2>

      {/* Services Grid */}
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-16">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 p-4"
            >
              <img
                src={Pic}
                alt={`Service ${index + 1}`}
                className="w-full h-60 object-cover rounded-xl"
              />
              <h3 className="text-xl font-semibold text-center mt-4">
                Service {index + 1}
              </h3>
              <p className="text-center text-gray-600 mt-2">
                Description of service {index + 1} goes here.
              </p>
            </div>
          ))}
        </div>

        {/* Internship Banner */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6 bg-white p-6 rounded-2xl shadow-md">
          {/* Text Section */}
          <div className="text-center md:text-left flex-1">
            <h3 className="text-2xl font-bold text-black mb-4">
              🚀 Join 3skill as an Intern – Learn, Grow & Build Your Career (Free Internship)
            </h3>
            <button className="mt-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300">
              Enroll Now
            </button>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <img src={Pic} alt="Internship Promotion" className="w-full max-w-sm rounded-xl object-cover" />
          </div>
        </div>
      </div>
          <Slider></Slider>
          <InternshipSection></InternshipSection>



    </section>
  );
};

export default Service;
