import { Routes, Route } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import LandingPage from "./LandingPage";

function RouterPage() {
  return (
    <div>
      <Routes>
        <Route path="/" element=<LandingPage /> />
        <Route path="/Home" element=<LandingPage /> />
        <Route path="*" element=<ErrorPage /> />
      </Routes>
    </div>
  );
}

export default RouterPage;
