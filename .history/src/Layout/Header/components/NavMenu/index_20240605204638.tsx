import { BiChevronDown } from "react-icons/bi";

const NavMenu = () => {
  return (
    <div className=" bg-white shadow-sm">
      <div className="w-pc mx-auto">
        <ul className="flex items-center justify-center">
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium hover:text-[--colorshophover] ">
            Trang chủ
          </li>
          <li className=" px-[10px] py-[15px] ">
            <div className="flex font-medium hover:text-[--colorshophover] text-[#000] text-[16px] ">
              Giày Sneaker
              <BiChevronDown />
            </div>
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium hover:text-[--colorshophover] ">
            Nước hoa
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium hover:text-[--colorshophover] ">
            Phụ kiện
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium hover:text-[--colorshophover] ">
            Tin tức
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium hover:text-[--colorshophover] ">
            Hướng dẫn
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium hover:text-[--colorshophover] ">
            Liên hệ
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-medium hover:text-[--colorshophover] ">
            <div className="flex">
              Tính năng
              <BiChevronDown />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavMenu;
