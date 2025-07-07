import React from 'react';
import Header from "./Components/Header";
import Hero from "./Components/HeroSection";
import About from "./Components/About";
import MyProjects from "./Components/MyProjects";
import ContactMe from './Components/ContactMe';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import { Element } from 'react-scroll';

export default function App() {
  return (
    <div className="overflow-x-hidden" >
      <Header />

      <Element name="home">
        <Hero />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="projects">
        <MyProjects/>
      </Element>

       <Element name="contact">
         <Resume/>
      </Element>

      
      <Element name="resume">
        <ContactMe/>
      </Element>


      <Footer/>



    </div>
  );
}
