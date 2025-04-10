
"use client";


export default function Video() {
  return (
    <div className="aspect-video max-w-xl mx-auto w-[1800px] h-full max-sm:w-[300px] max-md:w-[400px]">
      <iframe
        loading="lazy"
        className="w-full h-full"
        src="https://www.canva.com/design/DAGkC5oCunA/HEShXEg7JBG0cDj54wmDcg/watch?embed"
        allow="fullscreen"
      ></iframe>
    
    </div>
  );
}
