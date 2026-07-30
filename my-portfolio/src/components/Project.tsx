interface ProjectProps {
   name: string,
   projectURL: string
}

const Project = ({ name, projectURL }: ProjectProps) => {
   return (
      <div onClick={() => window.open(`${projectURL}`, "_blank", "noopener,noreferrer")} className=" w-[89%] border border-[--navy-purple] hover:border-[--lilac] border-4 bg-[--dark-navy-purple3] hover:bg-[--purple] transition-colors duration-300 delay-250 center p-2 rounded-md mb-5">
         <p className="text-base min-[768px]:text-xl bg-transparent">{name}</p>
      </div>
   );
};

export default Project;
