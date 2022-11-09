import TopBar from "../Components/TopBar";
import { GetAllChallenges } from "../Services/ChallengeApiService";
import { useState, useEffect } from "react";

import "../Styling/ChallengePage.css";
import "../Styling/Variables.css";

function ChallengePage() {
  const [challenges, setChallenges] = useState([]);

  useEffect(() => {
    GetTheChallenges();
  }, []);

  async function GetTheChallenges() {
    const challengelist = await GetAllChallenges();
    setChallenges(challengelist);
  }

  return (
    <div className="chp-main-content">
      <TopBar />
      <div className="chp-challenge-container">
        <div className="chp-challenge-header">Challenge Category (NYI)</div>
        {challenges.map((challenge) => (
          <li className="chp-challenge" key={challenge.id}>
            {challenge.name}
          </li>
        ))}
      </div>
    </div>
  );
}

export default ChallengePage;
