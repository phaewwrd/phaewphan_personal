import Image from "next/image";
import AboutMe from "./components/aboutme"
import Tools from "./aboutmeinfo/tools";
import PersonalProject from "./aboutmeinfo/personalproject";

export default function Home() {
  return (
    <div>
      <AboutMe />
      <Tools />
      <PersonalProject />
    </div>
   
  );
}
