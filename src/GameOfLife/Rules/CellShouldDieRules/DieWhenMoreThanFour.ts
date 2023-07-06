import { Cell } from "../../Cell/Cell";

export class DieWhenMoreThanFour {
  shouldDie = (cell: Cell, numberOfNeighbours: number): boolean =>
    cell.isAlive() && numberOfNeighbours >= 4
      ? cell.toggleLivingStatus()
      : cell.isAlive();
}
