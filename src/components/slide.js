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
import { Link } from 'react-router-dom';
import defaultImage from '../images/avatar.png';
import SpecializationList from './specializationList';

function Slider({ freelancers }) {
  return (
    <Swiper
          // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={3}
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
        768: {
          width: 768,
          slidesPerView: 2,
        },
        // when window width is >= 1366px
        1366: {
          width: 1366,
          slidesPerView: 3,
        },
      }}
      // onSwiper={(swiper) => console.log(swiper)}
      // onSlideChange={() => console.log('slide change')}
    >
      {freelancers.map((fl) => (
        <SwiperSlide key={fl.id}>
          <Link to={`/details/${fl.id}`} type="button" key={fl.id}>
            <div
              className="border ml-1 col-auto rounded shadow-lg px-4 mb-6 flex flex-col items-center justify-center mobileWidth mobilePadding mx-auto"
              key={fl.id}
            >
              <img
                src={(fl.featured_image) ? fl.featured_image.url : defaultImage}
                alt={fl.name}
                className="w-60 h-60 rounded-full p-1 my-1 bg-slate-100 border-slate-700"
              />
              <h2 className="uppercase font-bold my-1 text-clrPrime">{fl.name}</h2>
              <hr className="border-t-2 border-dashed border-gray-200 w-48 my-2" />
              <p className="text-gray-400 text-center my-2 w-full">{fl.details}</p>
              <div className="flex items-center justify-center w-full m-3">
                <SpecializationList specializations={fl.specializations || []} />
              </div>
            </div>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

Slider.propTypes = {
  freelancers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    specializations: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    featured_image: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
    details: PropTypes.string.isRequired,
  })).isRequired,
};
export default Slider;
