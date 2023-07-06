import { ILifeRule } from "../ILifeRule";

export class LessThanTwoNeighbours implements ILifeRule {
  shouldLive = (numberOfNeighbours: number): boolean =>
    numberOfNeighbours >= 2;
  applies = (isAlive: boolean): boolean => isAlive;
}
