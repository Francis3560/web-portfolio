import React from "react";
import { Download, ArrowDown } from "lucide-react";
import heroImage from "../assets/Hero.png"; 

const HeroSection = () => {
  return (
    <section className="bg-black text-white h-screen flex items-center justify-between px-10 md:px-20">
      {/* Left Text Area */}
      <div className="space-y-6 max-w-xl">
        <h1 className="text-4xl md:text-6xl font-bold">
          <span className="text-white">Software</span>{" "}
          <span className="text-green-400">Engineer</span>
        </h1>
        <p className="text-white">I'm a dynamic Software Engineer with a strong background in full-stack development and API integration.
           I build scalable, user-focused web and mobile solutions that streamline business processes.
           With hands-on experience in React Native, Python, and FASTAPI, I deliver real-world results.
           Passionate about innovation, I turn ideas into impactful digital products.
        </p>

        <div className="flex gap-4">
        <a
  href="https://mail.google.com/mail/?view=cm&fs=1&to=jamradi80@gmail.com"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-green-400 text-black font-semibold py-2 px-6 rounded-full hover:border-2 hover:border-green-400 hover:bg-transparent hover:text-green-400 transition-all duration-300"
>
  Email
</a>

       <a
        href="/Resume.pdf"
        download
        className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-full flex items-center gap-2 hover:border-2 hover:border-green-400 hover:bg-transparent hover:text-green-400 transition-all duration-300"
       >
        Download CV <Download size={16} />
        </a>
     </div>

      </div>

      {/* Right Image Area */}
      <div className="hidden md:block">
        <img src={heroImage} alt="Illustration" className="w-[450px] h-auto" />
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="text-green-400 animate-bounce" size={30} />
      </div>
    </section>
  );
};

export default HeroSection;
