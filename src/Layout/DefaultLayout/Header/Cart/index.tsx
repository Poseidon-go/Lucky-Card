import cart from "../../../../assets/Image/Cart/cart.webp";

function Cart() {
  return (
    <div
      id="header__cart"
      className="absolute top-[41px] left-[-183px] w-[420px] bg-[#F8F8F8] p-[20px] z-10 shadow-lg 
        after:absolute after:z-0 after:top-[-7px] after:left-[204px] after:content-[''] after:w-[15px] after:h-[15px]
        after:rotate-45 after:bg-[#F8F8F8] hidden group-hover/focusCart:block before:content-[''] before:absolute before:w-full before:h-5
         before:top-[-16px] before:left-0
        "
    >
      <div
        id="header__cart-heading"
        className="pb-5 border-b-2 border-[#E3E5EC]"
      >
        <h1
          id="header__cart-title"
          className="text-[17px] text-[--colorText]  uppercase text-center font-semibold mb-2"
        >
          Giỏ hàng
        </h1>
        <div className="flex justify-center ">
          <img src={cart} alt="" width={60} height={60} />
        </div>
        <div className="text-center">
          <span className="text-[#000] text-[14px] ">
            Hiện chưa có sản phẩm
          </span>
        </div>
      </div>

      <div id="header__cart-contents" className="mt-3">
        <div className="flex justify-between mb-4">
          <span className="inline-block text-[#000] text-[16px] font-semibold uppercase">
            tổng tiền
          </span>
          <span className="inline-block text-[--textPrice] text-[18px] ">
            <span className="uppercase text-inherit font-semibold ">0</span>
            <span className="underline text-inherit font-semibold ">đ</span>
          </span>
        </div>

        <div className="flex justify-between">
          <button className="px-[40px] py-[15px] border border-[#111] text-[12px] font-bold bg-[#111] text-[#fff] hover:text-[#000] hover:bg-[#fff] hover:font-semibold">
            XEM GIỎ HÀNG
          </button>
          <button className="text-[#000] px-[40px] py-[15px] border border-[#111] text-[12px] font-semibold hover:font-bold  hover:text-[#fff] hover:bg-[#111]">
            THANH TOÁN
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
