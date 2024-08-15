import { useState } from "react";
import { BiChevronDown, BiMinus } from "react-icons/bi";
import ProductList from "./components/ProductList";
import TradeMarkList from "./components/TradeMarkList";
import PriceList from "./components/PriceList";
import ColorList from "./components/ColorList";
import SizeList from "./components/SizeList";

function ShoeshomeSideBar() {
  const [openProduct, setOpenProduct] = useState(false);
  const [openTradeMark, setOpenTradeMark] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);
  const [openColor, setOpenColor] = useState(false);
  const [openSize, setOpenSize] = useState(false);
  return (
    <div id="shoeshome__content-sidebar" className="w-[25%]">
      <div className="bg-[#fff] p-3 shadow-lg rounded mb-3">
        <div className="flex justify-between items-center pb-2">
          <div className="text-[#000] text-[16px] font-bold">
            Danh Mục Sản Phẩm
          </div>
          <div
            className="text-[#000] text-[16px] cursor-pointer"
            onClick={() => setOpenProduct(!openProduct)}
          >
            {openProduct ? <BiChevronDown /> : <BiMinus />}
          </div>
        </div>
        {openProduct ? <ProductList /> : ""}
      </div>

      <div className="bg-[#fff] p-3 shadow-lg rounded mb-3">
        <div className="flex justify-between items-center pb-2 ">
          <div className="text-[#000] text-[16px] font-bold">Thương Hiệu</div>
          <div
            className="text-[#000] text-[16px] cursor-pointer"
            onClick={() => setOpenTradeMark(!openTradeMark)}
          >
            {openTradeMark ? <BiChevronDown /> : <BiMinus />}
          </div>
        </div>
        {openTradeMark ? <TradeMarkList /> : ""}
      </div>
      <div className="bg-[#fff] p-3 shadow-lg rounded mb-3">
        <div className="flex justify-between items-center pb-2 ">
          <div className="text-[#000] text-[16px] font-bold">Lọc Giá</div>
          <div
            className="text-[#000] text-[16px] cursor-pointer"
            onClick={() => setOpenPrice(!openPrice)}
          >
            {openPrice ? <BiChevronDown /> : <BiMinus />}
          </div>
        </div>
        {openPrice ? <PriceList /> : ""}
      </div>
      <div className="bg-[#fff] p-3 shadow-lg rounded mb-3">
        <div className="flex justify-between items-center pb-2 ">
          <div className="text-[#000] text-[16px] font-bold">Màu Sắc</div>
          <div
            className="text-[#000] text-[16px] cursor-pointer"
            onClick={() => setOpenColor(!openColor)}
          >
            {openColor ? <BiChevronDown /> : <BiMinus />}
          </div>
        </div>
        {openColor ? <ColorList /> : ""}
      </div>
      <div className="bg-[#fff] p-3 shadow-lg rounded mb-3">
        <div className="flex justify-between items-center pb-2 ">
          <div className="text-[#000] text-[16px] font-bold">Kích Thước</div>
          <div
            className="text-[#000] text-[16px] cursor-pointer"
            onClick={() => setOpenSize(!openSize)}
          >
            {openSize ? <BiChevronDown /> : <BiMinus />}
          </div>
        </div>
        {openSize ? <SizeList /> : ""}
      </div>
    </div>
  );
}

export default ShoeshomeSideBar;
