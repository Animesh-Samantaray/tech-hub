import React, { useState } from 'react';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-green-50 to-green-100 px-4 py-12">
      <div className="w-full max-w-2xl bg-white border border-green-200 p-0 rounded-3xl shadow-2xl text-green-900">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-100 via-white to-green-50 rounded-t-3xl px-10 py-8 border-b border-green-100">
          <h2 className="text-4xl font-extrabold text-center mb-2 tracking-tight text-green-700">
            Contact Us
          </h2>
          <p className="text-center text-green-500 text-lg font-medium">
            We'd love to hear from you. Fill out the form and our team will get in touch!
          </p>
        </div>

        {/* Success Notification */}
        {messageSent && (
          <div className="mx-10 mt-6 mb-2 p-4 text-center text-white bg-gradient-to-r from-green-400 to-green-600 rounded-lg shadow">
            Thank you for contacting us! We'll get back to you soon.
          </div>
        )}

        {/* Form */}
        <form className="space-y-7 px-10 py-8" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-white border border-green-200 px-4 py-3 rounded-xl placeholder-green-400 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="bg-white border border-green-200 px-4 py-3 rounded-xl placeholder-green-400 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
              required
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-white border border-green-200 px-4 py-3 rounded-xl placeholder-green-400 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full bg-white border border-green-200 px-4 py-3 rounded-xl placeholder-green-400 text-green-900 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-sm"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 via-green-400 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold py-3 rounded-xl transition duration-300 shadow-lg hover:shadow-green-300/50 text-lg tracking-wide"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;