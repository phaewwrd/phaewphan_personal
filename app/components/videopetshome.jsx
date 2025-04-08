
"use client";


export default function Video() {
  return (
    <div className="aspect-video max-w-xl mx-auto w-[1800px] h-full">
      <iframe
        loading="lazy"
        className="w-full h-full"
        src="https://www.canva.com/design/DAGkC5oCunA/HEShXEg7JBG0cDj54wmDcg/watch?embed"
        allow="fullscreen"
      ></iframe>
      <a
        href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAGi22pDxjw&#x2F;J__Wr_B9I6rDuUGFv98G7g&#x2F;watch?utm_content=DAGi22pDxjw&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link"
        target="_blank"
        rel="noopener"
      >
        Pets Project
      </a>
      {/* <ReactPlayer url="https://www.youtube.com/watch?v=dQw4w9WgXcQ" controls width="100%" height="100%" /> */}
    </div>
  );
}
