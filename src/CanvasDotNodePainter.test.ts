import { CanvasDotNodePainter} from "./CanvasDotNodePainter"
import { Node } from "./Node"
import { createCanvas} from "canvas"

it("Will draw a node", () => {
  const canvas = createCanvas(100, 100)
  const ctx = canvas.getContext("2d")

  const node = new Node(50, 50);
  // @ts-ignore
  const nodePainter = new CanvasDotNodePainter(ctx, "green", "blue", 50)
  nodePainter.paint(node)

  expect(canvas.toBuffer()).toMatchImageSnapshot()
})
