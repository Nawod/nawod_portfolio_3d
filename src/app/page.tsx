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
            <div className="w-full flex flex-wrap py-4 gap-2 justify-center">
                <div className="text-center">©️ Nawod Madhuwantha</div>
                <div className="text-center"> - dev.nawod@gmail.com</div>
                <div className="text-center"> - +94 076 399 1948</div>
            </div>
        </div>
    );
};

export default Home;
