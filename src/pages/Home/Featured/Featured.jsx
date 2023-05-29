import SectionTitle from '../../../components/SectionTitle/SectionTitle';

import featuredImg from '../../../assets/home/featured.jpg'

import './Featured.css'
const Featured = () => {
  return (
    <section className="featured-item  bg-fixed  text-white">
      <div className="bg-black px-72 pt-16 pb-24 bg-opacity-40">
        <SectionTitle
          subHeading={'check it out'}
          heading={'featured item'}></SectionTitle>
        <div className="md:flex justify-center items-center space-x-4 space-y-4">
          <div>
            <img
              src={featuredImg}
              alt=""
            />
          </div>
          <div className="space-y-3">
            <p>Aug 20, 2023</p>
            <p className="uppercase">Where can i get some?</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa accusamus soluta ipsam, ab modi tempore
              illum harum exercitationem rerum dolor temporibus laboriosam minus fugiat possimus dolorum eos earum
              incidunt voluptatem?
            </p>
            <button className="btn btn-outline text-white border-0 border-b-4">Order Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
