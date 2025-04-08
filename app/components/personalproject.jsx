import Video from "./video";
import VideoPetsHome from "./videopetshome"
import GithubBusimate from "./githubbusimate";
import GithubPetHome from "./githubpethome"
import Image from "next/image";

export default function Ppersonalproject() {
  return (
    <div>
      <div className="m-20 mt-30">
      <div className="text-3xl font-bold">Team Project</div>
        <div className="text-4xl font-bold outline-text outline-stroke">BusiMate Project</div>
        <div className="flex gap-10">
        <Video/>
        <GithubBusimate/>
        </div>
      </div>

<div className="m-20 mt-30">
      <div className="text-3xl font-bold">Personal Project</div>
        <div className="text-4xl font-bold outline-text outline-stroke">BusiMate Project</div>
        <div className="flex gap-10">
        <VideoPetsHome/>
        <GithubPetHome/>
        </div>
      </div>
      </div>
      

    
  );
}
