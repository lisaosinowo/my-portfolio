import Detail from "./Detail";
import check from "../media/header/correct.png";
import codeIMG from "../media/header/code.png"
import briefcaseImg from "../media/header/briefcase.png"
import linkImg from "../media/header/link.png"
import calendarImg from "../media/header/calendar.png"

const ProfileInformation = () => {
   return (
      <div className="w-[80%]">
         {/* Profile name and verified tick */}
         <div className="flex">
            <h1 className="min-[768px]:text-4xl text-3xl font-extrabold text-white">Lisa Osinowo</h1>
            <img src={check} className="w-7 h-7 ml-[7px] flex self-center" />
         </div>
         
         {/* Username */}
         <p className="text-[--grey] min-[768px]:text-xl text-base pb-[4px]">@lisaosinowo</p>
         <p className="flex inline-block whitespace-nowrap text-white min-[768px]:text-xl max-[375px]:text-sm text-base w-[450px] pb-[4px]">"Predict your future by creating it."<img src={codeIMG} className="w-5 h-5 ml-[7px] min-[768px]:mt-1 max-[768px]:mt-[0.15rem] max-[375px]:mt-[-0.01rem]" /></p>
         <p className="text-white whitespace-nowrap min-[768px]:text-xl max-[375px]:text-sm text-base pb-[4px]">Fullstack Developer. Certified Tester.</p>

         {/* The Profile Details */}
         <div className="flex gap-7 sm:gap-9 sm:gap-6 md:gap-3 pb-[4px]">
            <Detail src={briefcaseImg} text="Available" />
            <Detail src={linkImg} text="Links" />
            <Detail src={calendarImg} text="Joined 07/26" />
         </div>
      </div>
   );
};

export default ProfileInformation;
