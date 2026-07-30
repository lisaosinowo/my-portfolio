interface SectionButtonProps {
   text: string,
   onSelect: (sectionName: string) => void,
   sectionName: string
}

const SectionButton = ({ text, onSelect, sectionName }: SectionButtonProps) => {
   return (
      <div>
         <span onClick={() => onSelect(sectionName)}
            className="relative 
            inline-block 
            text-white
            min-[768px]:text-xl
            max-[384px]:text-lg
            text-xl 
            font-bold 
            cursor-pointer 
            p-[10px] 
            after:absolute
            after:left-0
            after:bottom-0
            after:h-[2px]
            after:w-full
            after:bg-[--lilac]
            after:origin-left
            after:scale-x-0
            after:transition-transform
            after:duration-500
            after:ease-in-out
            hover:after:scale-x-100"
         >
            {text}
         </span>
      </div>
   );
};

export default SectionButton;
