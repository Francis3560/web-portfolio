import React, { useState } from "react";
import {
  FaBars, FaTimes, FaLinkedin, FaGithub,
  FaWhatsapp, FaInstagram, FaTelegram, FaTwitter
} from "react-icons/fa";
import { Link } from "react-scroll";
import profileImg from "../assets/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = "cursor-pointer hover:text-green-400 transition";
  const activeLinkClass = "text-green-400 font-semibold";

  return (
    <header className="bg-black text-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Left: Avatar and Name */}
        <div className="flex items-center space-x-3">
          <img src={profileImg} alt="Profile" className="w-10 h-10 rounded-full" />
          <span className="text-lg font-semibold">Francis Odhiambo</span>
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl focus:outline-none">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Center: Nav Links (Desktop Only) */}
        <nav className="hidden md:flex flex-1 justify-center space-x-10 text-sm">
          <Link to="home" spy smooth offset={-80} duration={500} activeClass={activeLinkClass} className={linkClass}>Home</Link>
          <Link to="about" spy smooth offset={-80} duration={500} activeClass={activeLinkClass} className={linkClass}>About</Link>
           <Link to="projects" spy smooth offset={-80} duration={500} activeClass={activeLinkClass} className={linkClass}>All Projects</Link>
          <Link to="contact" spy smooth offset={-80} duration={500} activeClass={activeLinkClass} className={linkClass}>Contact</Link>
          <Link to="resume" spy smooth offset={-80} duration={500} activeClass={activeLinkClass} className={linkClass}>Resume</Link>
         
        </nav>

        {/* Right: Social Icons (Desktop Only) */}
        <div className="hidden md:flex space-x-4 text-xl text-green-400">
          <a href="https://www.linkedin.com/in/francis-ongere-67b385309/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
          <a href="https://github.com/Francis3560" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
          <a href="https://x.com/KDenyque" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaTwitter /></a>
          <a href="https://wa.me/message/HGTF5M72JG45N1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/franko_scar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaInstagram /></a>
          <a href="https://t.me/Sewesydaa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaTelegram /></a>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-6 mr-8 pb-4 space-y-4 bg-black text-sm">
          <nav className="flex flex-col space-y-2">
            <Link to="home" spy smooth offset={-80} duration={500} activeClass={activeLinkClass} className={linkClass} onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="about" spy smooth offset={-80} duration={500} activeClass={activeLinkClass} className={linkClass} onClick={() => setIsOpen(false)}>About</Link>
            <Link to="contact" spy smooth offset={-80} duration={500} activeClass={activeLinkClass} className={linkClass} onClick={() => setIsOpen(false)}>Contact</Link>
            <Link to="resume" spy smooth offset={-80} duration={500} activeClass={activeLinkClass} className={linkClass} onClick={() => setIsOpen(false)}>Resume</Link>
            <Link to="projects" spy smooth offset={-80} duration={500} activeClass={activeLinkClass} className={linkClass} onClick={() => setIsOpen(false)}>All Projects</Link>
          </nav>
          <div className="flex space-x-4 text-xl text-green-400 pt-2">
            <a href="https://www.linkedin.com/in/francis-ongere-67b385309/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaLinkedin /></a>
            <a href="https://github.com/Francis3560" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaGithub /></a>
            <a href="https://x.com/KDenyque" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaTwitter /></a>
            <a href="https://wa.me/message/HGTF5M72JG45N1" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaWhatsapp /></a>
            <a href="https://www.instagram.com/franko_scar/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaInstagram /></a>
            <a href="https://t.me/Sewesydaa" target="_blank" rel="noopener noreferrer" className="hover:text-white transition"><FaTelegram /></a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
