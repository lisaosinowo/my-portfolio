import Project from "./Project";

const Projects = () => {
   return (
      <div className="center py-6">
         <div className="w-[89%]">
            <h1 className="text-2xl min-[768px]:text-3xl font-bold text-[--white] mb-6">
               My Projects 👾
            </h1>
            {/* GitHub Profile */}
            <p className="text-base min-[768px]:text-xl mb-4">
               Click below to view my Github Profile:
            </p>
            <div className="center">
               <Project name={"GitHub Profile"} projectURL={"https://github.com/lisaosinowo"}/>
            </div>
            

            {/* Favourite GitHub Projects */}
            <p className="text-base min-[768px]:text-xl mb-6">
               Here are some of my favourite projects! Click on one to view on Github:
            </p>
            <div className="center items-center flex-col">
               <Project name={"Nike E-commerce Site"} projectURL={"https://github.com/lisaosinowo/E-commerce-site-nike"} />
               <Project name={"Nail Appointment RESTful API"} projectURL={"https://github.com/lisaosinowo/Nail-appointment-API"} />
               <Project name={"Roleplay Game"} projectURL={"https://github.com/lisaosinowo/Roleplay-Game"} />
               <Project name={"Snake Game"} projectURL={"https://github.com/lisaosinowo/Snake-game"} />
               <Project name={"Turtle Race Game"} projectURL={"https://github.com/lisaosinowo/Turtle-race"} />
               <Project name={"Quiz Game"} projectURL={"https://github.com/lisaosinowo/Quiz-game"} />
               <Project name={"BlackJack Game"} projectURL={"https://github.com/lisaosinowo/BlackJack-game"} />
               <Project name={"Hangman Game"} projectURL={"https://github.com/lisaosinowo/Hangman"} />
            </div>
            
         </div>
      </div>
   );
};

export default Projects;
