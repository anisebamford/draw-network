import {Node} from "./Node";

type Cell = {nodes: Node[]};
type Row = {cells: Cell[]};
type Grid = {
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
  cellWidth: number,
  rows: Row[]
};

export class DistanceCalculator {
  constructor(protected nodes: Node[]) {
  }

  calculateDistance(a: Node, b: Node) {
    return Math.sqrt((a.x - b.x)**2 + (a.y - b.y)**2)
  }

  findMyMaxAndMinNodeValues(): {xMax: number, xMin: number, yMax: number, yMin: number} {
    const xs = this.nodes.map(({x}) => x)
    const ys = this.nodes.map(({y}) => y)
    return {
      xMax: Math.max(...xs),
      xMin: Math.min(...xs),
      yMax: Math.max(...ys),
      yMin: Math.min(...ys),
    }
  }

  createEmptyNodeGrid(granularity: number): Grid {
    const {xMax, xMin, yMax, yMin} = this.findMyMaxAndMinNodeValues()
    const sumOfWidthAndHeight = (xMax - xMin) + (yMax - yMin)
    const cellWidth = sumOfWidthAndHeight / (granularity * 2)
    const grid: Grid = {
      xMax,
      xMin,
      yMax,
      yMin,
      cellWidth,
      rows: []
    };
    let i = yMin;
    do {
      const row: Row = {cells: []};
      let j = xMin;
      do {
        row.cells.push({nodes: []} as Cell);
        j += cellWidth;
      } while (j < xMax)
      grid.rows.push(row);
      i += cellWidth;
    } while(i < yMax)
    return grid
  }

  assignMyNodesToGridCells(grid: Grid) {
    for (const node of this.nodes) {
      
    }
  }
}
