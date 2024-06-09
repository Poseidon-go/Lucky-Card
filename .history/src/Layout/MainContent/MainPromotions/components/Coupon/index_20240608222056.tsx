import "./index.css";

interface Item {
  ship: string;
  priceOrder: string;
  code: string;
  date: string;
}
const Coupon = ({ ship, priceOrder, code, date }: Item) => {
  return (
    <>
      <div className="bg-[#fff] shadow-sm border-l-2 border-[#E31515]">
        <h1 className="text-black">{ship}</h1>
        <span className="text-black">{priceOrder}</span>
        <span className="text-black">{code}</span>
        <span className="text-black">{date}</span>
      </div>
    </>
  );
};

export default Coupon;
