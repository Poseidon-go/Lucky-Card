import { useState, useEffect, useMemo } from 'react';

const useRandomHolder = () => {
  const holderList = useMemo(
    () => ['Bạn đang tìm gì...', 'giày...', 'Nước Hoa...', 'Sneaker', 'Mua sắm'],
    [],
  );

  const [holder, setHolder] = useState(holderList[0]);

  useEffect(() => {
    const changeHolder = () => {
      const randomIndex = Math.floor(Math.random() * holderList.length);
      setHolder(holderList[randomIndex]);
    };

    const intervalId = setInterval(changeHolder, 2000);

    return () => clearInterval(intervalId);
  }, [holderList]);

  return holder;
};

export default useRandomHolder;
