import FlipCard from "./FlipCard";

import javascript from "../media/languages/js.png";
import typescript from "../media/languages/typescript.png";
import html from "../media/languages/text.png";
import css from "../media/languages/css-3.png";

import react from "../media/languages/programing.png";
import tailwindcss from "../media/languages/tailwind-css-brands-solid-full.svg";
import bootstrap from "../media/languages/bootstrap.png";
import sass from "../media/languages/sass.png";

import python from "../media/languages/python.png";
import csharp from "../media/languages/c-sharp.png";
import java from "../media/languages/java.png";
import nodejs from "../media/languages/Node.js.png";
3;
import expressjs from "../media/languages/express.svg";
import mongoose from "../media/languages/Mongoose.js.png";
import mysql from "../media/languages/mysql.svg";
import mongodb from "../media/languages/mongodb.svg";

const Languages = () => {

   return (
      <div className="center py-6">
         <div className="w-[89%]">
            <p className="text-2xl min-[768px]:text-3xl max-[400px]:text-xl font-bold text-[--white] mb-4">
               Frontend Languages 💻
            </p>
            {/* Frontend Languages */}
            <div className="grid grid-cols-4 gap-4 pb-4">
               <FlipCard
                  img={javascript}
                  name="JavaScript"
                  bgColor="bg-[#FFDF00]"
                  textColor="text-black"
               />

               <FlipCard
                  img={typescript}
                  name="TypeScript"
                  bgColor="bg-[#3178C6]"
                  textColor="text-white"
               />

               <FlipCard
                  img={html}
                  name="HTML"
                  bgColor="bg-[#DD7346]"
                  textColor="text-white"
               />

               <FlipCard
                  img={css}
                  name="CSS"
                  bgColor="bg-[#2196F3]"
                  textColor="text-white"
               />
            </div>

            <p className="text-2xl min-[768px]:text-3xl max-[400px]:text-xl font-bold text-[--white] mb-4 mt-5">
               Frontend Frameworks and Libraries
            </p>
            <div className="grid grid-cols-4 gap-4 pb-4">
               <FlipCard
                  img={react}
                  name="React"
                  bgColor="bg-[#52ADF7]"
                  textColor="text-black"
               />

               <FlipCard
                  img={tailwindcss}
                  name="TailwindCSS"
                  bgColor="bg-[#73C0FC]"
                  textColor="text-black"
               />

               <FlipCard
                  img={bootstrap}
                  name="Bootstrap"
                  bgColor="bg-[#5F3B7F]"
                  textColor="text-white"
               />

               <FlipCard
                  img={sass}
                  name="Sass"
                  bgColor="bg-[#CC6799]"
                  textColor="text-white"
               />
            </div>

            <p className="text-2xl min-[768px]:text-3xl max-[400px]:text-xl font-bold text-[--white] mb-4 mt-5">
               Backend Languages
            </p>
            <div className="grid grid-cols-4 gap-4 pb-4">
               <FlipCard
                  img={python}
                  name="Python"
                  bgColor="bg-[#72C1E8]"
                  textColor="text-black"
               />

               <FlipCard
                  img={csharp}
                  name="C#"
                  bgColor="bg-[#B14796]"
                  textColor="text-white"
               />

               <FlipCard
                  img={java}
                  name="Java"
                  bgColor="bg-[#E84135]"
                  textColor="text-white"
               />

               <FlipCard
                  img={nodejs}
                  name="Node.js"
                  bgColor="bg-[#83CD28]"
                  textColor="text-black"
               />
            </div>

            <p className="text-2xl min-[768px]:text-3xl max-[400px]:text-xl font-bold text-[--white] mb-4 mt-5">
               Backend Frameworks and Libraries
            </p>
            <div className="grid grid-cols-4 gap-4 pb-4">
               <FlipCard
                  img={expressjs}
                  name="Express.js"
                  bgColor="bg-white"
                  textColor="text-black"
               />

               <FlipCard
                  img={mongoose}
                  name="Mongoose"
                  bgColor="bg-[#850000]"
                  textColor="text-white"
               />
            </div>

            <p className="text-2xl min-[768px]:text-3xl max-[400px]:text-xl font-bold text-[--white] mb-4 mt-5">
               Databases
            </p>
            <div className="grid grid-cols-4 gap-4 pb-4">
               <FlipCard
                  img={mysql}
                  name="MySQL"
                  bgColor="bg-[#00618A]"
                  textColor="text-white"
               />

               <FlipCard
                  img={mongodb}
                  name="MongoDB"
                  bgColor="bg-[#12924F]"
                  textColor="text-white"
               />
            </div>
         </div>
      </div>
   );
};

export default Languages;
