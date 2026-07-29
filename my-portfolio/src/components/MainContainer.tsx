import { useState } from "react";

import ProfileInformation from "./ProfileInformation";
import SectionButton from "./SectionButton";
import SectionContainer from "./SectionContainer";

const MainContainer = () => {
   const [active, setActive] = useState("feed");

   const handleSelect = (section: string) => {
      setActive(section);
   };

   return (
      <div className="overflow-x-hidden">
         <div className="relative center">
            <div className="absolute top-[6.5rem] flex main-container-width lg:top-24 md:top-32 sm:top-32">
               <ProfileInformation />
            </div>
         </div>

         <div className="flex main-container-width mt-[16.5rem] sm:mt-[18rem] md:mt-[18rem] min-[768px]:mt-[19rem] lg:mt-[16rem] min-[1024px]:mt-[17rem] justify-around">
            <SectionButton text="Feed" onSelect={handleSelect} sectionName="feed" />
            <SectionButton text="About" onSelect={handleSelect} sectionName="about" />
            <SectionButton text="Languages" onSelect={handleSelect} sectionName="languages" />
            <SectionButton text="Projects" onSelect={handleSelect} sectionName="projects" />
         </div>

         <div className="mt-[0.55rem] sm:mt-[0.65rem] md:mt-[0.85rem] lg:mt-[0.75rem]">
            <SectionContainer active={active} />
         </div>
      </div>
   );
};

export default MainContainer;
