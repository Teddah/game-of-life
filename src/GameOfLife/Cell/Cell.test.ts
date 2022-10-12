import { ILifeRule } from "../Rules/ILifeRule";
import { Cell } from "./Cell";

describe("Cells in GameOfLife", () => {
  const rules: Array<ILifeRule> = [];
  test("A Cells initial livingstatus should be dead/false", () => {
    const cell = new Cell(rules);

    expect(cell.isAlive()).toBeFalsy();
  });

  test("Cell livingStatus should be alive when toggled once", () => {
    const cell = new Cell(rules);

    cell.toggleLivingStatus();

    expect(cell.isAlive()).toBeTruthy();
  });

  test("Cell livingStatus should be dead when toggled twice", () => {
    const cell = new Cell(rules);

    cell.toggleLivingStatus();
    cell.toggleLivingStatus();

    expect(cell.isAlive()).toBeFalsy();
  });
});
