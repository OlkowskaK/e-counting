import React from "react";
import "./SliderCss.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const TestimonialSlide = ({ zdjecie, opinia, name, zawod }) => {
  return (
    <div className="testimonial">
      <img src={zdjecie} alt={name} className="testimonial-img" />
      <div className="testimonial-content">
        <p>{opinia}</p>
        <span className="testimonial-name">{name}</span>
        <span className="testimonial-job">{zawod}</span>
      </div>
    </div>
  );
};

const TestimonialSlider = ({ slides }) => {
  return (
    <Swiper
      loop={true}
      navigation={true}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1} // Show one slide at a time
      spaceBetween={20} // Space between slides
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <TestimonialSlide
            zdjecie={slide.zdjecie}
            opinia={slide.opinia}
            name={slide.name}
            zawod={slide.zawod}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialSlider;
