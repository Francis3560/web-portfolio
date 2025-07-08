import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaCheckCircle } from 'react-icons/fa';
import Project1 from '../assets/Project1.png';
import Project2 from '../assets/Project2.png';
import Project5 from '../assets/Project5.png';
import Project3 from '../assets/Project3.png';
import Project4 from"../assets/Project4.png";
import Project6 from '../assets/Project6.png';

const projects = [
  {
    id: 1,
    name: 'DukaTrack POS Web Development',
    category: 'Web Development',
    images: [Project1],
    tech: ['React', 'Tailwind CSS', 'Figma','Express','Mongo'],
    description: 'An interactive platform for all business personell for record tracking and real time sales analysis.',
    status: 'Completed',
    link: 'https://dukatrack.com/'
  },
  {
    id: 2,
    name: 'Flex Living Real Estate Website',
    category: 'Mobile Application',
    images: [Project4],
    tech: ['React', 'Tailwind CSS', 'Express','Mongo'],
    description: 'A realtor website for booking, renting and even buying realtor properties from agencies.',
    status: 'In Progress'
  },
  {
    id: 3,
    name: 'ML based Sentiment Analysis',
    category: 'Machine Learning',
    images: [Project3],
    tech: ['React', 'NLTK', 'FASTAPI','Artificial Intelligence'],
    description: 'A software tool that is used for real time tweet sentiment classification.',
    status: 'Completed'
  },
  {
    id: 4,
    name: 'AI & Machine Learning Based ERP',
    category: 'Desktop Application',
    images: [Project5],
    tech: ['React', 'Logistic Regression', 'FASTAPI','Artificial Intelligence'],
    description: 'A comprehensive ERP desktop application with capability of predicting future performance of learners based on some factors',
    status: 'In Progress'
  },
    {
    id: 5,
    name: 'FireOrion Branding Company',
    category: 'Web Development',
    images: [Project2],
    tech: ['React', 'Tailwind CSS', 'Express','Mongo'],
    description: 'A full-stack POD company website, for automatic canvas design, customization and delivery of white label products.',
    status: 'In Progress'
  },
    {
    id: 6,
    name: 'Healthy Living Herbal Clinic WordPress Website',
    category: 'Web Design',
    images: [Project6],
    tech: ['WordPress'],
    description: 'A comprehensive E-comerce website for online herbal products ordering and delivery worldwide',
    status: 'Completed'
  }
];

const categories = ['All', 'Machine Learning', 'Web Development', 'Desktop Application','Mobile Application','Web Design'];

export default function MyProjects() {
  const [openModal, setOpenModal] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const handleOpen = (project) => {
    setActiveProject(project);
    setOpenModal(true);
  };

 return (
  <div className="bg-black text-white py-10 px-4 min-h-screen">
    <div className="max-w-screen-xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-white mb-6">
        My  <span className="bg-gradient-to-r from-green-400 to-cyan-400 text-transparent bg-clip-text">Projects</span>
      </h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full transition-all border ${
              selectedCategory === category
                ? 'bg-green-400 text-black border-green-400'
                : 'bg-transparent text-white border-gray-600 hover:border-green-400'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-2 md:px-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpen(project)}
            className="cursor-pointer rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 hover:shadow-lg hover:ring-2 ring-green-400"
          >
            <img src={project.images[0]} alt={project.name} className="w-full h-60 object-cover rounded-md" />
          </div>
        ))}
      </div>
    </div>

    {/* Modal */}
    {openModal && activeProject && (
      <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex items-center justify-center px-4">
        <div className="bg-gray-900 text-white rounded-lg max-w-2xl w-full p-6 relative">
          <button
            className="absolute top-2 right-2 text-gray-400 hover:text-white"
            onClick={() => setOpenModal(false)}
          >
            ✕
          </button>
          <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
            {activeProject.images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Slide ${index}`} className="rounded-md" />
              </div>
            ))}
          </Carousel>
          <h3 className="text-2xl font-semibold mt-4">{activeProject.name}</h3>
          <p className="text-green-400 mt-2">{activeProject.tech.join(', ')}</p>
          <p className="mt-4 text-gray-300">{activeProject.description}</p>
          <a href={activeProject.link} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block text-red-400 hover:underline break-all"
          >
  {activeProject.link}
</a>

          <div className="mt-6 flex items-center justify-between">
            <span className={`text-sm ${activeProject.status === 'Completed' ? 'text-green-400' : 'text-yellow-400'}`}>
              {activeProject.status}
            </span>
            {activeProject.status === 'Completed' && <FaCheckCircle className="text-green-400 text-xl" />}
          </div>
        </div>
      </div>
    )}
  </div>
);
}