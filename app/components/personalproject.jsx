'use client'
import Video from "./video";
import VideoPetsHome from "./videopetshome";
import GithubBusimate from "./githubbusimate";
import GithubPetHome from "./githubpethome";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Ppersonalproject() {
  const router = useRouter()

  const goToProjects = () =>{
    router.push('/project')
  }
  return (
    <div>
      <div className="mt-30 max-sm:mt-10">
      <Image
           src="/images/bg-h.PNG"
           alt="languages"
           width={1200}
           height={80}
           className="absolute top-320 left-50 -z-10 opacity-50"
         />
        <div className="text-center mb-10 bg-slate-50 p-20 max-sm:p-10 max-sm:flex max-sm:flex-col max-sm:place-items-center">
          <div className="text-2xl font-bold ">Full Stack Developer</div>
          <div className="text-xl font-bold ">Projects</div>
          <div className="mr-60 max-sm:mr-0 max-sm:ml-0 max-sm:text-center text-xl ml-60 mt-2 max-sm:w-70">“This project was driven by real-world research, leading to a fully developed web application — from UX/UI design to front-end development and seamless integration with a real-time backend database.”</div>
   
                
        </div>
        {/* busimate */}
        <div className="m-20 max-sm:m-5">
        <div className="text-4xl  font-bold text-cyan-600 ">
          Busi<span className="italic">M</span>ate
        </div>
        <div className="text-xl text-slate-800 font-semibold mb-5">
          Team Project
        </div>
        <div className="flex flex-col gap-10 ">
          <Video />
          <GithubBusimate />
        </div>
      <div
      className="cursor-pointer max-sm:text-md text-slate-900 font-semibold flex mr-10 text-xl  justify-end w-full "
      onClick={goToProjects}
      >More Projects...</div>
        </div>
      </div>

      
    </div>
  );
}
