/**
 * @class Hero
 * @description purpose of this component is to render the Hero page
 * @author Nawod Madhuvantha
*/

import { styles } from "@/app/styles/styles"
import NeonButton from "../../buttons/NeonButton"
import { Link } from "react-scroll";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`${styles.padding} hero-section w-full h-screen mx-auto container`} id="home">
      <div className="mt-[43%] sm:mt-[22%] lg:mt-[10%] sm:z-10 z-40 relative">
        <h1 className="text-7xl rubik lg:text-9xl sm:text-8xl glow-effect">
          Hi,<br/>I&apos;m Nawod
        </h1>
        <p className="mt-8 lg:mb-8 mb-24 lg:text-3xl text-xl md:w-[50%] w-70%">
          I&apos;m a passionate software engineer skilled in web development
        </p>
        <Link 
            to='contact'
            spy={true}
            smooth={true}
            duration={500}
            delay={500}
          >
          <NeonButton title="Get in touch" />
        </Link>
      </div>
      <div className='hero-bg h-screen w-screen absolute top-0 left-0'>
          <Image src='/heroBg.jpg' alt='hero background' fill className='object-cover' />
        </div>
    </section>
  )
}

export default Hero
