import "./index.css";
import "../../../../../styles/global.css";

interface Item {
  ship: string;
  priceOrder: string;
  price: string;
  code: string;
  date: string;
}

const Coupon = ({ ship, priceOrder, code, date, price }: Item) => {
  return (
    <>
      <div
        id="MainPromotions__coupon-item"
        className="flex flex-row bg-[#fff] w-full"
      >
        <div className="flex items-center justify-center basis-1/4 ">
          <span className="text-[--bgflashsale] text-[22px] font-bold">
            {price}
          </span>
        </div>
        <div className="p-[10px] basis-3/4">
          <span className="text-black text-[15px] font-bold block">{ship}</span>
          <span className="text-[11px] font-normal text-black block">
            <span>mã</span> {priceOrder}
          </span>
          <span className="text-[11px] text-black block">{code}</span>
          <span className="text-[11px] text-black block">{date}</span>
        </div>
      </div>
    </>
  );
};

export default Coupon;
