const SalesTimeCard = () => {
  return (
    <div id="MainPromotions__sales-timecard" className=" flex cursor-pointer ">
      <div className="flex flex-col items-center bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] text-center mx-2">
        <strong className=" text-[#000] text-[14px] font-bold">{2}</strong>
        <small className=" text-[#000] text-[12px] block">Ngày</small>
      </div>
      <div className="flex flex-col items-center bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] text-center mx-2">
        <strong className=" text-[#000] text-[14px] font-bold">{2}</strong>
        <small className=" text-[#000] text-[12px] block">Giờ</small>
      </div>
      <div className="flex flex-col items-center bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] text-center mx-2">
        <strong className=" text-[#000] text-[14px] font-bold">{2}</strong>
        <small className=" text-[#000] text-[12px] block">Phút</small>
      </div>
      <div className="flex flex-col items-center bg-[#fff] py-[5px] px-[7px] min-w-[45px] h-[45px] rounded-[10px] text-center mx-2">
        <strong className=" text-[#000] text-[14px] font-bold">{2}</strong>
        <small className=" text-[#000] text-[12px] block">Giây</small>
      </div>
    </div>
  );
};

export default SalesTimeCard;
