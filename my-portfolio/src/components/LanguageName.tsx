interface LanguageNameProps {
   name: string;
   bgColor: string;
   textColor: string
}

const LanguageName = ({ name, bgColor, textColor }: LanguageNameProps) => {
   return (
      <div
         className={`w-full h-full flex justify-center items-center [transform:rotateY(180deg)] ${bgColor} ${textColor}`}
      >
         {name}
      </div>
   );
};

export default LanguageName;
