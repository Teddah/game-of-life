import { Cell } from "./Cell/Cell";
import { GameOfLife } from "./GameOfLife";
import { ILifeRule } from "./Rules/ILifeRule";

describe("GameOfLife", () => {
  test("Create a game with cells without rules", () => {
    const columns: number = 2;
    const rows: number = 2;
    const rules: Array<ILifeRule> = [];

    const game = new GameOfLife(columns, rows, rules);
    let numberOfCells = 0;

    game.populateCells();

    game.cells.forEach((column) => {
      column.forEach((row) => {
        if (row instanceof Cell) numberOfCells++;
      });
    });
    expect(numberOfCells).toBe(4);
  });
});
