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

const About = () => {
  return (
    <section className={`${styles.padding} about-section w-full mx-auto container md:z-10 z-40 relative`} id="about">
      <div className="">
        <div className="section-title" style={{ '--title-text': '"About me"' }as React.CSSProperties}>
          About me
        </div>
        <div className="relative max-w-[600px] max-h-[200px] mt-12">
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
          <NeonButton title="Hire Me" border />
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
