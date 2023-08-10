

import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Heading } from "@chakra-ui/react";
// Import Swiper styles
import "swiper/css";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";


// import required modules

const importAll = (r) => r.keys().map(r);
const images = importAll(require.context('../../images', false, /\.(png|jpe?g|svg)$/));

export default function Slider() {
  return (
    <>
    <Heading padding={5}>Current facilities</Heading>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >

       {
       images.map((image, index) => (
            <SwiperSlide> 
              <img key={index} src={image} alt={`Image ${index + 1}`} />
            </SwiperSlide>// 
         ))
      }
      </Swiper>
    </>
  );
}
