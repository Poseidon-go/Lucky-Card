import { BiChevronDown } from "react-icons/bi";
import SubShoesMenu from "./components/SubShoesMenu";

const NavMenu = () => {
  return (
    <div className=" bg-white shadow-lg ">
      <div className="w-pc mx-auto ">
        <ul className="flex items-center justify-center ">
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-semibold hover:text-[--colorshophover] ">
            Trang chủ
          </li>
          <li className=" px-[10px] py-[15px] ">
            <div className="relative flex items-center font-semibold hover:text-[--colorshophover] text-[#000] text-[16px] ">
              Giày Sneaker
              <BiChevronDown />
            </div>
            <SubShoesMenu />
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-semibold hover:text-[--colorshophover] ">
            Nước hoa
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-semibold hover:text-[--colorshophover] ">
            Phụ kiện
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-semibold hover:text-[--colorshophover] ">
            Tin tức
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-semibold hover:text-[--colorshophover] ">
            Hướng dẫn
          </li>
          <li className="text-[#000] text-[16px] px-[10px] py-[15px] font-semibold hover:text-[--colorshophover] ">
            Liên hệ
          </li>
          <li className="px-[10px] py-[15px] ">
            <div className="flex items-center font-semibold hover:text-[--colorshophover] text-[#000] text-[16px]">
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