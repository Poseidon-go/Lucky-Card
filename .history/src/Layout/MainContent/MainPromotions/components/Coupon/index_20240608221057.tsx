interface Item {
  ship: string;
  priceOrder: string;
  code: string;
  date: string;
}
const Coupon = ({ ship, priceOrder, code, date }: Item) => {
  return (
    <>
      <div>
        <h1>{ship}</h1>
        <span>{priceOrder}</span>
        <span>{code}</span>
        <span>{date}</span>
      </div>
    </>
  );
};

export default Coupon;
