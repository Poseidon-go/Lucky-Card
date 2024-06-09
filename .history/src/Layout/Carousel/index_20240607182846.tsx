import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
export const CarouselContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="w-pc mx-auto py-4 border border-red-400 ">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img
            src="https://file.hstatic.net/200000525917/file/slider-2_0521f8e897684645afb606cebb3d0716_master.jpg"
            alt="Slide 1"
            className="w-full h-auto"
          />
        </div>
        <div className="carousel-slide">
          <img
            src="https://file.hstatic.net/200000525917/file/slider-1_9eff1f1dc2134a61a5cc3b4f619e4075_master.jpg"
            alt="Slide 2"
            className="w-full h-auto"
          />
        </div>
      </Slider>
    </div>
  );
};
