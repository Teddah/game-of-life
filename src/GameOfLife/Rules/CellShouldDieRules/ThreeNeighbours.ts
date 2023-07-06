import { ILifeRule } from "../ILifeRule";

export class ThreeNeighbours implements ILifeRule {
  shouldLive = (numberOfNeighbours: number): boolean =>
    numberOfNeighbours === 3;
  applies = (isAlive: boolean): boolean => !isAlive;
}
