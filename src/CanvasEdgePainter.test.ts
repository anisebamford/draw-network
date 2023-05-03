import { CanvasEdgePainter } from "./CanvasEdgePainter"
import { Edge } from "./Edge"
import { Node } from "./Node"
import { createCanvas } from "canvas"

it("Will paint an edge", () => {
  const canvas = createCanvas(100, 100)
  const ctx = canvas.getContext("2d")

  const edge = new Edge(new Node( 0, 0), new Node(100, 100))
  // @ts-ignore
  const edgePainter = new CanvasEdgePainter(ctx, "green", "blue", 10)
  edgePainter.paint(edge)

  expect(canvas.toBuffer()).toMatchImageSnapshot()
})
