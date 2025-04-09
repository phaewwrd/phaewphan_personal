'use client'
import VideoPetsHome from "../components/videopetshome";
import GithubPetHome from "../components/githubpethome";
import Image from "next/image";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

export default function petshome() {
    return (
        <div className="p-10 m-30 shadow-xl rounded-2xl bg-white">
          {/* section 1 */}
          <div className="flex gap-50 justify-center items-center mb-30">
          <Image
                                 src="/images/petshomescreen.png"
                                 alt="languages"
                                 width={600}
                                 height={80}
                                 className="mt-10"
                               />
            <div className="flex flex-col w-100">

          <div className="text-6xl font-bold text-teal-600 ">
            Pets <span className="italic ">Home</span>
          </div>
          <div className="text-xl  text-slate-800 font-semibold">
            Website Personal Project
          </div>
            </div>
         
          </div>
          <div className="flex flex-col place-items-center gap-10">
    
            <div className="flex gap-10">
              <div className="">
              {/* Title and Descriptions */}
              <div className="text-xl  p-10 gap-2 flex flex-col">
                      {/* description */}
                         <span className="font-semibold"> Overview</span>   A web platform for finding veterinary hospitals and booking appointments online.
                      </div>
              {/* features */}
             
              <div className="flex w-200 shadow-xl p-5 z-20 rounded-2xl">
                <Swiper
                  pagination={true}
                  modules={[Pagination]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    {/* react leaflet */}
                    <div className="flex flex-col p-5">
                      <label className="font-semibold">Feature Mapping</label>
                      <div>
                        Feature displays a map on its website that allows users to search for pet hospitals by type of pet and province. The map will then show the hospital locations based on the selected criteria.
                      </div>
                      <div className="gap-2 flex flex-col p-5  w-50">
                        <label className="text-sm">Libraries</label>
                        <Image
                          src="/images/leaflet.png"
                          alt="languages"
                          width={200}
                          height={80}
                          className=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                  
                </Swiper>
    
              
               
              </div>
              </div>
              <VideoPetsHome />
            </div>
            <GithubPetHome />
          </div>
        </div>
      );
}
