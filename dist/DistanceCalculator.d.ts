import { Node } from "./Node";
type Cell = {
    nodes: Node[];
};
type Row = {
    cells: Cell[];
};
type Grid = {
    xMin: number;
    xMax: number;
    yMin: number;
    yMax: number;
    cellWidth: number;
    rows: Row[];
};
export declare class DistanceCalculator {
    protected nodes: Node[];
    constructor(nodes: Node[]);
    calculateDistance(a: Node, b: Node): number;
    findMyMaxAndMinNodeValues(): {
        xMax: number;
        xMin: number;
        yMax: number;
        yMin: number;
    };
    createEmptyNodeGrid(granularity: number): Grid;
    findNodeRowAndColumnInGrid(node: Node, grid: Grid): {
        nodeRow: number;
        nodeColumn: number;
    };
    assignMyNodesToGridCells(grid: Grid): Grid;
    collectNodesCloseToNodeInGrid(node: Node, grid: Grid): Node[];
    findXClosestNodesToNodeInList(node: Node, nodeList: Node[], amountToFind: number): Node[];
    findClosestNodes(node: Node, granularity: number, numberToFind: number): Node[];
}
export {};
