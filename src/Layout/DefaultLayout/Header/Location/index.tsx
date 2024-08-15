import { useEffect, useState } from "react";
import LocationItem from "./components/LocationItem";

interface City {
  id: number;
  phoneNumber: string;
  citi: string;
  district: string;
  road: string;
  nameShop: string;
}

interface idCitiCurrent {
  idCitiCurrent: number;
  setIdCitiCurrent: React.Dispatch<React.SetStateAction<number>>;
}

function Location() {
  const [idCitiCurrent, setIdCitiCurrent] = useState(0);
  const [idDistrictCurrent, setIdDistrictCurrent] = useState(0);
  const citiList: City[] = [
    {
      id: 1,
      phoneNumber: "0983 456 789",
      citi: "Hồ Chí Minh",
      district: "Quận 10",
      road: "168 3 Tháng 2, Phường 12, Quận 10",
      nameShop: "Lucky Card CN",
    },
    {
      id: 1,
      phoneNumber: "0978 123 456",
      citi: "Hồ Chí Minh",
      district: "Quận Bình Thạnh",
      road: "244 Điện Biên Phủ, Phường 22, Quận Bình Thạnh",
      nameShop: "Lucky Card CN",
    },
    {
      id: 1,
      phoneNumber: "0962 789 012",
      citi: "Hồ Chí Minh",
      district: "Quận Thủ Đức",
      road: "01 Võ Văn Ngân, Phường Linh Chiểu, Quận Thủ Đức",
      nameShop: "Lucky Card CN",
    },
    {
      id: 2,
      phoneNumber: "0987 654 321",
      citi: "Hà Nội",
      district: "Quận Hoàn Kiếm",
      road: "Số 15, Phố Hàng Đào, Phường Hàng Đào, Quận Hoàn Kiếm",
      nameShop: "Lucky Card CN",
    },
    {
      id: 2,
      phoneNumber: "0979 876 543",
      citi: "Hà Nội",
      district: "Quận Ba Đình",
      road: "Số 120, Đường Kim Mã, Phường Kim Mã, Quận Ba Đình",
      nameShop: "Lucky Card CN",
    },
    {
      id: 2,
      phoneNumber: "0961 234 567",
      citi: "Hà Nội",
      district: "Quận Hai Bà Trưng",
      road: "Số 220, Phố Bà Triệu, Phường Lê Đại Hành, Quận Hai Bà Trưng",
      nameShop: "Lucky Card CN",
    },
  ];

  useEffect(() => {});
  function hanldChoose(event) {
    const currentValueLocations = event.target.value;
    console.log("currentValueChoose", currentValueLocations);
    setIdCitiCurrent((pre) => currentValueLocations);
  }

  return (
    <div
      id="header__Location"
      className="absolute top-[50px] left-[-183px] w-[420px] bg-[#F8F8F8] p-[20px] z-10 shadow-lg 
      after:absolute after:top-[-7px] after:left-[204px] after:content-[''] after:w-[15px] after:h-[15px]
      after:rotate-45 after:bg-[#F8F8F8] hidden  group-hover/focusLocation:block before:content-[''] before:absolute before:w-full before:h-5
       before:top-[-16px] before:left-0
      "
    >
      <h1
        id="header__Location-title"
        className="text-[17px] text-[--colorText]  uppercase text-center font-semibold mb-2"
      >
        TÌM CỬA HÀNG GẦN BẠN
      </h1>
      <div id="locatio__total" className="flex mb-3">
        <select
          id="currency"
          name="currency"
          className="h-full px-2 py-2 mr-1 rounded-md border-[1px] border-[#D7D7D7]  bg-[--bg] outline-none pl-2 pr-7 text-gray-500  sm:text-sm"
          onChange={hanldChoose}
        >
          <option>Chọn Tỉnh/ Thành Phố</option>
          <option value={1}>Hồ Chí Minh</option>
          <option value={2}>Hà Nội</option>
        </select>
        <select
          id="currency"
          name="currency"
          className="h-full px-2 py-2 ml-1 rounded-md border-[1px] border-[#D7D7D7] bg-[--bg] outline-none pl-2 pr-7 text-gray-500  sm:text-sm"
          onChange={hanldChoose}
        >
          <option>Chọn Quận/ Huyện</option>

          {citiList.map((citiItem, index) => (
            <option key={index} value={citiItem.id}>
              {citiItem.district}
            </option>
          ))}
        </select>
      </div>
      <div id="location__item" className="h-80 overflow-auto custom-scrollbar">
        {citiList.map((city, index) => {
          return <LocationItem key={index} city={city} />;
        })}
      </div>
    </div>
  );
}

export default Location;
