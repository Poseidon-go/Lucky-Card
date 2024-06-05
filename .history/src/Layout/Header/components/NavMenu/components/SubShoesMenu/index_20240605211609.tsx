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
          <li className="flex justify-between px-[10px] py-[15px] group">
            Giày Adidas
            <BiChevronRight />
            <ChildAdidasShoes />
          </li>
          <li className="flex justify-between px-[10px] py-[15px]">
            Giày Nike
            <BiChevronRight />
          </li>
          <li className=" px-[10px] py-[15px]">Jordan Low</li>
          <li className=" px-[10px] py-[15px]">Giày Gucci</li>
          <li className=" px-[10px] py-[15px]">Golden Goose</li>
          <li className=" px-[10px] py-[15px]">Khác</li>
        </ul>
      </div>
    </div>
  );
}

export default SubShoesMenu;
