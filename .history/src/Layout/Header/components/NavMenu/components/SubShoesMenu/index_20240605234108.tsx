import { BiChevronRight } from "react-icons/bi";
import "./index.css";
import "../../../../../../styles/global.css";
import { ChildAdidasShoes } from "./components/childAdidasShoes";

function SubShoesMenu() {
  return (
    <div
      id="head__menu-sub"
      className="absolute w-full  top-[43px] left-0 h-[532px] bg-[#fff] z-10 invisible opacity-0  shadow-md group-hover/subShoes:visible group-hover/subShoes:opacity-[1]"
    >
      <div className="h-full w-[30%] bg-[#ECECEC] p-3">
        <ul className="">
          <li className="px-[15px] py-[10px] group/childAdidas rounded-[5px] text-[#000] text-[16px] hover:text-[--colorText] hover:bg-[--colorshophover] ">
            <div className="flex justify-between text-inherit font-semibold   ">
              Giày Adidas
              <BiChevronRight />
            </div>
            <ChildAdidasShoes />
          </li>
          <li className="px-[15px] py-[10px] rounded-[5px]  text-[#000] text-[16px] hover:text-[--colorText] hover:bg-[--colorshophover] ">
            <div className="flex justify-between text-inherit font-semibold">
              Giày Nike
              <BiChevronRight />
            </div>
          </li>
          <li className=" px-[15px] py-[10px] font-semibold  text-[#000] text-[16px] hover:text-[--colorText] hover:bg-[--colorshophover] rounded-[5px]">
            Jordan Low
          </li>
          <li className=" px-[15px] py-[10px] font-semibold text-[#000] text-[16px] hover:text-[--colorText] hover:bg-[--colorshophover] rounded-[5px]">
            Giày Gucci
          </li>
          <li className=" px-[15px] py-[10px] font-semibold text-[#000] text-[16px] hover:text-[--colorText] hover:bg-[--colorshophover] rounded-[5px]">
            Golden Goose
          </li>
          <li className=" px-[15px] py-[10px] font-semibold text-[#000] text-[16px] hover:text-[--colorText] hover:bg-[--colorshophover] rounded-[5px]">
            Khác
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SubShoesMenu;
