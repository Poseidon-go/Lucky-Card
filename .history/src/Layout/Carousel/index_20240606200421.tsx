import Slider from "react-slick";
export const CarouselContent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };
  return (
    <div className="carousel-container mx-auto max-w-screen-lg p-4">
      <Slider {...settings}>
        <div className="carousel-slide">
          <img
            src="https://file.hstatic.net/200000525917/file/slider-2_0521f8e897684645afb606cebb3d0716_master.jpg"
            alt="Slide 1"
            className="w-full h-auto"
          />
        </div>
        <div className="carousel-slide">
          <img src="image2.jpg" alt="Slide 2" className="w-full h-auto" />
        </div>
        <div className="carousel-slide">
          <img src="image3.jpg" alt="Slide 3" className="w-full h-auto" />
        </div>
        {/* Thêm nhiều slide nếu cần */}
      </Slider>
    </div>
  );
};
