import { useState } from "react";

function useRandomCard() {
  const [card, setCard] = useState("Promotions");
  const promotionsList = ["Promotions", "healing", "Check"];
  setTimeout(() => {
    promotionsList.forEach((pro) => {
      setCard(pro);
    });
  }, 2000);
  return card;
}

export default useRandomCard;
