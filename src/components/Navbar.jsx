import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    // Smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Scroll background change
    const nav = document.querySelector(".nav-menu");
    const onScroll = () => {
      if (window.scrollY > 100) {
        nav.style.background = "rgba(10, 10, 10, 0.95)";
      } else {
        nav.style.background = "rgba(10, 10, 10, 0.9)";
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="nav-menu fixed top-0 left-0 right-0 z-50 py-4 bg-[rgba(10,10,10,0.9)] backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold font-playfair text-white" style={{fontFamily:'Playfair'}}>Sham SK</div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 text-sm text-gray-400">
          <Link to="/" className="hover:text-white">HOME</Link>
          <Link to="/about" className="hover:text-white">ABOUT</Link>
          <Link to="/projects" className="hover:text-white">CONTACT</Link>
        </nav>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-white text-xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pt-4 pb-6 bg-[rgba(10,10,10,0.95)] text-white text-sm space-y-4">
          <Link to="/" onClick={closeMenu} className="block">HOME</Link>
          <Link to="/about" onClick={closeMenu} className="block">ABOUT</Link>
          <Link to="/projects" onClick={closeMenu} className="block">CONTACT</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
