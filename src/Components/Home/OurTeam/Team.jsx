/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { EffectFade, Autoplay } from "swiper/modules";

const Team = () => {
  return (
    <div className="bg">
      <div className="container section">
        <div className="text-center">
          <h1 className="section_title">مكتب محاماه دولي بمعايير عالمية</h1>
          <p className="section_subtitle pt-3">
            يعتبر البرمجة أحد العناصر الأساسية والحيوية في تقديم الحلول التقنية
            المبتكرة والفعالة للعملاء. تقوم البرمجة بتحويل الأفكار والمتطلبات
            إلى تطبيقات وبرمجيات قائمة على وتحليل البيانات، والذكاء الصناعي،
            والأمن بتحويل الأفكار والمتطلبات إلى تطبيقات وبرمجيات قائمة على
            وتحليل البيانات، والذكاء الصناعي، والأمن
          </p>
        </div>
        <div className="mt-4">
          <div className="row">
            <div className="col-lg-4">
              <Swiper
                effect="fade"
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-2.jpg"
                    className="img-fluid"
                    alt="slide_image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    className="img-fluid"
                    alt="slide_image"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-4">
              <Swiper
                effect="fade"
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    className="img-fluid"
                    alt="slide_image"
                  />
</SwiperSlide>
                  <SwiperSlide>
                    <img
                      src="https://swiperjs.com/demos/images/nature-5.jpg"
                      className="img-fluid"
                      alt="slide_image"
                    />
                  </SwiperSlide>
                
              </Swiper>
            </div>
            <div className="col-lg-4">
              <Swiper
                effect="fade"
                spaceBetween={30}
                slidesPerView={1}
                loop={true}
                autoplay={{ delay: 7000, disableOnInteraction: false }}
                modules={[Autoplay, EffectFade]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-4.jpg"
                    className="img-fluid"
                    alt="slide_image"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src="https://swiperjs.com/demos/images/nature-3.jpg"
                    className="img-fluid"
                    alt="slide_image"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
