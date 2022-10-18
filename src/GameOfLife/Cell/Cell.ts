import { ILifeRule } from "../Rules/ILifeRule";

export class Cell {
  private livingStatus: boolean;
  private rules: ILifeRule[];

  constructor(rules: ILifeRule[], livingStatus = false) {
    this.livingStatus = livingStatus;
    this.rules = rules;
  }

  isAlive = () => this.livingStatus;
  toggleLivingStatus = () => (this.livingStatus = !this.isAlive());

  next(numberOfNeighbours: number): Cell {
    const shouldLive = this.rules
      .filter((r) => r.applies(this.livingStatus))
      .every((r) => r.shouldLive(numberOfNeighbours));
    return new Cell(this.rules, shouldLive);
  }
}
