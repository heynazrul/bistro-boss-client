import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from '../../../assets/home/slide1.jpg';
import slide2 from '../../../assets/home/slide2.jpg';
import slide3 from '../../../assets/home/slide3.jpg';
import slide4 from '../../../assets/home/slide4.jpg';
import slide5 from '../../../assets/home/slide5.jpg';

const Category = () => {
  return (
    <div className="max-w-7xl mx-auto my-10">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <img
            src={slide1}
            alt=""
          />

          <h3 className="text-3xl text-center -mt-16 uppercase text-white  ">Salads</h3>
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={slide2}
            alt=""
          />
          <h3 className="text-3xl text-center -mt-16 uppercase text-white  ">Pizzas</h3>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src={slide3}
            alt=""
          />
          <h3 className="text-3xl text-center -mt-16 uppercase text-white  ">Soups</h3>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src={slide4}
            alt=""
          />
          <h3 className="text-3xl text-center -mt-16 uppercase text-white  ">Desserts</h3>
        </SwiperSlide>
        <SwiperSlide>
          {' '}
          <img
            src={slide5}
            alt=""
          />
          <h3 className="text-3xl text-center -mt-16 uppercase text-white  ">Salads</h3>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Category;
