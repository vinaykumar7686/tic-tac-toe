import BoardCell from "./BoardCell";

function prepareInitialGameBoardGrid(rows = 3, columns = 3) {
  const grid = [];
  for (let rowIndex = 0; rowIndex < rows; rowIndex++) {
    const aRow = [];
    for (let colIndex = 0; colIndex < columns; colIndex++) {
      aRow.push(null);
    }
    grid.push(aRow);
  }
  return grid;
}

export default function GameBoard() {
  const initialGrid = prepareInitialGameBoardGrid();
  return (
    <ol id="game-board">
      {initialGrid.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((column, columnIndex) => (
            <BoardCell key={columnIndex}></BoardCell>
          ))}
        </ol>
      ))}
    </ol>
  );
}
