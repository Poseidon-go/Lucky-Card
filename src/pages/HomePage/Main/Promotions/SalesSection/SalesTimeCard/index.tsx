import React, { useState, useEffect } from "react";

const SalesTimeCard = () => {
  const [day, setDay] = useState(60);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(5);
  const [second, setSecond] = useState(60);

  useEffect(() => {
    const intervalId = setInterval(() => {}, 1000);

    return () => clearInterval(intervalId);
  }, [day, hour, minute]);

  return (
    <div id="MainPromotions__sales-timecard" className="flex cursor-pointer">
      <div className="flex flex-col items-center bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] text-center mx-2">
        <strong className="text-[#000] text-[14px] font-bold">{day}</strong>
        <small className="text-[#000] text-[12px] block">Ngày</small>
      </div>
      <div className="flex flex-col items-center bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] text-center mx-2">
        <strong className="text-[#000] text-[14px] font-bold">{hour}</strong>
        <small className="text-[#000] text-[12px] block">Giờ</small>
      </div>
      <div className="flex flex-col items-center bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] text-center mx-2">
        <strong className="text-[#000] text-[14px] font-bold">{minute}</strong>
        <small className="text-[#000] text-[12px] block">Phút</small>
      </div>
      <div className="flex flex-col items-center bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] text-center mx-2">
        <strong className="text-[#000] text-[14px] font-bold">{second}</strong>
        <small className="text-[#000] text-[12px] block">Giây</small>
      </div>
    </div>
  );
};

export default SalesTimeCard;
