import { BiChevronDown } from "react-icons/bi";
// import useRandomHolder from "../../../hooks/useRandomHolder";
import { Link } from "react-router-dom";
import useRandomHolder from "../../../hooks/useRandomHolder";
import Login from "./Login";
import { useEffect, useState } from "react";
import Location from "./Location";

function Header() {
  const holder = useRandomHolder();
  const [isLoginVisible, setIsLoginVisible] = useState(true);

  useEffect(() => {
    const loginElement = document.getElementById("head__login");
    if (!loginElement) return;
    const toggleLoginVisibility = () => {
      console.log(isLoginVisible);
      setIsLoginVisible((prev) => !prev);
    };

    loginElement.addEventListener("click", toggleLoginVisibility);
  }, []);
  return (
    <div className="flex flex-col bg-[--bgHeader] cursor-pointer   ">
      <div
        id="header__top"
        className="w-pc mx-auto flex items-center px-[10px]"
      >
        <div id="Head__logo" className="flex items-center ">
          <span className="text-[#fff] text-[40px] font-bold ">
            <Link to={"/"}>LuckyCard</Link>
          </span>
        </div>
        <div id="head__search" className="relative pl-8 ">
          <input
            type="text"
            className="w-[600px] p-2 outline-none rounded-[5px] text-[#000] placeholder:font-light"
            placeholder={holder}
          />
          <button
            id="header__search-lock"
            className="flex items-center justify-center w-[80px] h-[36px] leading-[36px] absolute top-[2px] right-[2px] px-[15px] py-[8px] bg-[--bgHeader] rounded-[5px]"
          >
            <img
              width={24}
              height={24}
              src="https://theme.hstatic.net/200000525917/1000876879/14/search-icon.svg?v=3642"
              alt=""
              className="aspect-auto"
            />
          </button>
        </div>
        <div
          id="head__location"
          className="flex items-center justify-center ml-2 pl-4 group/focusLocation relative"
        >
          <div>
            <img
              width="24"
              height="24"
              src="https://theme.hstatic.net/200000525917/1000876879/14/location.svg?v=3642"
              alt="icon-location"
            />
          </div>
          <Location />
          <div className="pl-4 text-[13px]">
            <span>Hệ thống</span> <br />
            <div className="flex items-center">
              <span>Cửa hàng</span>
              <BiChevronDown />
            </div>
          </div>
        </div>
        <div
          id="head__login"
          className="flex items-center pl-4 group/focusLogin"
        >
          <div className="relative ">
            <img
              width="24"
              height="24"
              src="https://theme.hstatic.net/200000525917/1000876879/14/user-account.svg?v=3642"
              alt=""
            />
            {/* {isLoginVisible || <Login />} */}
            <Login />
          </div>
          <div className="pl-3 text-[13px]">
            <span>Đăng Nhập</span> <br />
            <div className="flex items-center">
              <span>Đăng Ký</span>
              <BiChevronDown />
            </div>
          </div>
        </div>
        <div id="head__cart" className="flex items-center pl-5">
          <img
            width="24"
            height="24"
            src="https://theme.hstatic.net/200000525917/1000876879/14/shopping-cart.svg?v=3642"
            alt=""
          />
          <span className="inline-block text-[13px] pl-3">Giỏ hàng</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
