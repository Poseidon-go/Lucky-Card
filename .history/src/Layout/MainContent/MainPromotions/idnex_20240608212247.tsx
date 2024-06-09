import "./index.css";
interface IPromotions {
  ship: string;
  priceOrder: string;
  code: string;
  date: string;
}
const MainPromotions = () => {
  const proList: IPromotions[] = [
    {
      ship: "Miễn phí vận chuyển",
      priceOrder: "Đơn hàng từ 300k",
      code: "SCOFIELD300K",
      date: "HSD: 10/12/2022",
    },
    {
      ship: "Giảm thêm 100k",
      priceOrder: "Đơn hàng từ 2 triệu",
      code: "SCOFIELD100K",
      date: "HSD: 10/12/2022",
    },
    {
      ship: "Giảm thêm 15%",
      priceOrder: "Đơn hàng từ 5 triệu",
      code: "SCOFIELD15",
      date: "HSD: 10/12/2022",
    },
    {
      ship: "Giảm thêm 30%",
      priceOrder: "Đơn hàng từ 15 triệu",
      code: "SCOFIELD30",
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
        <div>
          {proList.map((proItem) => {
            console.log(proItem);
          })}
        </div>
      </div>
      <div id="MainPromotions__sales"></div>
    </div>
  );
};

export default MainPromotions;
