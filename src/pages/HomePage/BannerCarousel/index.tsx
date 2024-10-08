import { ReactNode } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
interface BannerCarousel {
  children: ReactNode;
}
export const BannerCarousel = ({ children }: BannerCarousel) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          dots: false,
          infinite: true,
          speed: 100,
          autoplay: true,
          slidesToShow: 1,
          adaptiveHeight: true,
        },
      },
    ],
  };
  return (
    <div className="py-4">
      <Slider {...settings}>
        <div className="carousel-slide w-full h-full sm:w-[1920px] sm:h-[520px] ">
          <img
            src="https://file.hstatic.net/200000525917/file/slider-2_0521f8e897684645afb606cebb3d0716_master.jpg"
            alt="Slide 1"
            className="w-full object-cover "
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://file.hstatic.net/200000525917/file/slider-1_9eff1f1dc2134a61a5cc3b4f619e4075_master.jpg"
            alt="Slide 2"
            className="w-full object-cover "
          />
        </div>
      </Slider>
    </div>
  );
};
