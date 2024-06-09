import { useEffect, useState } from "react";

interface ITimeItem {
  name: string;
  time: number;
}
const TimeCard = ({ time, name }: ITimeItem) => {
  const [timeDown, setTimeDown] = useState(0);
  useEffect(() => {
    const resetI = setInterval(() => {
      setTimeDown(timeDown - 1);
    }, 1000);
    // reset
    return () => {
      clearInterval(resetI);
    };
  }, []);
  console.log("render", time);
  return (
    <div
      id="MainPromotions__sales-timecard"
      className="bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] text-center mx-2 "
    >
      <div className="flex flex-col items-center">
        <strong className=" text-[#000] text-[14px] font-bold">
          {timeDown}
        </strong>
        <small className=" text-[#000] text-[12px] block">{name}</small>
      </div>
    </div>
  );
};

export default TimeCard;
