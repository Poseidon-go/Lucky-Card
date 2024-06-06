import "../../styles/global.css";
const Footer = () => {
  return (
    <footer className="bg-[--bgFooter] w-full">
      <div className="w-pc mx-auto">
        <h1>Đăng Ký Nhận Tin</h1>
        <div>
          <input type="text" placeholder="Email" />
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