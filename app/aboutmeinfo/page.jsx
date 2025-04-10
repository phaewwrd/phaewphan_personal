"use client";
import Image from "next/image";

export default function aboutmeinfo() {
  return (
    <div className="m-20 flex flex-col text-lg justify-center place-items-center gap-5 ">
      <div className="flex flex-col gap-10 font-semibold w-250  p-15 max-sm:w-90 max-sm:p-5">
      <div className="fles fles-col gap-10">
      <div className="text-2xl">Phaewphan Woradanuphan</div>
       <div className="text-xl font-light">bkk, Thailand</div>
      </div>
       
        <div className="text-4xl justify-end flex gap-5 place-items-center">Work Experience
            <Image
                       src="/images/features.png"
                       alt="research"
                       width={80}
                       height={80}
                       className="pb-5"
                     />
                     </div>
        {/* fullstack */}
        <div className="flex flex-col gap-2">
          Full Stack Developer
          <div className="font-medium">Pet Home | 2024</div>
          <div className="font-medium">
            A web platform for finding veterinary hospitals and booking
            appointments online.
          </div>
          <div className="font-medium">
            - Designed and developed features such as hospital search, location
            filtering, reviews, and appointment booking.
            <br />
            -Built a responsive frontend with React.js and Tailwind CSS.
            <br />
            - Developed backend APIs using Express.js and integrated Prisma ORM
            for database management.
            <br />
            Collaborated via Git and managed version control through GitHub.
            <br />
            Tech Stack: React.js, Tailwind CSS, Node.js, Express.js, Prisma,
            Mysql.
          </div>
        </div>
        <div className="flex flex-col gap-2">
          Full Stack Developer
          <div className="font-medium">BusiMate | 2024</div>
          <div className="font-medium">
            A real-time transport booking web app for senior citizens visiting
            hospitals.
          </div>
          <div className="font-medium">
            - Implemented ride scheduling, driver tracking with Socket.io, and
            user authentication.
            <br />
            -Developed frontend in React.js and backend with Node.js, using
            Prisma for database management.
            <br />
            - Emphasized accessibility and user-friendly UI for senior users.
            <br />
            -Tech Stack: React.js, Tailwind CSS, Node.js, Express.js, Prisma,
            Socket.io, Mysql.
          </div>
        </div>
        {/* full */}
        <div className="flex flex-col gap-2">
          Product Designer
          <div className="font-medium">Owndays Thailand | 2023</div>
          <div className="font-medium">
            - Conducted research and data collection to support product
            development and design processes.
            <br />- Identified and sourced new suppliers for upcoming
            collections and corporate gifts.
            <br />- Collaborated cross-functionally with Accounting, Marketing,
            and Sales teams to develop and design new products aligned with
            business goals.
          </div>
        </div>
        {/* praew */}
        <div className="flex flex-col gap-2">
          freelance
          <div className="font-medium">
            praew.tattoos (Studio) | Jan 2022 – Present
          </div>
          <div className="font-medium">
            - Designed and developed custom tattoo artwork tailored to each
            client's vision and personal story.
            <br />- Communicated effectively with clients to understand their
            ideas and provide professional advice on design, placement, and
            aftercare.
            <br />
            - Maintained strong client relationships and ensured a welcoming,
            hygienic, and professional studio experience.
            <br /> Managed appointments, consultations, and personal branding
            through social media under the handle @praew.tattoos
          </div>
        </div>
      </div>

      {/* education */}
            <div className="flex flex-col gap-5 p-20 place-items-center max-sm:p-5">
            <div className="text-center  mb-10 ">
                <div className="text-2xl font-bold flex justify-center place-items-center gap-5">Education and Training
                <Image
                  src="/images/layers_11676373.png"
                  alt="libraries"
                  width={70}
                  height={70}
                  className="pb-5"
                />                </div>
                <div className="mr-60 ml-60 mt-2 max-sm:w-70 max-sm:mr-5 max-sm:ml-5">"Formal Education & Self-Directed Learning."</div>
              </div>
              <div className="flex gap-10 max-sm:flex-col max-sm:gap-5">
              {/* 2012 */}
              <div className=" pt-10 shadow-xl p-10 rounded-2xl border-slate-200 w-100 ">
               
                <label className="text-xl font-semibold">2012 - 2016</label>
                <div className="font-semibold"> 
              Faculty of Architecture and Design | Bachelor Degree of
              Fine Arts, </div>
              <div>Ceramics Design (GPA 2.88)</div>
                <div className="text-sm">King Mongkut's University Of Technology North Bangkok, | Bangkok,
                Thailand </div>
              </div>
              {/* 2022 */}
              <div className="p-5 pt-10 shadow-xl rounded-2xl border-slate-200 w-100 ">
               
                <label className="text-xl font-semibold">2022</label>
                <div><div className="font-semibold">Upskill UX</div> Become a UX Designer From Scratch #3</div>

              </div>
              {/* 2024 */}
              <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-100 ">
               
                <label className="text-xl font-semibold">2024</label>
                <div className="font-medium">
                <div className="font-semibold">Google</div>Foundations of Project Management
            </div>
            <div className="font-medium">
             <div className="font-semibold">Software Park </div>CodeCamp Thailand #19 Bangkok, Thailand <br/> Full Stack
              Web Development Course
            </div>
              </div>
             
              </div>
    
        
            </div>


      <div className="flex gap-5">

        {/* education */}
        {/* <div className="flex flex-col gap-5 font-semibold w-150 p-15 rounded-2xl shadow-xl bg-white">
          <div className="text-2xl ">Education and Training</div>
          <div className="">
            2012 - 2016
            <div className="font-medium">
              King Mongkut's University Of Technology North Bangkok, Bangkok,
              Thailand Faculty of Architecture and Design : Bachelor Degree of
              Fine Arts, Ceramics Design (GPA 2.88)
            </div>
          </div>
          <div>
            2022
            <div className="font-medium">
              Upskill UXF Become a UX Designer From Scratch #3
            </div>
          </div>
          <div className="flex flex-col gap-2">
            2024
            <div className="font-medium">
              Google Foundations of Project Management
            </div>
            <div className="font-medium">
              Software Park : CodeCamp Thailand #19 Bangkok, Thailand Full Stack
              Web Development Course
            </div>
          </div>
        </div> */}
        {/* technical */}
        <div className="flex flex-col gap-5 font-semibold p-15 w-250  rounded-2xl shadow-xl bg-white max-sm:w-90">
        <Image
                  src="/images/coding_11998938.png"
                  alt="languages"
                  width={70}
                  height={70}
                  className="pb-5"
                />
          <div className="text-2xl ">Technical Skills</div>
          <div className="">
            Software Development:
            <div className="font-medium">
              - Languages: HTML, CSS, Javascript, Typescript, Python
              <br />
              - Frontend Development: React.js, Next.js, Vue.js <br />
              - Backend Development: Node.js (Express) <br />
              - Databases: MySQL, Prisma <br />- Version Control: Git, GitHub
            </div>
          </div>
          <div>
            Design & Research:
            <div className="font-medium">
              - Design Tools: Figma, FigJam, Photoshop, Illustrator, Procreate{" "}
              <br />- Image Editing: Lightroom, Acrobat
            </div>
          </div>
          <div className="flex flex-col gap-2">
            Project Management:
            <div className="font-medium">
              - Methodologies: Agile, Waterfall <br />
              - Tools: Asana, Google Workspace, Microsoft Office, PowerBI
              Office, Google Sheets, PowerPoint <br/>
              - Research Tools: FigJam
            </div>
          </div>
          <div className="flex flex-col gap-2">
          Development Tools:
            <div className="font-medium">
              - IDEs & Editors: VS Code <br />
              - Containerization: Docker<br/>
              - Research Tools: FigJam
            </div>
          </div>
          <div className="flex flex-col gap-2">
            Languages:
            <div className="font-medium">
              - English (TOEIC: 800) <br />- Thai
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/images/bg-v.png"
        alt="bg-v"
        width={1000}
        height={80}
        className="absolute -top-30 -left-150 -z-10 opacity-75"
      />
    </div>
  );
}
