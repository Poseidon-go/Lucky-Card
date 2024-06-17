import bgImage from '../../../../../../assets/Image/Frame/frameMain.png.webp';
import imgNotFound from '../../../../../../assets/Image/Error/Loading.webp';

interface IPromotionsItem {
  title: string | 'Not Found Title';
  priceProduct: string | '';
  discountProduct: string;
  imgA: string;
  imgB: string;
}

const SalesContentCard = (props: IPromotionsItem) => {
  const {title, priceProduct, discountProduct, imgA, imgB} = props;
  return (
    <div className=" bg-[#fff] p-2 rounded-[5px] mx-[10px] cursor-pointer ">
      <div className="flex justify-center group transition duration-500 ease-in-out">
        <img src={bgImage} alt="" className="relative z-[1000]" />
        <div className="absolute top-9 z-10">
          <img
            src={imgA || imgNotFound}
            alt={title}
            width={207}
            className="group-hover:opacity-0 group-hover:invisible object-contain"
          />
        </div>
        <div className="absolute z-10">
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
        <span className="text-[13px] text-[#888] line-through">{discountProduct}</span>
      </div>
    </div>
  );
};

export default SalesContentCard;
