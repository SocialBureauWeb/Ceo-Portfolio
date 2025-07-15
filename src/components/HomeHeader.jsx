import React, { useEffect } from "react";
import { FaUserTie, FaChevronDown } from "react-icons/fa";

export const HomeHeader = () => {
  useEffect(() => {
    // Smooth scroll
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(anchor => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });

    // Navbar background scroll
    const nav = document.querySelector(".nav-menu");
    const onScroll = () => {
      if (window.scrollY > 100) {
        nav.style.background = "rgba(10, 10, 10, 0.95)";
      } else {
        nav.style.background = "rgba(10, 10, 10, 0.9)";
      }
    };
    window.addEventListener("scroll", onScroll);

    // Intersection animations
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    document.querySelectorAll(".timeline-item, .brand-item").forEach(item => {
      item.style.opacity = "0";
      item.style.transform = "translateY(20px)";
      item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      observer.observe(item);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div>
      <style>{`
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        .hero-name {
          font-size: 4rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #ffffff 0%, #cccccc 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        @media (max-width: 768px) {
          .hero-name {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <section
        id="home"
        className="pt-[25vh] hero-section min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 to-transparent flex items-center justify-center text-white relative"
      >
        <div className="text-center z-10 px-4">
          {/* Avatar Circle */}
          <div className=" md:w-72 md:h-72 rounded-full flex items-center justify-center mx-auto mb-6">
        <img 
          src="assets/sham.jpg" 
          alt="photo" 
          className="w-[50vh] h-[45vh] object-cover pb-10 rounded-t-full"
        />
          </div>

          {/* Name */}
          <h1 className="hero-name font-playfair ">SHAM SK</h1>

          {/* Subtitle */}
          <p className="text-lg text-gray-400 tracking-wide">
            Entrepreneur. Strategist. Brand Architect.
          </p>

          {/* Scroll Prompt */}
          <div className="mt-16 md:mt-20 text-sm text-gray-400">
            <p>SCROLL DOWN</p>
            <FaChevronDown className="mt-2 text-white animate-bounce mx-auto" />
          </div>
        </div>
      </section>
    </div>
  );
};
