function Heading() {
  return (
    <div
      id="ShoesProduct__heading"
      className="flex justify-between items-center  "
    >
      <h1 className="text-[20px] text-[#000] font-bold  ">GIÀY SNEAKER</h1>
      <div>
        <button className="p-[10px] border border-[#ddd] rounded-[5px] ml-3 bg-[--colorshophover]  uppercase">
          <p className="text-[#fff] text-[14px] font-medium">giày adidas</p>
        </button>
        <button className="p-[10px] border border-[#ddd] rounded-[5px] text-[#000] text-[14px] ml-3 uppercase hover:border-[--colorshophover] hover:text-[--colorshophover]">
          <p className="text-inherit font-medium">giày nike</p>
        </button>
        <button className="p-[10px] border border-[#ddd] rounded-[5px] text-[#000] text-[14px] ml-3 uppercase hover:border-[--colorshophover] hover:text-[--colorshophover]">
          <p className="text-inherit font-medium">giày gucci</p>
        </button>
      </div>
    </div>
  );
}

export default Heading;
