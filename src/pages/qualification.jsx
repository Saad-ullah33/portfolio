import React, { useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  { title: "University of Central Punjab", location: "Faisalabad", period: "2022 - Present" },
  { title: "Punjab Group of College", location: "Faisalabad", period: "2020 - 2022" },
  { title: "Govt M.C Higher Secondary School", location: "Faisalabad", period: "2018 - 2020" },
];

const experienceData = [
  { title: "Full Stack Software Engineer", location: "Islamabad", period: "May 2025 - Present" },
  { title: "Associate Software Engineer", location: "Faisalabad", period: "May 2024 - Apr 2025" },
  { title: "Junior Backend Developer (Java)", location: "Lahore", period: "Jun 2023 - Mar 2024" },
  { title: "Frontend Developer Intern", location: "Lahore", period: "Aug 2022 - Oct 2022" },
];

export default function Qualification() {
  const [activeTab, setActiveTab] = useState("education");
  const data = activeTab === "education" ? educationData : experienceData;

  return (
    <section
      id="qualification"
      className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20 text-white overflow-hidden bg-[#0f172a]"
    >
      {/* 🔥 TOP BORDER (smooth section separation) */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>

      {/* 🌫️ SUBTLE OVERLAY (not full gradient anymore) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

      {/* 🔵 GLOW */}
      <div className="absolute top-0 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 blur-2xl rounded-full -translate-x-1/2"></div>

      <div className="max-w-6xl mx-auto relative">

        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400">
            Qualification
          </h2>
          <p className="text-gray-400 mt-2">My Journey</p>
        </motion.div>

        {/* TABS */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all
            ${
              activeTab === "education"
                ? "bg-cyan-500 text-black shadow-lg"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            <GraduationCap size={18} /> Education
          </button>

          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all
            ${
              activeTab === "experience"
                ? "bg-cyan-500 text-black shadow-lg"
                : "bg-white/10 text-gray-300 hover:bg-white/20"
            }`}
          >
            <Briefcase size={18} /> Experience
          </button>
        </div>

        {/* TIMELINE */}
        <div className="relative">

          {/* CENTER LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/10 -translate-x-1/2 hidden md:block"></div>

          <div className="space-y-12">
            {data.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: false }}
                className="relative flex flex-col md:grid md:grid-cols-2 gap-6 items-center"
              >
                {/* CONTENT */}
                <div
                  className={`w-full ${
                    index % 2 === 0
                      ? "md:text-right md:pr-10"
                      : "md:col-start-2 md:text-left md:pl-10"
                  } text-center md:text-left`}
                >
                  <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-5 rounded-2xl shadow-lg hover:shadow-cyan-500/20 transition-all duration-300">
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{item.location}</p>
                    <p className="text-cyan-400 text-sm mt-1">
                      {item.period}
                    </p>
                  </div>
                </div>

                {/* DOT */}
                <div className="hidden md:flex justify-center items-center absolute left-1/2 -translate-x-1/2">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-[#0f172a] shadow-md"></div>
                </div>

                {/* MOBILE DOT */}
                <div className="md:hidden w-3 h-3 bg-cyan-400 rounded-full"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}