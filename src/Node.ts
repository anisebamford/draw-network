export class Node {
  get x() {
    return this.myX;
  }

  get y() {
    return this.myY;
  }

  constructor(protected myX: number, protected myY: number) {
  }

  static unfreeze(serialized: string): Node {
    const {x, y} = JSON.parse(serialized)
    return new Node(x, y)
  }

  freeze(): string {
    return JSON.stringify({x: this.myX, y: this.myY})
  }

  move(x, y): void {
    this.myX += x;
    this.myY += y;
  }
}
