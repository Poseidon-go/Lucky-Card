import { useState, useEffect, useMemo } from "react";

const useRandomHolder = () => {
  const holderList = useMemo(
    () => [
      "Bạn đang tìm gì...",
      "Giày...",
      "Nước Hoa...",
      "Sneaker...",
      "Thời trang...",
      "Mua Sắm",
      "Ca Nhạc...",
      "Tính Năng",
    ],
    []
  );
  const [holder, setHolder] = useState(holderList[0]);

  useEffect(() => {
    const changeHolder = () => {
      const randomIndex = Math.floor(Math.random() * holderList.length);
      setHolder(holderList[randomIndex]);
    };

    const intervalId = setInterval(changeHolder, 2000);

    return () => clearInterval(intervalId); // Dọn dẹp interval khi component unmount
  }, [holderList]);

  return holder;
};

export default useRandomHolder;
