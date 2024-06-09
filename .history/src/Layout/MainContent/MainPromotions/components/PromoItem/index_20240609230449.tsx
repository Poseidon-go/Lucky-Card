import bgImage from "../../../../../assets/Image/Frame/frameMain.png.webp";
interface IPromotionsItem {
  title: string;
  priceProduct: string;
  discountProduct: string;
}

const PromotionsItem = (props: IPromotionsItem) => {
  const { title, priceProduct, discountProduct } = props;
  return (
    <div className=" bg-[#fff] p-2 rounded-[5px] ">
      <img src={bgImage} width={260} height={260} alt="" />
      <div>
        <span className="text-[--colorTextSub] text-[14px] font-medium">
          {title}
        </span>
        <span className="text-[--bgflashsale]">{priceProduct}</span>
        <span className="line-through">{discountProduct}</span>
      </div>
    </div>
  );
};

export default PromotionsItem;
