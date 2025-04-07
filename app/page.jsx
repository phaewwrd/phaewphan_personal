import Image from "next/image";
import AboutMe from "./components/aboutme"
import Tools from "./components/tools";
import PersonalProject from "./components/personalproject";


export default function Home() {
  return (
    <div className="bg-wgite">
      <AboutMe />
      <Tools />
      <PersonalProject />
    </div>
   
  );
}
