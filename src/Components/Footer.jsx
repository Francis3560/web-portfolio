import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaInstagram,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-scroll";
import profileImg from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 mt-0 shadow-inner border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left: Logo and Name */}
        <div className="flex items-center space-x-3">
          <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full" />
          <span className="text-lg font-semibold">JamTech</span>
        </div>

        {/* Center: Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm">
          <Link to="home" smooth offset={-80} duration={500} className="cursor-pointer hover:text-green-400 transition">Home</Link>
          <Link to="about" smooth offset={-80} duration={500} className="cursor-pointer hover:text-green-400 transition">About</Link>
          <Link to="contact" smooth offset={-80} duration={500} className="cursor-pointer hover:text-green-400 transition">Contact</Link>
          <Link to="resume" smooth offset={-80} duration={500} className="cursor-pointer hover:text-green-400 transition">Resume</Link>
          <Link to="projects" smooth offset={-80} duration={500} className="cursor-pointer hover:text-green-400 transition">All Projects</Link>
        </nav>

        {/* Right: Social Icons */}
        <div className="flex space-x-4 text-xl text-green-400">
          <a href="https://www.linkedin.com/in/francis-ongere-67b385309/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
          <a href="https://github.com/Francis3560" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
          <a href="https://x.com/KDenyque" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaTwitter /></a>
          <a href="https://wa.me/message/HGTF5M72JG45N1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/franko_scar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaInstagram /></a>
          <a href="https://t.me/Sewesydaa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaTelegram /></a>
        </div>
      </div>

      {/* Bottom note */}
      <div className="mt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} JamTech. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
