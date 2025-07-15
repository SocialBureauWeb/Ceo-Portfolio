import React from "react";
import { FaChevronDown } from "react-icons/fa";

export const HomeHeader = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-black text-white relative pt-[20vh]"
    >
      <div className="text-center px-4">
        {/* Arched Image Frame */}
        <div className="w-[300px] h-[500px] mx-auto overflow-hidden rounded-t-full relative mb-8">
          <img
            src="assets/sham.jpg"
            alt="Sham SK"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name */}
        <h1 style={{fontFamily:'Playfair'}} className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-wider bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          SHAM SK
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-gray-400 text-base md:text-lg">
          Entrepreneur. Strategist. Brand Architect.
        </p>

        {/* Scroll Down Prompt */}
        <div className="mt-16 text-sm text-gray-400">
          <p>SCROLL DOWN</p>
          <FaChevronDown className="mt-2 text-white animate-bounce mx-auto" />
        </div>
      </div>
    </section>
  );
};
