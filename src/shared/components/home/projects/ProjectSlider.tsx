"use client";
import { ProjectList } from "@/shared/constants/projects";
import Image from "next/image";
import Link from "next/link";
/**
 * @class ProjectSlider
 * @description purpose of this component is to render the slider of projects
 * @author Nawod Madhuvantha
 */

import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectSlider = () => {
    return (
        <div className="h-full w-full pb-40 -mt-24 -sm:mt-32">
            <Swiper
                grabCursor={true}
                navigation
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    580: { slidesPerView: 2 },
                    1200: { slidesPerView: 3 },
                }}
                loop={true}
                className="project-swiper h-full max-w-full pt-32"
                modules={[Navigation]}
                style={{ paddingTop: "8rem" }}
            >
                {ProjectList.list
                    .slice()
                    .reverse()
                    .map((item) => (
                        <SwiperSlide
                            key={item.id}
                            className="project-item relative"
                        >
                            <div className="relative card-wrapper box-border py-6 px-4 rounded-3xl bg-secondary-metallic shadow-3d">
                                <div className="relative w-full h-40 rounded-lg metallic-overlay">
                                    <Image
                                        src={item.image}
                                        alt={`nawod's projects ${item.title} image | Nawod Madhuwantha Creative Web Developer | Angular, React, Next.js, TypeScript, Three.JS | 3D Web Design, Parallax Effects, Responsive Solutions`}
                                        fill
                                        className="rounded-lg object-cover"
                                    />
                                </div>
                                <div className="text-xl anton mt-4 text-center metallic-text">
                                    {item.title}
                                </div>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {item.technologies.map((tech) => (
                                        <div
                                            className="text-sm pt-[2px] pb-[4px] px-[16px] rounded-2xl roboto bg-pin-metallic"
                                            key={tech.id}
                                        >
                                            {tech.value}
                                        </div>
                                    ))}
                                </div>
                                <div className="mb-4 mt-4 leading-4 text-lg">
                                    {item.description}
                                </div>
                                <Link
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="block w-full cursor-pointer roboto text-center font-semibold p-2 rounded-lg uppercase bg-theme-metallic text-shine"
                                >
                                    Preview
                                </Link>
                                <span className="nail top-2 left-2"></span>
                                <span className="nail top-2 right-2"></span>
                                <span className="nail bottom-2 left-2"></span>
                                <span className="nail bottom-2 right-2"></span>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default ProjectSlider;
