import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md';
import loadingIMG from '../../../../../../../assets/Image/Error/Loading.webp';

function CollectionDefault() {
  return (
    <div className="grid grid-cols-2">
      <div className="bg-[#fff] mr-3 pt-4 pr-4">
        <div className="border-l-2 border-[#000] pl-4 flex justify-between">
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
        <div>
          <img
            src={
              'https://file.hstatic.net/200000525917/file/nike-banner_cef5659762e54e219f1d43f3d2ea6ca5.jpg' ||
              loadingIMG
            }
            alt=""
          />
        </div>
      </div>
      <div className="bg-[#fff] ml-3 pt-4 pr-4 ">
        <div className="flex justify-between">
          <div className="border-l-2 border-[#000] pl-4 flex justify-between">
            <span className="text-[#000] font-bold text-[20px] uppercase">Adidas</span>
          </div>
          <div className="flex items-center">
            <span className="text-[14px] text-[#828282]">
              Xem tất cả
              <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
            </span>
          </div>
        </div>
        <div>
          <img
            src={
              'https://file.hstatic.net/200000525917/file/adidas-banner_c570f56e76bc4e1895bfd16906303012.jpg' ||
              loadingIMG
            }
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default CollectionDefault;
