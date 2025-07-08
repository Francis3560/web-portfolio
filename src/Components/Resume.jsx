import React, { useEffect, useState } from "react";
import { FaGraduationCap, FaBriefcase, FaClipboardCheck } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const education = [
  { year: "2025– To Date", title: "CISCO Networking", place: "Networking Academy" },
  { year: "2021–2025", title: "Software Engineering", place: "Kisii University" },
  { year: "2017–2020", title: "Secondary Education", place: "Kisumu School" },
];

const experience = [
  { year: "2025 – Present", title: "Internship", place: "Aplance Agency" },
  { year: "June 2024– September 2024", title: "Industrial Attachment", place: "AlphaNex Software Limited" },
  { year: "2021– 2024", title: "KUSCA Club Memembership", place: "Kisii University" }
];

const skills = [
  { name: "Web Design", percent: 85, color: "bg-green-400" },
  { name: "Mobile Application", percent: 55, color: "bg-green-400" },
  { name: "Web Development", percent: 85, color: "bg-green-400" },
  { name: "Desktop Application", percent: 60, color: "bg-green-400" },
  { name: "Machine Learning", percent: 75, color: "bg-green-400" },
];

const knowledges = [
  "Digital Design", "Marketing", "Communication", "Social Media",
  "Time Management", "Problem Solving", "Collaboration",
];

const Resume = () => {
  const [animatedSkills, setAnimatedSkills] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    const timer = setTimeout(() => setAnimatedSkills(skills), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-white px-6 sm:px-4 py-10">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="https://res.cloudinary.com/dqp3wil8i/video/upload/v1751970349/13820343_3840_2160_30fps_hi0ph2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Main Content */}
      <div className="relative z-10">
        {/* Heading */}
        <div className="flex items-center justify-center mb-12">
          <h1 className="text-3xl font-bold flex items-center gap-2 bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">
            <FaClipboardCheck className="text-green-400 text-4xl" />
            Resume
          </h1>
        </div>

        <div className="pl-9 pr-9 border border-green-400 rounded-lg bg-black/50 backdrop-blur-sm">
          {/* Top Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
            {/* Education */}
            <div data-aos="fade-right">
              <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-green-400">
                <FaGraduationCap /> Education
              </h2>
              <div className="space-y-4">
                {education.map((item, idx) => (
                  <div key={idx} className="border border-green-400 rounded p-4 hover:shadow-lg transition">
                    <p className="text-sm text-gray-400">{item.year}</p>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.place}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div data-aos="fade-left">
              <h2 className="flex items-center gap-2 text-2xl font-semibold mb-6 text-green-400">
                <FaBriefcase /> Experience
              </h2>
              <div className="space-y-4">
                {experience.map((item, idx) => (
                  <div key={idx} className="border border-green-400 rounded p-4 hover:shadow-lg transition">
                    <p className="text-sm text-gray-400">{item.year}</p>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-gray-400">{item.place}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Skills */}
            <div data-aos="fade-up">
              <h2 className="text-2xl font-semibold mb-6 text-green-400">Working Skills</h2>
              <div className="space-y-5 pt-3 mb-5">
                {animatedSkills.map((skill, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between mb-1">
                      <span>{skill.name}</span>
                      <span>{skill.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-white rounded">
                      <div
                        className={`${skill.color} h-full rounded transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.percent}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Knowledges */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h2 className="text-2xl font-semibold mb-6 text-green-400">Knowledges</h2>
              <div className="flex flex-wrap gap-3">
                {knowledges.map((tag, idx) => (
                  <span key={idx} className="bg-green-400 text-sm px-3 py-1 rounded-full text-black font-bold">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Tech Stack */}
              <div data-aos="fade-up" data-aos-delay="300" className="mt-10">
                <h2 className="text-2xl font-semibold mb-6 text-green-400">Tech Stack</h2>
                <div className="flex flex-wrap gap-6 text-4xl">
                  <i className="devicon-react-original colored hover:text-white transition"></i>
                  <i className="devicon-wordpress-plain hover:text-white transition"></i>
                  <i className="devicon-python-plain colored hover:text-white transition"></i>
                  <i className="devicon-express-original hover:text-white transition"></i>
                  <i className="devicon-mongodb-plain colored hover:text-white transition"></i>
                  <img src="https://cdn.shopify.com/static/shopify-favicon.png" alt="Shopify" className="w-6 h-6 hover:scale-110 transition" />
                  <i className="devicon-firebase-plain colored hover:text-white transition"></i>
                  <i className="devicon-mysql-plain colored hover:text-white transition"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> {/* z-10 content wrapper */}
    </div>
  );
};

export default Resume;
