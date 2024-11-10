/**
 * @class Hero
 * @description purpose of this component is to render the Hero page
 * @author Nawod Madhuvantha
 */

import { styles } from "@/app/styles/styles";
import NeonButton from "../../buttons/NeonButton";
import { Link } from "react-scroll";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextSplitter } from "@/shared/models/TextSplitter";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = () => {
    useGSAP(() => {
        gsap.set(".hero-section", { duration: 1, opacity: 1 });
        if (window.scrollY < 20) {
            const introTl = gsap.timeline();
            introTl
                .set(".hero-section", { duration: 1, opacity: 1 })
                .from(".hero-title .split-char", {
                    opacity: 0,
                    stagger: 0.1,
                    ease: "back.out(3)",
                    delay: 1,
                    duration: 0.1,
                })
                .from(".hero-subtitle", {
                    opacity: 0,
                    duration: 1,
                })
                .from(
                    ".hero-btn",
                    {
                        opacity: 0,
                        y: 60,
                        duration: 1,
                    },
                    "<"
                );
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
    });

    return (
        <section
            className={`${styles.padding} hero-section w-full h-screen mx-auto container opacity-0`}
            id="home"
        >
            <div className="mt-[43%] sm:mt-[22%] lg:mt-[10%] sm:z-10 z-40 relative">
                <h1 className="hero-title text-7xl rubik lg:text-9xl sm:text-8xl glow-effect">
                    <TextSplitter text={"Hi,"} />
                </h1>
                <h1 className="hero-title flex gap-4 text-7xl rubik lg:text-9xl sm:text-8xl glow-effect flex-wrap">
                    <TextSplitter text={`I'm Nawod`} />
                </h1>
                <p className="hero-subtitle mt-8 lg:mb-8 mb-24 lg:text-3xl text-xl md:w-[50%] w-70%">
                    I&apos;m a passionate software engineer skilled in web
                    development
                </p>
                <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    delay={500}
                    className="hero-btn"
                >
                    <NeonButton title="Get in touch" />
                </Link>
            </div>
            <div className="hero-bg h-screen w-screen absolute top-0 left-0">
                <Image
                    src="/heroBg.jpg"
                    alt="hero background"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default Hero;
