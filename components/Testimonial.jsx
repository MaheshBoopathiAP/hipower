import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import "../styles/Testimonial.css";

import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const Testimonial = () => {
    return (
        <section className="flex flex-col items-center gap-10 py-20 overflow-hidden mx-[5rem]">
            <h1 className='text-3xl font-bold font-Poppins text-red-500 tracking-wide mb-3'>Testimonials</h1>
            <Swiper
                effect={'coverflow'}
                autoplay={{ delay: 2000, disableOnInteraction: false }}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination, Autoplay]}
                className="mySwiper w-full mx-[5rem_!important] overflow-hidden z-[0_!important]"
                >
                <SwiperSlide className='w-[80%] md:w-[40%_!important] h-[500px_!important]'>
                    <div className="flex flex-col justify-center gap-3 items-center h-[50%]">
                        <p className="bg-[#c9d3fd66] text-white text-3xl h-16 w-16 flex items-center justify-center rounded-full">
                            LD
                        </p>
                        <p className="text-4xl">Liza Danial</p>
                        <p className="text-xs">United States</p>
                    </div>
                <p className="h-[50%] py-5 px-10 text-center text-base  font-normal">
                Kirabiz has evolved my web application with highly satisfactory and
                maintainable code, which is easy to follow. Kirabiz team is very
                trustworthy and dedicated. On time delivery and always meeting
                delivery. It was a pleasure to work with them.
                </p>
                </SwiperSlide>
                <SwiperSlide className='w-[80%] md:w-[40%_!important] h-[500px_!important]'>
                <div className="testContainer">
                <p className="bg-[#c9d3fd66] text-[#262e45bb] text-3xl h-16 w-16 flex items-center justify-center rounded-full">
                    LD
                </p>
                <p className="text-4xl">Liza Danial</p>
                <p className="text-xs">United States</p>
                </div>
                <p className="h-[50%] py-5 px-10 text-center text-base  font-normal">
                Kirabiz has evolved my web application with highly satisfactory and
                maintainable code, which is easy to follow. Kirabiz team is very
                trustworthy and dedicated. On time delivery and always meeting
                delivery. It was a pleasure to work with them.
                </p>
                </SwiperSlide>
                <SwiperSlide className='w-[80%] md:w-[40%_!important] h-[500px_!important]'>
                <div className="testContainer">
                <p className="bg-[#c9d3fd66] text-[#262e45bb] text-3xl h-16 w-16 flex items-center justify-center rounded-full">
                    LD
                </p>
                <p className="text-4xl">Liza Danial</p>
                <p className="text-xs">United States</p>
                </div>
                <p className="h-[50%] py-5 px-10 text-center text-base  font-normal">
                Kirabiz has evolved my web application with highly satisfactory and
                maintainable code, which is easy to follow. Kirabiz team is very
                trustworthy and dedicated. On time delivery and always meeting
                delivery. It was a pleasure to work with them.
                </p>
                </SwiperSlide>
                <SwiperSlide className='w-[80%] md:w-[40%_!important] h-[500px_!important]'>
                <div className="testContainer">
                <p className="bg-[#c9d3fd66] text-[#262e45bb] text-3xl h-16 w-16 flex items-center justify-center rounded-full">
                    LD
                </p>
                <p className="text-4xl">Liza Danial</p>
                <p className="text-xs">United States</p>
                </div>
                <p className="h-[50%] py-5 px-10 text-center text-base  font-normal">
                Kirabiz has evolved my web application with highly satisfactory and
                maintainable code, which is easy to follow. Kirabiz team is very
                trustworthy and dedicated. On time delivery and always meeting
                delivery. It was a pleasure to work with them.
                </p>
                </SwiperSlide>
                <SwiperSlide className='w-[80%] md:w-[40%_!important] h-[500px_!important]'>
                <div className="testContainer">
                <p className="bg-[#c9d3fd66] text-[#262e45bb] text-3xl h-16 w-16 flex items-center justify-center rounded-full">
                    LD
                </p>
                <p className="text-4xl">Liza Danial</p>
                <p className="text-xs">United States</p>
                </div>
                <p className="h-[50%] py-5 px-10 text-center text-base  font-normal">
                Kirabiz has evolved my web application with highly satisfactory and
                maintainable code, which is easy to follow. Kirabiz team is very
                trustworthy and dedicated. On time delivery and always meeting
                delivery. It was a pleasure to work with them.
                </p>
                </SwiperSlide>
                <SwiperSlide className='w-[80%] md:w-[40%_!important] h-[500px_!important]'>
                <div className="testContainer">
                <p className="bg-[#c9d3fd66] text-[#262e45bb] text-3xl h-16 w-16 flex items-center justify-center rounded-full">
                    LD
                </p>
                <p className="text-4xl">Liza Danial</p>
                <p className="text-xs">United States</p>
                </div>
                <p className="h-[50%] py-5 px-10 text-center text-base  font-normal">
                Kirabiz has evolved my web application with highly satisfactory and
                maintainable code, which is easy to follow. Kirabiz team is very
                trustworthy and dedicated. On time delivery and always meeting
                delivery. It was a pleasure to work with them.
                </p>
                </SwiperSlide>
                <SwiperSlide className='w-[80%] md:w-[40%_!important] h-[500px_!important]'>
                <div className="testContainer">
                <p className="bg-[#c9d3fd66] text-[#262e45bb] text-3xl h-16 w-16 flex items-center justify-center rounded-full">
                    LD
                </p>
                <p className="text-4xl">Liza Danial</p>
                <p className="text-xs">United States</p>
                </div>
                <p className="h-[50%] py-5 px-10 text-center text-base  font-normal">
                Kirabiz has evolved my web application with highly satisfactory and
                maintainable code, which is easy to follow. Kirabiz team is very
                trustworthy and dedicated. On time delivery and always meeting
                delivery. It was a pleasure to work with them.
                </p>
                </SwiperSlide>
                <SwiperSlide className='w-[80%] md:w-[40%_!important] h-[500px_!important]'>
                <div className="testContainer">
                <p className="bg-[#c9d3fd66] text-[#262e45bb] text-3xl h-16 w-16 flex items-center justify-center rounded-full">
                    LD
                </p>
                <p className="text-4xl">Liza Danial</p>
                <p className="text-xs">United States</p>
                </div>
                <p className="h-[50%] py-5 px-10 text-center text-base  font-normal">
                Kirabiz has evolved my web application with highly satisfactory and
                maintainable code, which is easy to follow. Kirabiz team is very
                trustworthy and dedicated. On time delivery and always meeting
                delivery. It was a pleasure to work with them.
                </p>
                </SwiperSlide>
                <SwiperSlide className='w-[80%] md:w-[40%_!important] h-[500px_!important]'>
                <div className="testContainer">
                <p className="bg-[#c9d3fd66] text-[#262e45bb] text-3xl h-16 w-16 flex items-center justify-center rounded-full">
                    LD
                </p>
                <p className="text-4xl">Liza Danial</p>
                <p className="text-xs">United States</p>
                </div>
                <p className="h-[50%] py-5 px-10 text-center text-base  font-normal">
                Kirabiz has evolved my web application with highly satisfactory and
                maintainable code, which is easy to follow. Kirabiz team is very
                trustworthy and dedicated. On time delivery and always meeting
                delivery. It was a pleasure to work with them.
                </p>
                </SwiperSlide>
            </Swiper>
        </section>
  )
}

export default Testimonial