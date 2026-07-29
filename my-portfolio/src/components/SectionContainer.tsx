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

   return <div className="section-container transition-shadow duration-300 hover:shadow-[0_0_20px_var(--lilac)]">{showSection()}</div>;
};

export default SectionContainer;