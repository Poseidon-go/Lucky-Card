import { IoIosCheckmark, IoIosClose } from "react-icons/io";
import "./index.css";

function ShowAddCart() {
  return (
    <div
      id="show-add-cart"
      className="flex items-center bg-[#348D34] w-72 p-1 ease-in duration-700 fixed right-4  z-50 "
    >
      <div className="flex items-center">
        <IoIosCheckmark className="text-[40px]" />
      </div>
      <div className="text-[#fff]">
        <div className="flex justify-between">
          <span className="font-semibold text-[20px]">Sucesss</span>
          <IoIosClose className=" text-[30px] cursor-pointer" />
        </div>
        <span className="text-[12px]">Sản Phẩm Đã Được Thêm Vào Giỏ Hàng</span>
      </div>
    </div>
  );
}

export default ShowAddCart;
