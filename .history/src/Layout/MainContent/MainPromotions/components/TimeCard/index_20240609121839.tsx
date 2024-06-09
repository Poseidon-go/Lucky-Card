interface ITimeItem {
  name: string;
  time: number;
}
const TimeCard = ({ time, name }: ITimeItem) => {
  return (
    <div id="MainPromotions__sales-timecard" className="">
      <span>{time}</span>
      <span>{name}</span>
    </div>
  );
};

export default TimeCard;
