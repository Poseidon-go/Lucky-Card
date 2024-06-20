import {FaRegCalendarAlt} from 'react-icons/fa';
import {MdOutlineKeyboardDoubleArrowRight} from 'react-icons/md';
import './index.css';
interface BlobList {
  id: number;
  bgPost: string;
  title: string;
  describe: string;
  date: string;
}
function HomeBlog() {
  const blogList: BlobList[] = [
    {
      id: 1,
      bgPost:
        'https://file.hstatic.net/200000525917/article/untitled_design__22__fb23feecd3a_6de29e794b704d25ab33dfa9de4bd05c_large.jpg',
      title:
        "Legit check : Hướng dẫn cách phân biệt Air Jordan 1 'Volt Gold' Real và Fake",
      describe:
        'Bạn đang cố gắng tìm hiểu cách phân biệt đôi Air Jordan 1 phối màu Volt Gold của Nike là thậ...',
      date: '02/07/2022',
    },
    {
      id: 2,
      bgPost:
        'https://file.hstatic.net/200000525917/article/authentic_shoes__11__8eb51911327_b78fecb4a233469e9337bc7c18873013_large.jpg',
      title: 'Top 10 đôi giày thể thao cho nữ vào hè này',
      describe:
        'Một vẻ ngoài năng động, cùng phong cách trẻ trung luôn là sự lựa chọn hàng đầu của các bạn nữ trong các dịp lễ đặc bi...',
      date: '02/07/2022',
    },
    {
      id: 3,
      bgPost:
        'https://file.hstatic.net/200000525917/article/teyana-packer-ewing-33-hi-2_77b5_4d9e9c114d614a1897d4b74d4ef44bdd_large.jpeg',
      title: 'Top 10 đôi sneaker flop nhất lịch sử',
      describe:
        'Các bản collab thực sự là một cái gì đó đặc biệt. Ngay sau khi một đôi giày, thậm chí có thể là loại tầm thường ...',
      date: '01/07/2022',
    },
    {
      id: 4,
      bgPost:
        'https://file.hstatic.net/200000525917/article/mercurial_main_2022-05-17-15-21-40_br8s_f1_rgb-1_re_native_1000_8236065601bc4c768ba392b78f04fb5d_large.jpeg',
      title: 'NIKE, Inc. Reports Fiscal 2022 Fourth Quarter And Full Year Results',
      describe:
        'BEAVERTON, Ore., June 27, 2022 — NIKE, Inc. (NYSE:NKE) today reported financial results for its fiscal 2022 fourth qu...',
      date: '01/07/2022',
    },
  ];
  return (
    <div id="homeblog" className="">
      <h1 className="uppercase text-[#000] text-[20px] text-center font-bold mb-3">
        Tin tức
      </h1>
      <div id="homeblog__contents" className="grid grid-cols-4 -ml-4 mb-40">
        {blogList.map((blogItem) => {
          const {id, title, bgPost, date, describe} = blogItem;
          return (
            <div id="homeblog__post-img" key={id} className="ml-4 relative">
              <img src={bgPost} alt="" height={174} className="object-cover h-full " />
              <div
                id="homeblog__post-contents"
                className="bg-[#fff] absolute left-[9px] top-[187px] w-[94%] p-3 shadow-xl"
              >
                <h1
                  id="homeblog__post-contents-title"
                  className="text-[16px] text-[#000] font-semibold line-clamp-2 "
                >
                  {title}
                </h1>
                <a href="" className="text-[14px] text-[#000] line-clamp-2 mb-2">
                  {describe}
                </a>
                <div
                  id="homeblog__post-contents-date"
                  className="flex justify-between pt-2 border-t-2 border-[#000]"
                >
                  <div className="text-[#000] text-[12px] flex items-center">
                    <FaRegCalendarAlt />
                    <span className="text-inherit ml-1">{date}</span>
                  </div>
                  <div className="text-[13px] text-[#888]">
                    <span className="text-inherit">Xem thêm</span>
                    <MdOutlineKeyboardDoubleArrowRight className="inline-block" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomeBlog;
