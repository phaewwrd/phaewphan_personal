"use client";
import { useRouter } from "next/navigation";

export default function githubbusimate() {
  const router = useRouter();

  const goToFrontEnd = () => {
    router.push("https://github.com/Sirikan-P/codecamp-busiMate-front");
  };
  const goToBackEnd = () => {
    router.push("https://github.com/Sirikan-P/cc19-speedDev-Backend");
  };
  return (
    <>
      {/* github */}
      <div className="flex flex-col gap-5 place-items-center mt-10">
        {/* description */}
        <div>
          • Overview - A web app that connects senior citizens with transport
          services for hospital visits. 
          <br />• Features - Schedule rides, track
          drivers, and manage bookings with user-friendly navigation. 
          <br />• Tech
          Stack - Developed using HTML, CSS,React.js, Tailwind, and
          Express/Node.js, using Prisma for database management with socket.io
          for real time tracking(chatting)
        </div>
        {/* github icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-github-icon lucide-github"
        >
          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
          <path d="M9 18c-4.51 2-5-2-7-2" />
        </svg>
        <div className="flex gap-5">

        {/* frontend */}
        <button
          className="bg-slate-500 text-white px-4 py-2 rounded-md"
          onClick={goToFrontEnd}
        >
          BusiMate/Front end
        </button>
        {/* Backend */}
        <button
          className="bg-slate-500 text-white px-4 py-2 rounded-md"
          onClick={goToFrontEnd}
        >
          BusiMate/Back end
        </button>
        </div>
      </div>
    </>
  );
}
