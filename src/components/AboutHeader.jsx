import React from "react";
import { FaBrain, FaChartLine, FaGlobeAsia, FaRocket } from "react-icons/fa";

export default function AboutHeader() {
  const points = [
    {
      icon: <FaBrain className="text-3xl text-yellow-500" />,
      title: "End-to-End Brand Strategy",
      description: "Comprehensive brand planning from identity to positioning and messaging.",
    },
    {
      icon: <FaRocket className="text-3xl text-yellow-500" />,
      title: "Hands-on Digital Marketing Execution",
      description: "From content to campaigns, he directly oversees what moves the needle.",
    },
    {
      icon: <FaChartLine className="text-3xl text-yellow-500" />,
      title: "Growth & Analytics Consulting",
      description: "Data-backed strategies for scaling impact and ROI.",
    },
    {
      icon: <FaGlobeAsia className="text-3xl text-yellow-500" />,
      title: "Cross-Cultural Market Insight",
      description: "Deep understanding of both Indian and UAE consumer behavior.",
    },
  ];

  const milestones = [
    {
      year: "2020",
      title: "Founded SK Way Pvt Ltd",
      description: "A one-stop solution for business consulting and digital marketing.",
    },
    {
      year: "2021",
      title: "Launched EKA Cosmetics",
      description: "A clean beauty brand focused on transparency and innovation.",
    },
    {
      year: "2024",
      title: "Appointed as Algorithm Consultant Partner at Reporter",
      description: "Helping brands optimize content, visibility, and growth using data science.",
    },
    {
      year: "2025",
      title: "Trillion Edition Founded",
      description: "Trillion Edition, is a premium label redefining exclusivity and luxury branding.",
    },
  ];

  return (
    <div>
      {/* Intro Section */}
      <section className="bg-black text-gray-300 px-4 py-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          {/* Left */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Meet Sham SK</h2>
            <p className="text-yellow-500 text-lg font-medium">The Man Behind the Vision</p>
          </div>
          {/* Right */}
          <div>
            <p className="text-lg leading-relaxed">
              Sham SK is not just a serial entrepreneur, he is a catalyst for growth. With a sharp
              eye for emerging trends and a passion for building businesses from the ground up, Sham
              has carved a niche as one of the region's most forward-thinking brand consultants.
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative max-w-5xl mx-auto px-4 py-16 mt-10">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-600 z-0"></div>

          {milestones.map((item, index) => (
            <div
              key={index}
              className={`relative mb-20 flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Card */}
              <div className="w-full md:w-5/12 bg-yellow-500 text-black shadow-lg rounded-lg p-6 z-10">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="mt-2">{item.description}</p>
              </div>

              {/* Year */}
              <div className="absolute lg-top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                <div className="lg:bg-black  text-white rounded-full w-16 h-16 flex items-center justify-center text-lg font-bold shadow-md">
                  {item.year}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Closing Line */}
        <p className="text-xl lg:text-2xl font-light text-gray-300 text-center px-4 py-12">
          With over 4 years of industry experience, Sham continues to be a strategic partner for
          brands, helping them craft digital narratives and drive performance across platforms.
        </p>
      </section>

      {/* Strengths Section */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Sets Him Apart</h2>
          <p className="text-gray-400 text-lg">
            Unique strengths that drive results across borders and industries.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="transition duration-300 rounded-xl p-6 shadow-md hover:shadow-yellow-500 transform hover:-translate-y-1"
            >
              <div className="flex items-center gap-4 mb-4">
                {item.icon}
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-400 text-md">{item.description}</p>
            </div>
          ))}
        </div>

        <p className="text-xl lg:text-2xl font-light text-gray-300 text-center px-4 py-12">
          Sham believes in building brands with soul, those that create value, inspire loyalty, and
          scale ethically.
        </p>
      </section>
    </div>
  );
}
