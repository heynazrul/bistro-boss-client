import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';

const Testimonials = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
          .then((res) => res.json())
          .then((data) => setReviews(data));
    },[])
  return (
    <section className="max-w-7xl mx-auto my-10">
      <SectionTitle
        subHeading={'what our client say'}
        heading={'Testimonials'}></SectionTitle>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="flex items-center flex-col gap-4 text-center w-6/12 mx-auto">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <p>{review.details}</p>
              <h3 className="text-2xl text-orange-400">{review.name}</h3>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
