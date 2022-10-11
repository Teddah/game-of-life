import { Cell } from "./Cell";

describe("Cells in GameOfLife", () => {
  test("A Cells initial livingstatus should be dead/false", () => {
    const cell = new Cell();

    expect(cell.isAlive()).toBeFalsy();
  });

  test("Cell livingStatus should be alive when toggled once", () => {
    const cell = new Cell();

    cell.toggleLivingStatus();

    expect(cell.isAlive()).toBeTruthy();
  });

  test("Cell livingStatus should be dead when toggled twice", () => {
    const cell = new Cell();

    cell.toggleLivingStatus();
    cell.toggleLivingStatus();

    expect(cell.isAlive()).toBeFalsy();
  });
});
