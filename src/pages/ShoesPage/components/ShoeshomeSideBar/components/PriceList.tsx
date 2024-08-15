function PriceList() {
  return (
    <div className="cursor-pointer">
      <div className="flex items-center justify-between mb-1 pt-2 border-t border-t-[#eee]">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] font-normal ml-2 ">
            Dưới 50,000đ
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] font-normal ml-2 ">
            50,000đ - 200,00đ
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] font-normal ml-2 ">
            200,00đ - 400,00đ
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] font-normal ml-2 ">
            400,00đ - 1,000,00đ
          </span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] font-normal ml-2 ">
            Trên 1,000,00đ
          </span>
        </div>
      </div>
    </div>
  );
}

export default PriceList;
