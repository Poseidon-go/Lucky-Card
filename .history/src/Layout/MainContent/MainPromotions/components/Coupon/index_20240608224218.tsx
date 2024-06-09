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
        className="grid grid-cols-2 bg-[#fff] w-full"
      >
        <div className="flex items-center justify-center w-[20%]">
          <span className="text-[--bgflashsale] text-[22px]">{price}</span>
        </div>
        <div className="">
          <h1 className="text-black font-bold">{ship}</h1>
          <span className="text-black">{priceOrder}</span>
          <span className="text-black">{code}</span>
          <span className="text-black">{date}</span>
        </div>
      </div>
    </>
  );
};

export default Coupon;
