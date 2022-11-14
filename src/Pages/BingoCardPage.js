import BingoCardsSideBar from "../Components/BingoCardsSideBar";
import TopBar from "../Components/TopBar";
import "../Styling/CardPage.css";

function BingoCardPage() {
  return (
    <div className="bp-main-content">
      <TopBar />
      <BingoCardsSideBar />
    </div>
  );
}

export default BingoCardPage;
