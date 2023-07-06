import React from "react";
import { Cell } from "../Cell/Cell";
import XCell from "./xCell";

interface ColumnInputProps {
  toggleCell: (row: number, col: number) => void;
  cell: Cell;
  row: number;
  column: number;
}

const Column: React.FunctionComponent<ColumnInputProps> = ({
  cell,
  toggleCell,
  row,
  column,
}) => {
  return (
    <div>
      <XCell
        row={row}
        cell={cell}
        column={column}
        toggleCell={toggleCell}
      />
    </div>
  );
};

export default Column;
