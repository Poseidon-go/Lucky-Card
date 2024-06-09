import { useId } from "react";
import Coupon from "./components/Coupon";
import "./index.css";
import "../../../../src/styles/global.css";

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
        className="border border-[--bgflashsale]  w-full h-[500px]"
      ></div>
    </div>
  );
};

export default MainPromotions;
