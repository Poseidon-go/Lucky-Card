interface ITimeItem {
  name: string;
  time: number;
}
const TimeCard = ({ time, name }: ITimeItem) => {
  return (
    <div
      id="MainPromotions__sales-timecard"
      className="bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] flex items-center rounded-[10px] "
    >
      <span className="inline-block text-[#000] px-4">{time}</span>
      <span className="inline-block text-[#000] px-4">{name}</span>
    </div>
  );
};

export default TimeCard;
