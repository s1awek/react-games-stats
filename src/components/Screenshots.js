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

import styled from 'styled-components';
export const Screenshots = () => {
  const { singleData } = useGlobalContext();
  return (
    <Wrapper>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .swiper-slide {
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
`;
