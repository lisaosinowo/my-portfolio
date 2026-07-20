import Detail from "./Detail";
import check from "../media/header/correct.png";
import codeIMG from "../media/header/code.png"
import briefcaseImg from "../media/header/briefcase.png"
import linkImg from "../media/header/link.png"
import cakeImg from "../media/header/birthday.png"
import calendarImg from "../media/header/calendar.png"

const ProfileInformation = () => {
   return (
      <div className="main-container-width">
         {/* Profile name and verified tick */}
         <div className="flex">
            <h1 className="text-3xl font-extrabold text-white">Lisa Osinowo</h1>
            <img src={check} className="w-7 h-7 ml-[7px] flex self-center" />
         </div>
         
         {/* Username */}
         <p className="text-[--grey] text-base pb-[4px]">@lisaosinowo</p>
         <p className="flex inline-block whitespace-nowrap text-white text-sm w-[450px] pb-[4px]">"The best way to predict the future is to create it." -Alan Kay <img src={codeIMG} className="w-5 h-5 ml-[7px] " /></p>
         <p className="text-white whitespace-nowrap text-sm pb-[4px]">Fullstack Developer. Certified Tester.</p>

         {/* The Profile Details */}
         <div className="flex gap-7 smm:gap-9 sm:gap-6 md:gap-3 pb-[4px]">
            <Detail src={briefcaseImg} text="Available" />
            <Detail src={linkImg} text="Links" />
            <Detail src={cakeImg} text="January 6th" />
            <Detail src={calendarImg} text="Joined July 2026" />
         </div>
      </div>
   );
};

export default ProfileInformation;
