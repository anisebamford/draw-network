import {CanvasNetworkPainter} from "./CanvasNetworkPainter"
import {CanvasEdgePainter} from "./CanvasEdgePainter"
import {CanvasDotNodePainter} from "./CanvasDotNodePainter"
import {Edge} from "./Edge"
import {Node} from "./Node"
import {Network} from "./Network"
import {createCanvas} from "canvas"

it("Will paint a network", () => {
  const canvas = createCanvas(100, 100)
  const ctx = canvas.getContext("2d")

  const nodeColor = (node: Node) => `hsl(0, 80%, ${node.x}%)`
  const edgeColor = (edge: Edge) => `hsl(180, 80%, 50%)`

  const nodes = [
    new Node(20, 20),
    new Node(80, 20),
    new Node(80, 80),
    new Node(20, 80),
  ];
  const edges = [
    new Edge(nodes[0], nodes[1]),
    new Edge(nodes[1], nodes[2]),
    new Edge(nodes[2], nodes[3]),
    new Edge(nodes[3], nodes[0]),
  ];
  const network = new Network(nodes, edges)

  // @ts-ignore
  const nodePainter = new CanvasDotNodePainter(ctx, nodeColor, nodeColor, 10)
  // @ts-ignore
  const edgePainter = new CanvasEdgePainter(ctx, edgeColor, edgeColor, 3)
  // @ts-ignore
  const networkPainter = new CanvasNetworkPainter(ctx, nodePainter, edgePainter)
  networkPainter.paint(network)

  expect(canvas.toBuffer()).toMatchImageSnapshot()
})
