import React from "react";
import { FaAward } from "react-icons/fa";

const HomeIntro = () => {
  return (
    <section className="bg-black text-white py-16 px-4 md:px-20">
      <h2
        id="biography"
        className="text-3xl md:text-4xl font-bold text-center mb-4"
      >
        BIOGRAPHY & IMPACT
      </h2>
      <p className="text-center text-gray-300 mb-12 uppercase tracking-widest">
        One of the most innovative entrepreneurs and strategists
      </p>

      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* Left Text */}
        <div className="text-lg space-y-6 font-inter md:w-1/2 px-10">
          <p>
            <strong>Sham SK</strong> – a name synonymous with innovation, digital transformation,
            and strategic brand growth across India and the Middle East.
          </p>
          <p>
            From humble beginnings to becoming a trusted consultant for leading enterprises,{" "}
            <strong>Sham's journey reflects his commitment to excellence and impact-driven leadership.</strong>
          </p>
        </div>

        {/* Right Icon */}
        <div className="flex flex-col items-center text-center md:w-1/2 ">
          <div className="w-64 h-64 rounded-full flex items-center justify-center shadow-lg">
<img 
  src="assets/ceo.jpg" 
  alt="photo" 
  className="w-80 h-80 rounded-full object-cover m-10"
/>
          </div>
          <p className="text-sm text-gray-400 mt-10">
            Trusted by leading brands across Kerala and UAE
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomeIntro;
