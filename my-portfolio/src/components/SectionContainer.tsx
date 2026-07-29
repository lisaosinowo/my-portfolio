import Feed from "./Feed";
import About from "./About";
import Languages from "./Languages";
import Projects from "./Projects";

interface SectionContainerProps {
   active: string;
}

const SectionContainer = ({ active }: SectionContainerProps) => {
   const showSection = () => {
      switch (active) {
         case "feed":
            return <Feed />;
         case "about":
            return <About />;
         case "languages":
            return <Languages />;
         case "projects":
            return <Projects />;
         default:
            return <Feed />;
      }
   };

   return <div className="section-container">{showSection()}</div>;
};

export default SectionContainer;