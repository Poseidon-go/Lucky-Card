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
        className="grid grid-cols-2 bg-[#fff]"
      >
        <div className="flex items-center justify-center ">
          <span className="text-[--bgflashsale] text-[22px]">{price}</span>
        </div>
        <div className="p-[10px]">
          <span className="text-black text-[15px] font-bold inline-block">
            {ship}
          </span>
          <span className="text-[12px] font-normal text-black">
            {priceOrder}
          </span>
          <span className="text-black inline-block">{code}</span>
          <span className="text-black inline-block">{date}</span>
        </div>
      </div>
    </>
  );
};

export default Coupon;
