import { useId } from "react";
import Coupon from "./components/Coupon";
import "./index.css";
import "../../../../src/styles/global.css";
import TimeCard from "./components/TimeCard";
import { time } from "console";

const MainPromotions = () => {
  const id = useId();
  const proList = [
    {
      id: id,
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      price: "300k",
      code: "SCOFIELD300K",
      date: "HSD: 10/12/2022",
    },
    {
      id: id,
      ship: "Giảm thêm 100k",
      priceOrder: "Đơn hàng từ 2 triệu",
      price: "100k",
      code: "SCOFIELD100K",
      date: "HSD: 10/12/2022",
    },
    {
      id: id,
      ship: "Giảm thêm 15%",
      priceOrder: "Đơn hàng từ 5 triệu",
      price: "15%",
      code: "SCOFIELD15",
      date: "HSD: 10/12/2022",
    },
    {
      id: id,
      ship: "Giảm thêm 30%",
      priceOrder: "Đơn hàng từ 15 triệu",
      price: "30%",
      code: "SCOFIELD30",
      date: "HSD: 10/12/2022",
    },
  ];
  const timeList = [
    {
      name: "Ngày",
      time: 24,
    },
    { name: "Giờ", time: 60 },
    {
      name: "Phút",
      time: 60,
    },
    {
      name: "Giây",
      time: 24,
    },
  ];
  return (
    <div id="MainPromotions" className="w-pc mx-auto ">
      <div id="MainPromotions__coupon" className="mb-4">
        <h1>
          <span className="text-[20px] text-[--colorText] uppercase font-bold ml-2 mb-3 block">
            khuyến mãi dành cho bạn
          </span>
        </h1>
        <div className="flex gird grid-cols-4 gap-4 mb-4">
          {proList.map((proItem) => {
            const { ship, priceOrder, code, date, price } = proItem;
            return (
              <Coupon
                id={id}
                ship={ship}
                priceOrder={priceOrder}
                price={price}
                code={code}
                date={date}
              />
            );
          })}
        </div>
      </div>
      <div
        id="MainPromotions__sales"
        className="border border-[--bgflashsale]  w-full p-[15px] bg-[--bgflashsale]"
      >
        <div id="MainPromotions__sales-heading" className="flex">
          <img
            width={20}
            height={20}
            src="https://file.hstatic.net/200000525917/file/flash-sale_e6ba39a2380a4deaac1a7b4897f2d803.png"
            alt=""
          />
          <h1 className="text-[20px] font-semibold uppercase">
            sản phẩm khuyến mãi
          </h1>
          <div id="" className="">
            <ul className="flex">
              {timeList.map((timeItem) => {
                const { time, name } = timeItem;
                return <TimeCard time={time} name={name} />;
              })}
            </ul>
          </div>
        </div>
        <div id="MainPromotions__sales-content"></div>
      </div>
    </div>
  );
};

export default MainPromotions;
