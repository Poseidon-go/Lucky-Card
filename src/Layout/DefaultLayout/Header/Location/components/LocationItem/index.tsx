import { IoIosCall } from "react-icons/io";

function LocationItem({ city }) {
  return (
    <div id="location__content" className="bg-[--bg] p-4 mb-2" key={city.id}>
      <h1 className="text-black text-[15px] font-bold">
        {city.citi} - {city.nameShop} {city.district}
      </h1>
      <div>
        <span className="text-black text-[15px] font-normal">{city.road}</span>
        <span className="flex items-center text-black text-[15px] font-medium">
          <IoIosCall className="mr-2" />
          {city.phoneNumber}
        </span>
        <span className="text-black text-[15px] font-normal">
          Thời gian hoạt động : 9h - 21h
        </span>
      </div>
    </div>
  );
}

export default LocationItem;
