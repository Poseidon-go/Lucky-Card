import ShoeshomeContent from "./components/ShoeshomeContent";
import ShoeshomeSideBar from "./components/ShoeshomeSideBar";

function ShoesHome() {
  return (
    <div id="shoeshome" className="w-pc mx-auto">
      <div id="shoeshome__breadcrumb" className="my-3 text-[13px] text-[#000]">
        <span className="text-inherit font-normal">Trang Chủ</span>
        <span className="text-[13px] text-[#ccc] mx-[5px] font-normal">/</span>
        <span className="text-inherit font-normal">Sneaker</span>
      </div>
      <div id="shoeshome__main" className="flex">
        <ShoeshomeSideBar />
        <ShoeshomeContent />
      </div>
    </div>
  );
}

export default ShoesHome;
