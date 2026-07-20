import ProfileInformation from "./ProfileInformation";
import SectionButton from "./SectionButton";

const MainContainer = () => {
   return (
      <div className="">
         <div className="relative flex justify-center">
            <div className="border absolute top-[6.5rem] flex main-container-width lg:top-24 md:top-32 sm:top-32">
               <ProfileInformation />
            </div>
         </div>

         <div className="flex main-container-width mt-[16.5rem] sm:mt-[18rem] md:mt-[18rem] lg:mt-[16rem] justify-around">
            <SectionButton text="Feed" />
            <SectionButton text="About" />
            <SectionButton text="Languages" />
            <SectionButton text="Projects" />
         </div>
      </div>
   );
};

export default MainContainer;
