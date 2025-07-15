import React from "react";

export const HomeJourney = () => {
  const timelineData = [
    {
      year: "2020",
      title: "SK WAY PVT LTD FOUNDED",
      description:
        "Sham SK began his professional journey by founding SK Way International, a business consulting and digital marketing firm built on the core principles of integrity, vision, and strategy. Under his leadership, SK Way quickly became a growth partner for startups and enterprises seeking digital transformation.",
    },
    {
      year: "2021",
      title: "EKA COSMETICS LAUNCH",
      description:
        "Driven by his passion for lifestyle and wellness, Sham ventured into the beauty industry with the launch of EKA Cosmetics, a brand that blends modern skincare science with ethical values. EKA became a rising player in the beauty space, reflecting Sham's ability to shape consumer trends with clarity and confidence.",
    },
    {
      year: "2023",
      title: "ALGORITHM CONSULTANT PARTNER AT REPORTER",
      description:
        "Following the success of Reporter, Sham was appointed as an Algorithm Consultant, marking a new chapter in his data-driven consulting expertise and establishing him as a thought leader in algorithmic strategy and implementation.",
    },
    {
      year: "2025",
      title: "TRILLION EDITION FOUNDED",
      description:
        "Trillion Edition, is a premium label redefining exclusivity and luxury branding. Launched in early 2025, it represents the next evolution in his entrepreneurial narrative—merging design, innovation, and storytelling.",
    },
  ];

  return (
    <div>
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">
        A JOURNEY THAT INSPIRES
      </h2>
      <p className="text-center text-gray-300 mb-12 uppercase tracking-widest">
        Key milestones in building a legacy of innovation and growth
      </p>

      <section
        className="bg-black text-white py-16 px-6 md:px-20 font-inter"
      >
        <div className="relative border-l-2 border-gray-700 max-w-5xl mx-auto ml-4 md:ml-6">
          {timelineData.map((item, index) => (
            <div
              key={index}
              className="mb-16 relative pl-10 timeline-item"
            >
              {/* Dot */}
              <div className="absolute -left-2.5 top-2 w-4 h-4 bg-yellow-500 rounded-full border-4 border-black"></div>

              <h3 className="text-2xl font-bold mb-1 text-yellow-500">{item.year}</h3>
              <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
