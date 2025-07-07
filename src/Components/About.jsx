import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import aboutImage from "../assets/Aboutme.png";
import {
  FaCode, FaLaptopCode, FaBrain, FaUserTie, FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython,
  FaGit, FaFigma, FaShopify
} from "react-icons/fa";
import {
  SiNextdotjs, SiTailwindcss, SiMongodb, SiMysql, SiPostman, SiExpo, SiGooglescholar
} from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

// Reusable skill badge
const SkillBadge = ({ icon, label }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="bg-gradient-to-br from-gray-800 to-gray-900 backdrop-blur-lg bg-opacity-30 text-white px-5 py-3 rounded-xl flex items-center gap-3 shadow-md border border-white/10"
  >
    <span className="text-xl">{icon}</span>
    <span className="font-semibold">{label}</span>
  </motion.div>
);

const AboutSection = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-black text-white px-6 md:px-20 py-16">
      {/* Heading */}
      <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
        <motion.span initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2, duration: 0.4 }} className="inline-block bg-gray-900 text-green-400 px-4 py-1 rounded-full text-sm font-semibold tracking-wide">🟢 ABOUT ME</motion.span>
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 0.6 }} className="text-5xl md:text-6xl font-extrabold mt-6">
          Bringing Ideas to <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">Life</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }} className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
          I'm a full-stack developer passionate about building elegant solutions that solve real-world problems.
        </motion.p>
      </motion.div>

      {/* Image and About */}
      <div className="flex flex-col md:flex-row items-start justify-between gap-10 mb-16">
        {/* Image */}
        <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}>
          <img src={aboutImage} alt="About Illustration" className="w-[400px] md:w-[450px] h-auto rounded-2xl shadow-lg" />
        </motion.div>

        {/* About Text */}
        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className="max-w-xl">
          <p className="text-lg text-gray-300 leading-relaxed">
            <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">I'm</span> a solutions-driven Software Engineer with a passion for building intuitive, scalable web and mobile applications.
            I specialize in <span className="text-white font-medium">React Native</span>, <span className="text-white font-medium">Python</span>, and <span className="text-white font-medium">RESTful APIs</span>.
            I’ve contributed to real-world products like an e-commerce mobile app and a task management platform.
            {expanded && <> At AlphaNex Software and through personal projects, I’ve honed my skills in full-stack development, AI solutions, and cross-platform design. With a focus on client success, I transform complex requirements into clean, functional code.</>}
            {!expanded && <span className="text-white">...</span>}
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-col items-start gap-4">
            <button onClick={() => setExpanded(!expanded)} className="text-green-400 font-semibold hover:underline">
              {expanded ? "Read less" : "Read more"}
            </button>

            <div className="flex flex-wrap gap-4">
              <motion.a whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 300 }} href="https://mail.google.com/mail/?view=cm&fs=1&to=jamradi80@gmail.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-300 border border-green-500 px-5 py-2 rounded-md font-medium hover:bg-green-900/10 transition-all">Let's work together <span className="text-xl">→</span></motion.a>

              <motion.a whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }} href="/Resume.pdf" download className="inline-flex items-center gap-2 text-white border border-gray-500 px-5 py-2 rounded-md font-medium hover:bg-gray-800 transition-all">Download CV <Download size={16} /></motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Feature Cards */}
      <div className="mb-20">
        <h3 className="text-3xl font-bold text-center mb-10">
          <span className="text-green-400">
            <Typewriter
              words={["Why to choose me", "Core Strengths", "Let’s Build Together"]}
              loop={0}
              cursor
              cursorStyle="🟢"
              typeSpeed={100}
              deleteSpeed={70}
              delaySpeed={1500}
            />
          </span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.2 }} className="bg-gray-900 p-6 rounded-2xl hover:shadow-xl hover:scale-105 transition-transform duration-300 group cursor-pointer">
              <div className="text-green-400 text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technical Skills */}
      <div className="text-center">
        <h3 className="text-3xl font-bold mb-6 text-green-400">
          <Typewriter
            words={["Technical Expertise", "My Skill Set", "Tech Stack Mastery"]}
            loop={0}
            cursor
            cursorStyle="🟢"
            typeSpeed={90}
            deleteSpeed={60}
            delaySpeed={2000}
          />
        </h3>

        {skillGroups.map((group, idx) => (
          <div key={idx} className="mb-8">
            <h4 className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text text-lg font-semibold mb-4">
              {group.title}
            </h4>
            <div className="flex flex-wrap gap-4 justify-center ">
              {group.skills.map((skill, i) => (
                <SkillBadge key={i} icon={skill.icon} label={skill.label} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Core Strengths
const features = [
  {
    title: "Clean Code",
    icon: <FaCode />,
    description: "I write clean, maintainable code with a focus on readability and performance.",
  },
  {
    title: "Full Stack",
    icon: <FaLaptopCode />,
    description: "Experienced in both frontend and backend development with modern frameworks.",
  },
  {
    title: "Problem Solver",
    icon: <FaBrain />,
    description: "I approach complex challenges with analytical thinking and creative solutions.",
  },
  {
    title: "Professional",
    icon: <FaUserTie />,
    description: "I deliver projects on time with clear communication throughout the process.",
  },
];

// Skill groups
const skillGroups = [
  {
    title: "Frontend Stack",
    skills: [
      { label: "React.js", icon: <FaReact /> },
      { label: "Next.js", icon: <SiNextdotjs /> },
      { label: "HTML5", icon: <FaHtml5 /> },
      { label: "Tailwind CSS", icon: <SiTailwindcss /> },
      { label: "CSS3", icon: <FaCss3Alt /> },
      { label: "WordPress & Shopify", icon: <FaShopify /> },
    ],
  },
  {
    title: "Backend Stack",
    skills: [
      { label: "Node.js", icon: <FaNodeJs /> },
      { label: "Python", icon: <FaPython /> },
      { label: "MySQL", icon: <SiMysql /> },
      { label: "REST API's", icon: <DiJavascript1 /> },
      { label: "MongoDB", icon: <SiMongodb /> },
    ],
  },
  {
    title: "Tools",
    skills: [
      { label: "Git", icon: <FaGit /> },
      { label: "Postman", icon: <SiPostman /> },
      { label: "Expo", icon: <SiExpo /> },
      { label: "Google Colab", icon: <SiGooglescholar /> },
    ],
  },
  {
    title: "UI/UX Design",
    skills: [
      { label: "Figma", icon: <FaFigma /> },
      { label: "Responsive Designs", icon: <FaLaptopCode /> },
      { label: "Animated Designs", icon: <FaBrain /> },
    ],
  },
];

export default AboutSection;
