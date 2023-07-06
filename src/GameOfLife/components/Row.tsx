import React from "react";
import { Cell } from "../Cell/Cell";
import Column from "./Column";

interface RowInputProps {
  columns: Cell[];
  toggleCell: (row: number, col: number) => void;
  row: number;
}

const Row: React.FunctionComponent<RowInputProps> = ({
  columns,
  toggleCell,
  row,
}) => {
  return (
    <div>
      {columns.map((cell, i) => (
        <div key={i}>
          <Column
            row={row}
            column={i}
            cell={cell}
            toggleCell={toggleCell}
          />
        </div>
      ))}
    </div>
  );
};

export default Row;
