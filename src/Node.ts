export class Node {
  constructor(protected x: number, protected y: number) {
  }

  static unfreeze(serialized: string) {
    const {x, y} = JSON.parse(serialized)
    return new Node(x, y)
  }

  move(x, y) {
    this.x += x;
    this.y += y;
  }
}

