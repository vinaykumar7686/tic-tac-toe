import { useState } from "react";

export default function Player({ playerName, playerSymbol, setPlayerName }) {
  const [isEditMode, setMode] = useState(false);

  function handleClick() {
    setMode((currentMode) => !currentMode);
  }
  function handleChange(eventInfo) {
    setPlayerName(eventInfo.target.value);
  }

  let playerNameField = <span className="player-name">{playerName}</span>;
  if (isEditMode) {
    playerNameField = (
      <input type="text" value={playerName} onChange={handleChange} required />
    );
  }

  return (
    <li>
      <span className="player">
        {playerNameField}
        <span className="player-symbol">{playerSymbol}</span>
        <button onClick={handleClick}>{isEditMode ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
