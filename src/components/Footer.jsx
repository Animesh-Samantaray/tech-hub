import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white text-green-700 text-center py-6 border-t border-green-200 mt-10">
      <div className="max-w-4xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm font-semibold">
          &copy; {new Date().getFullYear()} 3 Skill. All rights reserved.
        </p>
        <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-medium">
          <a href="/privacy" className="hover:underline hover:text-green-900 transition">Privacy Policy</a>
          <a href="/refund" className="hover:underline hover:text-green-900 transition">Refund Policy</a>
          <a href="/terms" className="hover:underline hover:text-green-900 transition">Terms of Service</a>
          <a href="/contact" className="hover:underline hover:text-green-900 transition">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;