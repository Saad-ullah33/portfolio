import React from "react";
import { motion } from "framer-motion";
import brief from "../assets/brief.svg";
import coffee from "../assets/coffee.svg";
import circle from "../assets/circle.svg";

export default function About() {
  const handleDownloadCv = () => {
    const link = document.createElement("a");
    link.href = "/Saadullah_CV.pdf";
    link.download = "Saadullah_CV.pdf";
    link.click();
  };

  const cardData = [
    { img: brief, title: "Experience", value: "1.5 Year" },
    { img: circle, title: "Projects", value: "3 Completed" },
    { img: coffee, title: "Coffees", value: "500+" },
  ];

  return (
    <section
      id="about"
      className="relative w-full py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 text-white overflow-hidden
      bg-gradient-to-b from-[#0f172a] via-[#0f172a] to-[#020617]"
    >
      {/* 🌫️ SMOOTH FADE OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/10 pointer-events-none"></div>

      {/* 🔵 CONTROLLED GLOW */}
      <div className="absolute top-0 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 blur-2xl rounded-full -translate-x-1/2"></div>

      <div className="max-w-7xl mx-auto relative">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-14 md:mb-16"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400">
            About Me
          </h1>
          <p className="text-gray-400 mt-2 text-sm sm:text-base">
            My Introduction
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">

          {/* LEFT CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">

            {cardData.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 
                rounded-2xl p-5 text-center shadow-lg 
                hover:shadow-cyan-500/20 transition-all duration-300"
              >
                <img src={card.img} alt="" className="w-8 invert h-8 mx-auto mb-3" />
                <h3 className="text-sm text-gray-300">{card.title}</h3>
                <p className="text-cyan-400 font-semibold text-sm mt-1">
                  {card.value}
                </p>
              </motion.div>
            ))}

          </div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-5 text-center md:text-left"
          >
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              I’m a{" "}
              <span className="text-cyan-400 font-semibold">
                Full Stack Software Engineer
              </span>{" "}
              passionate about building scalable and user-focused web applications.
              I specialize in modern JavaScript frameworks, REST APIs, and responsive UI design.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
              I have experience working with backend architecture, database design,
              and DevOps workflows including Docker and cloud deployments.
              I focus on writing clean, efficient code and continuously improving my skills.
            </p>

            {/* BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 pt-3 justify-center md:justify-start">

              <motion.button
                onClick={handleDownloadCv}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-full bg-cyan-500 text-black font-semibold
                hover:bg-cyan-400 transition-all duration-300 shadow-lg"
              >
                Download CV
              </motion.button>

              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}