"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import circle from "../assets/circle.svg";

const Skills = () => {
  const SkillItem = ({ title, level }) => (
    <div className="flex items-start gap-3">
      <img
        className="w-4 h-4 mt-1 opacity-80 invert"
        src={circle}
        alt=""
      />
      <div>
        <p className="font-medium text-white text-sm sm:text-base">
          {title}
        </p>
        <p className="text-xs sm:text-sm text-gray-400">
          {level}
        </p>
      </div>
    </div>
  );

  const AnimatedCard = ({ children, direction = "left" }) => {
    const controls = useAnimation();

    const [ref, inView] = useInView({
      threshold: 0.25,
      triggerOnce: false, // 🔥 IMPORTANT FIX
    });

    React.useEffect(() => {
      if (inView) {
        controls.start({
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        });
      } else {
        // 🔥 RESET WHEN OUT OF VIEW (FIX FOR YOUR ISSUE)
        controls.start({
          opacity: 0,
          x: direction === "left" ? -80 : 80,
          transition: { duration: 0.4, ease: "easeInOut" },
        });
      }
    }, [inView, controls, direction]);

    return (
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          x: direction === "left" ? -80 : 80,
        }}
        animate={controls}
        className="w-full max-w-[600px] mx-auto
        bg-white/5 backdrop-blur-xl border border-white/10
        shadow-lg rounded-2xl px-6 sm:px-8 py-6
        hover:shadow-cyan-500/20 transition-all duration-300"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <section
      id="skills"
      className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 md:px-12 lg:px-20
      text-white overflow-hidden bg-[#0f172a]"
    >
      {/* BORDER */}
      <div className="absolute top-0 left-0 w-full h-px bg-white/5"></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>

      {/* GLOW */}
      <div className="absolute top-0 left-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-cyan-500/10 blur-2xl rounded-full -translate-x-1/2"></div>

      {/* TITLE */}
      <div className="text-center mb-12 relative">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-cyan-400">
          Skills
        </h2>
        <p className="text-gray-400 mt-2">
          My Technical Level
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">

        {/* FRONTEND */}
        <AnimatedCard direction="left">
          <h3 className="font-semibold text-lg sm:text-xl text-white mb-5">
            Frontend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-4">
              <SkillItem title="JavaScript" level="Intermediate" />
              <SkillItem title="Material UI" level="Intermediate" />
              <SkillItem title="Tailwind CSS" level="Intermediate" />
            </div>
            <div className="space-y-4">
              <SkillItem title="React" level="Intermediate" />
              <SkillItem title="Next.js" level="Intermediate" />
              <SkillItem title="TypeScript" level="Intermediate" />
            </div>
          </div>
        </AnimatedCard>

        {/* BACKEND */}
        <AnimatedCard direction="right">
          <h3 className="font-semibold text-lg sm:text-xl text-white mb-5">
            Backend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-4">
              <SkillItem title="Node.js" level="Intermediate" />
              <SkillItem title="MySQL" level="Intermediate" />
              <SkillItem title="Python" level="Intermediate" />
            </div>
            <div className="space-y-4">
              <SkillItem title="Spring Boot" level="Intermediate" />
              <SkillItem title="Java" level="Intermediate" />
              <SkillItem title="NoSQL" level="Intermediate" />
            </div>
          </div>
        </AnimatedCard>

        {/* DEVOPS */}
        <AnimatedCard direction="left">
          <h3 className="font-semibold text-lg sm:text-xl text-white mb-5">
            DevOps & Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-4">
              <SkillItem title="GitHub" level="Intermediate" />
              <SkillItem title="Docker" level="Intermediate" />
              <SkillItem title="GitHub Actions" level="Intermediate" />
            </div>
            <div className="space-y-4">
              <SkillItem title="Azure Data Factory" level="Intermediate" />
              <SkillItem title="Jira" level="Intermediate" />
              <SkillItem title="TortoiseGit" level="Intermediate" />
            </div>
          </div>
        </AnimatedCard>

        {/* SOFT SKILLS */}
        <AnimatedCard direction="right">
          <h3 className="font-semibold text-lg sm:text-xl text-white mb-5">
            Soft Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="space-y-4">
              <SkillItem title="Agile / Scrum" level="Intermediate" />
              <SkillItem title="Problem Solving" level="Intermediate" />
              <SkillItem title="Communication" level="Intermediate" />
            </div>
            <div className="space-y-4">
              <SkillItem title="Collaboration" level="Intermediate" />
              <SkillItem title="Time Management" level="Intermediate" />
              <SkillItem title="Mentoring" level="Intermediate" />
            </div>
          </div>
        </AnimatedCard>

      </div>
    </section>
  );
};

export default Skills;