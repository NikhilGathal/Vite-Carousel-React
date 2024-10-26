import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './style.css';

// Import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true} // Enable looping for continuous navigation
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Enable arrow navigation
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className='i'
            src='https://rukminim2.flixcart.com/fk-p-flap/1200/250/image/126619f56d1f3607.jpg?q=100'
            alt="Slide 1"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='i'
            src='https://rukminim2.flixcart.com/fk-p-flap/1200/250/image/6493cebc0a00ece1.jpg?q=100'
            alt="Slide 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='i'
            src='https://rukminim2.flixcart.com/fk-p-flap/1200/250/image/8394e4a5f5c86a01.jpeg?q=100'
            alt="Slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className='i'
            src='https://rukminim2.flixcart.com/fk-p-flap/1200/250/image/d0e281a0cfa9c139.jpg?q=100'
            alt="Slide 4"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
