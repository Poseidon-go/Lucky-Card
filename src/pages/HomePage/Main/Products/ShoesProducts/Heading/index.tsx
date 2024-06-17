import ButtonCustom from "../../../../../../components/Button";

function Heading() {
  return (
    <div
      id="ShoesProduct__heading"
      className="flex justify-between items-center  "
    >
      <h1 className="text-[20px] text-[#000] font-bold ">GIÀY SNEAKER</h1>
      <div>
        <ButtonCustom
          name="giày adidas"
          styleButton="btn p-[10px] border border-[#ddd] rounded-[5px] focus:font-semibold focus:bg-[--colorshophover] focus:text-[#fff] text-[14px] text-[#000]"
          styleText="uppercase font-medium  text-inherit "
        />
        <ButtonCustom
          name="giày nike"
          styleButton="btn p-[10px] border border-[#ddd] rounded-[5px] ml-3 focus:font-semibold focus:bg-[--colorshophover] focus:text-[#fff] text-[14px] text-[#000]"
          styleText="uppercase font-medium text-inherit"
        />
        <ButtonCustom
          name="giày gucci"
          styleButton="btn p-[10px] border border-[#ddd] rounded-[5px] ml-3 focus:font-semibold focus:bg-[--colorshophover] focus:text-[#fff] text-[14px] text-[#000]"
          styleText="uppercase font-medium text-inherit"
        />
      </div>
    </div>
  );
}

export default Heading;
