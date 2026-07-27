import pinImg from "../media/feed/push-pin.png";
import LisaImg from "../media/lisa-pink.jpg";
import LisaImg2 from "../media/lisa.jpg"
import check from "../media/header/correct.png";

const FeedPinned = () => {
   return (
      <div className="center py-8">
        <div className="w-[89%] flex">
            <div className="flex flex-col">
               <div className="w-[3.2rem]">
                  <div className="flex justify-end">
                     <img src={pinImg} className="w-6 h-6 mb-2 " />
                  </div>
                  {/* Lisa's Profile Picture */}
                  <img
                     src={LisaImg}
                     className="w-12 h-12 rounded-full"
                     alt="Lisa"
                  />
               </div>
            </div>

            <div className="ml-[0.35rem]">
               <p className="text-sm min-[768px]:text-xl mt-[0.15rem]">Pinned</p>
               <div className="flex mt-2 mb-1">
                  <div className="flex">
                     {/* Pinned Details */}
                     <p className="text-sm min-[768px]:text-xl mr-1">Lisa</p>
                     <img
                        src={check}
                        className="min-[768px]:w-[1.1rem] h-[1.1rem] w-[0.8rem] h-[0.8rem] mt-1 mr-[5px]"
                     />
                  </div>
                  <p className="text-sm min-[768px]:text-xl mr-[5px] text-[--grey]">
                     @lisaosinowo{" "}
                  </p>
                  <p className="text-sm mr-[5px] text-[--grey] min-[768px]:text-xl">·</p>
                  <p className="text-sm mr-[5px] text-[--grey] max-[358px]:text-xs min-[768px]:text-xl">20 July 2026</p>
               </div>

               {/* Pinned Text */}
               <div>
                  <p className="text-sm min-[768px]:text-xl text-[--off-white]">
                     Welcome to my Portfolio 🤗 This is a space where I post my
                     coding journey with JavaScript, React, Python, HTML, and
                     CSS + SASS. Feel free to browse through this site!
                  </p>
               </div>

               {/* Pinned Image */}
               <div className="mt-2">
                  <img
                     src={LisaImg2}
                     className="w-[100%] rounded-xl"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default FeedPinned;
