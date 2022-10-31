import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LandingPage from "./LandingPage";
import ChallengePage from "./ChallengePage";
import CardPage from "./CardPage";

function RouterPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element=<LandingPage /> />
        <Route path="/Home" element=<LandingPage /> />
        <Route path="/Challenge" element=<ChallengePage /> />
        <Route path="/Card" element=<CardPage /> />
        <Route path="*" element=<ErrorPage /> />
      </Routes>
    </div>
  );
}

export default RouterPage;
