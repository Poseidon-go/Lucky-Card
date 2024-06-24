import {FaStar} from 'react-icons/fa';
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md';
import loadingIMG from '../../../../../../../../../assets/Image/Error/Loading.webp';
import bg from '../../../../../../../../../assets/Image/Frame/frameMain.png.webp';
import jordanA from '../../../../../../../../../assets/Image/Shoes/Nike/Product/jordan 1-a.webp';
import jordanB from '../../../../../../../../../assets/Image/Shoes/Nike/Product/jordan 1-b.webp';
import jordan2A from '../../../../../../../../../assets/Image/Shoes/Nike/Product/jordan 2-a.webp';
import jordan2B from '../../../../../../../../../assets/Image/Shoes/Nike/Product/jordan 2-b.webp';

function CollectionLeft() {
  return (
    <div className="bg-[#fff] mr-3 pt-4 pr-4">
      <div className=" pl-4 flex justify-between  border-l-[3px] border-[#000] mb-3 ">
        <span className="text-[#000] font-bold text-[20px] uppercase inline-block">
          Nike
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
          <img
            src={
              'https://file.hstatic.net/200000525917/file/nike-banner_cef5659762e54e219f1d43f3d2ea6ca5.jpg' ||
              loadingIMG
            }
            alt=""
          />
        </div>
        <div className="-ml-10 grid grid-cols-2 gap-2">
          <div id="card1">
            <div className="relative group/nike z-0 cursor-pointer ">
              <img src={bg} alt="" width={179} height={179} />
              <div className="absolute top-0 left-0 -z-10">
                <img
                  src={jordanA}
                  alt=""
                  width={179}
                  height={179}
                  className="group-hover/nike:hidden block"
                />
                <img
                  src={jordanB}
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
                  src={jordan2A}
                  alt=""
                  width={160}
                  height={160}
                  className="group-hover/nike:hidden block object-contain translate-y-8 "
                />
                <img
                  src={jordan2B}
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

export default CollectionLeft;
