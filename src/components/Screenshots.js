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
        pagination={{ clickable: true, el: '.swiper-pagination' }}
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
      <div className='swiper-pagination'></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  padding-bottom: 2rem;
  .swiper-pagination {
    width: 100%;
  }
  .swiper-slide {
    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }
  .swiper-button-next,
  .swiper-button-prev {
    top: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    height: 100%;
    margin-top: 0;
    background-color: rgba(255, 255, 255, 0.1);
  }
  .swiper-button-next {
    right: 0;
    width: 42px;
  }
  .swiper-button-prev {
    left: 0;
    width: 42px;
  }
`;
