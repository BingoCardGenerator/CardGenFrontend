import TopBar from "../Components/TopBar";
import {
  GetAllChallenges,
  GetChallengeCount,
} from "../Services/ChallengeApiService";
import { useState, useEffect } from "react";

import "../Styling/ChallengePage.css";
import "../Styling/Variables.css";

function ChallengePage() {
  const [challenges, setChallenges] = useState([]);
  const [ChallengeCount, setChallengeCount] = useState("");

  useEffect(() => {
    GetTheChallenges();
    GetCount();
  }, []);

  async function GetTheChallenges() {
    const challengelist = await GetAllChallenges();
    setChallenges(challengelist);
  }

  async function GetCount() {
    const count = await GetChallengeCount();
    console.log(count);
    setChallengeCount(count);
  }

  return (
    <div className="chp-main-content">
      <TopBar />
      <div className="chp-challenge-container">
        <div className="chp-challenge-header">Challenge Category (NYI)</div>
        <p
          className="chp-challenge-count"
          data-testid="challenge-count"
        >{`There are: ${ChallengeCount} challenges`}</p>
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
