import React from "react";
import { Cell } from "../Cell/Cell";

interface CellInputProps {
  toggleCell: (row: number, column: number) => void;
  cell: Cell;
  row: number;
  column: number;
}

const XCell: React.FunctionComponent<CellInputProps> = ({
  toggleCell,
  cell,
  row,
  column,
}) => {
  return (
    <div
      onClick={() => toggleCell(row, column)}
      style={{
        height: "20px",
        width: "20px",
        border: "1px solid grey",
        backgroundColor: cell.isAlive() ? "yellow" : "#333",
      }}
    ></div>
  );
};

export default XCell;
