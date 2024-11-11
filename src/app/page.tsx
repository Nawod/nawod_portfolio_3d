/**
 * @class Home
 * @description purpose of this component is to render the main page of the website
 * @author Nawod Madhuvantha
 */

import React from "react";
import HeroSection from "@/shared/components/home/heroSection";
import Projects from "@/shared/components/home/projects";
import Contact from "@/shared/components/home/contact";

const Home = () => {
    return (
        <div className="w-screen relative">
            <HeroSection />
            <Projects />
            <Contact />
        </div>
    );
};

export default Home;
