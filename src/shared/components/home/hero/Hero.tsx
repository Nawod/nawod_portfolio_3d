/**
 * @class Hero
 * @description purpose of this component is to render the Hero page
 * @author Nawod Madhuvantha
*/

import { styles } from "@/app/styles/styles"

const Hero = () => {
  return (
    <section className={`${styles.padding} hero-section w-full h-screen mx-auto container`} id="home">
      <div className="mt-[10%]">
        <h1 className="text-9xl">
          Hi,<br/>I&apos;m Nawod
        </h1>
        <p className="mt-8 mb-8 text-lg">
          I&apos;m a freelance web developer and a designer
        </p>
        <div>
          Get in touch
        </div>
      </div>
    </section>
  )
}

export default Hero
