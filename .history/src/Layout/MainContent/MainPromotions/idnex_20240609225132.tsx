import { useId } from "react";
import "../../../../src/styles/global.css";
import Coupon from "./components/Coupon";
import TimeCard from "./components/TimeCard";
import "./index.css";
import PromotionsItem from "./components/PromoItem";

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
  const productDiscountList = [
    {
      title: " Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001 ",
      priceProduct: "7,929,900₫",
      discountProduct: "8,900,000₫",
    },
    {
      title: "  Giày Nike Air Jordan 1 Mid GS 'White Shadow' 554725-073  ",
      priceProduct: "7,573,500₫",
      discountProduct: "8,500,000₫",
    },
    {
      title: "  Giày Nike Jordan 1 Retro Golf 'Starfish' DD9315-800  ",
      priceProduct: "6,147,900₫",
      discountProduct: "6,900,000₫",
    },
    {
      title: "  Giày Nike Jordan 1 High OG 'Denim' DM9036-104  ",
      priceProduct: "6,147,900₫",
      discountProduct: "6,900,000₫",
    },
    {
      title: "  Giày Nike Air Jordan 1 Retro High OG 'Volt' 555088-702  ",
      priceProduct: "6,147,900₫",
      discountProduct: "6,900,000₫",
    },
    {
      title: "  Giày Nike Jordan 1 Mid 'Light Smoke Grey' 554725-078  ",
      priceProduct: "5,524,200₫",
      discountProduct: "6,200,000₫",
    },
    {
      title: " Giày Nike Wmns Air Jordan 1 Mid 'Shadow' BQ6472-007 ",
      priceProduct: "7,929,900₫",
      discountProduct: "8,900,000₫",
    },
    {
      title: " Giày Nike Jordan 1 Retro High OG SP 'Utility Stash' DN4336-001 ",
      priceProduct: "7,929,900₫",
      discountProduct: "8,900,000₫",
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
        className="border border-[--bgflashsale]  w-full p-[15px] bg-[--bgflashsale] rounded-[10px]"
      >
        <div
          id="MainPromotions__sales-heading"
          className="flex items-center mb-4  "
        >
          <img
            width={20}
            height={20}
            src="https://file.hstatic.net/200000525917/file/flash-sale_e6ba39a2380a4deaac1a7b4897f2d803.png"
            alt=""
            className="mr-2"
          />
          <h1 className="text-[20px] font-semibold uppercase mr-2">
            sản phẩm khuyến mãi
          </h1>
          <div id="" className="">
            <ul className="flex">
              {timeList.map((timeItem, index) => {
                const { time, name } = timeItem;
                return <TimeCard key={index} time={time} name={name} />;
              })}
            </ul>
          </div>
        </div>
        <div id="MainPromotions__sales-content">
          <ul>
            <PromotionsItem />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPromotions;
