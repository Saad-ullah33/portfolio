import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

import img2 from "../assets/IMG_20260407_120910-removebg-preview (2).png";

import About from "./about";
import Skills from "./skills";
import Qualification from "./qualification";
import Contact from "./contact";
import Portfolio from "./portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const Home = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div
      id="home"
      className="w-full overflow-x-hidden bg-[#0f172a] text-white"
      style={{ maxWidth: "100vw" }} // 🔥 HARD STOP OVERFLOW
    >
      {/* HERO */}
      <section className="min-h-screen flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-20 relative overflow-hidden">

        {/* LEFT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6 text-center md:text-left"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm{" "}
            <span className="text-cyan-400">Saad-Ullah</span>
          </h1>

          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300">
            <Typewriter
              options={{
                strings: [
                  "Full Stack Software Engineer",
                  "AI Enthusiast",
                  "Problem Solver",
                ],
                autoStart: true,
                loop: true,
                delay: 60,
              }}
            />
          </h2>

          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I craft fast, scalable, and visually clean web applications.
            Focused on performance, usability, and solving real-world problems.
          </p>

          {/* BUTTON */}
          <div className="flex justify-center md:justify-start">
            <motion.button
  onClick={scrollToContact}
  whileHover={{ scale: 1.06 }}
  whileTap={{ scale: 0.95 }}
  className="px-7 py-3 bg-cyan-500 text-black font-semibold rounded-full shadow-lg hover:bg-cyan-400 transition-all duration-300 flex items-center gap-2"
>
  Say Hello

  <motion.span
    animate={{ rotate: [0, 20, -10, 20, 0] }}
    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
    className="inline-block text-xl"
  >
    👋
  </motion.span>
</motion.button>
          </div>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0 relative"
        >
          {/* CONTROLLED GLOW (NO OVERFLOW) */}
          <div className="absolute w-56 h-56 sm:w-64 sm:h-64 bg-cyan-500 opacity-20 blur-2xl rounded-full"></div>

          <motion.img
            src={img2}
            alt="Saad-Ullah"
            animate={{ y: [0, -10, 0] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="relative w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 object-cover rounded-full border-4 border-cyan-400 shadow-2xl"
          />
        </motion.div>
      </section>

      {/* SECTIONS */}
      <div className="bg-[#020617] overflow-hidden">
        <About />
        <Qualification />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
};


export default Home;