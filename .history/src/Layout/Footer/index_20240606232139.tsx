import { BsSendArrowUp } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import "../../styles/global.css";
import "./index.css";
import { IoLocationOutline } from "react-icons/io5";
import { LiaPhoneSolid } from "react-icons/lia";
const Footer = () => {
  return (
    <footer className="bg-[--bgFooter] w-full  ">
      <div id="footer__wrap" className="w-pc mx-auto cursor-pointer ">
        <div
          id="footer__info"
          className="py-4 flex items-center justify-between "
        >
          <div
            id="footer__Send"
            className="flex items-center justify-between w-[58%]"
          >
            <h1 className="text-[17px] font-light uppercase">
              Đăng Ký Nhận Tin
            </h1>
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

        <div id="footer__policy" className="flex py-6 ">
          <div id="footer__policy-introduce" className="flex w-3/6">
            <div className="w-4/6 mr-6">
              <span className="text-[17px] font-semibold">GIỚI THIỆU</span>
              <ul className="pt-2">
                <li className="text-[14px] py-1 text-wrap font-semibold">
                  Wd Shoes Scofield chuyên cung cấp các loại giày authentic với
                  giá cả ưu đãi nhất thị trường
                </li>
                <li className="flex items-center ">
                  <IoLocationOutline className="font-semibold mr-1" />
                  <span className="text-[14px] py-1 text-wrap font-semibold">
                    432/24 Lạc Long Quân, Phường 5, Quận 11
                  </span>
                </li>
                <li className="flex items-center text-[14px] py-1 text-wrap font-semibold ">
                  <LiaPhoneSolid className="font-semibold mr-1" />
                  0985449437
                </li>
                <li className="flex items-center text-[14px] pt-1 pb-2 text-wrap font-semibold">
                  <MdOutlineEmail className="font-semibold mr-1" />
                  duongoc79@gmail.com
                </li>
              </ul>
              <img
                width={160}
                height={40}
                src="https://file.hstatic.net/200000397757/file/dathongbao_48067cd02fae41b68bf0294777c39c94_compact.png"
                alt=""
              />
            </div>
            <div className="w-2/6">
              <span className="text-[17px] font-semibold">CHÍNH SÁCH</span>
              <ul className="list-disc pt-2">
                <li className="py-1 text-[14px] font-semibold">
                  Hệ thống cửa hàng
                </li>
                <li className="py-1 text-[14px] font-semibold">Giới thiệu</li>
                <li className="py-1 text-[14px] font-semibold">
                  Chính sách đổi trả
                </li>
                <li className="py-1 text-[14px] font-semibold">
                  Chính sách bảo mật
                </li>
                <li className="py-1 text-[14px] font-semibold">
                  Điều khoản dịch vụ
                </li>
                <li className="py-1 text-[14px] font-semibold">Liên hệ</li>
              </ul>
            </div>
          </div>
          <div
            id="footer__policy-instruct"
            className="flex w-3/6 justify-between"
          >
            <div>
              <span className="text-[17px] font-semibold">HƯỚNG DẪN</span>
              <ul className="list-disc pt-2">
                <li className="py-1 text-[14px] font-semibold">
                  Sản phẩm nổi bật
                </li>
                <li className="py-1 text-[14px] font-semibold">
                  Tất cả sản phẩm
                </li>
              </ul>
            </div>
            <div>
              <span>FANPAGE CHÚNG TÔI</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-3 ">
        © Copyright 2024 By
        <a
          href="https://www.facebook.com/OC2009"
          target="_blank"
          className="mx-2"
        >
          Poseidon
        </a>
        GitHub to
        <a
          href="https://github.com/Poseidon-go"
          target="_blank"
          className="mx-2"
        >
          Poseidon-go
        </a>
      </div>
    </footer>
  );
};

export default Footer;
