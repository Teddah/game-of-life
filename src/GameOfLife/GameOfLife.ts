import { Cell } from "./Cell/Cell";
import { ILifeRule } from "./Rules/ILifeRule";

export class GameOfLife {
  rows: number;
  columns: number;
  cells: Cell[][];
  rules: ILifeRule[];

  constructor(rows: number, columns: number, rules: ILifeRule[]) {
    this.rows = rows;
    this.columns = columns;
    this.cells = [];
    this.rules = rules;

    this.populateCells();
  }

  toggleLivingStatus = (row: number, column: number) => {
    this.cells[row][column].toggleLivingStatus();
  };

  populateCells = () => {
    for (let x = 0; x < this.rows; x++) {
      this.cells[x] = [];
      for (let y = 0; y < this.columns; y++) {
        this.cells[x][y] = new Cell(this.rules);
      }
    }
  };

  countAliveNeighboursFromPosition = (
    row: number,
    column: number
  ) => {
    const neighbourPositions = [
      [-1, -1],
      [-1, 0],
      [-1, +1],
      [0, -1],
      [0, +1],
      [+1, -1],
      [+1, 0],
      [+1, +1],
    ];
    return neighbourPositions.filter(
      (pos) =>
        this.isWithinGrid(row + pos[0], column + pos[1]) &&
        this.cells[row + pos[0]][column + pos[1]].isAlive()
    ).length;
  };

  computeNextGeneration = () => {
    const nextGeneration: Cell[][] = [];

    for (let row = 0; row < this.rows; row++) {
      nextGeneration[row] = [];
      for (let column = 0; column < this.columns; column++) {
        const newCell = this.getCellForNextGeneration(
          this.countAliveNeighboursFromPosition(row, column),
          this.cells[row][column].isAlive()
        );
        nextGeneration[row][column] = newCell;
      }
    }

    this.cells = nextGeneration;
  };

  private getCellForNextGeneration = (
    numberOfNeighbours: number,
    cellLivingStatus: boolean
  ): Cell => {
    const shouldLiveInNextGeneration = this.rules
      .filter((rule) => rule.applies(cellLivingStatus))
      .every((rule) => rule.shouldLive(numberOfNeighbours));

    return new Cell(this.rules, shouldLiveInNextGeneration);
  };

  private isWithinGrid = (row: number, column: number) =>
    row >= 0 &&
    column >= 0 &&
    row < this.rows &&
    column < this.columns;

  applyRules = (cell: Cell, neighbours: number): Cell => {
    this.shouldDieifLessThenTwo(cell, neighbours);
    this.shouldDieifMoreThanFour(cell, neighbours);
    this.shouldLiveIfTwoOrThree(cell, neighbours);

    return cell;
  };

  shouldDieifLessThenTwo = (cell: Cell, numberOfNeibours: number) => {
    cell.isAlive() && numberOfNeibours < 2
      ? cell.toggleLivingStatus()
      : cell.isAlive();
  };

  shouldDieifMoreThanFour = (
    cell: Cell,
    numberOfNeibours: number
  ) => {
    cell.isAlive() && numberOfNeibours >= 4
      ? cell.toggleLivingStatus()
      : cell.isAlive();
  };

  shouldLiveIfTwoOrThree = (cell: Cell, numberOfNeibours: number) => {
    let hasTwoOrThreeNeighbours: boolean =
      numberOfNeibours === 2 || numberOfNeibours === 3;

    !cell.isAlive() && hasTwoOrThreeNeighbours
      ? cell.toggleLivingStatus()
      : cell.isAlive();
  };
  // applyRules = (cell: Cell, neighbours: number) => {
  //   this.rules.forEach((rule: ILifeRule) => {
  //     cell.isAlive() &&
  //       rule.shouldLive(neighbours) &&
  //       cell.toggleLivingStatus();
  //     !cell.isAlive() &&
  //       rule.shouldLive(neighbours) &&
  //       cell.toggleLivingStatus();
  //   });
  // };
}
