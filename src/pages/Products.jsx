import React from "react";
import { product_1 } from "../assets";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Products() {
  return (
    <>
      <br />
      <br />
      <section className="products" id="products">
        <h1 className="heading">
          We are sector agnostic and we work with a broad spectrum of clients
          <span>
            <br /> We are a team of professionals with experience in
          </span>
        </h1>
        <br />
        <br />
        <Swiper
          className="products-slider"
          spaceBetween={20}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 9500,
            disableOnInteraction: false,
          }}
          grabCursor={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
          modules={[Autoplay, Pagination]}
        >
          {[
            "Investment Banking",
            "Corporate Banking",
            "Corporate Finance",
            "Credit Rating",
          ].map((product, index) => (
            <SwiperSlide key={index}>
              <div className="box">
                <div className="image">
                  <img src={product_1} alt="" />
                </div>
                <div className="content">
                  <h3>{product}</h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}

export default Products;
