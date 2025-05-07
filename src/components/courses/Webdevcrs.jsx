import React from 'react';

const Webdevcrs = () => {
  return (
    <div className="w-full flex flex-col items-center py-16 px-4 bg-gray-100">
      <div className="w-full max-w-4xl bg-white shadow-xl rounded-xl overflow-hidden">
        <img 
          src="https://source.unsplash.com/1600x900/?technology,web-development" 
          alt="Web Development Course"
          className="w-full h-64 object-cover"
        />
        
        <div className="p-6">
          <h2 className="text-3xl font-semibold text-black mb-4">
            Web Development Course
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Learn to build modern, responsive, and user-friendly websites in this comprehensive web development course. 
            Whether you're a beginner or looking to enhance your skills, this course covers the essentials and more.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            Our Web Development course focuses on front-end and back-end technologies, including HTML5, CSS3, JavaScript, 
            React, Node.js, and databases. You will gain hands-on experience in building real-world projects and learn best practices.
          </p>

          <p className="text-lg text-gray-600 mb-6">
            By the end of the course, you’ll be equipped to create fully functional web applications, optimize user experiences, 
            and work with databases to store and retrieve data. You’ll also learn about the deployment process to make your projects 
            live on the web.
          </p>

          <div className="flex justify-center">
            <a 
              href="https://www.udemy.com/course/the-web-developer-bootcamp/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Webdevcrs;
