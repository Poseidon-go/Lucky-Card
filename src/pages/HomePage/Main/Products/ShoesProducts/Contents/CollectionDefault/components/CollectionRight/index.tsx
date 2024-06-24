import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
import loadingIMG from '../../../../../../../../../assets/Image/Error/Loading.webp';
import bg from '../../../../../../../../../assets/Image/Frame/frameMain.png.webp';
import creamA from '../../../../../../../../../assets/Image/Shoes/Adidas/contents/creamPink.webp';
import creamB from '../../../../../../../../../assets/Image/Shoes/Adidas/contents/creamPinkB.webp';
import greenA from '../../../../../../../../../assets/Image/Shoes/Adidas/contents/greenWhiteA.webp';
import greenB from '../../../../../../../../../assets/Image/Shoes/Adidas/contents/greenWhiteB.webp';

function CollectionRight() {
  return (
    <div className="bg-[#fff] ml-3 pt-4 pr-4 ">
      <div className="flex justify-between border-l-[3px] border-[#000] mb-3">
        <div className=" pl-4 flex justify-between">
          <span className="text-[#000] font-bold text-[20px] uppercase">Adidas</span>
        </div>
        <div className="flex items-center">
          <span className="text-[14px] text-[#828282]">
            Xem tất cả
            <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="">
          <img
            src={
              'https://file.hstatic.net/200000525917/file/adidas-banner_c570f56e76bc4e1895bfd16906303012.jpg' ||
              loadingIMG
            }
            alt=""
          />
        </div>
        <div className="-ml-10 grid grid-cols-2 gap-2">
          <div id="card1">
            <div className="relative group/nike z-0 cursor-pointer">
              <img src={bg} alt="" width={179} height={179} />
              <div className="absolute top-0 left-0 -z-10">
                <img
                  src={creamA}
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:hidden block translate-y-8"
                />
                <img
                  src={creamB}
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:block hidden"
                />
              </div>
            </div>
            <div>
              <a className="text-[#000] text-[14px] font-medium line-clamp-2 mb-3">
                {' '}
                Giày Nike Air Jordan 1 High OG GS 'Stage Haze' 575441-108
              </a>
              <div className="text-[#000] text-[12px] font-medium flex items-center">
                Đánh giá
                <div className="flex ml-3">
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-[--textPrice] text-[14px] font-semibold inline-block">
                  4,900,500₫
                </span>
                <span className="text-[--textDiscount] text-[14px] line-through inline-block">
                  5,500,000₫
                </span>
              </div>
            </div>
          </div>
          <div id="card2">
            <div className="relative group/nike z-0 cursor-pointer">
              <img src={bg} alt="" width={179} height={179} />
              <div className="absolute top-0 left-0 -z-10">
                <img
                  src={greenA}
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:hidden block translate-y-8"
                />
                <img
                  src={greenB}
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:block hidden"
                />
              </div>
            </div>
            <div>
              <a className="text-[#000] text-[14px] font-medium line-clamp-2 mb-3">
                {' '}
                Giày Nike Air Jordan 1 High OG GS 'Stage Haze' 575441-108
              </a>
              <div className="text-[#000] text-[12px] font-medium flex items-center">
                Đánh giá
                <div className="flex ml-3">
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                  <FaStar className="text-yellow-300 text-[16px]" />
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-[--textPrice] text-[14px] font-semibold inline-block">
                  4,900,500₫
                </span>
                <span className="text-[--textDiscount] text-[14px] line-through inline-block">
                  5,500,000₫
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionRight;
