"use client";
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import circle from "../assets/circle.svg";

const Skills = () => {
  const SkillItem = ({ title, level }) => (
    <div className="flex items-start gap-2 bg-white">
      <img className="w-4 h-4 mt-1 bg-white" src={circle} alt="" />
      <div>
        <p className="font-semibold text-gray-900 bg-white">{title}</p>
        <p className="text-sm text-gray-600 bg-white">{level}</p>
      </div>
    </div>
  );

  const AnimatedCard = ({ children, direction = "left" }) => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
      threshold: 0.3,
    });

    React.useEffect(() => {
      if (inView) {
        controls.start({ opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } });
      } else {
        // Reset animation when out of view
        controls.start({ opacity: 0, x: direction === "left" ? -100 : 100 });
      }
    }, [inView, controls, direction]);

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: direction === "left" ? -100 : 100 }}
        animate={controls}
        className="w-full max-w-[600px] bg-white border border-gray-300 shadow-lg rounded-xl px-8 py-6"
      >
        {children}
      </motion.div>
    );
  };

  return (
    <div id="skills" className="py-24 px-4 md:px-20 bg-wheat">
      <h2 className="text-3xl md:text-4xl text-gray-700 font-bold font-serif text-center mb-2">
        Skills
      </h2>
      <p className="text-xl md:text-2xl text-gray-700 text-center mb-12">
        My Technical Level
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* CARD 1 */}
        <AnimatedCard direction="left">
          <h3 className="font-bold text-xl text-gray-900 mb-4 bg-white">Frontend Developer</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 bg-white">
            <div className="space-y-3 bg-white">
              <SkillItem title="JavaScript" level="Intermediate" />
              <SkillItem title="Material UI" level="Intermediate" />
              <SkillItem title="Tailwind CSS" level="Intermediate" />
            </div>
            <div className="space-y-3 bg-white">
              <SkillItem title="React" level="Intermediate" />
              <SkillItem title="Next.js" level="Intermediate" />
              <SkillItem title="TypeScript" level="Intermediate" />
            </div>
          </div>
        </AnimatedCard>

        {/* CARD 2 */}
        <AnimatedCard direction="right">
          <h3 className="font-bold text-xl text-gray-900 mb-4 bg-white">Backend Developer</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 bg-white">
            <div className="space-y-3 bg-white">
              <SkillItem title="Node.js" level="Intermediate" />
              <SkillItem title="MySQL" level="Intermediate" />
              <SkillItem title="Python" level="Intermediate" />
            </div>
            <div className="space-y-3 bg-white">
              <SkillItem title="Spring Boot3" level="Intermediate" />
              <SkillItem title="Java" level="Intermediate" />
              <SkillItem title="NoSQL" level="Intermediate" />
            </div>
          </div>
        </AnimatedCard>

        {/* CARD 3 */}
        <AnimatedCard direction="left">
          <h3 className="font-bold text-xl text-gray-900 mb-4 bg-white">DevOps Tools</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 bg-white">
            <div className="space-y-3 bg-white">
              <SkillItem title="GitHub" level="Intermediate" />
              <SkillItem title="Docker" level="Intermediate" />
              <SkillItem title="GitHub Actions" level="Intermediate" />
            </div>
            <div className="space-y-3 bg-white">
              <SkillItem title="Azure Factory" level="Intermediate" />
              <SkillItem title="Jira" level="Intermediate" />
              <SkillItem title="TortoiseGit" level="Intermediate" />
            </div>
          </div>
        </AnimatedCard>

        {/* CARD 4 */}
        <AnimatedCard direction="right">
          <h3 className="font-bold text-lg text-gray-900 mb-4 bg-white">Soft Skills & Methodologies</h3>
          <div className="grid grid-cols-2 gap-x-10 gap-y-5 bg-white">
            <div className="space-y-3 bg-white">
              <SkillItem title="Agile/Scrum Methodology" level="Intermediate" />
              <SkillItem title="Problem-solving and debugging" level="Intermediate" />
              <SkillItem title="Effective Communication" level="Intermediate" />
            </div>
            <div className="space-y-3 bg-white">
              <SkillItem title="Cross-functional collaboration" level="Intermediate" />
              <SkillItem title="Time management" level="Intermediate" />
              <SkillItem title="Mentoring and Knowledge Sharing" level="Intermediate" />
            </div>
          </div>
        </AnimatedCard>
      </div>
    </div>
  );
};

export default Skills;
