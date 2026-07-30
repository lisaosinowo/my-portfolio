import Language from "./Language";
import LanguageName from "./LanguageName";

import { useState, useEffect } from "react";

interface FlipCardProps {
   img: string;
   name: string;
   bgColor: string;
   textColor: string;
}

function useMediaQuery(query: string) {
   const [matches, setMatches] = useState(
      () => window.matchMedia(query).matches
   );

   useEffect(() => {
      const mediaQueryList = window.matchMedia(query);
      const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

      mediaQueryList.addEventListener("change", listener);
      return () => mediaQueryList.removeEventListener("change", listener);
   }, [query]);

   return matches;
}

const FlipCard = ({ img, name, bgColor, textColor }: FlipCardProps) => {
   const [flipped, setFlipped] = useState(false);
   const isNarrow = useMediaQuery("(max-width: 1299px)");

   const handleMouseEnter = () => {
      if (!isNarrow) setFlipped(true);
   };

   const handleMouseLeave = () => {
      if (!isNarrow) setFlipped(false);
   };

   const showFlipped = flipped && !isNarrow;

   return (
      <div className="">
         <div
            className={`
          w-full h-28 max-[768px]:h-24 max-[530px]:h-20 max-[530px]:h-16
          flex items-center justify-center
          transition-transform duration-300 max-[1300px]:flex-col
          ${showFlipped ? "[transform:rotateY(180deg)]" : ""}
        `}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
         >
            {!showFlipped ? (
               <Language img={img} />
            ) : (
               <LanguageName
                  name={name}
                  bgColor={bgColor}
                  textColor={textColor}
               />
            )}
            <p className="min-[1300px]:hidden text-base max-[409px]:text-sm max-[375px]:text-[0.85rem] min-[768px]:text-xl max-[301px]:mt-0 max-[430px]:mt-2 min-[768px]:mt-2">
               {name}
            </p>
         </div>
      </div>
   );
};

export default FlipCard;