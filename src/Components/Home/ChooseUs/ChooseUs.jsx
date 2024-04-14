/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";

function ChooseUs() {
  return (
    <div className="bg">
    <div className="container">
      <div className="text-center py-5">
        <h1 className="section_title">لماذا تختارنا وبكل ثقه</h1>
        <p className="section_subtitle">
          يعتبر البرمجة أحد العناصر الأساسية والحيوية في تقديم الحلول التقنية
          المبتكرة والفعالة للعملاء. تقوم البرمجة بتحويل الأفكار والمتطلبات إلى
          تطبيقات وبرمجيات قائمة على الحوسبة، مما يساعد على تحسين العمليات
          وزيادة الإنتاجية. تعتمد فعالية مكتب الاستشارات في هذا المجال على فريق
          متخصص من المبرمجين والمطورين الذين يمتلكون مهارات عالية وخبرة واسعة في
          مجالات متعددة مثل تطوير تطبيقات الويب والهواتف الذكية، وتحليل
          البيانات، والذكاء الصناعي، والأمن
        </p>
      </div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 3,
          slideShadows: false,
        }}
        fadeEffect={{
          crossFade: true,
        }}
        pagination={{ clickable: true }}
        modules={[EffectCoverflow, Pagination, Autoplay, EffectFade]}
        className="swiper_container"
      >
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-img"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-img"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-img"
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-img"
            src="https://swiperjs.com/demos/images/nature-4.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-img"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-img"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-img"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img
            className="swiper-img"
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="slide_image"
          />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
  );
}

export default ChooseUs;
