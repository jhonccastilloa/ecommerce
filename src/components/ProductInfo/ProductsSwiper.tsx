import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay,Navigation, Pagination } from "swiper";

import "./style/productsSwiper.css";

interface ProductsSwiperProps {
  productImgs: string[];
}
const ProductsSwiper = ({ productImgs }: ProductsSwiperProps) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay,Pagination, Navigation]}
        className="mySwiper"
      >
        {productImgs.map((el) => (
          <SwiperSlide>
            <figure className="swiper__figure">
              <img className="swiper__img" src={el} alt="" />
            </figure>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default ProductsSwiper;
