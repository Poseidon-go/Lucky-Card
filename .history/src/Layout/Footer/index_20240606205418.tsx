import { MdOutlineEmail } from "react-icons/md";
import "../../styles/global.css";
import { BsSendArrowUp } from "react-icons/bs";
import { SiZalo } from "react-icons/si";
import { AiFillTikTok } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-[--bgFooter] w-full">
      <div className="w-pc mx-auto flex items-center justify-between">
        <h1>Đăng Ký Nhận Tin</h1>
        <div className="">
          <div>
            <MdOutlineEmail />
            <input type="text" placeholder="Email" />
          </div>
          <div>
            <BsSendArrowUp />
            Đăng Ký
          </div>
        </div>
        <div>
          {/* <SiZalo />
          <AiFillTikTok /> */}
          <img
            width={24}
            height={24}
            src="https://www.apkwork.com/upload/20240304/6bc260e9571c65.png"
            alt=""
          />
          <img
            width={24}
            height={24}
            src="https://www.apkwork.com/upload/20240220/ab3ea39b70ffb4.png"
            alt=""
          />
          <img
            width={24}
            height={24}
            src="https://images.freeimages.com/image/large-previews/b2e/x-twitter-black-isolated-logo-5694253.png?fmt=webp&h=350"
            alt=""
          />
        </div>
      </div>
      <div className="text-center py-3">
        © Copyright 2024 By
        <a href="https://www.facebook.com/OC2009">Poseidon</a>
        GitHub to
        <a href="https://github.com/Poseidon-go">Poseidon-go</a>
      </div>
    </footer>
  );
};

export default Footer;
