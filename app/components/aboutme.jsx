import ButtonAboutme from "./buttonaboutme";
import Image from "next/image";

export default function aboutme() {
  return (
    <div className=" flex  justify-center  mb-20 mt-10 gap-50 place-items-center  items-center max-sm:mb-10 max-sm:gap-10 max-sm:flex-col max-sm:place-items-center">
      <div className="flex flex-col gap-5 w-150 max-sm:w-70">
        <div className="text-3xl font-bold ">Software Developer</div>
        <p className="font-bold text-white text-3xl  text-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
          with experience in design and communication.
        </p>
        <div className="">
          "A software developer with a strong background in design and
          communication, bridging the gap between technical functionality and
          user experience."
        </div>
        <ButtonAboutme />
      </div>
      {/* image */}
      <div className="">
      <Image
        src="/images/programmer.png"
        alt="aboutme picture"
        width={450}
        height={200}
        className="p-5 max-sm:w-70"
      />
       <Image
                 src="/images/bg-v.png"
                 alt="bg-v"
                 width={600}
                 height={80}
                 className="absolute top-10 -z-10 opacity-75"
               />
      </div>
    </div>
  );
}
