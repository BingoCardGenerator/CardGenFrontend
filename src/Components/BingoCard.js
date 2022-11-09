import "../Styling/BingoCard.css";
import "..//Styling/Variables.css";

function BingoCard(card) {
  const { id, name, columns, rows } = card.card;
  return (
    <div className="bc-main-content" data-testid={`bCard${id}`}>
      <div className="bc-name-header">{name}</div>
      <div className="bc-info">
        <li className="bc-info">Columns: {columns}</li>
        <li className="bc-info">Rows: {rows}</li>
      </div>
    </div>
  );
}

export default BingoCard;
