import {DistanceCalculator} from "./DistanceCalculator"
import {Node} from "./Node"

it("Will construct a distance calculator", () => {
  const calculator = new DistanceCalculator([]);
  expect(calculator).toBeInstanceOf(DistanceCalculator);
})

it("Will calculate the distance between nodes", () => {
  const nodes = [
    new Node(0, 0),
    new Node(3, 4)
  ];

  const calculator = new DistanceCalculator(nodes);
  expect(calculator.calculateDistance(nodes[1], nodes[0])).toBe(5)
})

it("Will determine its greatest and least x and y values", () => {
  const nodes = [
    new Node(0, 5),
    new Node(3, 10),
    new Node(10, 0),
  ];

  const calculator = new DistanceCalculator(nodes);
  expect(calculator.findMyMaxAndMinNodeValues())
    .toStrictEqual({
      xMax: 10,
      xMin: 0,
      yMax: 10,
      yMin: 0,
    })
})

it("Will create an empty grid", () => {
  const nodes = [
    new Node(0, 5),
    new Node(3, 10),
    new Node(10, 0)
  ];

  const calculator = new DistanceCalculator(nodes);

  expect(calculator.createEmptyNodeGrid(1))
    .toStrictEqual({
      xMax: 10,
      xMin: 0,
      yMax: 10,
      yMin: 0,
      cellWidth: 10,
      rows: [
        {
          cells: [
            {
              nodes: []
            }
          ]
        }
      ]})
})

it("Will assign nodes to their grid cells", () => {
  const nodes = [
    new Node(1, 1),
    new Node(2, 2),
    new Node(3, 3),
  ]
  const grid = {
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
            nodes: []
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
            nodes: []
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
            nodes: []
          },
        ],
      },
    ],
  };
  const calculator = new DistanceCalculator(nodes);
  expect(calculator.assignMyNodesToGridCells(grid))
    .toStrictEqual({
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
            nodes: []
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
            nodes: []
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
            nodes: [nodes[2]]
          },
        ],
      },
      ]
    })
})
