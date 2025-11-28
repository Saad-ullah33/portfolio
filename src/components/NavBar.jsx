import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [open, setOpen] = useState(false);

  const linkClasses = `
    relative px-3 py-2 text-black
    hover:text-white transition-all duration-300
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0
    after:bg-black after:transition-all after:duration-300 hover:after:w-full hover:scale-105
  `;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-wheat shadow">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold font-caveat text-gray-800"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          MS
        </Link>

        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center">
          <li><a className={linkClasses} href="/">Home</a></li>
          <li><a className={linkClasses} href="#about">About</a></li>
          <li><a className={linkClasses} href="#skills">Skills</a></li>
          {/* <li><a className={linkClasses} href="#portfolio">Portfolio</a></li> */}
          <li><a className={linkClasses} href="#contact">Contact</a></li>
        </ul>

      </nav>

      {/* Mobile Dropdown Menu */}
      {open && (
        <ul className="md:hidden flex flex-col bg-wheat px-6 pb-4 gap-3 shadow">
          <li><a onClick={() => setOpen(false)} className={linkClasses} href="/">Home</a></li>
          <li><a onClick={() => setOpen(false)} className={linkClasses} href="#about">About</a></li>
          <li><a onClick={() => setOpen(false)} className={linkClasses} href="#skills">Skills</a></li>
          {/* <li><a className={linkClasses} href="#portfolio">Portfolio</a></li> */}
          <li><a onClick={() => setOpen(false)} className={linkClasses} href="#contact">Contact</a></li>
        </ul>
      )}
    </header>
  );
};

export default NavBar;
