export interface ILifeRule {
  shouldLive(numberOfNeighbours: number): boolean;
  applies(isAlive: boolean): boolean;
}
