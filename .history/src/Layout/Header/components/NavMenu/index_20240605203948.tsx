import { BiChevronDown } from "react-icons/bi";

const NavMenu = () => {
  return (
    <div className=" bg-white shadow-sm">
      <div className="w-pc mx-auto">
        <ul className="flex items-center justify-center">
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium ">
            Trang chủ
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium ">
            Giày Sneaker
            <BiChevronDown />
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium ">
            Nước hoa
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium ">
            Phụ kiện
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium ">
            Tin tức
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium ">
            Hướng dẫn
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium ">
            Liên hệ
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium ">
            Tính năng
            <BiChevronDown />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
