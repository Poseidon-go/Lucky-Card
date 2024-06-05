import { BiChevronRight } from "react-icons/bi";
import "./index.css";
import "../../../../../../styles/global.css";
import { ChildAdidasShoes } from "./components/childAdidasShoes";

function SubShoesMenu() {
  return (
    <div
      id="head__menu-sub"
      className="absolute w-full  top-[55px] left-0 h-[532px] bg-[#fff] z-10 invisible opacity-0  shadow-md group-hover:visible group-hover:opacity-[1]"
    >
      <div className="h-full w-[30%] bg-[#ECECEC] p-3">
        <ul className="">
          <li className="px-[10px] py-[15px] group hover:text-[--colorText] hover:bg-[--colorshophover]">
            <div className="flex justify-between font-semibold text-[#000] text-[16px]">
              Giày Adidas
              <BiChevronRight />
            </div>
            <ChildAdidasShoes />
          </li>
          <li className="px-[10px] py-[15px] hover:text-[--colorText] hover:bg-[--colorshophover]">
            <div className="flex justify-between font-semibold text-[#000] text-[16px]">
              Giày Nike
              <BiChevronRight />
            </div>
          </li>
          <li className=" px-[10px] py-[15px] font-semibold text-[#000] text-[16px] hover:text-[--colorText] hover:bg-[--colorshophover]">
            Jordan Low
          </li>
          <li className=" px-[10px] py-[15px] font-semibold text-[#000] text-[16px] hover:text-[--colorText] hover:bg-[--colorshophover]">
            Giày Gucci
          </li>
          <li className=" px-[10px] py-[15px] font-semibold text-[#000] text-[16px] hover:text-[--colorText] hover:bg-[--colorshophover]">
            Golden Goose
          </li>
          <li className=" px-[10px] py-[15px] font-semibold text-[#000] text-[16px] hover:text-[--colorText] hover:bg-[--colorshophover]">
            Khác
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubShoesMenu;
