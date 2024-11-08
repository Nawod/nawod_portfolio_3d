/**
 * @class About
 * @description purpose of this component is to render the About page
 * @author Nawod Madhuvantha
*/

import { styles } from "@/app/styles/styles"
import AboutBlockSVG from "@/shared/svg/AboutProfile"
import AboutSelfSVG from "@/shared/svg/AboutSelf"
import AboutWebSVG from "@/shared/svg/AboutWeb"
import { Link } from "react-scroll"
import NeonButton from "../../buttons/NeonButton"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);

const About = () => {

  useGSAP(() => {

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top 20%", // Adjusts when animation starts
        end: "bottom bottom",
        scrub: 1,
        markers: true, 
      },
    });

    timeline.fromTo(
      ".about-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0,  ease: "power2.out" }
    )
    .fromTo(
      ".profile-block",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0,  ease: "power2.out" }
    )

  });

  return (
    <section className={`${styles.padding} about-section w-full mx-auto container md:z-10 z-40 relative`} id="about">
      <div className="h-[20vh]"></div>
      <div className="about-title">
          <div className="section-title" style={{ '--title-text': '"About me"' }as React.CSSProperties}>
              About me
        </div>
      </div>
      <div className="mt-12">
        <div className="relative profile-block max-w-[600px] max-h-[200px]">
          <AboutBlockSVG />
        </div>
        <div className="relative max-w-[600px] max-h-[300px]">
          <AboutSelfSVG />
        </div>
        <div className="iceland pl-8 sm:pl-12 text-theme sm:text-lg">
          Services I Offer :
        </div>
        <div className="relative flex max-w-[600px] max-h-[200px]">
          <AboutWebSVG />
        </div>
        <div className="flex gap-4 mt-12 flex-wrap pl-0 justify-center sm:pl-12 sm:justify-start">
        <Link 
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            delay={500}
            className="hire-btn"
          >
          <NeonButton title="Let's work" border />
        </Link>
        <Link 
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            delay={500}
            className="cv-btn"
          >
          <NeonButton title="Download CV" border />
        </Link>
      </div>
      </div>
      <div className="h-screen">
        About 2
      </div>
    </section>
  )
}

export default About
