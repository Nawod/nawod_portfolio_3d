/**
 * @class Hero
 * @description purpose of this component is to render the Hero page
 * @author Nawod Madhuvantha
 */

import { styles } from "@/app/styles/styles";
import NeonButton from "../../buttons/NeonButton";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextSplitter } from "@/shared/models/TextSplitter";
import { scrollToSection } from "@/shared/models/ScrollToView";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store/store";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
    const { isLoad } = useSelector((state: RootState) => state.loaderStates);
    useGSAP(
        () => {
            if (!isLoad) {
                return;
            }

            if (window.scrollY < 20) {
                const introTl = gsap.timeline({
                    onComplete: () => {
                        document.body.classList.remove("no-scroll");
                    },
                });
                introTl
                    .to(".hero-title .split-char", {
                        opacity: 1,
                        stagger: 0.1,
                        ease: "back.out(3)",
                        duration: 0.1,
                    })
                    .to(".hero-subtitle", {
                        opacity: 1,
                        duration: 1,
                    })
                    .to(
                        ".hero-btn",
                        {
                            opacity: 1,
                            duration: 1,
                        },
                        "<"
                    );
            } else {
                document.body.classList.remove("no-scroll");
                gsap.set(".hero-title .split-char", {
                    opacity: 1,
                });
                gsap.set(".hero-subtitle", {
                    opacity: 1,
                });
                gsap.set(".hero-btn", {
                    opacity: 1,
                });
            }

            const outroTl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".about-section",
                    start: "top 70%", // Adjusts when animation starts
                    end: "top 40%",
                    scrub: 1,
                    // markers: true,
                },
            });

            outroTl
                .to(".hero-title", {
                    opacity: 0.8,
                    y: -40,
                    ease: "back.out(3)",
                })
                .to(
                    ".hero-subtitle",
                    {
                        opacity: 0.4,
                        y: -40,
                        ease: "back.out(3)",
                    },
                    "<"
                )
                .to(
                    ".hero-btn",
                    {
                        opacity: 0.2,
                        y: -40,
                    },
                    "<"
                )
                .to(
                    ".hero-bg",
                    {
                        opacity: 0,
                        y: 200,
                    },
                    "<"
                );

            ScrollTrigger.refresh();
        },
        { dependencies: [isLoad] }
    );

    return (
        <section
            className={`${styles.padding} hero-section w-full h-screen mx-auto container`}
            id="home"
        >
            <div className="mt-[43%] sm:mt-[22%] lg:mt-[10%] sm:z-10 z-40 relative">
                <h1 className="hero-title text-7xl rubik lg:text-9xl sm:text-8xl glow-effect">
                    <TextSplitter text={"Hi,"} />
                </h1>
                <h1 className="hero-title flex gap-4 text-7xl rubik lg:text-9xl sm:text-8xl glow-effect flex-wrap">
                    <TextSplitter text={`I'm Nawod`} />
                </h1>
                <p className="hero-subtitle mt-8 lg:mb-8 mb-24 lg:text-3xl text-xl md:w-[50%] w-70% opacity-0">
                    Your Creative Web Developer | Expert in Next.js & React
                    Solutions
                </p>
                <div className="hero-btn opacity-0">
                    <NeonButton
                        title="Get in touch"
                        onClickAction={() => scrollToSection("contact")}
                    />
                </div>
            </div>
            <div className="hero-bg h-screen w-screen absolute top-0 left-0">
                <Image
                    src="/heroBg.jpg"
                    alt="Nawod Madhuwantha Creative Web Developer | Angular, React, Next.js, TypeScript, Three.JS | 3D Web Design, Parallax Effects, Responsive Solutions"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;
