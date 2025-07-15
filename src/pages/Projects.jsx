import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from "framer-motion";
import { FaEnvelope, FaInstagram, FaLinkedin, FaMapMarkerAlt } from 'react-icons/fa';

export const Projects = () => {
  const points = [
    {
      img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAA4CAMAAAC16DqDAAAArlBMVEX+AAD/////AADyAAD9+/v79fXxe3rshobxycnvhYbsa2jwY2f6AAD8///3AADmAAD77u7spKPuOTf3z9DnZmjoZWPoc3Twdnfus7Hpe3nx5uXogH/nXF7wXWLrqKXuhH/niInrl5LmTE3ourfmNjfuSUfvPkHwm5z2wsTkl5f3wL3uGBruWVrbdXXeAAD14uDfFRLlKiveraziHCDhpab12djbTkvgPTzfaGjhwcJyR9yJAAACCUlEQVRIie2WW5eaMBSFsyEZ6VSJgVEQ7YxyEy8jpZZq//8fa4Kjotyc167ZD5Ls87kXHjlRAlojoNamIIzrVfWAUY3NB4TpWlXfgOcaWy9wcq8TXrU/h5Mv/Av/D/DaaRrVTxMdP1XkuIBwqvYEBJ3ySutu3NCnJZzNvlf047VMa/1eCa/7qG8lWnbkytc38u2Glvy0Fe9d6I/iOb8V/8guNO3EjXLplN+Cl7PPfDN+R0v1WnCj6sv+NOHVbKV5A+7VuCq/KX1h1tDarPHe63i/pTPLe17zW/u+MG8rfse3esOr7I5npsz7DzyRF/6U3YVf+uO3TtN12or8czYafuTnuOEv9AMnwcK80o+cM0FpTVhoWWEchfISx5ZlRVGk9mqpXOnLvSrFcewPyNC3bXvJE/m6Whv22tI2rtHTt4Vr24btCrl0Xw072cozcviCwMWKeUK8U08wtgNSrI9IXAhhIFjmVIhFSkWKn1D4S4ZfLH929jTgAX6Dm3OsMMrgag6ifj4cOWHucYGQKhxgGQPDhMmlSORoxPJN0j0QB34/B6Mil/uEF+l/8pTTYLfbwcg2ZIKln9N3zPJU154Unu44T9MDJurej/B9HNW/tb9INI2Y8nAfbMfKHWsTiaey5KWeblCVziPdDPdheIj34aYvpfNQJ3rhqgvJZAutzOrrkcSp0Sz73sA/m5Eys3qopDYAAAAASUVORK5CYII=",
      title: "Reporter",
      role: "Algorithm Consultant Partner",
      desc: "Built a digital-first platform with algorithm-driven reach. Helped Reporter become a credible voice for next-gen news consumers.",
    },
    {
      img: "https://api.lakshyacommerce.com/uploads/backend/setting/1714646008734logo.png",
      title: "Lakshya",
      role: "Algorithm Consultant",
      desc: "Digital positioning, campaign management, and audience engagement across platforms.",
    },
    {
      img: "https://yt3.googleusercontent.com/RS4KMxrEwCPXSvbTyH9pdMFGobFRPb584qiiwfsbRmvZAFxyjNAuuDOPAeoZ07NV-X8ctfauXg=s160-c-k-c0x00ffffff-no-rj",
      title: "Dilse FM",
      role: "Algorithm Consultant Partner [2023-24]",
      desc: "Expanded digital presence, introduced programmatic content flow to increase listener loyalty.",
    },
    {
      img: "https://www.almadinahypermarket.ae/assets/img/madina-logo.png",
      title: "Al Madina UAE",
      role: "Business Expansion Advisor",
      desc: "Market penetration in the UAE, brand localization, and digital strategy.",
    },
    {
      img: "https://www.yellowcloudonline.com/wp-content/uploads/2025/03/yellowcloudonline-3rd.png",
      title: "Yellow Cloud",
      role: "Brand Social Media Algorithm Consultant",
      desc: "Helped refine brand identity, social media strategy, and target audience segmentation.",
    },
    {
      img: "https://hedgeequities.com/Hedge%20Logo/Website%20Images%201100%20x%20320-01.png",
      title: "Hedge & Emaraj",
      role: "Digital Growth Consultant",
      desc: "SEO, content strategy, algorithm optimization for better online visibility.",
    },
  ];

  return (
    <div className="bg-black text-white">
      <Navbar />

      <div className="pt-28 px-6 md:px-12">
        <h2 className="text-4xl md:text-6xl font-bold text-center mb-4">
          PROJECTS & COLLABORATIONS
        </h2>
        <p className="text-center text-xl md:text-2xl text-gray-300 mb-12 uppercase tracking-widest">
          "Impact in Action"
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Column - Sticky Text */}
          <div className="lg:w-1/2">
            <div className="lg:sticky top-28">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                SIGNATURE PROJECTS
              </h2>
              <p className="text-gray-400 text-lg">
                Every brand has a story. Sham SK helps shape it.
              </p>
            </div>
          </div>

          {/* Right Column - Animated Scroll Items */}
          <div className="lg:w-1/2 flex flex-col gap-24">
            {points.map((point, index) => (
              <motion.div
                key={index}
                className="flex flex-col sm:flex-row items-center gap-6"
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true, amount: 0.6 }}
              >
                <div className="flex-shrink-0">
                  <img
                    src={point.img}
                    alt={point.title}
                    className="w-20 h-20 object-contain rounded-lg"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-yellow-500 text-md font-bold">{point.role}</p>
                  <p className="text-gray-400 text-md">{point.desc}</p>
                  <hr className="mt-4 border-gray-700" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Collaboration Section */}
      <section className="py-20 px-6 md:px-20 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Collaborate
        </motion.h2>

        <motion.p
          className="max-w-2xl mx-auto text-lg md:text-xl text-gray-400 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Looking to elevate your brand or business? <br />
          <span className="font-medium">Sham SK</span> brings a rare blend of strategy,
          creativity, and data intelligence to help brands thrive in the digital age.
        </motion.p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-gray-400 text-md md:text-lg">
          <div className="flex items-center gap-2 hover:text-blue-400 transition">
            <FaEnvelope />
            <span>ceo@socialbureau.in</span>
          </div>
          <div className="flex items-center gap-2 hover:text-green-600 transition">
            <FaMapMarkerAlt />
            <span>India, Australia & UAE</span>
          </div>
          {/* <a
            href="https://www.linkedin.com/in/sham-kumar-s-350525203"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-500 transition"
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a> */}
          {/* <a
            href="https://www.instagram.com/sk_official_com?igsh=MWRhazN2eHowNW52eQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-pink-500 transition"
          >
            <FaInstagram />
            <span>Instagram</span>
          </a> */}
        </div>
      </section>

      <Footer />
    </div>
  );
};
