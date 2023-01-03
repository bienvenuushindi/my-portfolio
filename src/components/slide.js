// import Swiper core and required modules
import {
  Navigation, Pagination, Scrollbar, A11y,
} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import PropTypes from 'prop-types';
import TestimonialCard from "./items/testimonialCard";

function Slider({ testimonials }) {
  return (
    <Swiper
          // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: false, hide: true }}
      breakpoints={{
        // when window width is >= 640px
        360: {
          width: 360,
          slidesPerView: 1,
        },
        // when window width is >= 768px
        // 768: {
        //   width: 768,
        //   slidesPerView: 2,
        // },
        // when window width is >= 1366px
          768: {
          width: 1100,
          slidesPerView: 2,
        },
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {testimonials.map((item) => (
        <SwiperSlide key={item.name}>
            <TestimonialCard item={item}/>
        </SwiperSlide>
      ))}
        <SwiperSlide>
        </SwiperSlide>
    </Swiper>
  );
}

Slider.propTypes = {
    testimonials: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        comment: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        linkedIn: PropTypes.string.isRequired,
  })).isRequired,
};
export default Slider;
