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
        <div className="section-title" style={{ '--title-text': '"About me"' }as React.CSSProperties}>
          About me
        </div>
        <div className="relative">
        <svg xmlns="http://www.w3.org/2000/svg" width="600" height="600">
          <g>
            <g id="svg_12">
              <line stroke-width="2" id="svg_3" y2="98.8" x2="55.99999" y1="510" x1="55.99999" stroke="green" fill="none"/>
              <line stroke-width="2" id="svg_4" y2="99" x2="55.99999" y1="51.8" x1="88.99999" stroke="green" fill="none"/>
              <line stroke-width="2" id="svg_5" y2="52" x2="88.99999" y1="51.8" x1="480" stroke="green" fill="none"/>
              <line stroke-width="2" id="svg_6" y2="99" x2="513" y1="51.8" x1="480" stroke="green" fill="none"/>
              <line stroke-width="2" id="svg_7" y2="99" x2="513" y1="174.8" x1="513" stroke="green" fill="none"/>
              <line stroke-width="2" id="svg_8" y2="175" x2="513" y1="222" x1="543" stroke="green" fill="none"/>
              <line stroke-width="2" id="svg_9" y2="558.79999" x2="543" y1="554.79999" x1="89" stroke="green" fill="none"/>
              <line stroke-width="2" id="svg_10" y2="559" x2="543" y1="222" x1="543" stroke="green" fill="none"/>
              <line stroke-width="2" id="svg_11" y2="554.79999" x2="89" y1="510" x1="56" stroke="green" fill="none"/>
            </g>
          </g>
          </svg>
        </div>
      </div>
      <div className="h-screen">
        About 2
      </div>
    </section>
  )
}

export default About
