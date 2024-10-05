import { useState } from "react";
import Player from "./components/Player";
import GameBoard from "./components/GameBoard";

function App() {
  const [p1Name, setP1Name] = useState("Player 1");
  const [p2Name, setP2Name] = useState("Player 2");
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player
            playerName={p1Name}
            playerSymbol="X"
            setPlayerName={setP1Name}
          />
          <Player
            playerName={p2Name}
            playerSymbol="O"
            setPlayerName={setP2Name}
          />
        </ol>
        <GameBoard />
      </div>
    </main>
  );
}

export default App;
