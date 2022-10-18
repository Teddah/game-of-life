import { Cell } from "./Cell/Cell";
import { GameOfLife } from "./GameOfLife";
import { ThreeNeighbours } from "./Rules/CellShouldDieRules/ThreeNeighbours";
import { LessThanTwoNeighbours } from "./Rules/CellShouldLiveRules/LessThanTwoNeighbours";
import { MoreThenThreeNeighbours } from "./Rules/CellShouldLiveRules/MoreThenThreeNeighbours";
import { TwoOrThreeNeighbours } from "./Rules/CellShouldLiveRules/TwoOrThreeNeighbours";
import { ILifeRule } from "./Rules/ILifeRule";

describe("GameOfLife", () => {
  let gameOfLife: GameOfLife;
  let beforeEachRules = [
    new LessThanTwoNeighbours(),
    new TwoOrThreeNeighbours(),
    new ThreeNeighbours(),
    new MoreThenThreeNeighbours(),
  ];
  beforeEach(() => {
    const skipTestName = "Create a game with cells without rules";
    const skipBeforeEach = expect
      .getState()
      .currentTestName.includes(skipTestName);
    if (skipBeforeEach) return;

    gameOfLife = new GameOfLife(4, 5, beforeEachRules);
  });

  test("Create a game with cells without rules", () => {
    const columns: number = 2;
    const rows: number = 2;
    const rules: ILifeRule[] = [];

    const game = new GameOfLife(columns, rows, rules);
    let numberOfCells = 0;

    game.cells.forEach((column: Cell[]) => {
      column.forEach((row: Cell) => {
        if (row instanceof Cell) numberOfCells++;
      });
    });
    expect(numberOfCells).toBe(4);
  });

  test("Should be able to retrieve the livingStatus of a cell", () => {
    const cell = gameOfLife.cells[1][2].isAlive();
    expect(cell).toBe(false);
  });

  test("Should be able to toggle living status of a populated cell", () => {
    console.table(gameOfLife.cells);
    const cell = gameOfLife.cells[1][2];
    cell.toggleLivingStatus();
    expect(cell.isAlive()).toBe(true);
  });

  test("Should count number of living neighbours", () => {
    gameOfLife.toggleLivingStatus(2, 3);
    gameOfLife.toggleLivingStatus(2, 4);
    gameOfLife.toggleLivingStatus(1, 4);
    gameOfLife.toggleLivingStatus(1, 3);
    gameOfLife.toggleLivingStatus(3, 3);

    expect(gameOfLife.countAliveNeighboursFromPosition(2, 3)).toBe(4);
  });

  test("Alive Cell should die when only 1 neighbour", () => {
    gameOfLife.toggleLivingStatus(2, 3);
    gameOfLife.toggleLivingStatus(2, 4);

    const cell = gameOfLife.cells[2][3];
    const numberOfNeighBours =
      gameOfLife.countAliveNeighboursFromPosition(2, 3);

    gameOfLife.applyRules(cell, numberOfNeighBours);
    expect(cell.isAlive()).toBeFalsy();
  });

  test("Alive Cell should live when 2 neighbours", () => {
    gameOfLife.toggleLivingStatus(2, 3);
    gameOfLife.toggleLivingStatus(2, 4);
    gameOfLife.toggleLivingStatus(1, 4);

    const cell = gameOfLife.cells[2][3];
    const numberOfNeighBours =
      gameOfLife.countAliveNeighboursFromPosition(2, 3);

    gameOfLife.applyRules(cell, numberOfNeighBours);
    expect(cell.isAlive()).toBeTruthy();
  });

  test("Alive Cell should live when 3 neighbours", () => {
    gameOfLife.toggleLivingStatus(2, 3);
    gameOfLife.toggleLivingStatus(2, 4);
    gameOfLife.toggleLivingStatus(1, 4);
    gameOfLife.toggleLivingStatus(1, 3);

    const cell = gameOfLife.cells[2][3];
    const numberOfNeighBours =
      gameOfLife.countAliveNeighboursFromPosition(2, 3);

    gameOfLife.applyRules(cell, numberOfNeighBours);
    expect(cell.isAlive()).toBeTruthy();
  });

  test("Alive Cell should die when 4 neighbours", () => {
    gameOfLife.toggleLivingStatus(2, 3);
    gameOfLife.toggleLivingStatus(2, 4);
    gameOfLife.toggleLivingStatus(1, 4);
    gameOfLife.toggleLivingStatus(1, 3);
    gameOfLife.toggleLivingStatus(3, 3);

    const cell = gameOfLife.cells[2][3];
    const numberOfNeighBours =
      gameOfLife.countAliveNeighboursFromPosition(2, 3);

    gameOfLife.applyRules(cell, numberOfNeighBours);
    expect(cell.isAlive()).toBeFalsy();
  });

  test("Dead Cell should live when 3 neighbours", () => {
    gameOfLife.toggleLivingStatus(2, 4);
    gameOfLife.toggleLivingStatus(1, 4);
    gameOfLife.toggleLivingStatus(1, 3);

    const cell = gameOfLife.cells[2][3];
    const numberOfNeighBours =
      gameOfLife.countAliveNeighboursFromPosition(2, 3);
    gameOfLife.applyRules(cell, numberOfNeighBours);
    expect(cell.isAlive()).toBeTruthy();
  });

  test("Compute next generation", () => {
    gameOfLife.toggleLivingStatus(2, 3);
    gameOfLife.toggleLivingStatus(2, 4);
    gameOfLife.toggleLivingStatus(1, 3);

    gameOfLife.computeNextGeneration();

    expect(gameOfLife.cells[2][4].isAlive()).toBe(true);
    expect(gameOfLife.cells[2][3].isAlive()).toBe(false);
    expect(gameOfLife.cells[1][3].isAlive()).toBe(true);
  });
});
