import React from "react";
import { Download, ArrowDown } from "lucide-react";
import heroImage from "../assets/Hero1.png";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden text-white px-6 md:px-20 flex items-center z-10">
      {/* 🔹 Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dqp3wil8i/video/upload/v1751970349/13820343_3840_2160_30fps_hi0ph2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 bg-opacity-20 z-0"></div>

      {/* 🔹 Content Layer */}
      <div className="relative z-10 flex flex-col md:flex-row justify-between w-full items-center">
        {/* Left Text Area */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">Francis</span>{" "}
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
              Ongere.
            </span>
          </h1>
          <p>
            I'm a dynamic Software Engineer with a strong background in full-stack development and API integration.
            I build scalable, user-focused web and mobile solutions that streamline business processes.
            With hands-on experience in React Native, Python, and FASTAPI, I deliver real-world results.
            Passionate about innovation, I turn ideas into impactful digital products.
          </p>

          {/* Skill Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2 border border-green-500 text-green-300 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5">
              <span>⚛️</span> <span className="font-medium">React & Next.js</span>
            </div>
            <div className="flex items-center gap-2 border border-blue-400 text-blue-300 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5">
              <span>📱</span> <span className="font-medium">Mobile Development</span>
            </div>
            <div className="flex items-center gap-2 border border-green-500 text-green-300 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5">
              <span>🔋</span> <span className="font-medium">Node.js & MongoDB</span>
            </div>
            <div className="flex items-center gap-2 border border-yellow-400 text-yellow-300 px-4 py-2 rounded-full backdrop-blur-sm bg-white/5">
              <span>🛒</span> <span className="font-medium">WordPress & Shopify</span>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="hidden md:block">
          <img
            src={heroImage}
            alt="Illustration"
            className="w-[450px] h-auto drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-10">
        <ArrowDown className="text-green-400 animate-bounce" size={30} />
      </div>
    </section>
  );
};

export default HeroSection;
