import { useState } from "react";

interface LocationType {
  id: number;
  name: string;
}
function Location() {
  const [citi, setCiti] = useState("");
  const citiList: LocationType = [
    {
      id: 1,
      name: "HoChiMinh",
    },
    {
      id: 2,
      name: "HaNoi",
    },
  ];
  return (
    <div
      id="header__login"
      className="absolute top-[50px] left-[-183px] w-[420px] bg-[#F8F8F8] p-[20px] z-10 shadow-lg 
      after:absolute after:top-[-7px] after:left-[204px] after:content-[''] after:w-[15px] after:h-[15px]
      after:rotate-45 after:bg-[--bg]  group-hover/focusLocation:block before:content-[''] before:absolute before:w-full before:h-5
       before:top-[-16px] before:left-0
      "
    >
      <h1
        id="header__login-title"
        className="text-[17px] text-[--colorText]  uppercase text-center font-semibold mb-2"
      >
        TÌM CỬA HÀNG GẦN BẠN
      </h1>
      <div id="locatio__total" className="flex mb-3">
        <select
          id="currency"
          name="currency"
          className="h-full px-2 py-2 mr-1 rounded-md border-[1px] border-[#D7D7D7] bg-[--bg] outline-none pl-2 pr-7 text-gray-500  sm:text-sm"
        >
          <option>Chọn Tỉnh/ thành phố</option>
          <option value={1}>Hồ Chí Minh</option>
          <option value={2}>Hà Nội</option>
          <option value={3}>Đắk Lắk</option>
        </select>
        <select
          id="currency"
          name="currency"
          className="h-full px-2 py-2 ml-1 rounded-md border-[1px] border-[#D7D7D7] bg-[--bg] outline-none pl-2 pr-7 text-gray-500  sm:text-sm"
        >
          <option>Chọn Quận/ Huyện</option>
          <option>Quận 10</option>
          <option>Quận Hai Bà Trưng</option>
        </select>
      </div>
    </div>
  );
}

export default Location;
