import "../Styling/BingoCard.css";
import "..//Styling/Variables.css";
import { useEffect, useState } from "react";

function BingoCard(card, challengelist) {
  const { id, name, columns, rows } = card.card;
  const challengeids = challengelist.challengelist;

  const [challenges, setChallenges] = useState([]);
  const [columnlist, setColumnList] = useState([]);

  useEffect(() => {
    DevideIntoColumns();
    // eslint-disable-next-line
  }, []);

  function HasChallenges() {
    if (challengeids === undefined || challengeids.length === 0) {
      console.log("No challenges");
      return false;
    }
    return true;
  }

  function DevideIntoColumns() {
    let col = [];
    let chal = challengeids;
    let row = [];

    console.log("Code reached");
    if (!HasChallenges()) return;

    for (let c = 1; c <= columns; c++) {
      FillRow();
      col.push({
        column: `column${c}`,
        rows: { row },
      });
    }
    console.log(col);

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
        {challengeids.map((id) => (
          <div key={id}> id</div>
        ))}
      </div>
    </div>
  );
}

export default BingoCard;
