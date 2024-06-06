import { MdOutlineEmail } from "react-icons/md";
import "../../styles/global.css";
import { BsSendArrowUp } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className="bg-[--bgFooter] w-full">
      <div className="w-pc mx-auto flex items-center justify-between">
        <h1>Đăng Ký Nhận Tin</h1>
        <div>
          <MdOutlineEmail />
          <input type="text" placeholder="Email" />
        </div>
        <div>
          <BsSendArrowUp />
          Đăng Ký
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
