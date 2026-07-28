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
       <div
      className={`
        w-full h-28 max-[768px]:h-24 max-[530px]:h-20 max-[530px]:h-16
        flex items-center justify-center
        transition-transform duration-300
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
    </div>
   );
};

export default FlipCard;
