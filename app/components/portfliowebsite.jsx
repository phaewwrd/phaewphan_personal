"use client";
import GithubBusimate from "./githubbusimate";
import Video from "./video";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import VideoPortFolio from "./videoportfolio";
import GithubPort from "./githubport";

export default function Portfoliowebsite() {
  return (
    <div className="p-10 m-30 shadow-xl rounded-2xl bg-white max-sm:m-5 max-sm:p-10 max-sm:shadow-2xl">
      <div className="flex flex-col  justify-center text-end m-10 max-sm:mb-0 max-sm:gap-5">
      <div className="flex flex-col ">
          <div className="text-6xl font-bold text-orange-400 ">
            Portfolio
          </div>
          <div className="text-xl text-slate-800 font-semibold mb-5">
            Web-App Personal Project
          </div>
        </div>
        <div className="flex mb-20 gap-10 max-sm:flex-col">
        <Image
          src="/images/portfolioweb.png"
          alt="languages"
          width={700}
          height={80}
          className="mt-10 max-sm:w-100"
        />
        <Image
          src="/images/portfoliowebapp.png"
          alt="languages"
          width={250}
          height={80}
          className="mt-10"
        />
        </div>
        
      </div>
      <div className="flex w-full flex-col place-items-center gap-10">
        <div className="flex gap-10 max-sm:flex-col">
          <VideoPortFolio  />
          <div className="max-sm:flex max-sm:flex-col max-sm:place-items-center">
            {/* Title and Descriptions */}
            <div className="text-xl p-10 gap-2 flex flex-col max-sm:p-5 max-sm:place-items-center">
              {/* description */}
              <span className="font-semibold"> Overview</span> "A personal website presenting my profile, technical expertise, and project portfolio as a software developer."
            </div>
            <div className="gap-2 flex flex-col p-5 w-50">
                      <label className="text-sm">Languages</label>
                      <Image
                        src="/images/next.png"
                        alt="languages"
                        width={120}
                        height={80}
                        className="max-sm:w-70"
                      />
                    </div>
            
          </div>
        </div>
        <GithubPort />
      </div>
    </div>
  );
}
