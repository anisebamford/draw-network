export class Node {
  get x() {
    return this.myX;
  }

  get y() {
    return this.myY;
  }

  constructor(protected myX: number, protected myY: number) {}

  move(): void {
  }
}
