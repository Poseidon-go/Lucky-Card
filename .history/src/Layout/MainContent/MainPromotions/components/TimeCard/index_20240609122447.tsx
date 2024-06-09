interface ITimeItem {
  name: string;
  time: number;
}
const TimeCard = ({ time, name }: ITimeItem) => {
  return (
    <div
      id="MainPromotions__sales-timecard"
      className="bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] "
    >
      <div className="">
        <span className=" text-[#000] text-[14px]">{time}</span>
      </div>
      <div className="">
        <span className=" text-[#000] text-[14px]">{name}</span>
      </div>
    </div>
  );
};

export default TimeCard;