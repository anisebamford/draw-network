import {Node} from "./Node";

export class DistanceCalculator {
  constructor(protected nodes: Node[]) {
  }

  calculateDistance(a: Node, b: Node) {
    return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2)
  }

  findMaxAndMinNodeValues(): {xMax: number, xMin: number, yMax: number, yMin: number} {
    const xs = this.nodes.map(({x}) => x)
    const ys = this.nodes.map(({y}) => y)
    return {
      xMax: Math.max(...xs),
      xMin: Math.min(...xs),
      yMax: Math.max(...ys),
      yMin: Math.min(...ys),
    }
  }

  createNodeGrid(granularity: number) {
  }
}
