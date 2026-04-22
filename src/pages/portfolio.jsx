import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projectsData = [
  {
    id: 1,
    name: "E-Commerce App",
    desc: "A full-scale MERN marketplace with secure payments and real-time inventory management.",
    category: "MERN",
    image: "/projects/ecommerce.jpg", // Ensure path is correct
    tech: ["MongoDB", "Express", "React", "Node"],
    progress: 80,
  },
  {
    id: 2,
    name: "Chat App",
    desc: "Real-time communication suite featuring private messaging and group channels.",
    category: "Backend",
    image: "/projects/chat.jpg",
    tech: ["Socket.io", "Redis", "Node.js"],
    progress: 70,
  },
  {
    id: 3,
    name: "Portfolio Website",
    desc: "High-performance portfolio with Framer Motion animations and dark-mode aesthetic.",
    category: "Frontend",
    image: "/projects/portfolio.jpg",
    tech: ["React", "Tailwind", "Framer Motion"],
    progress: 95,
  },
];

const categories = ["All", "MERN", "Frontend", "Backend"];

const Portfolio = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredProjects = projectsData.filter((p) => {
    const matchCategory = active === "All" || p.category === active;
    const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <section id="portfolio" className="py-24 px-6 md:px-20 bg-[#0f172a] text-slate-200 min-h-screen">
      
      {/* HEADER SECTION */}
      <div className="max-w-6xl mx-auto mb-16 text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A collection of my recent work, ranging from complex full-stack applications to refined frontend experiences.
          </p>
        </motion.div>

        {/* FILTERS & SEARCH */}
        <div className="mt-10 flex flex-col md:flex-row gap-6 justify-between items-center">
          <div className="relative w-full md:w-96">
            <input
              type="text"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-5 py-3 rounded-xl bg-slate-800/50 border border-slate-700 text-white placeholder-slate-500 focus:ring-2 focus:ring-cyan-500/50 outline-none transition-all"
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  active === cat
                    ? "bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/20"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECTS GRID */}
      <motion.div 
        layout
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => (
            <motion.div
              key={p.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group relative bg-slate-900/40 border border-slate-800 rounded-3xl overflow-hidden hover:border-cyan-500/50 transition-colors"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                
                {/* Category Badge on Image */}
                <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                  <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-bold">{p.category}</span>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                  {p.name}
                </h3>
                <p className="text-slate-400 text-sm mt-2 line-clamp-2">
                  {p.desc}
                </p>

                {/* TECH STACK TAGS */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tech?.map((t) => (
                    <span key={t} className="text-[10px] bg-slate-800 px-2 py-1 rounded text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* PROGRESS SECTION */}
                <div className="mt-6 space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-slate-500 tracking-tighter">PROJECT STATUS</span>
                    <span className="text-cyan-400">{p.progress}%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${p.progress}%` }}
                      transition={{ duration: 1, delay: 0.2 }}
                      className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                    ></motion.div>
                  </div>
                </div>

                {/* ACTION BUTTON */}
                <button
                  onClick={() => navigate(`/project/${p.id}`)}
                  className="w-full mt-6 py-3 rounded-xl bg-slate-800 text-white font-semibold text-sm hover:bg-cyan-500 hover:text-slate-900 transition-all duration-300"
                >
                  View Case Study
                </button>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* EMPTY STATE */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-500">No projects found matching your search.</p>
        </div>
      )}
    </section>
  );
};

export default Portfolio;