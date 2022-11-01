import TopBar from "../Components/TopBar";
import { GetAllChallenges } from "../Components/ChallengeApiService";
import { useState, useEffect, useRef } from "react";

import "../Styling/ChallengePage.css";
import "../Styling/Variables.css";

function ChallengePage() {
  const [challenges, setChallenges] = useState([]);

  const challengeref = useRef([]);

  useEffect(() => {
    GetTheChallenges();
    challengeref.current = challenges;
    console.log(challengeref.current);
  }, [challenges]);

  async function GetTheChallenges() {
    const challengelist = await GetAllChallenges();
    setChallenges(challengelist);
  }

  return (
    <div className="chp-main-content">
      <TopBar />
      <div className="chp-challenge-container">
        <div className="chp-challenge-header">Challenge Category (NYI)</div>
        {challengeref.current.map((challenge) => (
          <li className="chp-challenge" key={challenge.id}>
            {challenge.name}
          </li>
        ))}
      </div>
    </div>
  );
}

export default ChallengePage;
