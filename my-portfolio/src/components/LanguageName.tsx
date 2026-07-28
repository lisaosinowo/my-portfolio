interface LanguageNameProps {
   name: string;
   bgColor: string;
   textColor: string;
}

const LanguageName = ({ name, bgColor, textColor }: LanguageNameProps) => {
   return (
      <div
         className={`
        w-full min-h-full
        flex items-center justify-center [transform:rotateY(180deg)] min-[768px]:text-xl max-[430px]:text-sm max-[392px]:text-[0.6rem]
        ${bgColor} ${textColor}
      `}
      >
         {name}
      </div>
   );
};

export default LanguageName;
