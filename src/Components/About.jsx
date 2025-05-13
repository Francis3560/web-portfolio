import React, { useState } from "react";
import aboutImage from "../assets/About.png"; 

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-black text-white px-10 md:px-20 py-6 flex flex-col md:flex-row items-center justify-between">
      {/* Image Section - Now on the left */}
      <div className="mt-10 md:mt-0 md:mr-10">
        <img src={aboutImage} alt="About Illustration" className="w-[450px] h-auto" />
      </div>

      {/* Text Section - Now on the right */}
      <div className="max-w-xl space-y-4">
        <h2 className="text-4xl font-bold">
          About <span className="text-green-400">me</span>
        </h2>

        <p className="text-gray-300 leading-relaxed">
          I'm a solutions-driven Software Engineer with a passion for building intuitive, scalable web and mobile applications.
          I specialize in React Native, Python, and RESTful APIs — developing tools that boost productivity and simplify digital experiences.
          I’ve contributed to real-world products like an e-commerce mobile app and a task management platform.
          {expanded && (
            <>
              {" "}
              At AlphaNex Software and through personal projects, I’ve honed my skills in full-stack development, AI solutions,
              and cross-platform design. With a focus on client success, I transform complex requirements into clean, functional code.
            </>
          )}
          {!expanded && <span className="text-white">...</span>}
        </p>

        <button
          onClick={() => setExpanded(!expanded)}
          className="text-green-400 font-semibold mt-2 hover:underline"
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </section>
  );
};

export default AboutSection;
