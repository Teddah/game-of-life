import { useEffect, useState } from "react";
import { setInterval } from "timers/promises";
import "./App.css";
import { Cell } from "./GameOfLife/Cell/Cell";
import Game from "./GameOfLife/components/GameOfLife";
import Indicator from "./GameOfLife/components/Indicator";
import { GameOfLife } from "./GameOfLife/GameOfLife";
import { ThreeNeighbours } from "./GameOfLife/Rules/CellShouldDieRules/ThreeNeighbours";
import { LessThanTwoNeighbours } from "./GameOfLife/Rules/CellShouldLiveRules/LessThanTwoNeighbours";
import { MoreThenThreeNeighbours } from "./GameOfLife/Rules/CellShouldLiveRules/MoreThenThreeNeighbours";
import { TwoOrThreeNeighbours } from "./GameOfLife/Rules/CellShouldLiveRules/TwoOrThreeNeighbours";

const initialState: GameOfLife = new GameOfLife(40, 20, [
  new LessThanTwoNeighbours(),
  new TwoOrThreeNeighbours(),
  new ThreeNeighbours(),
  new MoreThenThreeNeighbours(),
]);

function App() {
  const [gameState, setGameState] = useState({
    game: initialState,
  });
  const [isRunning, setIsRunning] = useState(false);
  const [iterations, setIterations] = useState(0);

  useEffect(() => {
    if (isRunning) {
      const timer = setTimeout(() => startGame(), 500);
      setIterations((prev) => prev + 1);
      return () => clearTimeout(timer);
    }
  }, [gameState, isRunning]);

  const toggleCell = (row: number, col: number) => {
    setGameState((prev) => {
      prev.game.toggleLivingStatus(row, col);
      return { ...prev };
    });
  };

  const resetGame = () => {
    setGameState({
      game: new GameOfLife(40, 20, [
        new LessThanTwoNeighbours(),
        new TwoOrThreeNeighbours(),
        new ThreeNeighbours(),
        new MoreThenThreeNeighbours(),
      ]),
    });
    setIterations(0);
    setIsRunning(false);
  };

  const stopGame = () => {
    setIsRunning(false);
  };

  const startGame = () => {
    setIsRunning(true);
    setGameState((prev) => {
      prev.game.computeNextGeneration2();
      return { ...prev };
    });
  };

  return (
    <div className="App">
      <h1>Game Of Life</h1>
      <div>
        <Indicator isRunning={isRunning} iterations={iterations} />
        <Game game={gameState.game} toggleCell={toggleCell} />
      </div>
      <div className="buttonContainer">
        <button onClick={resetGame}>Reset</button>
        <button onClick={startGame}>Start</button>
        <button onClick={stopGame}>Stop</button>
      </div>
    </div>
  );
}

export default App;
