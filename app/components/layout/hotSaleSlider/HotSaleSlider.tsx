"use client";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import Swiper required modules
import { Autoplay, Pagination } from "swiper/modules";
import SlideProduct from "../../hotSaleSlider/SlideProduct";
// types
import { ProductOjectFromDB } from "@/types/props.module";

function HotSaleSlider({ products }: { products: [] | ProductOjectFromDB[] }) {
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
          {products.map((item: ProductOjectFromDB, index: number) => {
            const name = item.name;
            const model = item.model;
            // if there is model add it to title
            const nameAndModel = model ? `${name} مدل ${model}` : name;
            // convert title to text that use in url as slug
            const convertedTitle = nameAndModel
              .replaceAll(" ", "_")
              .replaceAll("?", "@")
              .replaceAll("&", "@");
            const id = item._id.toString();
            return (
              <SwiperSlide key={nameAndModel+index}>
                <SlideProduct
                discount={item.discount}
                title={nameAndModel}
                price={item.price}
                link={`/product/${convertedTitle}?id=${id}`}
                image={item.image}
                key={nameAndModel+index}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}

export default HotSaleSlider;
