import Slider from "react-slick";
import SalesTimeCard from "./SalesTimeCard";
import SalesContentCard from "./SalesContentCard";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
function SalesSection(props) {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 100,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  const { productDiscountList } = props;
  return (
    <div
      id="MainPromotions__sales"
      className="border border-[--bgflashsale]  w-full p-[15px] bg-[--bgflashsale] rounded-[10px]"
    >
      <div
        id="MainPromotions__sales-heading"
        className="flex items-center mb-4  "
      >
        <img
          width={20}
          height={20}
          src="https://file.hstatic.net/200000525917/file/flash-sale_e6ba39a2380a4deaac1a7b4897f2d803.png"
          alt=""
          className="mr-2"
        />
        <h1 className="text-[20px] font-semibold uppercase mr-2">
          sản phẩm khuyến mãi
        </h1>
        <SalesTimeCard />
      </div>
      <div id="MainPromotions__sales-content" className="mb-3">
        <ul className=" w-full">
          <Slider {...settings}>
            {productDiscountList.map((productItem, index) => {
              const { title, priceProduct, discountProduct, imgA, imgB } =
                productItem;
              return (
                <SalesContentCard
                  key={index}
                  imgB={imgB}
                  imgA={imgA}
                  title={title}
                  priceProduct={priceProduct}
                  discountProduct={discountProduct}
                />
              );
            })}
          </Slider>
        </ul>
      </div>

      <div
        id="MainPromotions__sales-button"
        className="flex justify-center mt-7"
      >
        <button className="flex justify-center px-[60px] py-[10px] rounded-[5px] bg-[#fff] ">
          <div className="flex items-center text-[14px] text-[#000]">
            <span className="mr-1 text-inherit">Xem Tất Cả</span>
            <MdOutlineKeyboardDoubleArrowRight className="text-inherit" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default SalesSection;
