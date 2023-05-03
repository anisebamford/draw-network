import { CanvasDotNodePainter } from "./CanvasDotNodePainter";
import { Node } from "./Node";
import { createCanvas } from "canvas";

it("Will draw a node", () => {
  const canvas = createCanvas(100, 100);
  const ctx = canvas.getContext("2d");

  const node = new Node(50, 50);
  // @ts-ignore
  const nodePainter = new CanvasDotNodePainter(ctx, "green", "blue", 50);
  nodePainter.paint(node);

  expect(canvas.toBuffer()).toMatchImageSnapshot();
});

it("Will draw different colored nodes", () => {
  const canvas = createCanvas(100, 100);
  const ctx = canvas.getContext("2d");

  const node1 = new Node(25, 50);
  const node2 = new Node(75, 50);

  const nodeColor = (node: Node) => node.x < 50 ? "green" : "orange"

  // @ts-ignore
  const nodePainter = new CanvasDotNodePainter(ctx, nodeColor, nodeColor, 15)

  nodePainter.paint(node1)
  nodePainter.paint(node2)

  expect(canvas.toBuffer()).toMatchImageSnapshot();
})
