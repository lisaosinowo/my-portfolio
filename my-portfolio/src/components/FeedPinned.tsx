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
                     <img src={pinImg} className="w-6 h-6 mb-2 min-[768px]:w-8 min-[768px]:h-8 min-[768px]:mb-2 min-[768px]:mt-[-0.3rem]" />
                  </div>
                  {/* Lisa's Profile Picture */}
                  <img
                     src={LisaImg}
                     className="w-12 h-12 rounded-full"
                     alt="Lisa"
                  />
               </div>
            </div>

            <div className="ml-[0.35rem] min-[768px]:mt-[-0.55rem]">
               <p className="text-base min-[768px]:text-xl mt-[0.15rem]">Pinned</p>
               <div className="flex mt-2 mb-1">
                  <div className="flex">
                     {/* Pinned Details */}
                     <p className="text-base min-[768px]:text-xl  mr-1">Lisa</p>
                     <img
                        src={check}
                        className="min-[768px]:w-[1.1rem] h-[1.1rem] w-[1.2rem] h-[0.8rem] mt-[0.2rem] min-[768px]:mt-[0.3rem] mr-[5px]"
                     />
                  </div>
                  <p className="text-base min-[768px]:text-xl max-[375px]:text-sm max-[375px]:pt-[0.1rem] mr-[5px] text-[--grey]">
                     @lisaosinowo{" "}
                  </p>
                  <p className="text-base mr-[5px] text-[--grey] min-[768px]:text-xl">·</p>
                  <p className="text-base mr-[5px] text-[--grey] max-[358px]:text-xs max-[358px]:pt-[0.27rem] min-[768px]:text-xl max-[415px]:text-[0.85rem] ">20/07/2026</p>
               </div>

               {/* Pinned Text */}
               <div>
                  <p className="text-base min-[768px]:text-xl max-[375px]:text-base max-[358px]:text-[0.91rem] text-[--off-white]">
                     Welcome to my Portfolio 🤗 I had a lot of fun developing this site and I will be improving it when new ideas spawn. That's the life of a developer! 🫡 Use the four headers above this pinned post to explore!
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
