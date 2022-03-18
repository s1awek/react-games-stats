/** @format */

import React from 'react';
import { useGlobalContext } from '../context/context';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
export const Screenshots = () => {
  const { singleData } = useGlobalContext();
  console.log(singleData[0].screenshots);
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      navigation
    >
      {singleData[0].screenshots.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img src={item.url.replace('thumb', 'screenshot_big')} alt={`screenshot ${index + 1}`} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
