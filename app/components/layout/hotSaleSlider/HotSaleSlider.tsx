"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper required modules
import { Autoplay, Pagination } from "swiper/modules";
import SlideProduct from "../../hotSaleSlider/SlideProduct";
// file
import myImage from "@/public/images/products/thumbnail/shop-list5.jpg";

function HotSaleSlider() {
  return (
    <div>
      <div className=" bg-custom-main mt-14 py-8">
        <Swiper
          slidesPerView={4}
          spaceBetween={15}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 2,
            },
            670: {
              slidesPerView: 3,
            },
            900: {
              slidesPerView: 4,
            },
            1120: {
              slidesPerView: 5,
            },
            1600: {
              slidesPerView: 6,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <SlideProduct
              price={56165161}
              title="an image"
              discount={21}
              image={myImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideProduct
              price={56165161}
              title="an image"
              discount={21}
              image={myImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideProduct
              price={56165161}
              title="an image"
              discount={21}
              image={myImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideProduct
              price={56165161}
              title="an image"
              discount={21}
              image={myImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideProduct
              price={56165161}
              title="an image"
              discount={21}
              image={myImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideProduct
              price={56165161}
              title="an image"
              discount={21}
              image={myImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideProduct
              price={56165161}
              title="an image"
              discount={21}
              image={myImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideProduct
              price={56165161}
              title="an image"
              discount={21}
              image={myImage}
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideProduct
              price={56165161}
              title="an image"
              discount={21}
              image={myImage}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default HotSaleSlider;
