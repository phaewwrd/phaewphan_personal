import Video from "./video";
import GithubBusimate from "./githubbusimate";

export default function Ppersonalproject() {
  return (
    <div>
      <div>
      <div className="text-3xl font-bold">Personal Project</div>
        <div className="text-4xl font-bold outline-text outline-stroke">BusiMate Project</div>
        <Video/>
      
        <GithubBusimate/>
      </div>

      <div>Pet Home</div>
      <a href="https://github.com/Sirikan-P/cc19-speedDev-Backend">
        PetHome/Frontend
      </a>
      <a href="https://github.com/Sirikan-P/cc19-speedDev-Backend">
        Pethome/Backend
      </a>
    </div>
  );
}
