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
      <div id="MainPromotions__coupon-item" className="bg-[#fff]">
        <h1 className="text-black">{ship}</h1>
        <span className="text-black">{priceOrder}</span>
        <span className="text-black">{code}</span>
        <span className="text-black">{date}</span>
        <span className="text-black">{price}</span>
      </div>
    </>
  );
};

export default Coupon;
