// Footer.jsx
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-10 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
        {/* Branding */}
        <div className="text-center sm:text-left">
          <h2 className="text-xl font-bold text-white">Sham SK</h2>
        </div>

        {/* Navigation Links (optional) */}
        <div className="flex justify-center space-x-6 text-sm">
          <Link to="/" className="hover:text-white">HOME</Link>
          <Link to="/about" className="hover:text-white">ABOUT</Link>
          <Link to="/projects" className="hover:text-white">CONTACT</Link>
        </div>

        {/* Social Icons */}
        {/* <div className="flex justify-center sm:justify-end space-x-4">
          <a href="#" className="hover:text-white">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/sk_official_com?igsh=MWRhazN2eHowNW52eQ==" className="hover:text-white">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-white">
            <FaTwitter />
          </a>
          <a href="https://www.linkedin.com/in/sham-kumar-s-350525203" className="hover:text-white">
            <FaLinkedinIn />
          </a>
          <a href="mailto:ceo@socialbureau.in" className="hover:text-white">
            <FaEnvelope />
          </a>
        </div> */}
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()}. All rights reserved.
      </div>
    </footer>
  );
}
