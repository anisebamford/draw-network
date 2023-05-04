import { CanvasEdgePainter } from "./CanvasEdgePainter";
import { Edge } from "./Edge";
import { Node } from "./Node";
import { createCanvas } from "canvas";

class ColoredEdge extends Edge {
  public color: string;
}

it("Will paint an edge", () => {
  const canvas = createCanvas(100, 100);
  const ctx = canvas.getContext("2d");

  const edge = new Edge(new Node(0, 0), new Node(100, 100));
  // @ts-ignore
  const edgePainter = new CanvasEdgePainter(ctx, "green", "blue", 10);
  edgePainter.paint(edge);

  expect(canvas.toBuffer()).toMatchImageSnapshot();
});

it("Will paint edges different colors", () => {
  const canvas = createCanvas(100, 100);
  const ctx = canvas.getContext("2d");

  const redEdge = new ColoredEdge(new Node(0, 0), new Node(100, 100));
  redEdge.color = "red";
  const greenEdge = new ColoredEdge(new Node(100, 0), new Node(0, 100));
  greenEdge.color = "green";

  const colorEdge = (edge: ColoredEdge) => edge.color;

  // @ts-ignore
  const edgePainter = new CanvasEdgePainter(ctx, colorEdge, colorEdge, 10);

  edgePainter.paint(redEdge);
  edgePainter.paint(greenEdge);
  expect(canvas.toBuffer()).toMatchImageSnapshot();
});
