function allElementsSame(array) {
  return new Set(array).size === 1;
}

export function evaluateWinner(gridState, rowIndex, columnIndex) {
  function winnerByRow(rowIndex) {
    const rowValues = gridState[rowIndex];
    if (allElementsSame(rowValues) && ["X", "O"].includes(rowValues[0])) {
      return rowValues[0];
    }
  }
  function winnerByColumn(columnIndex) {
    const columnValues = gridState.map((row) => row[columnIndex]);
    if (allElementsSame(columnValues) && ["X", "O"].includes(columnValues[0])) {
      return columnValues[0];
    }
  }
  function winnerByLtoRDiagonal(rowIndex, columnIndex) {
    const triggerIndices = [
      [0, 0],
      [1, 1],
      [2, 2],
    ];
    let leftToRightDiagonalValues = [];
    let clickedCellIsDiagonalElement = false;
    for (let i = 0; i < triggerIndices.length; i++) {
      const [y, x] = triggerIndices[i];
      leftToRightDiagonalValues.push(gridState[x][y]);
      if (y === rowIndex && x === columnIndex) {
        clickedCellIsDiagonalElement = true;
      }
    }
    if (
      clickedCellIsDiagonalElement &&
      allElementsSame(leftToRightDiagonalValues) &&
      ["X", "O"].includes(leftToRightDiagonalValues[0])
    ) {
      return leftToRightDiagonalValues[0];
    }
  }
  function winnerByRtoLDiagonal(rowIndex, columnIndex) {
    const triggerIndices = [
      [0, 2],
      [1, 1],
      [2, 0],
    ];
    let RightToLeftDiagonalValues = [];
    let clickedCellIsDiagonalElement = false;
    for (let i = 0; i < triggerIndices.length; i++) {
      const [y, x] = triggerIndices[i];
      RightToLeftDiagonalValues.push(gridState[x][y]);
      if (y === rowIndex && x === columnIndex) {
        clickedCellIsDiagonalElement = true;
      }
    }
    if (
      clickedCellIsDiagonalElement &&
      allElementsSame(RightToLeftDiagonalValues) &&
      ["X", "O"].includes(RightToLeftDiagonalValues[0])
    ) {
      return RightToLeftDiagonalValues[0];
    }
  }
  return (
    winnerByRow(rowIndex) ||
    winnerByColumn(columnIndex) ||
    winnerByLtoRDiagonal(rowIndex, columnIndex) ||
    winnerByRtoLDiagonal(rowIndex, columnIndex)
  );
}
