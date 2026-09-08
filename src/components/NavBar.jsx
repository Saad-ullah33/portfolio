import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

// Use all lowercase IDs to match HTML standard convention
const sections = ["home", "about", "qualification", "skills", "portfolio", "contact"];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [isHome, setIsHome] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Smooth scroll to section with case-insensitive fallback
  const scrollToSection = (id) => {
    setOpen(false);

    // Checks exact id, lowercase id, or capitalized id
    const el =
      document.getElementById(id) ||
      document.getElementById(id.toLowerCase()) ||
      document.getElementById(id.charAt(0).toUpperCase() + id.slice(1));

    if (!el) {
      console.warn(`Section with ID "${id}" not found.`);
      return;
    }

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Scroll spy + visibility check
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const total =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(total > 0 ? (scrollY / total) * 100 : 0);

      // Keep navbar visible as long as user is near/on Home
      const homeEl = document.getElementById("home");
      if (homeEl) {
        const homeRect = homeEl.getBoundingClientRect();
        setIsHome(homeRect.bottom > 150);
      } else {
        setIsHome(scrollY < 300);
      }

      // Track active section
      sections.forEach((sec) => {
        const el =
          document.getElementById(sec) ||
          document.getElementById(sec.toLowerCase()) ||
          document.getElementById(sec.charAt(0).toUpperCase() + sec.slice(1));

        if (!el) return;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 200 && rect.bottom >= 200) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isHome && (
        <>
          {/* SCROLL PROGRESS BAR */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent"
          >
            <div
              className="h-full bg-cyan-400 shadow-[0_0_12px_#22d3ee]"
              style={{ width: `${scrollProgress}%` }}
            />
          </motion.div>

          {/* FIXED TOP-LEFT LOGO */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 sm:top-6 left-4 sm:left-8 z-50"
          >
            <button
              onClick={() => scrollToSection("home")}
              className="px-3.5 py-1.5 rounded-2xl bg-[#0f172a]/60 backdrop-blur-xl border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.25)] text-xl sm:text-2xl font-extrabold tracking-wider text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/30 transition-all active:scale-95"
            >
              MS
            </button>
          </motion.div>

          {/* FLOATING CENTERED NAVBAR */}
          <motion.header
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -25 }}
            transition={{ duration: 0.3 }}
            className="fixed top-4 sm:top-6 inset-x-0 z-40 flex flex-col items-center px-4 pointer-events-none"
          >
            <nav className="pointer-events-auto flex items-center justify-center px-3 sm:px-4 py-2 rounded-full border transition-all duration-300 backdrop-blur-xl bg-[#0f172a]/60 border-white/10 shadow-[0_4px_24px_0_rgba(0,0,0,0.25)]">
              {/* DESKTOP LINKS */}
              <ul className="hidden md:flex items-center gap-1.5">
                {sections.map((sec) => (
                  <li key={sec}>
                    <button
                      onClick={() => scrollToSection(sec)}
                      className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-200 capitalize
                      ${
                        active === sec
                          ? "text-cyan-300"
                          : "text-slate-300 hover:text-white"
                      }`}
                    >
                      {sec}

                      {active === sec && (
                        <motion.div
                          layoutId="activePill"
                          className="absolute inset-0 bg-cyan-400/10 border border-cyan-400/30 rounded-full -z-10 shadow-[0_0_12px_rgba(34,211,238,0.2)]"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </button>
                  </li>
                ))}
              </ul>

              {/* MOBILE TOGGLE */}
              <button
                className="md:hidden flex items-center gap-2 px-3 py-1 text-sm font-medium text-cyan-400 hover:text-cyan-300 transition"
                onClick={() => setOpen(!open)}
                aria-label="Toggle Menu"
              >
                <span className="capitalize text-slate-300">{active}</span>
                {open ? <X size={20} /> : <Menu size={20} />}
              </button>
            </nav>

            {/* MOBILE DROPDOWN */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -10, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -10, scale: 0.96 }}
                  transition={{ duration: 0.2 }}
                  className="pointer-events-auto mt-2 w-full max-w-xs bg-[#0f172a]/90 backdrop-blur-2xl border border-white/10 rounded-2xl p-3 shadow-2xl md:hidden overflow-hidden"
                >
                  <div className="flex flex-col gap-1">
                    {sections.map((sec) => (
                      <button
                        key={sec}
                        onClick={() => scrollToSection(sec)}
                        className={`flex items-center px-4 py-2 text-sm font-medium rounded-xl capitalize text-left transition-all
                        ${
                          active === sec
                            ? "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        {sec}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.header>
        </>
      )}
    </AnimatePresence>
  );
};

export default NavBar;