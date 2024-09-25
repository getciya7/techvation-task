import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

function Home() {
  return (
    <>
      <section className="home" id="home">
        <Swiper
          className="home-slider"
          spaceBetween={20}
          effect="fade"
          loop={true}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          centeredSlides={true}
          autoplay={{
            delay: 9000,
            disableOnInteraction: false,
          }}
          modules={[Navigation, Pagination, Autoplay]}
        >
          {[
            {
              title: "Debt Optimisation",
              description:
                "Maximize efficiency by restructuring debts in harmony with your cash flow and business objectives. Achieve financial goals seamlessly with our tailored debt optimization solutions. ",
            },
            {
              title: "Decision Dashboard",
              description:
                "We specialize in streamlining and organizing financial processes,. boosting profitability, and aligning with business goals, Our periodic dashboards empower. corporates to assess performance and implement strategic corrections effectively. ",
            },
            {
              title: "Auditing",
              description:
                "Ensure financial integrity with our meticulous auditing services. Trust our expertise to safeguard your assets and maintain compliance effortlessly. ",
            },
          ].map((slide, index) => (
            <SwiperSlide key={index} className="box">
              <div className="content">
                <h3>{slide.title}</h3>
                <p>
                  {slide.description.split(". ").map((sentence, idx) => (
                    <span key={idx}>
                      {sentence}
                      <br />
                    </span>
                  ))}
                </p>
              </div>
            </SwiperSlide>
          ))}
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
        </Swiper>
      </section>
    </>
  );
}

export default Home;
