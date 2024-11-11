"use client";
/**
 * @class Projects
 * @description purpose of this component is to render the Projects page
 * @author Nawod Madhuvantha
 */

import { styles } from "@/app/styles/styles";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ProjectSlider from "./ProjectSlider";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Projects = () => {
    useGSAP(() => {
        const entryTl = gsap.timeline({
            scrollTrigger: {
                trigger: ".project-section",
                start: "top bottom",
                end: "bottom bottom",
                scrub: true,
                // markers: true,
            },
        });
        entryTl.to(".project-section", {
            marginTop: "-100vh",
        });
        gsap.timeline({
            scrollTrigger: {
                trigger: ".skill-wrapper",
                endTrigger: ".project-section",
                start: "top 25%",
                end: "bottom bottom",
                pin: ".skill-wrapper",
                // markers: true,
            },
        });
    });

    return (
        <section
            className={`${styles.padding} pt-8 pb-40 project-section w-full mx-auto container relative bg-background z-50`}
            id="projects"
        >
            <div className="projects-title z-10 relative">
                <div
                    className="section-title"
                    style={
                        { "--title-text": '"Projects"' } as React.CSSProperties
                    }
                >
                    Projects
                </div>
            </div>
            <p className="project-subtitle pl-2 lg:mb-8 mb-24 lg:text-3xl text-xl md:w-[50%] w-70% text-center sm:text-left">
                Some of my recent works
            </p>
            <div>
                <ProjectSlider />
            </div>
        </section>
    );
};

export default Projects;
