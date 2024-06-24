import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md';
import {FaStar} from 'react-icons/fa';
import loadingIMG from '../../../../../../../../../assets/Image/Error/Loading.webp';
import banner from '../../../../../../../../../assets/Image/perfume/banner.webp';
import bg from '../../../../../../../../../assets/Image/Frame/frameMain.png.webp';
import marineA from '../../../../../../../../../assets/Image/perfume/parine-a.webp';
import marineB from '../../../../../../../../../assets/Image/perfume/parine-b.webp';
import blvA from '../../../../../../../../../assets/Image/perfume/blv-a.webp';
import blvB from '../../../../../../../../../assets/Image/perfume/blv-b.webp';

function PerfumeProductLeft() {
  return (
    <div id="PerfumeProductLeft" className="bg-[#fff] mr-3 pt-4 pr-4">
      <div className=" pl-4 flex justify-between">
        <span className="text-[#000] font-bold text-[20px] uppercase inline-block">
          Nước Hoa
        </span>
        <div className="flex items-center">
          <span className="text-[14px] text-[#828282]">
            Xem tất cả
            <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="">
          <img src={banner || loadingIMG} alt="" />
        </div>
        <div className="-ml-10 grid grid-cols-2 gap-2">
          <div id="card1">
            <div className="relative group/nike z-0 cursor-pointer ">
              <img src={bg} alt="" width={179} height={179} />
              <div className="absolute top-0 left-0 -z-10">
                <img
                  src={marineA}
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:hidden block"
                />
                <img
                  src={marineB}
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
                Nước hoa Bvlgari Aqva Marine
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
                  2,900,500₫
                </span>
              </div>
            </div>
          </div>
          <div id="card2">
            <div className="relative group/nike z-0 cursor-pointer">
              <img src={bg} alt="" width={179} height={179} />
              <div className="absolute top-0 left-0 -z-10">
                <img
                  src={blvA}
                  alt=""
                  width={160}
                  height={160}
                  className="group-hover/nike:hidden block object-contain translate-y-1 "
                />
                <img
                  src={blvB}
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:block hidden object-contain "
                />
              </div>
            </div>
            <div>
              <a className="text-[#000] text-[14px] font-medium line-clamp-2 mb-3">
                {' '}
                Nước hoa Bvlgari BLV For Men
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
                  1,900,500₫
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerfumeProductLeft;
