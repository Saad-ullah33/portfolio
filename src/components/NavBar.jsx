import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sections = ["home", "about", "skills", "portfolio", "contact"];

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // ✅ Smooth scroll to section (NO ROUTER = NO BUGS)
  const scrollToSection = (id) => {
    setOpen(false);

    const el = document.getElementById(id);
    if (!el) return;

    el.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // ✅ Scroll spy + progress bar
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setScrolled(scrollY > 30);

      const total =
        document.documentElement.scrollHeight - window.innerHeight;

      setScrollProgress((scrollY / total) * 100);

      sections.forEach((sec) => {
        const el = document.getElementById(sec);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 150 && rect.bottom >= 150) {
          setActive(sec);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* PROGRESS BAR */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
        <motion.div
          className="h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* NAVBAR */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
        bg-[#0f172a]/70 backdrop-blur-xl border-b border-white/10
        ${scrolled ? "shadow-lg" : ""}`}
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

          {/* LOGO */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-bold text-cyan-400"
          >
            MS
          </button>

          {/* DESKTOP MENU */}
          <ul className="hidden md:flex gap-8">

            {sections.map((sec) => (
              <li key={sec}>
                <button
                  onClick={() => scrollToSection(sec)}
                  className={`relative px-2 py-2 text-sm transition-all duration-300
                  ${
                    active === sec
                      ? "text-cyan-300"
                      : "text-gray-300 hover:text-cyan-300"
                  }`}
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}

                  {/* ACTIVE INDICATOR */}
                  {active === sec && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute left-0 right-0 -bottom-1 h-[2px] bg-cyan-400"
                    />
                  )}
                </button>
              </li>
            ))}

          </ul>

          {/* MOBILE BUTTON */}
          <button
            className="md:hidden text-cyan-400"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>

        </nav>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/10"
          >
            <div className="flex flex-col px-6 py-4 gap-4">

              {sections.map((sec) => (
                <button
                  key={sec}
                  onClick={() => scrollToSection(sec)}
                  className="text-left text-gray-300 hover:text-cyan-300 transition"
                >
                  {sec.charAt(0).toUpperCase() + sec.slice(1)}
                </button>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;