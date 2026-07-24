import Feed from "./Feed"
import About from "./About"

const SectionContainer = () => {
  return (
    <div>
      <div className="section-container">
        <Feed />
      </div>
      <div className="section-container">
        <About />
      </div>
    </div>
  )
}

export default SectionContainer
