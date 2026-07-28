import Language from "./Language";
import LanguageName from "./LanguageName";

import javascript from "../media/languages/js.png";
import typescript from "../media/languages/typescript.png";
import html from "../media/languages/text.png";
import css from "../media/languages/css-3.png";

import react from "../media/languages/programing.png";
import tailwindcss from "../media/languages/tailwind-css-brands-solid-full.svg";
import bootstrap from "../media/languages/bootstrap.png";
import sass from "../media/languages/sass.png"

import python from "../media/languages/python.png"
import csharp from "../media/languages/c-sharp.png"
import java from "../media/languages/java.png"
import nodejs from "../media/languages/Node.js.png"
3
import expressjs from "../media/languages/express.svg"
import mongoose from "../media/languages/Mongoose.js.png"
import mysql from "../media/languages/mysql.svg"
import mongodb from "../media/languages/mongodb.svg"

import { useState } from "react";

const Languages = () => {
   const [flipped, setFlipped] = useState(false);
   return (
      <div className="center py-6">
         <div className="w-[89%] border">
            <p className="text-2xl min-[768px]:text-3xl font-bold text-[--white] mb-2">
               Frontend Languages
            </p>
            <div className="grid grid-cols-4 gap-4">
               <div className={`border border-pink-200 transition-transform ${flipped ? "[transform:rotateY(180deg)]" : ""}`} onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
                  {!flipped && (
                     <>
                        <Language img={javascript} />
                     </>
                  )}
                  {flipped && (
                     <>
                     <LanguageName name={"JavaScript"} bgColor={"bg-[#FFDF00]"} textColor={"text-black"} />
                     </>
                  )}
               </div>

               <div className="border border-pink-200">
                  <Language img={typescript} />
               </div>
               <div className="border border-pink-200">
                  <Language img={html} />
               </div>
               <div className="border border-pink-200">
                  <Language img={css} />
               </div>
            </div>

            <p className="text-2xl min-[768px]:text-3xl font-bold text-[--white] mb-2 mt-5">
               Frontend Frameworks and Libraries
            </p>
            <div className="grid grid-cols-4 gap-4">
               <div className="border border-purple-200">
                  <Language img={react} />
               </div>
               <div className="border border-purple-200">
                  <Language img={tailwindcss} />
               </div>
               <div className="border border-purple-200">
                  <Language img={bootstrap} />
               </div><div className="border border-purple-200">
                  <Language img={sass} />
               </div>
            </div>

            <p className="text-2xl min-[768px]:text-3xl font-bold text-[--white] mb-2 mt-5">
               Backend Languages
            </p>
            <div className="grid grid-cols-4 gap-4">
               <div className="border border-purple-200">
                  <Language img={python} />
               </div>
               <div className="border border-purple-200">
                  <Language img={csharp} />
               </div>
               <div className="border border-purple-200">
                  <Language img={java} />
               </div>
               <div className="border border-purple-200">
                  <Language img={nodejs} />
               </div>
            </div>

            <p className="text-2xl min-[768px]:text-3xl font-bold text-[--white] mb-2 mt-5">
               Backend Frameworks and Libraries
            </p>
            <div className="grid grid-cols-4 gap-4">
               <div className="border border-purple-200">
                  <Language img={expressjs} />
               </div>
               <div className="border border-purple-200">
                  <Language img={mongoose} />
               </div>
            </div>

            <p className="text-2xl min-[768px]:text-3xl font-bold text-[--white] mb-2 mt-5">
               Databases
            </p>
            <div className="grid grid-cols-4 gap-4">
               <div className="border border-purple-200 flex justify-center content-center">
                  <Language img={mysql} />
               </div>
               <div className="border border-purple-200">
                  <Language img={mongodb} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Languages;
