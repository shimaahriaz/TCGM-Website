/* eslint-disable import/no-unresolved */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

import { Mousewheel, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import style from "./service.module.css";

const Service = () => {
  return (
    <>
      <div className="bg">
        <div className="container section">
          <div className="row">
            <div className="col-lg-5 vh-100">
              <Swiper
                direction={"vertical"}
                slidesPerView={1}
                spaceBetween={30}
                mousewheel={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Mousewheel, Pagination]}
                className="mySwiper"
                style={{ height: "100%" }}
                centeredSlides={true}
                allowTouchMove={{ x: false, y: true }}
              >
                <SwiperSlide>
                  <div className="card w-100  bg-transparent">
                    <img
                      src="https://swiperjs.com/demos/images/nature-2.jpg"
                      className="card-img-top w-100  bg-transparent"
                      height="350px"
                      alt="card_img"
                    />
                    <div className="card-body bg-transparent">
                      <h4 className="card-title text-end text-white">
                        إستشارات قانونية
                      </h4>

                      <p className="card-text text-end text-white">
                        يعتبر البرمجة أحد العناصر الأساسية والحيوية في تقديم
                        الحلول التقنية المبتكرة والفعالة للعملاء. تقوم البرمجة
                        بتحويل الأفكار والمتطلبات إلى تطبيقات وبرمجيات قائمة على
                        الحوسبة، مما يساعد على تحسين العمليات وزيادة الإنتاجية.
                      </p>
                      <Link to="#" className={`${style.link}`}>
                        الذهاب الي الصفحة
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card w-100  bg-transparent">
                    <img
                      src="https://swiperjs.com/demos/images/nature-2.jpg"
                      className="card-img-top w-100  bg-transparent"
                      height="350px"
                      alt="card_img"
                    />
                    <div className="card-body bg-transparent">
                      <h4 className="card-title text-end text-white">
                        إستشارات قانونية
                      </h4>

                      <p className="card-text text-end text-white">
                        يعتبر البرمجة أحد العناصر الأساسية والحيوية في تقديم
                        الحلول التقنية المبتكرة والفعالة للعملاء. تقوم البرمجة
                        بتحويل الأفكار والمتطلبات إلى تطبيقات وبرمجيات قائمة على
                        الحوسبة، مما يساعد على تحسين العمليات وزيادة الإنتاجية.
                      </p>
                      <Link to="#" className={`${style.link}`}>
                        الذهاب الي الصفحة
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="card w-100  bg-transparent">
                    <img
                      src="https://swiperjs.com/demos/images/nature-2.jpg"
                      className="card-img-top w-100  bg-transparent"
                      height="350px"
                      alt="card_img"
                    />
                    <div className="card-body bg-transparent">
                      <h4 className="card-title text-end text-white">
                        إستشارات قانونية
                      </h4>

                      <p className="card-text text-end text-white">
                        يعتبر البرمجة أحد العناصر الأساسية والحيوية في تقديم
                        الحلول التقنية المبتكرة والفعالة للعملاء. تقوم البرمجة
                        بتحويل الأفكار والمتطلبات إلى تطبيقات وبرمجيات قائمة على
                        الحوسبة، مما يساعد على تحسين العمليات وزيادة الإنتاجية.
                      </p>
                      <Link to="#" className={`${style.link}`}>
                        الذهاب الي الصفحة
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="col-lg-6">
              <div className="">
                <div className="">
                  <h4 className="text-end section_title">إستشارات قانونية</h4>

                  <p className=" text-end section_subtitle">
                    يعتبر البرمجة أحد العناصر الأساسية والحيوية في تقديم الحلول
                    التقنية المبتكرة والفعالة للعملاء. تقوم البرمجة بتحويل
                    الأفكار والمتطلبات إلى تطبيقات وبرمجيات قائمة على الحوسبة،
                    مما يساعد على تحسين العمليات وزيادة الإنتاجية.
                  </p>
                  <Link to="#" className={`${style.link}`}>
                    الذهاب الي الصفحة
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
