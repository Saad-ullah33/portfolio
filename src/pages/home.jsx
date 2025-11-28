import React from "react";
import img2 from "../assets/img2.jpg";

import About from "./about";
import Skills from "./skills";
// import Portfolio from "./Portfolio";
import Qualification from "./qualification";
import Contact from "./contact";

const Home = () => {
  const handleClick = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div id="home" className="overflow-x-hidden w-full">

      {/* HERO SECTION */}
      <section className="w-full min-h-screen flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-12 md:gap-[250px] bg-wheat">

        {/* Left Content */}
        <div className="text-center md:text-left max-w-md px-1">
          <h1 className="font-bold text-gray-700 text-3xl md:text-4xl">
            Muhammad Saad-Ullah
          </h1>

          <div className="flex md:justify-start justify-center items-center gap-2 pt-2">
            <span className="w-12 md:w-16 h-px bg-gray-400"></span>
            <h3 className="text-lg md:text-xl font-semibold text-gray-700">
              Full Stack Software Engineer
            </h3>
          </div>

          <p className="pt-3 text-gray-700 font-caveat text-lg md:text-xl leading-relaxed">
            "Every challenge is a chance to grow, and I strive to deliver
            excellent work while learning and improving every day."
          </p>

          <button
            onClick={handleClick}
            className="px-4 py-2 bg-wheat text-gray-800 font-semibold rounded-full shadow-md mt-4
                       hover:bg-gray-700 hover:text-white transition-all duration-300 flex items-center gap-3 md:gap-7"
          >
            Say Hello 👋
          </button>
        </div>

        {/* Right Image */}
        <div className="flex-shrink-0 mt-6 md:mt-0">
          <img
            src={img2}
            alt="Saadullah"
            className="w-32 h-32 sm:w-36 sm:h-36 md:w-48 md:h-48 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* OTHER SECTIONS */}
      <section className="w-full bg-wheat">
        <About />
        <Skills />
        {/* <Portfolio /> */}
        <Qualification />
        <Contact />
      </section>
    </div>
  );
};

export default Home;
