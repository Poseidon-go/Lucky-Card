function AddToCart() {
  function handleAddToCart() {}
  return (
    <div className="flex items-center justify-center w-[400px] h-[400px]">
      <button
        onClick={handleAddToCart}
        className="text-black border  border-[#000 ] px-2 py-3 rounded-[5px]"
      >
        Thêm Vào Giỏ Hàng
      </button>
    </div>
  );
}

export default AddToCart;
