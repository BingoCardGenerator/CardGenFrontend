import TopBar from "../Components/TopBar";
import BingoCard from "../Components/BingoCard";

import { useState, useEffect } from "react";
import { GetAllBingoCards } from "../Services/CardApiService";

import "../Styling/CardPage.css";

function BingoCardListPage() {
  const [bingoCards, setBingoCards] = useState([]);

  useEffect(() => {
    GetTheBingoCards();
  }, []);

  async function GetTheBingoCards() {
    const bingocards = await GetAllBingoCards();
    setBingoCards(bingocards);
  }

  return (
    <div className="cap-main-content">
      <TopBar />
      <div className="cap-cards-container">
        {bingoCards.map((card) => (
          <BingoCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default BingoCardListPage;
