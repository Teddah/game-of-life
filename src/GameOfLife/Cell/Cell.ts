import { ILifeRule } from "../Rules/ILifeRule";

export class Cell {
  private livingStatus: boolean;
  private rules: Array<ILifeRule>;

  constructor(rules: Array<ILifeRule>) {
    this.livingStatus = false;
    this.rules = rules;
  }

  isAlive = () => this.livingStatus;
  toggleLivingStatus = () => (this.livingStatus = !this.isAlive());
}
