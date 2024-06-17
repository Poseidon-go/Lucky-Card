import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md';
import ContentsItem from './components/ContentsItem';

function HomeProduct({productList}) {
  return (
    <div className="mb-4">
      <div className="grid grid-cols-5 -ml-4 mb-2">
        {productList.map((productItem, index) => {
          console.log(productItem);
          return <ContentsItem key={index} productItem={productItem} />;
        })}
      </div>

      <div className="flex justify-center mb-8">
        <button className="flex  px-[60px] py-[10px] rounded-[5px] bg-[#000] ">
          <div className="flex items-center text-[14px] text-[#fff]">
            <span className="mr-1 text-inherit">Xem Tất Cả</span>
            <MdOutlineKeyboardDoubleArrowRight className="text-inherit" />
          </div>
        </button>
      </div>
    </div>
  );
}

export default HomeProduct;
