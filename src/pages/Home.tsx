import React from "react";
import Hero from "../sections/Hero";
import Background from "../sections/Background";
import FeaturedProjects from "../sections/FeaturedProjects";
import Skills from "../sections/Skills";
import Contact from "../sections/Contact";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <Background />
      <FeaturedProjects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
