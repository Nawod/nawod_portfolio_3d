/**
 * @class About
 * @description purpose of this component is to render the About page
 * @author Nawod Madhuvantha
*/

import { styles } from "@/app/styles/styles"

const About = () => {
  return (
    <section className={`${styles.padding} about-section w-full h-screen mx-auto container`} id="about">
      <div className="mt-[10%]">
        About
      </div>
    </section>
  )
}

export default About
