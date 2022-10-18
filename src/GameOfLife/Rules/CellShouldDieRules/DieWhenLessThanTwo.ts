import { Cell } from "../../Cell/Cell";

export class DieWhenLessThanTwo {
  shouldDie = (cell: Cell, numberOfNeighbours: number) =>
    cell.isAlive() && numberOfNeighbours > 2
      ? cell.toggleLivingStatus()
      : cell.isAlive();
}
