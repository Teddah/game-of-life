export class Cell {
  private livingStatus: boolean;

  constructor() {
    this.livingStatus = false;
  }

  isAlive = () => this.livingStatus;
  toggleLivingStatus = () => (this.livingStatus = !this.isAlive());
}
