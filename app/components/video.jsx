"use client";


export default function Video() {
  return (
    <div className="aspect-video max-w-xl mx-auto w-[2200px] h-full max-sm:w-[350px] max-md:w-[400px]">
      <iframe
        loading="lazy"
        className="w-full h-full"
        src="https://www.canva.com/design/DAGi22pDxjw/J__Wr_B9I6rDuUGFv98G7g/watch?embed"
        allow="fullscreen"
      ></iframe>
    
    </div>
  );
}
