import { CarouselContent } from "../Carousel";
import MainPromotions from "./MainPromotions/idnex";

const MainContent = () => {
  return (
    <div id="mainContent" className="border border-red-400">
      <CarouselContent />
      <MainPromotions />
    </div>
  );
};

export default MainContent;
