import ButtonAboutme from "./buttonaboutme";
import Image from "next/image";

export default function aboutme() {
  return (
    <div className=" grid grid-cols-2  bg-white gap-5 place-items-center  items-center">
      <div className="flex flex-col gap-3 pl-30">
        <div className="text-3xl font-bold">Software Developer</div>
        <p className="font-bold text-white text-3xl  text-shadow-[2px_2px_2px_rgba(0,0,0,0.4)]">
          with experience in design and communication.
        </p>
        <div>
          "A software developer with a strong background in design and
          communication, bridging the gap between technical functionality and
          user experience."
        </div>
        <ButtonAboutme />
      </div>
      {/* image */}
      <div className="bg-white">
      <Image
        src="/images/aboutme.jpg"
        alt="aboutme picture"
        width={400}
        height={200}
        className="p-5"
      />
      </div>
    </div>
  );
}
