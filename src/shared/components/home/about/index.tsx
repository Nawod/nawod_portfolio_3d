/**
 * @class About
 * @description purpose of this component is to render the About page
 * @author Nawod Madhuvantha
 */

import { styles } from "@/app/styles/styles";
import AboutBlockSVG from "@/shared/svg/AboutProfile";
import AboutSelfSVG from "@/shared/svg/AboutSelf";
import AboutWebSVG from "@/shared/svg/AboutWeb";
import NeonButton from "../../buttons/NeonButton";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import ExperienceTimeLine from "./ExperienceTimeLine";
import Skills from "./Skills";
import { scrollToSection } from "@/shared/models/ScrollToView";
import Link from "next/link";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ".profile-section",
                start: "top 85%", // Adjusts when animation starts
                end: "bottom 80%",
                scrub: 1,
                // markers: true,
            },
        });

        timeline
            .from(".about-title", { opacity: 0, y: 50, ease: "back.out(1.4)" })
            .from(".profile-block", { opacity: 0, y: 50, ease: "power2.out" })
            .from(".self-block", { opacity: 0, y: 50, ease: "power2.out" })
            .from(".service-title", { opacity: 0, y: 50, ease: "power2.out" })
            .from(".service-block", { opacity: 0, y: 50, ease: "power2.out" })
            .from(".hire-btn", { opacity: 0, x: -50, ease: "back.out(1.4)" })
            .from(".cv-btn", { opacity: 0, x: 50, ease: "back.out(1.4)" }, "<");

        const bgTl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".profile-section",
                start: "top 100%",
                end: "top 30%",
                scrub: 1,
                // markers: true,
            },
        });

        bgTl1.fromTo(
            ".about-bg",
            { opacity: 0 },
            { opacity: 0.2, ease: "back.out(1.4)" }
        );

        gsap.timeline({
            scrollTrigger: {
                trigger: ".about-bg",
                endTrigger: ".profile-section",
                start: "top top",
                end: "bottom 80%",
                pin: ".about-bg",
                pinSpacing: false,
                // markers: true,
            },
        });
    });

    return (
        <section
            className={`${styles.padding} about-section w-full mx-auto container relative overflow-x-hidden`}
            id="about"
        >
            <div className="h-[20vh]"></div>
            <div className="about-title z-10 relative">
                <div
                    className="section-title"
                    style={
                        { "--title-text": '"About me"' } as React.CSSProperties
                    }
                >
                    About me
                </div>
            </div>
            <div className="mt-12 profile-section md:z-10 z-40 relative">
                <div className="svg-el relative profile-block max-w-[600px] max-h-[200px]">
                    <AboutBlockSVG />
                </div>
                <div className="svg-el relative self-block max-w-[600px] max-h-[300px]">
                    <AboutSelfSVG />
                </div>
                <div className="iceland pl-8 service-title sm:pl-12 text-theme sm:text-lg">
                    Services I Offer :
                </div>
                <div className=" svg-el relative flex service-block max-w-[600px] max-h-[200px]">
                    <AboutWebSVG />
                </div>
                <div className="flex gap-4 mt-12 flex-wrap pl-0 justify-center sm:pl-12 sm:justify-start">
                    <div className="hire-btn">
                        <NeonButton
                            title="Let's work"
                            border
                            onClickAction={() => scrollToSection("contact")}
                        />
                    </div>
                    <Link
                        href={
                            "https://drive.google.com/file/d/1GbG6FT8XuZHUjn6EjcRTxctHMebvxK0G/view?usp=sharing"
                        }
                        target="_blank"
                        rel="noreferrer"
                        className="cv-btn"
                    >
                        <NeonButton
                            title="Download CV"
                            border
                        />
                    </Link>
                </div>
            </div>
            <div className="mt-20">
                <div
                    className="iceberge text-4xl sm:text-5xl font-bold mb-2 text-center"
                    style={{
                        background:
                            "radial-gradient(circle, #85dd52, #5bac3e, #246d1b )",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    My Work Experience
                </div>
                <ExperienceTimeLine />
            </div>
            <div className="relative mt-20 skill-wrapper z-40">
                <div
                    className="skill-title iceberge text-4xl sm:text-5xl font-bold mb-12 text-center"
                    style={{
                        background:
                            "radial-gradient(circle, #85dd52, #5bac3e, #246d1b )",
                        WebkitBackgroundClip: "text",
                        backgroundClip: "text",
                        color: "transparent",
                    }}
                >
                    My Technical Skills
                </div>
                <Skills />
            </div>
            <div className="about-bg z-0 h-screen w-screen absolute top-[10vh] left-0 opacity-0">
                <Image
                    src="/aboutBg.jpg"
                    alt="nawod+website+about+background"
                    fill
                    className="object-cover"
                />
            </div>
        </section>
    );
};

export default About;
