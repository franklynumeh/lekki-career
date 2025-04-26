import React from "react";
import "./testimonial.css";
import { Data } from "./Data";
import image from "../../assets/profile.jpg";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Testimonial = () => {
  return (
    <section className="testimonial container section-half" id="testimonial">
      <h2 className="section__title top" style={{ marginBottom: "1rem" }}>
        WE ARE HIRING!!!
      </h2>

      {/* <span className="section__subtitle">Click project names to check them out!</span> */}

      <Swiper
        className="testimonial_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
          1024: {
            slidesPerView: 1,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description, link }) => {
          return (
            <SwiperSlide key={id}>
              <div className="title-div">{title}</div>
              <div className="div-img">
                <p className="testimonial__description">
                  We're hiring! Are you a reliable professional in search of an
                  opportunity? Well this is it!
                  <strong style={{ fontWeight: "bold" }}>
                    {" "}
                    Saturday May 3rd from 1pm to 3pm
                  </strong>{" "}
                  we are doing walk-in interviews on premises. (Address is in the picture below) If you're
                  interested, you may also call the restaurant between those
                  hours.
                </p>
                <div className="image-board">
                  <img src={image} alt="" className="testimonial__img" />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};
//

export default Testimonial;
