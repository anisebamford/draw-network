import { Node } from "./Node";

type Cell = { nodes: Node[] };
type Row = { cells: Cell[] };
type Grid = {
  xMin: number;
  xMax: number;
  yMin: number;
  yMax: number;
  cellWidth: number;
  rows: Row[];
};

export class DistanceCalculator {
  constructor(protected nodes: Node[]) {}

  calculateDistance(a: Node, b: Node) {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  }

  findMyMaxAndMinNodeValues(): {
    xMax: number;
    xMin: number;
    yMax: number;
    yMin: number;
  } {
    const xs = this.nodes.map(({ x }) => x);
    const ys = this.nodes.map(({ y }) => y);
    return {
      xMax: Math.max(...xs),
      xMin: Math.min(...xs),
      yMax: Math.max(...ys),
      yMin: Math.min(...ys),
    };
  }

  createEmptyNodeGrid(granularity: number): Grid {
    const { xMax, xMin, yMax, yMin } = this.findMyMaxAndMinNodeValues();
    const sumOfWidthAndHeight = xMax - xMin + (yMax - yMin);
    const cellWidth = sumOfWidthAndHeight / (granularity * 2);
    const grid: Grid = {
      xMax,
      xMin,
      yMax,
      yMin,
      cellWidth,
      rows: [],
    };
    let i = yMin;
    do {
      const row: Row = { cells: [] };
      let j = xMin;
      do {
        row.cells.push({ nodes: [] } as Cell);
        j += cellWidth;
      } while (j <= xMax);
      grid.rows.push(row);
      i += cellWidth;
    } while (i <= yMax);
    return grid;
  }

  findNodeRowAndColumnInGrid(
    node: Node,
    grid: Grid
  ): { nodeRow: number; nodeColumn: number } {
    const nodeRow = Math.floor((node.y - grid.yMin) / grid.cellWidth);
    const nodeColumn = Math.floor((node.x - grid.xMin) / grid.cellWidth);
    return { nodeRow, nodeColumn };
  }

  assignMyNodesToGridCells(grid: Grid): Grid {
    for (const node of this.nodes) {
      const { nodeRow, nodeColumn } = this.findNodeRowAndColumnInGrid(
        node,
        grid
      );
      grid.rows[nodeRow].cells[nodeColumn].nodes.push(node);
    }
    return grid;
  }

  collectNodesCloseToNodeInGrid(node: Node, grid: Grid): Node[] {
    const { nodeRow, nodeColumn } = this.findNodeRowAndColumnInGrid(node, grid);
    const cellsToTry = [
      [nodeRow - 1, nodeColumn - 1],
      [nodeRow - 1, nodeColumn],
      [nodeRow - 1, nodeColumn + 1],
      [nodeRow, nodeColumn - 1],
      [nodeRow, nodeColumn],
      [nodeRow, nodeColumn + 1],
      [nodeRow + 1, nodeColumn - 1],
      [nodeRow + 1, nodeColumn],
      [nodeRow + 1, nodeColumn + 1],
    ];
    const nearbyNodes = [];
    for (const [row, column] of cellsToTry) {
      if (grid.rows[row] && grid.rows[row].cells[column]) {
        nearbyNodes.push(...grid.rows[row].cells[column].nodes);
      }
    }
    return nearbyNodes;
  }

  findXClosestNodesToNodeInList(
    node: Node,
    nodeList: Node[],
    amountToFind: number
  ): Node[] {
    return nodeList
      .filter((n) => n !== node)
      .sort((a, b) => {
        return (
          this.calculateDistance(node, a) - this.calculateDistance(node, b)
        );
      })
      .slice(0, amountToFind);
  }

  findClosestNodes(
    node: Node,
    granularity: number,
    numberToFind: number
  ): Node[] {
    const grid = this.createEmptyNodeGrid(granularity);
    this.assignMyNodesToGridCells(grid);
    const list = this.collectNodesCloseToNodeInGrid(node, grid);
    return this.findXClosestNodesToNodeInList(node, list, numberToFind);
  }
}
