import dynamic from "next/dynamic";
import React from "react";
const ElectricBoltIcon = dynamic(() =>
  import("@mui/icons-material/ElectricBolt")
);

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Client = () => {
  return (
    <section className="flex flex-col items-center gap-5 py-20 overflow-hidden px-[5rem] bg-gradient-to-tr from-red-500 to-[#ff0e2c]">
      <h1 className="text-3xl font-bold font-Poppins text-white tracking-wide">
        Our Clients
      </h1>
      <Swiper
        slidesPerView={5}
        spaceBetween={50}
        autoplay={{ delay: 500, disableOnInteraction: false }}
        freeMode
        modules={[Pagination, Autoplay, FreeMode]}
        className="mySwiper"
        style={{ width: "70vw", margin: "50px 0 0 0", zIndex: 0 }}
      >
        {Array(15)
          .fill(null)
          .map((item,index) => (
            <SwiperSlide key={index} style={{ background: "none", minWidth: "80px" }}>
              <h1 className="text-2xl font-bold relative text-black">
                <span className="text-white">HI</span>-POWER
                <div className="absolute top-[-2px] left-[40%] ">
                  <ElectricBoltIcon sx={{ fontSize: 20, color: "#FEFB14" }} />
                </div>
              </h1>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};

export default Client;