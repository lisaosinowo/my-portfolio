import Language from "./Language";
import LanguageName from "./LanguageName";

import { useState } from "react";

interface FlipCardProps {
   img: string;
   name: string;
   bgColor: string;
   textColor: string;
}

const FlipCard = ({ img, name, bgColor, textColor }: FlipCardProps) => {
   const [flipped, setFlipped] = useState(false);

   return (
      <div className="">
         <div
            className={`
          w-full h-28 max-[768px]:h-24 max-[530px]:h-20 max-[530px]:h-16
          flex items-center justify-center
          transition-transform duration-300 max-[1100px]:flex-col
          ${flipped ? "[transform:rotateY(180deg)]" : ""}
        `}
            onMouseEnter={() => setFlipped(true)}
            onMouseLeave={() => setFlipped(false)}
         >
            {!flipped ? (
               <Language img={img} />
            ) : (
               <LanguageName
                  name={name}
                  bgColor={bgColor}
                  textColor={textColor}
               />
            )}
            <p className="min-[1025px]:hidden text-sm max-[376px]:text-xs min-[768px]:text-xl max-[301px]:mt-0 max-[430px]:mt-1 min-[768px]:mt-2">
               {name}
            </p>
         </div>
      </div>
   );
};

export default FlipCard;
