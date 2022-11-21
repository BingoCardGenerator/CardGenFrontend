import { useEffect, useState } from "react";
import { GetAllBingoCards } from "../Services/CardApiService";

import "../Styling/Variables.css";
import "../Styling/BingoCardsSideBar.css";

function BingoCardsSideBar(loadcardmethod) {
  const [bingoCards, setBingoCards] = useState([]);
  const CardMethod = loadcardmethod.loadcardmethod;
  useEffect(() => {
    GetTheBingoCards();
  }, []);

  async function GetTheBingoCards() {
    const bingocards = await GetAllBingoCards();
    setBingoCards(bingocards);
  }

  function ClickHandler(card) {
    CardMethod(card);
  }

  return (
    <div className="cs-main-content">
      {bingoCards.map((card) => (
        <div
          className="cs-bingocard"
          key={card.id}
          onClick={() => ClickHandler(card)}
        >
          {card.name}
        </div>
      ))}
    </div>
  );
}

export default BingoCardsSideBar;
