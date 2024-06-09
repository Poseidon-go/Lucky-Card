import bgImage from "../../../../../assets/Image/Frame/frameMain.png.webp";
const PromotionsItem = () => {
  return (
    <div className=" bg-[#fff] p-2 rounded-[5px] ">
      <img src={bgImage} width={260} height={260} alt="" />
      <div>
        <span className=""></span>
        <span className="line-through"></span>
      </div>
    </div>
  );
};

export default PromotionsItem;
