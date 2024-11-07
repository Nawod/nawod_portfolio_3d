/**
 * @class About
 * @description purpose of this component is to render the About page
 * @author Nawod Madhuvantha
*/

import { styles } from "@/app/styles/styles"

const About = () => {
  return (
    <section className={`${styles.padding} about-section w-full mx-auto container`} id="about">
      <div className="h-screen">
        About
      </div>
      <div className="h-screen">
        About 2
      </div>
    </section>
  )
}

export default About
