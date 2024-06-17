import { useEffect, useState } from "react";

interface ITimeItem {
  name: string;
  time: number;
}

const SalesTimeCard = ({ time, name }: ITimeItem) => {
  const [timeDown, setTimeDown] = useState<number>(time);
  useEffect(() => {
    const resetI = setInterval(() => {
      if (name == "Giây") {
        if (time >= 0 && time <= 60) {
          if (timeDown > 0) {
            setTimeDown(timeDown - 1);
          }
        }
      }
    }, 1000);
    // reset
    return () => {
      clearInterval(resetI);
    };
  });

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

export default SalesTimeCard;
