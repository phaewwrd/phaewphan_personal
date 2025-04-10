"use client";
import PetsHome from "../components/petshome";
import BusiMate from "../components/busimate";
import Image from "next/image";
import { useEffect } from "react";
import Portfoliowebsite from "../components/portfliowebsite";

export default function page() {
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when page loads
  }, []);
  return (
    <>
      <Image
        src="/images/bg-v.png"
        alt="bg-v"
        width={1200}
        height={80}
        className="absolute left-5 top-20 -z-30 opacity-75"
      />
      <div className="flex justify-center  mt-10  gap-60 place-items-center items-center max-sm:gap-10 max-sm:flex-col">
        <div className="flex flex-col gap-5 w-150 max-sm:w-80">
          <div className="text-4xl font-bold">Projects</div>
          <p className="font-bold text-white text-3xl  text-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
            “Research and development leading to the creation of a fully
            functional website.”
          </p>
          <div>
            "The research and findings were concluded and translated into a
            website design, with further development potential for future use.
            The work includes both group and individual projects, showcasing
            practical application and scalability.."
          </div>
        </div>
        <Image
          src="/images/programmer2.png"
          alt="techstack"
          width={400}
          height={10}
          className="p-5"
        />
      </div>
      {/* sprints */}
      <div className="flex flex-col gap-10 justify-center mt-40 max-sm:mt-20">
        <div className=" flex flex-col justify-center place-items-center gap-5">
       <div className="text-2xl font-bold"> 4 Phases of Work Sprint</div>
        <div className=" w-200 text-center text-md font-light max-sm:w-80">"outline a structured approach for delivering projects in an Agile environment. It consists of four key stages."</div>

        </div>
        <div className="flex justify-center place-items-center gap-5 max-sm:flex-col">
          {/* 1 */}
          <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-140">
            <Image
              src="/images/coding_11998938.png"
              alt="languages"
              width={70}
              height={70}
              className="pb-5"
            />
            <div className="text-xl font-semibold">
              Phase 1: <br />
              Planning & Research
            </div>
            <div className="font-semibold">Key Activities:</div>
            <div>
              - Define project scope and goals.
              <br />
              - Gather user requirements and research technical solutions.
              <br />- Set up version control (GitHub) and project management
              tools
            </div>
            <div className="font-semibold">Deliverables:</div>
            <div>
              - User stories and tasks in the backlog.
              <br />- Initial wireframes or mockups.
            </div>
          </div>
          {/* 2 */}
          <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-140">
            <Image
              src="/images/metadata_18609631.png"
              alt="framework"
              width={70}
              height={70}
              className="pb-5"
            />
            <div className="text-xl font-semibold">
              Phase 2:
              <br /> Development - Frontend & Backend Setup
            </div>
            <div className="font-semibold">Key Activities:</div>
            <div>
              - Set up frontend (React.js, Next.js, or Vue.js).
              <br />
              - Set up backend (Node.js, Express.js), and configure database
              (MySQL, Prisma).
              <br />- Implement authentication and key frontend features.
            </div>
            <div className="font-semibold">Deliverables:</div>
            <div>
              - Basic working frontend and backend APIs.
              <br />- Database schema and initial data setup.
            </div>
          </div>
          {/* 3 */}
          <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-140">
            <Image
              src="/images/layers_11676373.png"
              alt="libraries"
              width={70}
              height={70}
              className="pb-5"
            />
            <div className="text-xl font-semibold">
              Phase 3: <br /> Integration & Feature Development
            </div>
            <div className="font-semibold">Key Activities:</div>
            <div>
              - Integrate frontend and backend.
              <br />
              - Develop core features (e.g., user profiles, search).
              <br />- Implement external APIs
            </div>
            <div className="font-semibold">Deliverables:</div>
            <div>
              - Fully integrated frontend and backend.
              <br />- Completed core features and unit tests.
            </div>
          </div>
          {/* 4 */}
          <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-140">
            <Image
              src="/images/cloud-data-collection_15438762.png"
              alt="database"
              width={70}
              height={70}
              className="pb-5"
            />
            <div className="text-xl font-semibold">
              Phase 4: <br />
              Testing, Deployment & Optimization
            </div>
            <div className="font-semibold">Key Activities:</div>
            <div>
              - Perform comprehensive testing (unit, integration, user testing).
              <br />
              - Optimize performance and fix bugs. <br />
              - Deploy to staging/production. <br />
            </div>
            <div className="font-semibold">Deliverables:</div>
            <div>
              - Deployed app (staging/production).
              <br />- Optimized performance and final documentation.
            </div>
          </div>
        </div>
      </div>

      <BusiMate />
      <PetsHome />
      <Portfoliowebsite/>
    </>
  );
}
