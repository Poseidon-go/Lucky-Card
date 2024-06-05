import { BiChevronDown } from "react-icons/bi";
import SubShoesMenu from "./components/SubShoesMenu";

const NavMenu = () => {
  return (
    <div className=" bg-white shadow-lg ">
      <div className="w-pc mx-auto ">
        <ul className="relative flex items-center justify-center ">
          <li className="text-[#000] text-[16px] px-[15px] py-[10px] font-semibold hover:text-[--colorshophover] transition duration-300 ease-in-out ">
            Trang chủ
          </li>
          <li className=" px-[15px] py-[10px] group hover:text-[--colorshophover] text-[#000] text-[16px] transition duration-300 ease-in-out">
            <div className=" flex items-center font-semibold text-[#000]">
              Giày Sneaker
              <BiChevronDown />
            </div>
            <SubShoesMenu />
          </li>
          <li className="text-[#000] text-[16px] px-[15px] py-[10px] font-semibold hover:text-[--colorshophover] transition duration-300 ease-in-out ">
            Nước hoa
          </li>
          <li className="text-[#000] text-[16px] px-[15px] py-[10px] font-semibold hover:text-[--colorshophover] transition duration-300 ease-in-out ">
            Phụ kiện
          </li>
          <li className="text-[#000] text-[16px] px-[15px] py-[10px] font-semibold hover:text-[--colorshophover] transition duration-300 ease-in-out ">
            Tin tức
          </li>
          <li className="text-[#000] text-[16px] px-[15px] py-[10px] font-semibold hover:text-[--colorshophover] transition duration-300 ease-in-out ">
            Hướng dẫn
          </li>
          <li className="text-[#000] text-[16px] px-[15px] py-[10px] font-semibold hover:text-[--colorshophover] transition duration-300 ease-in-out ">
            Liên hệ
          </li>
          <li className="px-[15px] py-[10px] hover:text-[--colorshophover] text-[#000] text-[16px] transition duration-300 ease-in-out ">
            <div className="flex items-center font-semibold text-inherit">
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
