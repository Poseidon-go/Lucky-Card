import {BiChevronRight} from 'react-icons/bi';
import NavDropdownAdidas from './components/NavDropdownAdidas';
import NavDropdownNike from './components/NavDropdownNike';
function NavDropdown() {
  return (
    <div
      id="head__menu-sub"
      className="absolute w-full  top-[43px] left-0 h-[532px] bg-[#fff] z-10 invisible opacity-0 border-t-[3px] border-black  shadow-md group-hover/subShoes:visible group-hover/subShoes:opacity-[1]"
    >
      <div className="h-full w-[30%] bg-[#ECECEC] p-3">
        <ul className="">
          <li className="px-[15px] py-[10px] group/childAdidas  rounded-[5px] text-[#000] text-[16px] hover:text-[#fff] hover:bg-[--colorshophover]">
            <div className="flex justify-between text-inherit font-semibold   ">
              Giày Adidas
              <BiChevronRight />
            </div>
            <NavDropdownAdidas />
          </li>
          <li className="px-[15px] py-[10px] group/childNike rounded-[5px]  text-[#000] text-[16px] hover:text-[#fff] hover:bg-[--colorshophover] ">
            <div className="flex justify-between text-inherit font-semibold">
              Giày Nike
              <BiChevronRight />
            </div>
            <NavDropdownNike />
          </li>
          <li className=" px-[15px] py-[10px] font-semibold  text-[#000] text-[16px] hover:text-[#fff] hover:bg-[--colorshophover] rounded-[5px]">
            Jordan Low
          </li>
          <li className=" px-[15px] py-[10px] font-semibold text-[#000] text-[16px] hover:text-[#fff] hover:bg-[--colorshophover] rounded-[5px]">
            Giày Gucci
          </li>
          <li className=" px-[15px] py-[10px] font-semibold text-[#000] text-[16px] hover:text-[#fff] hover:bg-[--colorshophover] rounded-[5px]">
            Golden Goose
          </li>
          <li className=" px-[15px] py-[10px] font-semibold text-[#000] text-[16px] hover:text-[#fff] hover:bg-[--colorshophover] rounded-[5px]">
            Khác
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavDropdown;
