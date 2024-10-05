import { useState } from "react";
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
  const grid = prepareInitialGameBoardGrid();
  const [gridState, setGridState] = useState(grid);
  const [currentPlayer, setCurrentPlayer] = useState("P1");

  function handleCellClicked(rowIndex, columnIndex) {
    gridState[rowIndex][columnIndex] = currentPlayer == "P1" ? "X" : "O";
    setGridState(gridState);
    setCurrentPlayer((player) => {
      return player == "P1" ? "P2" : "P1";
    });
  }

  return (
    <ol id="game-board">
      {gridState.map((row, rowIndex) => (
        <ol key={rowIndex}>
          {row.map((column, columnIndex) => (
            <BoardCell
              key={columnIndex}
              onClick={() => handleCellClicked(rowIndex, columnIndex)}
            >
              {column}
            </BoardCell>
          ))}
        </ol>
      ))}
    </ol>
  );
}
