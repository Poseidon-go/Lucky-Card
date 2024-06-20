import PromotionsCard from './PromotionsCard';
function PromotionsSection({proList}) {
  return (
    <div id="MainPromotions__coupon" className="mb-14">
      <h1 className="border-l-[3px] border-[#000]">
        <span className="text-[20px] text-[#000] uppercase font-bold ml-2 mb-3 block">
          khuyến mãi dành cho bạn
        </span>
      </h1>
      <div className="flex gird grid-cols-4 gap-4 mb-4">
        {proList.map((proItem, index) => {
          const {ship, priceOrder, code, date, price} = proItem;

          return (
            <PromotionsCard
              key={index}
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
  );
}

export default PromotionsSection;
