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
      <div className="flex flex-col items-center">
        <div className="flex items-center">
          <span className=" text-[#000] text-[14px] font-bold">{time}</span>
        </div>
        <div className="flex items-center">
          <span className=" text-[#000] text-[14px]">{name}</span>
        </div>
      </div>
    </div>
  );
};

export default TimeCard;
