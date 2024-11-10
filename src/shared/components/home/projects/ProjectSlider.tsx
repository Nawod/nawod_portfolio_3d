"use client";
import Image from "next/image";
/**
 * @class ProjectSlider
 * @description purpose of this component is to render the slider of projects
 * @author Nawod Madhuvantha
 */

import React from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const ProjectSlider = () => {
  return (
    <div className="h-full w-full">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 15,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination]}
        loop={true}
        className="project-swiper h-full"
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 3 },
        }}
      >
        {/* {ProductList.list.map((item) => ( */}
        <SwiperSlide
          // key={item.slug}
          className="project-item relative w-[400px] h-[600px]"
          style={{ width: "400px", height: "600px" }}
        >
          <div className="relative">
            <div className="relative">
              <Image
                src="/aboutBg.jpg"
                alt=""
                fill
              />
            </div>
            <div>Project Name</div>
            <div className="flex flex-wrap gap-2">
              <div>React</div>
            </div>
            <div>project short description</div>
            <div>Preview</div>
          </div>
        </SwiperSlide>
        {/* ))} */}
      </Swiper>
    </div>
  );
};

export default ProjectSlider;
