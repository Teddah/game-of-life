import { ILifeRule } from "../ILifeRule";

export class TwoOrThreeNeighbours implements ILifeRule {
  shouldLive = (numberOfNeighbours: number): boolean =>
    numberOfNeighbours === 2 || numberOfNeighbours === 3;
  applies = (isAlive: boolean): boolean => isAlive;
}
