"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function githubbusimate() {
  const router = useRouter();

  const goToFrontEnd = () => {
    router.push("https://github.com/Sirikan-P/codecamp-busiMate-front");
  };
  const goToBackEnd = () => {
    router.push("https://github.com/Sirikan-P/cc19-speedDev-Backend");
  };
  return (
    <div className="flex flex-col max-sm:w-90">
      {/* tools and technologies */}
      <div className=" p-10  flex place-items-center max-sm:flex-col max-md:flex-col">
        <div className="flex flex-col gap-5">
          <label className="font-semibold text-2xl">
            Tools and Technologies
          </label>
          <div className="text-xl">are software tools that assist in planning, designing, developing, testing, and managing projects.

</div>
          {/* github */}
          <div className="flex gap-5 justify-start mt-10 ">
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
              className="lucide lucide-github-icon lucide-github max-sm:w-20"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>

            <div className="flex gap-5 max-sm:flex-col">
              {/* frontend */}
              <button
                className="bg-slate-900 max-sm:mb-0 text-white px-4 py-2  rounded-md flex gap-2 cursor-pointer "
                onClick={goToFrontEnd}
              >
                Github / Front end
              </button>
              <button
                className="bg-slate-900 max-sm:mb-5 text-white px-4 py-2 rounded-md flex gap-2 cursor-pointer"
                onClick={goToBackEnd}
              >
                Github / Back end
              </button>
            </div>
          </div>
        </div>
        <Image
          src="/images/busimatestack.png"
          alt="languages"
          width={400}
          height={80}
          className="w-300 max-sm:h-50 "
        />
      </div>
    </div>
  );
}
