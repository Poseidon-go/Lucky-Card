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
        <div className="p-[10px] basis-3/4 relative">
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
          <button className="absolute bottom-[12px] left-[118px] py-1 px-3 rounded-[50px] bg-[--bgHeader] text-[#fff] ">
            <span className="text-[12px]">Sao chép mã</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Coupon;
