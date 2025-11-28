import React, { useState } from "react";
import { GraduationCap, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
  { title: "University of Central Punjab", location: "Faisalabad", period: "2022 - pursuing" },
  { title: "Punjab Group of College", location: "Faisalabad", period: "2020 - 2022" },
  { title: "Govt M.C Higher Secondary School", location: "Faisalabad", period: "2018 - 2020" },
];

const experienceData = [
  { title: "Full Stack Software Engineer", location: "Islamabad", period: "May 2025 - Present" },
  { title: "Associate Software Engineer", location: "Faisalabad", period: "May 2024 - Apr 2025" },
  { title: "Junior Backend Developer (Java)", location: "Lahore", period: "Jun 2023 - Mar 2024" },
  { title: "Frontend Developer Intern", location: "Lahore", period: "Aug 2022 - Oct 2022" },
];

function Qualification() {
  const [activeTab, setActiveTab] = useState("education");

  const timelineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section id="qualification" className="py-10 bg-wheat min-h-[90vh] sm:min-h-[110vh] px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl text-gray-800 font-bold font-serif text-center mb-2">
        Qualification
      </h2>
      <p className="text-sm md:text-base text-gray-600 text-center mb-8">My personal journey</p>

      {/* Tabs */}
      <div className="flex justify-center gap-4 md:gap-6 mb-8 flex-wrap">
        <button
          onClick={() => setActiveTab("education")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "education"
              ? "bg-wheat text-black"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <GraduationCap className="h-5 w-5" /> Education
        </button>

        {/* <button
          onClick={() => setActiveTab("experience")}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition ${
            activeTab === "experience"
              ? "bg-gray-300 text-black"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          <Briefcase className="h-5 w-5" /> Experience
        </button> */}
      </div>

      {/* Timeline */}
      <div className="relative container mx-auto">
        {/* Vertical line for large screens */}
        <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-300 -translate-x-1/2" />

        <div className="space-y-12 relative">
          {(activeTab === "education" ? educationData : experienceData).map((item, index) => (
            <motion.div
              key={index}
              className="grid sm:grid-cols-2 grid-cols-1 items-start relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              variants={timelineVariants}
            >
              {/* Timeline content */}
              {index % 2 === 0 ? (
                <>
                  <div className="sm:text-right text-center sm:pr-12 px-2">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.location}</p>
                    <p className="text-sm md:text-base text-gray-500">{item.period}</p>
                  </div>
                  <div className="hidden sm:block" />
                </>
              ) : (
                <>
                  <div className="hidden sm:block" />
                  <div className="sm:text-left text-center sm:pl-12 px-2">
                    <h3 className="font-semibold text-lg md:text-xl text-gray-800">{item.title}</h3>
                    <p className="text-gray-600">{item.location}</p>
                    <p className="text-sm md:text-base text-gray-500">{item.period}</p>
                  </div>
                </>
              )}

              {/* Center Dot */}
              <motion.div
                className={`absolute sm:left-1/2 sm:top-1/2 sm:-translate-y-1/2 sm:-translate-x-1/2
                            left-4 top-4 -translate-x-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10`}
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: false }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Qualification;
