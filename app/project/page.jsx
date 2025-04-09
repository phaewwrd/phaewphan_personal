"use client";
import PetsHome from "../components/petshome";
import BusiMate from "../components/busimate";
import Image from "next/image";

export default function page() {
  return (
    <>
         <Image
                     src="/images/bg-v.PNG"
                     alt="languages"
                     width={1200}
                     height={80}
                     className="absolute left-5 top-450 -z-30 opacity-75"
                   />
      <div className="flex justify-center  mt-10  gap-60 place-items-center items-center">
        <div className="flex flex-col gap-5 w-150">
          <div className="text-4xl font-bold">Projects</div>
          <p className="font-bold text-white text-3xl  text-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
            with experience in design and communication.
          </p>
          <div>
            "A software developer with a strong background in design and
            communication, bridging the gap between technical functionality and
            user experience."
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
      {/* section2 */}
      <div className="flex gap-10 justify-center">
        {/* languaues */}
        <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-75">
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
        <div className="p-5 pt-10 shadow-xl rounded-2xl border-slate-200 w-70 h-75">
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
        <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-75">
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
         <div className="p-5 pt-10 shadow-xl  rounded-2xl border-slate-200 w-70 h-75">
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

      <BusiMate />

      <PetsHome />
    </>
  );
}
