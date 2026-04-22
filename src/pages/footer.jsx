import React from "react";
import { Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0f172a] text-white py-10 overflow-hidden">

      {/* TOP BORDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>

      {/* GLOW */}
      <div className="absolute bottom-0 left-1/2 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 flex flex-col items-center text-center relative">

        {/* TEXT */}
        <p className="text-sm sm:text-base text-gray-400">
          © 2025{" "}
          <span className="text-white font-semibold">Saad-Ullah</span>.
          All rights reserved.
        </p>

        {/* SOCIALS */}
        <div className="flex gap-5 mt-4">

          <a
            href="https://www.linkedin.com/in/muhammad-saad-ullah-106578365/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 border border-white/10
            hover:border-cyan-400 hover:shadow-cyan-500/20
            transition-all duration-300"
          >
            <Linkedin size={22} className="text-cyan-400" />
          </a>

          <a
            href="https://github.com/Saad-ullah33"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-white/5 border border-white/10
            hover:border-cyan-400 hover:shadow-cyan-500/20
            transition-all duration-300"
          >
            <Github size={22} className="text-cyan-400" />
          </a>

        </div>

      </div>
    </footer>
  );
};

export default Footer;