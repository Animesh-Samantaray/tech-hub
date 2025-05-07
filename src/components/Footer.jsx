
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-green-400 text-center py-6 border-t border-green-500 mt-10">
      <p className="text-sm">&copy; {new Date().getFullYear()} 3Skill. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
