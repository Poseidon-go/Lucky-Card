import { IoIosCall } from "react-icons/io";

function LocationItem() {
  return (
    <div id="location__content" className="bg-[--bg] p-4">
      <h1 className="text-black text-[15px] font-semibold">
        Hà Nội - Wanda CN Ba Đình
      </h1>
      <div>
        <span className="text-black text-[15px] font-normal">
          {" "}
          47 Thống Nhất, Phường Bình Thọ, Quận Thủ Đức
        </span>
        <span className="flex items-center text-black text-[15px] font-medium">
          <IoIosCall className="mr-2" />
          0985449437
        </span>
        <span className="text-black text-[15px] font-normal">
          Thời gian hoạt động : 9:00 - 21:00
        </span>
      </div>
    </div>
  );
}

export default LocationItem;
