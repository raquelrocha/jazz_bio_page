export function Square({ value, onSquareClick, isWinner}) {
    console.log(value, isWinner)
  return (
    <button className={`square ${isWinner ? "highlight" : ""}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}
