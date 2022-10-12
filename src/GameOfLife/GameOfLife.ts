import { Cell } from "./Cell/Cell";
import { ILifeRule } from "./Rules/ILifeRule";

export class GameOfLife {
  rows: number;
  columns: number;
  cells: Array<Array<Cell>>;
  rules: Array<ILifeRule>;

  constructor(
    rows: number,
    columns: number,
    rules: Array<ILifeRule>
  ) {
    this.rows = rows;
    this.columns = columns;
    this.cells = [];
    this.rules = rules;
  }

  populateCells = () => {
    for (let i = 0; i < this.rows; i++) {
      this.cells[i] = [];
      for (let j = 0; j < this.columns; j++) {
        this.cells[i][j] = new Cell();
      }
    }
  };
}
