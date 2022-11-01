import "../Styling/TopBar.css";
import "../Styling/Variables.css";
import { useNavigate } from "react-router-dom";
function TopBar() {
  let navigate = useNavigate();

  const RedirectToChallengePage = () => {
    navigate("/Challenge");
  };

  const RedirectToCardPage = () => {
    navigate("/Card");
  };

  const RedirectToLandingPage = () => {
    navigate("/Home");
  };

  return (
    <div className="tb-main">
      <button className="tb-pagebutton" onClick={RedirectToLandingPage}>
        LandingPage
      </button>
      <button className="tb-pagebutton" onClick={RedirectToChallengePage}>
        Challenges
      </button>
      <button className="tb-pagebutton" onClick={RedirectToCardPage}>
        Cards
      </button>
    </div>
  );
}

export default TopBar;
