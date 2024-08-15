function ProductList() {
  return (
    <div className="cursor-pointer">
      <div className="flex items-center justify-between mb-1 pt-2">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] font-normal ml-2 ">
            Giày Adidas
          </span>
        </div>

        <div>
          <span className="text-[13px] text-[#000] font-medium mr-4">{`(${2})`}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] font-normal ml-2 ">
            Giày Nike
          </span>
        </div>

        <div>
          <span className="text-[13px] text-[#000] font-medium mr-4">{`(${2})`}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] font-normal ml-2 ">
            Jordan Low
          </span>
        </div>

        <div>
          <span className="text-[13px] text-[#000] font-medium mr-4">{`(${2})`}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] font-normal ml-2 ">
            Giày Gucci
          </span>
        </div>

        <div>
          <span className="text-[13px] text-[#000] font-medium mr-4">{`(${2})`}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] font-normal ml-2 ">
            Nước Hoa
          </span>
        </div>

        <div>
          <span className="text-[13px] text-[#000] font-medium mr-4">{`(${2})`}</span>
        </div>
      </div>
      <div className="flex items-center justify-between mb-1">
        <div className="flex items-center justify-center">
          <input type="checkbox" name="" id="" />
          <span className="text-[13px] text-[#000] ml-2">Trang Sức</span>
        </div>
        <div>
          <span className="text-[13px] text-[#000] font-medium mr-4">{`(${2})`}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductList;
