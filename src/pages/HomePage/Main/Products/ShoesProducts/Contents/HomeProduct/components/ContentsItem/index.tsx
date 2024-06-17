import imgNotFound from '../../../../../../../../../assets/Image/Error/notfound.png';

const ContentsItem = ({productItem}) => {
  const {title, priceProduct, discountProduct, imgA, imgB} = productItem;
  return (
    <div className=" bg-[#fff] p-2 rounded-[5px] ml-4 mb-4 cursor-pointer ">
      <div className="flex justify-center group  transition duration-500 ease-in-out ">
        <div className="w-[205px] h-[240px] relative mb-2">
          <div className="absolute top-[84px] left-0 ">
            <img
              src={imgA || imgNotFound}
              alt={title}
              width={207}
              className=" group-hover:hidden object-contain "
            />
          </div>
          <div className="absolute top-0 left-0 ">
            <img
              src={imgB || imgNotFound}
              alt={title}
              width={207}
              className="hidden  group-hover:block object-fill "
            />
          </div>
        </div>
      </div>
      <div className="z-50">
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

export default ContentsItem;
