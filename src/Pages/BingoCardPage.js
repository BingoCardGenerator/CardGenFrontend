import { useEffect, useState } from "react";
import BingoCard from "../Components/BingoCard";
import BingoCardsSideBar from "../Components/BingoCardsSideBar";
import TopBar from "../Components/TopBar";
import { GetCardChallenges } from "../Services/CardApiService";
import "../Styling/CardPage.css";

function BingoCardPage() {
  const [activeCard, setActiveCard] = useState(null);
  const [activeChallenges, setActiveChallenges] = useState([]);

  function LoadActiveCard(card) {
    setActiveCard(card);
  }

  return (
    <div className="bp-page-container">
      <TopBar />
      <div className="bp-main-content">
        <BingoCardsSideBar loadcardmethod={LoadActiveCard} />
        <div className="bp-card-container">
          {activeCard !== null ? (
            <BingoCard card={activeCard} className="bp-bingocard" />
          ) : (
            <div className="bp-bingocard">No card</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default BingoCardPage;
