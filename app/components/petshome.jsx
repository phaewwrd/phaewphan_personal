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
        <div className="p-10 m-30 shadow-xl rounded-2xl bg-white max-sm:m-5 max-sm:p-5">
          {/* section 1 */}
          <div className="flex gap-30 justify-center items-center mb-30 max-sm:mb-5 max-sm:flex-col max-sm:place-items-center max-sm:gap-10">
          <Image
                                 src="/images/petshomescreen.png"
                                 alt="languages"
                                 width={600}
                                 height={80}
                                 className="mt-10 max-sm:mt-0 max-sm:80 "
                               />
            <div className="flex flex-col w-100 max-sm:w-70 ">

          <div className="text-6xl font-bold text-teal-600 ">
            Pets <span className="italic ">Home</span>
          </div>
          <div className="text-xl  text-slate-800 font-semibold">
            Website Personal Project
          </div>
            </div>
         
          </div>
          <div className="flex flex-col place-items-center gap-10 max-sm:gap-5">
    
            <div className="flex gap-10 max-sm:flex-col max-sm:gap-5 max-sm:place-items-center">
              <div className="">
              {/* Title and Descriptions */}
              <div className="text-xl  p-10 gap-2 flex flex-col max-sm:place-items-center">
                      {/* description */}
                         <span className="font-semibold"> Overview</span>   A web platform for finding veterinary hospitals and booking appointments online.
                      </div>
              {/* features */}
             
              <div className="flex w-120 shadow-xl p-5 z-20 rounded-2xl max-sm:w-80 max-sm:justify-center max-sm:p-0">
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
