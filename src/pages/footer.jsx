import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-wheat text-black py-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center">

        {/* Title */}
        <p className="text-sm sm:text-base">
          © 2025 <span className="font-semibold">Saad-Ullah</span>. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 mt-3">
          <a
            href="https://www.linkedin.com/in/muhammad-saad-ullah-106578365/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition-colors"
          >
            <Linkedin size={28}  />
          </a>

          <a
            href="https://github.com/Saad-ullah33"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-700 transition-colors"
          >
            <Github size={28} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
