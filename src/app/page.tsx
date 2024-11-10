/**
 * @class Home
 * @description purpose of this component is to render the main page of the website
 * @author Nawod Madhuvantha
 */

import React from "react";
import HeroSection from "@/shared/components/home/heroSection";
import Projects from "@/shared/components/home/projects/Projects";

const Home = () => {
  return (
    <div className="w-screen relative">
      <HeroSection />
      <Projects />
      <section
        className="h-screen bg-blue-950"
        id="contact"
      >
        contact
      </section>
    </div>
  );
};

export default Home;
