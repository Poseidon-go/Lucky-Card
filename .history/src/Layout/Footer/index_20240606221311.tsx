import { BsSendArrowUp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "../../styles/global.css";
import "./index.css";
const Footer = () => {
  return (
    <footer className="bg-[--bgFooter] w-full  ">
      <div
        id="footer__Send"
        className="w-pc mx-auto py-4 flex items-center justify-between "
      >
        <div className="flex items-center justify-between w-[58%]">
          <h1 className="text-[17px] font-light uppercase">Đăng Ký Nhận Tin</h1>
          <div className="flex ">
            <div className="flex items-center bg-white w-[350px] ">
              <MdOutlineEmail className="mx-2 text-[#9c9c9c]" />
              <input
                type="text"
                placeholder="Email"
                className="text-[#9c9c9c] text-[14px] outline-none placeholder:text-[14px]"
              />
            </div>
            <div className="flex items-center py-3 px-4 bg-[#111] uppercase text-[14px]">
              <BsSendArrowUp className="mr-2" />
              Đăng Ký
            </div>
          </div>
        </div>
        <div id="footer__social" className="flex cursor-pointer">
          <img
            width={28}
            height={28}
            src="https://www.apkwork.com/upload/20240304/6bc260e9571c65.png"
            alt=""
            className="mr-3"
          />
          <img
            width={28}
            height={28}
            src="https://www.apkwork.com/upload/20240220/ab3ea39b70ffb4.png"
            alt=""
            className="mr-3"
          />
          <img
            width={28}
            height={28}
            src="https://images.freeimages.com/image/large-previews/b2e/x-twitter-black-isolated-logo-5694253.png?fmt=webp&h=350"
            alt=""
            className="mr-3 bg-white rounded-md"
          />
          <img
            width={28}
            height={28}
            src="https://www.apkwork.com/upload/20240219/67f1131c8ba52b.png"
            alt=""
            className="mr-3"
          />
          <img
            width={28}
            height={28}
            src="https://www.apkwork.com/upload/20240426/75956c519fc77f.jpg"
            alt=""
            className="mr-3"
          />
          <img
            width={28}
            height={28}
            src="https://www.apkwork.com/upload/20240223/b25f1f3b90de6c.png"
            alt=""
            className="mr-3"
          />
        </div>
      </div>
      <div className="text-center py-3 ">
        © Copyright 2024 By
        <a href="https://www.facebook.com/OC2009">Poseidon</a>
        GitHub to
        <a href="https://github.com/Poseidon-go">Poseidon-go</a>
      </div>
    </footer>
  );
};

export default Footer;
