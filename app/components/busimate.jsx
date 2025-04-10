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

export default function busimate() {
  return (
    <div className="p-10 m-30 shadow-xl rounded-2xl bg-white max-sm:m-5 max-sm:p-10 max-sm:rounded-2xl max-sm:shadow-xl ">
      <div className="flex gap-50 justify-center items-center mb-30 max-sm:mb-0 max-sm:gap-5 max-sm:flex-col max-md:mb-0 max-md:flex-col max-md:gap-10">
        <div className="flex gap-10 max-sm:gap-2 max-sm:flex-col  max-md:flex-col">
        <Image
          src="/images/busimatescreenshot.png"
          alt="languages"
          width={250}
          height={80}
          className="mt-10 max-sm:h-full max-sm:w-70 max-md:w-90"
        />
        <Image
          src="/images/busimatescreenshot2.png"
          alt="languages"
          width={250}
          height={80}
          className="mt-10 max-sm:h-full max-sm:w-70 max-sm:pb-10 max-md:w-90 max-md:pb-10"
        />
        </div>
        <div className="flex flex-col w-100">
          <div className="text-6xl font-bold text-cyan-600 ">
            Busi<span className="italic">M</span>ate
          </div>
          <div className="text-xl text-slate-800 font-semibold mb-10">
            Web-App Team Project
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col place-items-center gap-10">
        <div className="flex gap-10 max-sm:flex-col">
          <Video  />
          <div className="max-sm:flex max-sm:flex-col max-sm:place-items-center">
            {/* Title and Descriptions */}
            <div className="text-xl p-10 gap-2 flex flex-col max-sm:p-5 max-sm:place-items-center">
              {/* description */}
              <span className="font-semibold"> Overview</span> A web app that
              connects senior citizens with transport services for hospital
              visits.{" "}
            </div>
         
            <div className="flex w-120 shadow-xl p-5 z-20 rounded-2xl max-sm:w-100 max-md:120">
              <Swiper
                pagination={true}
                modules={[Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>

                  <div className="flex flex-col p-5">
                    <label className="font-semibold">Feature Mapping</label>
                    <div>
                      Feature Mapping show users after find nearby drivers based
                      on their needs, showing them on a map with real-time
                      distance to the user and hospital. It speeds up response
                      times and makes booking easier, especially for medical
                      trips.
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
                <SwiperSlide>

                  <div className="flex flex-col ">
                    <label className="font-semibold">Feature Payment</label>
                    <div>
                      Feature Payment refers to the secure payment processing
                      via credit card and QR code provided by our service
                      provider, offering convenience for future transactions.
                    </div>
                    <div className="gap-2 flex flex-col p-5 w-50">
                      <label className="text-sm">Libraries</label>
                      <Image
                        src="/images/stripe.png"
                        alt="languages"
                        width={100}
                        height={80}
                        className=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>

                  <div className="flex flex-col p-5">
                    <label className="font-semibold">Feature Chat</label>
                    <div>
                      Feature Chat Real-Time enables communication between the
                      user and driver to track service progress, ensuring smooth
                      and efficient operations.{" "}
                    </div>
                    <div className="gap-2 flex flex-col p-5 w-50">
                      <label className="text-sm">Libraries</label>
                      <Image
                        src="/images/socket.io.png"
                        alt="languages"
                        width={200}
                        height={80}
                        className="max-sm:w-70"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
        <GithubBusimate />
      </div>
    </div>
  );
}
