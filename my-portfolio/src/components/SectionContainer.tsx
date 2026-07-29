import Feed from "./Feed"
import About from "./About"
import Languages from "./Languages"
import Projects from "./Projects"

const SectionContainer = () => {
  return (
    <div>
      <div className="section-container">
        <Feed />
      </div>
      <div className="section-container">
        <About />
      </div>
      <div className="section-container">
        <Languages />
      </div>
      <div className="section-container">
        <Projects />
      </div>
    </div>
  )
}

export default SectionContainer
