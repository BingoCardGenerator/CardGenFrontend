import { useEffect, useState } from "react";
import { GetAllBingoCards } from "../Services/CardApiService";

import "../Styling/Variables.css";
import "../Styling/BingoCardsSideBar.css";

function BingoCardsSideBar() {
  const [bingoCards, setBingoCards] = useState([]);

  useEffect(() => {
    GetTheBingoCards();
  }, []);

  async function GetTheBingoCards() {
    const bingocards = await GetAllBingoCards();
    setBingoCards(bingocards);
  }

  return (
    <div className="cs-main-content">
      {bingoCards.map((card) => (
        <div className="cs-bingocard" key={card.id}>
          {card.name}
        </div>
      ))}
    </div>
  );
}

export default BingoCardsSideBar;
