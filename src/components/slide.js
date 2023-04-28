// import Swiper core and required modules
import {
    Navigation, Pagination, EffectCoverflow,
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
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
            clickable: true,
        }}
        autoplay={{ delay: 10 }}
        navigation={true}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
        effect={"coverflow"}
        coverflowEffect={{
            rotate: 0,
            stretch: 50,
            depth: 50,
            modifier: 1,
            slideShadows: false,
        }}
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 100,
            },
        }}
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
