import { useId, useState } from "react";
import BtnDefault from "./components/btnDefault";
import BtnCopied from "./components/btnCopied";

interface ItemProps {
  ship: string;
  priceOrder: string;
  price: string;
  code: string;
  date: string;
}

const PromotionsCard = ({ ship, priceOrder, code, date, price }: ItemProps) => {
  const id = useId();
  const [isCheckCode, setIsCheckCode] = useState(false);

  return (
    <>
      <div
        key={id}
        id="MainPromotions__coupon-item"
        className="flex flex-row bg-[#fff] w-full border-l-[10px] border-[--bgflashsale] rounded-l-lg shadow-lg cursor-pointer"
      >
        <div
          id="MainPromotions__coupon-price"
          className="flex items-center justify-center basis-1/4 "
        >
          <span className="text-[--bgflashsale] text-[22px] font-bold">
            {price}
          </span>
        </div>
        <div className="p-[10px] basis-3/4 relative border-l-[1px] border-dashed border-[#ccc]">
          <div className="">
            <span className="text-black text-[15px] font-bold block">
              {ship}
            </span>
            <span className="text-[11px] font-normal text-black block">
              {priceOrder}
            </span>
            <span className="text-[11px] text-black block">
              <span className="text-inherit">Mã:</span>
              <span className="text-inherit font-bold"> {code}</span>
            </span>
            <span className="text-[11px] text-black block">{date}</span>
          </div>
          <div onClick={() => setIsCheckCode(!isCheckCode)}>
            {isCheckCode ? <BtnCopied /> : <BtnDefault />}
          </div>
        </div>
      </div>
    </>
  );
};

export default PromotionsCard;
