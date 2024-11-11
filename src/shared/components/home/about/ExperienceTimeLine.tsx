"use client";
/**
 * @class ExperienceTimeLine
 * @description purpose of this component is to render experience as a time line
 * @author Nawod Madhuvantha
 */
import React from "react";
import "react-vertical-timeline-component/style.min.css";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import Image from "next/image";
import { ExperienceList } from "@/shared/constants/about";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ExperienceTimeLine = () => {
    useGSAP(() => {
        const elements = gsap.utils.toArray(".vertical-timeline-element--work");

        if (!elements) {
            return;
        }

        elements.forEach((el, index) => {
            const xPosition = index % 2 === 1 ? 100 : -100;
            gsap.fromTo(
                el as HTMLElement,
                {
                    opacity: 0,
                    x: xPosition,
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el as HTMLElement,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        });
    });

    return (
        <div className="relative z-40 overflow-x-hidden">
            <VerticalTimeline animate={false}>
                {ExperienceList.list
                    .slice()
                    .reverse()
                    .map((item) => (
                        <VerticalTimelineElement
                            key={item.id}
                            className="vertical-timeline-element--work exp-timeline"
                            contentStyle={{
                                color: "#fff",
                                background:
                                    "linear-gradient(135deg, rgba(91, 172, 62, 0.2), rgba(133, 221, 82, 0.2), rgba(36, 109, 27, 0.2))",
                                backdropFilter: "blur(10px)",
                                WebkitBackdropFilter: "blur(10px)",
                                border: "1px solid rgba(255, 255, 255, 0.1)",
                                borderRadius: "0.5rem",
                                padding: "1rem",
                                boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                            }}
                            contentArrowStyle={{
                                borderRight: "7px solid #246d1b",
                            }}
                            date={item.date}
                            iconStyle={{ color: "#fff", background: "black" }}
                            icon={
                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={item.icon}
                                        alt={`${item.icon} logo`}
                                        className="object-scale-down"
                                        fill
                                    />
                                </div>
                            }
                        >
                            <div className="flex flex-wrap items-center gap-4">
                                {item.skills.map((skill) => (
                                    <div
                                        key={skill.id}
                                        className="text-sm pt-[2px] pb-[4px] px-[16px] rounded-2xl roboto bg-theme"
                                    >
                                        {skill.value}
                                    </div>
                                ))}
                            </div>
                            <h3 className="anton text-xl mt-4">
                                {item.designation}
                            </h3>
                            <Link
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="text-xl cursor-pointer"
                            >
                                {item.company}
                                <span className="inline-block">
                                    , {item.location}
                                </span>
                            </Link>
                            <ul className="mt-4">
                                {item.tasks.map((task) => (
                                    <li
                                        key={task.id}
                                        className="text-lg relative pl-6 before:content-[''] before:absolute before:left-0 before:top-[10px] before:w-2 before:h-2 before:bg-themeLight before:rounded-sm"
                                    >
                                        {task.value}
                                    </li>
                                ))}
                            </ul>
                        </VerticalTimelineElement>
                    ))}
            </VerticalTimeline>
        </div>
    );
};

export default ExperienceTimeLine;
