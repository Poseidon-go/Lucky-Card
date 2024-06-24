import bgImage from "../../../../../../assets/Image/Frame/frameMain.png.webp";
import imgNotFound from "../../../../../../assets/Image/Error/Loading.webp";
import cartCurrent from "../../../../../../assets/Image/BuyCart/cartCurrent.png";
import cartHover from "../../../../../../assets/Image/BuyCart/cartHover.jpg";
import "./index.css";

interface IPromotionsItem {
  title: string | "Not Found Title";
  priceProduct: string | "";
  discountProduct: string;
  imgA: string;
  imgB: string;
}

const SalesContentCard = (props: IPromotionsItem) => {
  const { title, priceProduct, discountProduct, imgA, imgB } = props;
  return (
    <div
      id="SalesContentCard"
      className="  bg-[#fff] p-2 rounded-[5px] mx-[10px] cursor-pointer relative after:content-['-11%']   
      after:z-20  after:absolute after:top-[8px] after:left-[8px] after:w-[36px] after:h-[27px] after:bg-[#ff0000] after:text-[12px] after:font-semibold after:grid after:place-items-center before:content-['']  
      before:z-10  before:absolute before:top-[22px] before:left-[13px] before:w-[26px] before:h-[24px] before:bg-[#ff0000]
      before:rotate-45
      "
    >
      <div className="flex justify-center group transition duration-500 ease-in-out">
        <img src={bgImage} alt="" className="relative z-10 " />
        <div
          id="cartBuy"
          className="absolute bottom-[102px] z-30 right-[12px] flex group/buyShoes items-center"
        >
          <div className="p-1 rounded-[50px] bg-[--bg_button_add_to_Card] text-[#fff] group-hover/buyShoes:hidden">
            <img src={cartCurrent} width={20} height={20} alt="" />
          </div>
          <div
            id="SalesContentCard__addStock"
            className="hidden group-hover/buyShoes:flex items-center rounded-[50px] bg-[--bg_button_add_to_Card] pl-2 "
          >
            <span className="text-[#fff] text-[12px] font-semibold ">
              Thêm Vào Giỏ
            </span>
            <div className=" p-1  text-[--bg_button_add_to_Card]">
              <img
                src={cartHover}
                width={20}
                height={20}
                alt=""
                className="rounded-[50px]"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-9 z-0">
          <img
            src={imgA || imgNotFound}
            alt={title}
            width={207}
            className="group-hover:opacity-0 group-hover:invisible object-contain"
          />
        </div>
        <div className="absolute z-0">
          <img
            src={imgB || imgNotFound}
            alt={title}
            width={207}
            className="opacity-0 invisible group-hover:opacity-[1] group-hover:visible object-contain"
          />
        </div>
      </div>
      <div>
        <span className="text-[--colorTextSub] text-[14px] font-medium line-clamp-2">
          {title}
        </span>
        <br />
        <span className="text-[13px] text-[--bgflashsale] font-bold mr-3">
          {priceProduct}
        </span>
        <span className="text-[13px] text-[#888] line-through">
          {discountProduct}
        </span>
      </div>
    </div>
  );
};

export default SalesContentCard;
