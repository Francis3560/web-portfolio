import React from "react";
import { Download, ArrowDown } from "lucide-react";
import heroImage from "../assets/Hero1.png";

const HeroSection = () => {
  return (
    <section className="bg-black text-white h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
      {/* Top Area - Flex Row */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        {/* Left Text Area */}
        <div className="space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold">
            <span className="text-white">Francis</span>{" "}
            <span className="text-green-400">Ongere.</span>
          </h1>
          <p className="text-white">
            I'm a dynamic Software Engineer with a strong background in full-stack development and API integration.
            I build scalable, user-focused web and mobile solutions that streamline business processes.
            With hands-on experience in React Native, Python, and FASTAPI, I deliver real-world results.
            Passionate about innovation, I turn ideas into impactful digital products.
          </p>

          {/* Skill Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-center gap-2 border border-green-500 text-green-300 px-4 py-2 rounded-full">
              <span>⚛️</span> <span className="font-medium">React & Next.js</span>
            </div>
            <div className="flex items-center gap-2 border border-blue-400 text-blue-300 px-4 py-2 rounded-full">
              <span>📱</span> <span className="font-medium">Mobile Development</span>
            </div>
            <div className="flex items-center gap-2 border border-green-500 text-green-300 px-4 py-2 rounded-full">
              <span>🔋</span> <span className="font-medium">Node.js & MongoDB</span>
            </div>
            <div className="flex items-center gap-2 border border-yellow-400 text-yellow-300 px-4 py-2 rounded-full">
              <span>🛒</span> <span className="font-medium">WordPress & Shopify</span>
            </div>
          </div>
        </div>

        {/* Right Image Area */}
        <div className="hidden md:block">
          <img src={heroImage} alt="Illustration" className="w-[450px] h-auto" />
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ArrowDown className="text-green-400 animate-bounce" size={30} />
      </div>
    </section>
  );
};

export default HeroSection;
