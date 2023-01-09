import "../Styling/BingoCard.css";
import "..//Styling/Variables.css";
import { useEffect, useState } from "react";
import { GetCardChallenges } from "../Services/CardApiService";

function BingoCard(card) {
  const { id, name, columns, rows } = card.card;

  const [challengeIds, setChallengeIds] = useState();
  const [challenges, setChallenges] = useState([]);
  const [columnlist, setColumnList] = useState([]);

  useEffect(() => {
    GetMyChallenges();
    // eslint-disable-next-line
  }, [id]);

  async function GetMyChallenges() {
    let chalobj = await GetCardChallenges(id);
    let chalids = [];
    chalobj.map((id) => chalids.push(id.challengeId));
    console.log(chalids);
    setChallengeIds(chalids);
  }

  function HasChallenges() {
    if (challengeIds === undefined || challengeIds.length === 0) {
      console.log("No challenges");
      return false;
    }
    return true;
  }

  function DevideIntoColumns() {
    let col = [];
    let row = [];
    let chal = challengeIds;

    if (!HasChallenges()) return;

    for (let c = 1; c <= columns; c++) {
      FillRow();
      col.push({
        column: `column${c}`,
        rows: { row },
      });
    }

    function FillRow() {
      row = [];

      for (let r = 1; r <= rows; r++) {
        row.push(chal[0]);
        chal.shift(); //removes the first item of the array
      }
    }
  }

  return (
    <div className="bc-main-content" data-testid={`bCard${id}`}>
      <div className="bc-name-header">{name}</div>
      <div className="bc-info">
        <li className="bc-info">Columns: {columns}</li>
        <li className="bc-info">Rows: {rows}</li>
        {/* <table className="bc-challenge-table">
          
        </table> */}
        {challengeIds !== undefined || challengeIds !== [] ? (
          challengeIds.map((cid) => <div key={cid}> id</div>)
        ) : (
          <div>no challenges</div>
        )}
      </div>
    </div>
  );
}

export default BingoCard;
