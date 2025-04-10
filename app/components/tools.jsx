import Image from "next/image";
import React from "react";

export default function () {
  return (
    <div >
      {/* tools and stacks */}
      <div className="flex flex-col gap-5 p-20 place-items-center ">
      <div className="text-center  mb-10">
          <div className="text-2xl font-bold flex justify-center place-items-center gap-5">Tools and Technologies.
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-xml-icon lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
          </div>
          <div className="mr-60 ml-60 mt-2 max-sm:w-70 max-md:w-100">"A summary of the core tools and technologies that powered the design, development, and deployment of this application."</div>
        </div>
        <div className="flex gap-10 max-sm:flex-col max-md:flex-col">
        {/* languaues */}
        <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-80 bg-white">
          <Image
            src="/images/coding_11998938.png"
            alt="languages"
            width={70}
            height={70}
            className="pb-5"
          />
          <label className="text-lg font-semibold">Languaues</label>
          <div>HTML</div>
          <div>CSS</div>
          <div>Javascript</div>
          <div>Typescript</div>
          <div>Python</div>
        </div>
        {/* framework */}
        <div className="p-5 pt-10 shadow-xl rounded-2xl border-slate-200 w-70 h-80 bg-white">
          <Image
            src="/images/metadata_18609631.png"
            alt="framework"
            width={70}
            height={70}
            className="pb-5"
          />
          <label className="text-lg font-semibold">Frameworks</label>
          <div>Next.js</div>
          <div>Node.js (Express)</div>
          <div>Vue.js</div>
        </div>
        {/* library */}
        <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-80 bg-white">
          <Image
            src="/images/layers_11676373.png"
            alt="libraries"
            width={70}
            height={70}
            className="pb-5"
          />
          <label className="text-lg font-semibold">Libraries</label>
          <div>React</div>
          <div>Axios</div>
          <div>Cloudinary</div>
          <div>Leaflet</div>
          <div>Stripe</div>
        </div>
         {/* database */}
         <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-80 bg-white">
          <Image
            src="/images/cloud-data-collection_15438762.png"
            alt="database"
            width={70}
            height={70}
            className="pb-5"
          />
          <label className="text-lg font-semibold">Database</label>
          <div>Mysql</div>
          <div>Prisma</div>
          <div></div>
          <div></div>
        </div>
        </div>
        <div className="flex gap-10 max-sm:flex-col max-md:flex-col">
        {/* version conntrol */}
        <div className="p-5 pt-10  shadow-xl rounded-2xl border-slate-200 w-70 h-80 bg-white">
          <Image
            src="/images/control-system_13079449.png"
            alt="design"
            width={70}
            height={70}
            className="pb-5"
          />
          <label className="text-lg font-semibold">Version Control</label>
          <div>Git</div>
          <div>Github</div>
         
        </div>
        {/* design */}
        <div className="p-5 pt-10 shadow-xl rounded-2xl border-slate-200 w-70 h-80 bg-white">
          <Image
            src="/images/graphic-design_12322598.png"
            alt="design"
            width={70}
            height={70}
            className="pb-5"
          />
          <label className="text-lg font-semibold">Design</label>
          <div>Figma</div>
          <div></div>
          <div>Adobe Illustartor</div>
          <div>Adobe Photoshop</div>
          <div>Procreate</div>
        </div>
          {/* research */}
          <div className="p-5 pt-10 shadow-xl rounded-2xl border-slate-200 w-70 h-80 bg-white">
          <Image
            src="/images/scientific_11675628.png"
            alt="research"
            width={70}
            height={70}
            className="pb-5"
          />
          <label className="text-lg font-semibold">Research</label>
          <div>FigJam</div>
          <div>Asana</div>
          <div>Google Workspace</div>
          <div>Microsoft Office</div>
          <div>PowerBi</div>
        </div>
        {/* development tools */}
        <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-80">
          <Image
            src="/images/skills_12322648.png"
            alt="research"
            width={70}
            height={70}
            className="pb-5"
          />
          <label className="text-lg font-semibold">Development Tools</label>
          <div>VS Code</div>
          <div>Postman</div>
          <div>Docker</div>
          <div>Vercel</div>
          <div>Asana</div>
          <div>Discord</div>
        </div>
        </div>
  
      </div>
    </div>
  );
}
