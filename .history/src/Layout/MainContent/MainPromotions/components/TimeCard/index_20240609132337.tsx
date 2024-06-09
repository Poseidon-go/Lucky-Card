interface ITimeItem {
  name: string;
  time: number;
}
const TimeCard = ({ time, name }: ITimeItem) => {
  return (
    <div
      id="MainPromotions__sales-timecard"
      className="bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] text-center mx-2 "
    >
      <strong className=" text-[#000] text-[14px] font-bold">{time}</strong>
      <small className=" text-[#000] text-[14px] block">{name}</small>
    </div>
  );
};

export default TimeCard;
