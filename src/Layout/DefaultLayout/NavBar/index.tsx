import { BiChevronDown } from "react-icons/bi";
import { Link } from "react-router-dom";
import NavDropdown from "./components/NavDropdown";

export default function NavBar() {
  return (
    <div className=" bg-white shadow-2xl ">
      <div className="w-pc mx-auto ">
        <ul className="relative flex items-center justify-center cursor-pointer ">
          <li className="text-[#000] text-[16px] px-[15px] py-[10px] font-semibold hover:text-[--colorshophover] transition duration-300 ease-in-out ">
            <Link to={"/"}>Trang chủ</Link>
          </li>
          <li className=" px-[15px] py-[10px] group/subShoes    text-[#000] text-[16px] transition duration-300 ease-in-out ">
            <div className=" font-semibold text-inherit hover:text-[--colorshophover] ">
              <Link to="/sneaker" className="flex items-center ">
                Giày Sneaker
                <BiChevronDown />
              </Link>
            </div>
            <NavDropdown />
          </li>
          <li className="text-[#000] text-[16px] px-[15px] py-[10px] font-semibold hover:text-[--colorshophover] transition duration-300 ease-in-out ">
            <Link to={"/perfume"}>Nước hoa</Link>
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
}
