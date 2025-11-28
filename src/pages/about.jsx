import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import brief from "../assets/brief.svg";
import coffee from "../assets/coffee.svg";
import circle from "../assets/circle.svg";

export default function About() {
  const [isHovered, setIsHovered] = useState(false);
  const [spots, setSpots] = useState([]);
  const [burstSpots, setBurstSpots] = useState([]);
  const [scrollY, setScrollY] = useState(0);

  const handleDownloadCv = () => {
    const link = document.createElement(`a`);
    link.href = "";
    link.download = "Saadullah_CV.pdf";
    link.click();
  };

  const colors = [
    "#2D1B3D", "#1E3A5F", "#0F4C3A", "#4A2C2A",
    "#5C2A1E", "#1E5F5F", "#3E2A47", "#000000",
  ];

  const getRandomColor = () =>
    colors[Math.floor(Math.random() * colors.length)];

  const initialSpots = Array.from({ length: 25 }, (_, index) => ({
    id: index,
    x: Math.random() * 250,
    y: Math.random() * 250,
    size: Math.random() * 40 + 20,
    color: getRandomColor(),
  }));

  useEffect(() => {
    setSpots(initialSpots);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSpotClick = (spot) => {
    setSpots((prev) => prev.filter((s) => s.id !== spot.id));
    const newBurst = Array.from({ length: 3 }, (_, index) => ({
      id: Date.now() + index,
      x: spot.x + (Math.random() * 100 - 50),
      y: spot.y + (Math.random() * 100 - 50),
      size: 20,
    }));
    setBurstSpots((prev) => [...prev, ...newBurst]);
    setTimeout(() => setBurstSpots([]), 1000);
  };

  const randomizePosition = () => ({
    x: Math.random() * 250,
    y: Math.random() * 250,
  });

  const handleDragEnd = (e, info, spot) => {
    const { x, y } = info.point;
    const updated = spots.map((s) => {
      if (s.id === spot.id) return { ...s, x, y };
      const dist = Math.sqrt((x - s.x) ** 2 + (y - s.y) ** 2);
      if (dist < s.size / 2 + spot.size / 2) {
        const angle = Math.atan2(y - s.y, x - s.x);
        const offset = s.size / 2 + spot.size / 2 - dist;
        return {
          ...s,
          x: x + Math.cos(angle) * offset,
          y: y + Math.sin(angle) * offset,
        };
      }
      return s;
    });
    setSpots(updated);
  };

  return (
    <section id="about" className="w-full py-24 px-4 md:px-20 bg-wheat">
      <div className="max-w-7xl mx-auto">
        {/* Headings */}
        <h1 className="text-3xl md:text-4xl text-gray-700 font-bold text-center mb-2">
          About Me
        </h1>
        <h3 className="text-xl md:text-2xl text-gray-700 text-center mb-12">
          My Introduction
        </h3>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Circle Animation */}
          <div className="w-full h-80 md:h-[400px] relative overflow-hidden mx-auto">
            {spots.map((spot) => (
              <motion.div
                key={spot.id}
                className="absolute rounded-full shadow-xl"
                style={{
                  width: `${spot.size}px`,
                  height: `${spot.size}px`,
                  backgroundColor: spot.color,
                  cursor: "pointer",
                }}
                animate={{
                  x: randomizePosition().x,
                  y: randomizePosition().y + Math.sin(scrollY / 100) * 10,
                  scale: isHovered ? 1.2 : 1,
                }}
                transition={{ type: "spring", stiffness: 50, damping: 10, duration: 3 }}
                onHoverStart={() => setIsHovered(true)}
                onHoverEnd={() => setIsHovered(false)}
                onClick={() => handleSpotClick(spot)}
                onDragEnd={(e, info) => handleDragEnd(e, info, spot)}
                drag
              />
            ))}
            {burstSpots.map((burst) => (
              <motion.div
                key={burst.id}
                className="absolute rounded-full"
                animate={{ opacity: [1, 0], scale: [1, 0] }}
                transition={{ duration: 0.6 }}
                style={{
                  left: `${burst.x}px`,
                  top: `${burst.y}px`,
                  width: `${burst.size}px`,
                  height: `${burst.size}px`,
                  backgroundColor: getRandomColor(),
                }}
              />
            ))}
          </div>

          {/* Right Text & Cards */}
          <div className="space-y-6">
            <div className="flex flex-wrap justify-center md:justify-start gap-5">
              {/* Card 1 */}
              <div className="w-[130px] h-[110px] bg-white rounded-md p-3 flex flex-col items-center justify-center shadow-md">
                <img src={brief} alt="briefCase" className="w-8 h-8 mb-1 bg-white" />
                <p className="font-bold text-sm bg-white">Experience</p>
                <p className="text-sm bg-white">8+ Months</p>
              </div>
              {/* Card 2 */}
              <div className="w-[130px] h-[110px] bg-white rounded-md p-3 flex flex-col items-center justify-center shadow-md">
                <img src={circle} alt="circle" className="w-10 h-8 mb-1 bg-white" />
                <p className="font-bold text-sm bg-white">Completed</p>
                <p className="text-sm bg-white">8+</p>
              </div>
              {/* Card 3 */}
              <div className="w-[130px] h-[110px] bg-white rounded-md p-3 flex flex-col items-center justify-center shadow-md">
                <img src={coffee} alt="coffee" className="w-10 h-8 mb-1 bg-white" />
                <p className="font-bold text-sm bg-white">Coffees</p>
                <p className="text-sm bg-white">500+</p>
              </div>
            </div>

            {/* Paragraph */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed">
              I’m a <b>Full Stack Software Engineer</b>. I specialize in building scalable, user-focused web applications using modern technologies. My expertise includes <b>RESTful APIs, cloud integration, database design</b>, and <b>responsive UIs</b>. I'm also experienced with <b>DevOps</b> practices, including CI/CD, Docker, and deployments on Azure. I thrive in both independent and Agile team environments, <b>solving complex problems</b> with clean, efficient code. Motivated software engineer seeking to make a way into the immense Software Industry. Passionate about building user-friendly solutions.
            </p>

            {/* Download Button */}
            <div className="flex justify-center md:justify-start">
              <button
                className="border-2 border-gray-700 text-gray-700 rounded-full px-6 py-2 hover:bg-gray-700 hover:text-white transition-all duration-300"
                onClick={handleDownloadCv}
              >
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export { About };