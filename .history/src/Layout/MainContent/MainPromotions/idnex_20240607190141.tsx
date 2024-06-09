import "./index.css";
const MainPromotions = () => {
  const proList = [
    {
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      code: "SCOFIELD300K",
      date: "HSD: 10/12/2022",
    },
    {
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      code: "SCOFIELD300K",
      date: "HSD: 10/12/2022",
    },
    {
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      code: "SCOFIELD300K",
      date: "HSD: 10/12/2022",
    },
    {},
    {
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      code: "SCOFIELD300K",
      date: "HSD: 10/12/2022",
    },
    {
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      code: "SCOFIELD300K",
      date: "HSD: 10/12/2022",
    },
    {
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      code: "SCOFIELD300K",
      date: "HSD: 10/12/2022",
    },
  ];
  return (
    <div id="MainPromotions" className="w-pc mx-auto ">
      <div id="MainPromotions__coupon" className="">
        <h1>
          <span className="text-[20px] text-[--colorText] uppercase font-bold ml-2">
            khuyến mãi dành cho bạn
          </span>
        </h1>
        <div>{}</div>
      </div>
      <div id="MainPromotions__sales"></div>
    </div>
  );
};

export default MainPromotions;