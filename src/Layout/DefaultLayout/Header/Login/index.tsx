function Login() {
  return (
    <div
      id="header__login"
      className="absolute bottom-[-302px] left-[-200px] w-[420px] bg-[--bg] p-[20px] z-10 shadow-lg 
      after:absolute after:top-[-7px] after:left-[204px] after:content-[''] after:w-[15px] after:h-[15px]
      after:rotate-45 after:bg-[--bg] hidden group-hover/focusLogin:block before:content-[''] before:absolute before:w-full before:h-5
       before:top-[-16px] before:left-0
      "
    >
      <h1
        id="header__login-title"
        className="text-[17px] text-[--colorText]  uppercase text-center font-semibold"
      >
        Đăng Nhập Tài Khoản
      </h1>
      <h5
        id="header__login-suggest"
        className="text-[--colorText] text-[13px] font-medium  text-center mb-1"
      >
        Nhập Email và Tài Khoản Của Bạn:
      </h5>
      <div>
        <input
          type="email"
          placeholder="Email"
          className="border-[1px] border-[--borderInput] w-full p-2 mb-2 text-[--colorText] outline-none placeholder:text-[12px]"
        />
        <input
          type="password"
          placeholder="Mật Khẩu"
          className="border-[1px] border-[--borderInput] w-full p-2 mb-2 text-[--colorText] outline-none placeholder:text-[12px]"
        />
      </div>
      <button className="w-full bg-[--bgText] p-2 text-[#fff] mb-2">
        Đăng Nhập
      </button>
      <span className="text-[--colorText] text-[13px]  mb-2 font-medium">
        Khách hàng mới? <strong className="text-[14px]">tạo tài khoản</strong>
      </span>{" "}
      <br />
      <span className="text-[--colorText] text-[13px] font-medium ">
        Quên mật khẩu?{" "}
        <strong className="text-[14px]">Khôi phục mật khẩu</strong>
      </span>
    </div>
  );
}

export default Login;
