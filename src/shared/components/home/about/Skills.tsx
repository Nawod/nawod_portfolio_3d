/**
 * @class Skills
 * @description purpose of this component is to render the skills
 * @author Nawod Madhuvantha
 */

import { TechList } from "@/shared/constants/about";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Skills = () => {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".skill-items",
                start: "top 80%",
                end: "bottom 50%",
                toggleActions: "play none none reverse",
            },
        });

        timeline
            .fromTo(
                ".skill-title",
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                }
            )
            .fromTo(
                ".skill-item",
                { opacity: 0, scale: 1.2 },
                {
                    opacity: 1,
                    scale: 1,
                    duration: 0.2,
                    stagger: 0.2,
                },
                "<"
            );
    });

    return (
        <div className="skill-items flex flex-row flex-wrap justify-center gap-4 sm:gap-8 z-40 relative">
            {TechList.list.map((item) => (
                <p
                    className="skill-item roboto rounded-lg px-8 py-4 block-3d"
                    key={item.id}
                >
                    {item.value}
                </p>
            ))}
        </div>
    );
};

export default Skills;
