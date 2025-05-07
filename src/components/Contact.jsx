import React, { useState } from 'react';

const Contact = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here (e.g., sending data to an API)
    
    // Show the notification after submission
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false); // Hide message after 3 seconds
    }, 3000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-4 py-12">
      <div className="w-full max-w-2xl bg-zinc-800 border border-green-500 p-10 rounded-3xl shadow-2xl text-green-300">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wider text-green-400">
          Contact Us
        </h2>
        
        {/* Success Notification */}
        {messageSent && (
          <div className="mb-4 p-4 text-center text-white bg-green-500 rounded-lg shadow-md">
            Thank you for contacting us! We'll get back to you soon.
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-black border border-green-500 px-4 py-3 rounded-lg placeholder-green-500 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
            <input
              type="email"
              placeholder="Email"
              className="bg-black border border-green-500 px-4 py-3 rounded-lg placeholder-green-500 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full bg-black border border-green-500 px-4 py-3 rounded-lg placeholder-green-500 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          />

          <textarea
            rows="5"
            placeholder="Your Feedback"
            className="w-full bg-black border border-green-500 px-4 py-3 rounded-lg placeholder-green-500 text-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
            required
          ></textarea>

          <button
            type="submit"
            className="w-full bg-green-500 hover:bg-green-400 text-black font-bold py-3 rounded-lg transition duration-300 shadow-md hover:shadow-green-400/50"
          >
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
