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
  expect(calculator.findMaxAndMinNodeValues())
    .toStrictEqual({
      xMax: 10,
      xMin: 0,
      yMax: 10,
      yMin: 0,
    })
})
