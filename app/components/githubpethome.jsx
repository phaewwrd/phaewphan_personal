"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function githubpethome() {
  const router = useRouter();

  const goToFrontEnd = () => {
    router.push("https://github.com/phaewwrd/pet-homes/tree/main/Front-end");
  };
  const goToBackEnd = () => {
    router.push("https://github.com/phaewwrd/pet-homes/tree/main/Back-end");
  };

  const goToFigma = () => {
    router.push("https://www.figma.com/proto/spFun88xIhL1kXfwtIwZpt/Pets-Home?node-id=2-3&starting-point-node-id=2%3A3&t=vvsiWAThxG7JKP8C-1")
  };

  return (
    <>
      {/* pethome*/}
      <div className="flex flex-col gap-5 place-items-center mt-10">
        {/* description */}
        <div className="text-xl flex gap-10">
            {/* Overviews */}
          <div className="p-5 pt-10 shadow-xl rounded-2xl h-60">
          {/* <Image
                 src="/images/overviews.png"
                 alt="techstack"
                 width={120}
                 height={10}
                 className="p-5"
               >
                </Image> */}
            <span className="text-2xl font-semibold">Overview</span>
            <br /> A web platform for finding veterinary hospitals and booking
            appointments online. <br />
          </div>
          {/* Features */}
          <div className="p-5 pt-10 shadow-xl rounded-2xl h-60">
          {/* <Image
                 src="/images/features.png"
                 alt="techstack"
                 width={120}
                 height={10}
                 className="p-5"
               >
                </Image> */}
            <span className="text-2xl font-semibold">Features</span>
            <br /> Search hospitals, book appointments, view reviews, and filter
            by location. <br />
          </div>
          {/* Tech Stack */}
          <div className="p-5 shadow-xl rounded-2xl h-60">
          {/* <Image
                 src="/images/techstack.png"
                 alt="techstack"
                 width={120}
                 height={10}
                 className="p-5"
               >
                </Image> */}
            <span className="text-2xl  font-semibold flex place-items-center-safe">
              Tech Stack
            </span>
            <br />
            Built with HTML, CSS, React.js, Tailwind, and Express/Node.js using
            Prisma for database"
          </div>
        </div>

        <div className="flex gap-5 mt-5">
          {/* github icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github-icon lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>

          <div className="flex gap-5">
            {/* frontend */}
            <button
              className="bg-slate-900 text-white px-4 py-2 rounded-md flex gap-2 place-items-center"
              onClick={goToFrontEnd}
            >
              Github / Front end
            </button>
            {/* Backend */}
            <button
              className="bg-slate-900 text-white px-4 py-2 rounded-md flex gap-2 place-items-center"
              onClick={goToBackEnd}
            >
              Github / Back end
            </button>
          </div>
        </div>
        <div className="flex gap-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-figma-icon lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>            {/* figma */}
            <button
              className="bg-slate-900 text-white px-4 py-2 rounded-md flex gap-2 place-items-center"
              onClick={goToFigma}
            >
              Figma
            </button>
        </div>
            {/* <iframe className="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://embed.figma.com/proto/spFun88xIhL1kXfwtIwZpt/Pets-Home?node-id=2-3&starting-point-node-id=2%3A3&embed-host=share" allowFullScreen></iframe> */}
      </div>
    </>
  );
}
