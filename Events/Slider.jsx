import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper core and required modules
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Events.css';

const SliderSection = () => {
  return (
    <section className="slider-section pe-5" style={{backgroundColor:'#e7f1ff'}}>
      <div className="container" style={{marginRight:'9.5rem'}}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000, // 5 seconds
            disableOnInteraction: false, // Keeps autoplay active even after user interaction
          }}
        >
          <SwiperSlide>
            <img src="https://vignanbuckets.s3.us-east-1.amazonaws.com/public/DANCE.JPG" alt="University Event 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://vignanbuckets.s3.us-east-1.amazonaws.com/public/2.png" alt="University Event 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://vignanbuckets.s3.us-east-1.amazonaws.com/public/HACKK.JPG" alt="University Event 3" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default SliderSection;