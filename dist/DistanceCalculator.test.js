import { DistanceCalculator } from "./DistanceCalculator";
import { Node } from "./Node";
it("Will construct a distance calculator", function () {
    var calculator = new DistanceCalculator([]);
    expect(calculator).toBeInstanceOf(DistanceCalculator);
});
it("Will calculate the distance between nodes", function () {
    var nodes = [new Node(0, 0), new Node(3, 4)];
    var calculator = new DistanceCalculator(nodes);
    expect(calculator.calculateDistance(nodes[1], nodes[0])).toBe(5);
});
it("Will determine its greatest and least x and y values", function () {
    var nodes = [new Node(0, 5), new Node(3, 10), new Node(10, 0)];
    var calculator = new DistanceCalculator(nodes);
    expect(calculator.findMyMaxAndMinNodeValues()).toStrictEqual({
        xMax: 10,
        xMin: 0,
        yMax: 10,
        yMin: 0,
    });
});
it("Will create an empty grid", function () {
    var nodes = [new Node(0, 5), new Node(3, 10), new Node(10, 0)];
    var calculator = new DistanceCalculator(nodes);
    expect(calculator.createEmptyNodeGrid(1)).toStrictEqual({
        xMax: 10,
        xMin: 0,
        yMax: 10,
        yMin: 0,
        cellWidth: 10,
        rows: [
            {
                cells: [
                    {
                        nodes: [],
                    },
                    {
                        nodes: [],
                    },
                ],
            },
            {
                cells: [
                    {
                        nodes: [],
                    },
                    {
                        nodes: [],
                    },
                ],
            },
        ],
    });
});
it("Will determine which cell a node belongs in", function () {
    var nodes = [new Node(1, 1)];
    var grid = {
        xMax: 2,
        xMin: 0,
        yMax: 2,
        yMin: 0,
        cellWidth: 1,
        rows: [
            {
                cells: [
                    {
                        nodes: [],
                    },
                ],
            },
        ],
    };
    var calculator = new DistanceCalculator(nodes);
    expect(calculator.findNodeRowAndColumnInGrid(nodes[0], grid)).toStrictEqual({
        nodeRow: 1,
        nodeColumn: 1,
    });
});
it("Will assign nodes to their grid cells", function () {
    var nodes = [new Node(1, 1), new Node(2, 2), new Node(3, 3)];
    var grid = {
        xMin: 1,
        xMax: 3,
        yMin: 1,
        yMax: 3,
        cellWidth: 1,
        rows: [
            {
                cells: [
                    {
                        nodes: [],
                    },
                    {
                        nodes: [],
                    },
                    {
                        nodes: [],
                    },
                ],
            },
            {
                cells: [
                    {
                        nodes: [],
                    },
                    {
                        nodes: [],
                    },
                    {
                        nodes: [],
                    },
                ],
            },
            {
                cells: [
                    {
                        nodes: [],
                    },
                    {
                        nodes: [],
                    },
                    {
                        nodes: [],
                    },
                ],
            },
        ],
    };
    var calculator = new DistanceCalculator(nodes);
    expect(calculator.assignMyNodesToGridCells(grid)).toStrictEqual({
        xMin: 1,
        yMin: 1,
        xMax: 3,
        yMax: 3,
        cellWidth: 1,
        rows: [
            {
                cells: [
                    {
                        nodes: [nodes[0]],
                    },
                    {
                        nodes: [],
                    },
                    {
                        nodes: [],
                    },
                ],
            },
            {
                cells: [
                    {
                        nodes: [],
                    },
                    {
                        nodes: [nodes[1]],
                    },
                    {
                        nodes: [],
                    },
                ],
            },
            {
                cells: [
                    {
                        nodes: [],
                    },
                    {
                        nodes: [],
                    },
                    {
                        nodes: [nodes[2]],
                    },
                ],
            },
        ],
    });
});
it("Will find the closest nodes in the grid", function () {
    var nodes = [
        new Node(0, 0),
        new Node(0, 1),
        new Node(2, 2),
        new Node(5, 5),
    ];
    var calculator = new DistanceCalculator(nodes);
    var grid = calculator.createEmptyNodeGrid(5);
    calculator.assignMyNodesToGridCells(grid);
    expect(calculator.collectNodesCloseToNodeInGrid(new Node(1, 0), grid)).toStrictEqual([nodes[0], nodes[1]]);
});
it("Will find a number of closest nodes in a node list, excluding itself.", function () {
    var nodes = [
        new Node(1, 0),
        new Node(0, 1),
        new Node(2, 2),
        new Node(5, 5),
    ];
    var calculator = new DistanceCalculator(nodes);
    expect(calculator.findXClosestNodesToNodeInList(new Node(0, 0), nodes, 2)).toStrictEqual([nodes[0], nodes[1]]);
});
it("Will return the nodes closest to a node.", function () {
    var nodes = [
        new Node(1, 0),
        new Node(0, 1),
        new Node(2, 2),
        new Node(5, 5),
    ];
    var calculator = new DistanceCalculator(nodes);
    expect(calculator.findClosestNodes(nodes[2], 4, 2)).toStrictEqual([
        nodes[0],
        nodes[1],
    ]);
});
