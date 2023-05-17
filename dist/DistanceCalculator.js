"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DistanceCalculator = void 0;
var DistanceCalculator = /** @class */ (function () {
    function DistanceCalculator(nodes) {
        this.nodes = nodes;
    }
    DistanceCalculator.prototype.calculateDistance = function (a, b) {
        return Math.sqrt(Math.pow((a.x - b.x), 2) + Math.pow((a.y - b.y), 2));
    };
    DistanceCalculator.prototype.findMyMaxAndMinNodeValues = function () {
        var xs = this.nodes.map(function (_a) {
            var x = _a.x;
            return x;
        });
        var ys = this.nodes.map(function (_a) {
            var y = _a.y;
            return y;
        });
        return {
            xMax: Math.max.apply(Math, xs),
            xMin: Math.min.apply(Math, xs),
            yMax: Math.max.apply(Math, ys),
            yMin: Math.min.apply(Math, ys),
        };
    };
    DistanceCalculator.prototype.createEmptyNodeGrid = function (granularity) {
        var _a = this.findMyMaxAndMinNodeValues(), xMax = _a.xMax, xMin = _a.xMin, yMax = _a.yMax, yMin = _a.yMin;
        var sumOfWidthAndHeight = xMax - xMin + (yMax - yMin);
        var cellWidth = sumOfWidthAndHeight / (granularity * 2);
        var grid = {
            xMax: xMax,
            xMin: xMin,
            yMax: yMax,
            yMin: yMin,
            cellWidth: cellWidth,
            rows: [],
        };
        var i = yMin;
        do {
            var row = { cells: [] };
            var j = xMin;
            do {
                row.cells.push({ nodes: [] });
                j += cellWidth;
            } while (j <= xMax);
            grid.rows.push(row);
            i += cellWidth;
        } while (i <= yMax);
        return grid;
    };
    DistanceCalculator.prototype.findNodeRowAndColumnInGrid = function (node, grid) {
        var nodeRow = Math.floor((node.y - grid.yMin) / grid.cellWidth);
        var nodeColumn = Math.floor((node.x - grid.xMin) / grid.cellWidth);
        return { nodeRow: nodeRow, nodeColumn: nodeColumn };
    };
    DistanceCalculator.prototype.assignMyNodesToGridCells = function (grid) {
        for (var _i = 0, _a = this.nodes; _i < _a.length; _i++) {
            var node = _a[_i];
            var _b = this.findNodeRowAndColumnInGrid(node, grid), nodeRow = _b.nodeRow, nodeColumn = _b.nodeColumn;
            grid.rows[nodeRow].cells[nodeColumn].nodes.push(node);
        }
        return grid;
    };
    DistanceCalculator.prototype.collectNodesCloseToNodeInGrid = function (node, grid) {
        var _a = this.findNodeRowAndColumnInGrid(node, grid), nodeRow = _a.nodeRow, nodeColumn = _a.nodeColumn;
        var cellsToTry = [
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
        var nearbyNodes = [];
        for (var _i = 0, cellsToTry_1 = cellsToTry; _i < cellsToTry_1.length; _i++) {
            var _b = cellsToTry_1[_i], row = _b[0], column = _b[1];
            if (grid.rows[row] && grid.rows[row].cells[column]) {
                nearbyNodes.push.apply(nearbyNodes, grid.rows[row].cells[column].nodes);
            }
        }
        return nearbyNodes;
    };
    DistanceCalculator.prototype.findXClosestNodesToNodeInList = function (node, nodeList, amountToFind) {
        var _this = this;
        return nodeList
            .filter(function (n) { return n !== node; })
            .sort(function (a, b) {
            return (_this.calculateDistance(node, a) - _this.calculateDistance(node, b));
        })
            .slice(0, amountToFind);
    };
    DistanceCalculator.prototype.findClosestNodes = function (node, granularity, numberToFind) {
        var grid = this.createEmptyNodeGrid(granularity);
        this.assignMyNodesToGridCells(grid);
        var list = this.collectNodesCloseToNodeInGrid(node, grid);
        return this.findXClosestNodesToNodeInList(node, list, numberToFind);
    };
    return DistanceCalculator;
}());
exports.DistanceCalculator = DistanceCalculator;
