import React from "react";
import { GameOfLife } from "../GameOfLife";
import Row from "./Row";

interface GameOfLifeInputProps {
  game: GameOfLife;
  toggleCell: (row: number, col: number) => void;
}

const Game: React.FunctionComponent<GameOfLifeInputProps> = ({
  game,
  toggleCell,
}) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {game.cells.map((columns, i) => (
        <div key={i}>
          <Row row={i} columns={columns} toggleCell={toggleCell} />
        </div>
      ))}
    </div>
  );
};

export default Game;
