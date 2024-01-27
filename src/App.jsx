import { useState } from "react";
import GameBoard from "./components/GameBoard"
import Player from "./components/Player"
import Log from "./components/Log";
function App() {

  const [activePlayer, setActivePlayer] = useState('X');
  const [gameTurns, setGameTurns] = useState([]);
  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currentPlayer) => currentPlayer === "X" ? "O" : "X");
    setGameTurns(previousTurns => {
      let player = 'X';
      if (previousTurns.length > 0 && previousTurns[0].player === 'X') {
        player = 'O';
      }
      const newTurns = [{ square: { row: rowIndex, col: colIndex }, player: player }, ...previousTurns];
      return newTurns;
    });
  }

  return (
    <main> <center ><h1>React Tic-Tac-Toe</h1> </center>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>
        <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} turns={gameTurns} > </GameBoard>
        <Log turns={gameTurns}></Log>
      </div> </main>
  )
}

export default App
