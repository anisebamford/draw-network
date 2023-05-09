import { CanvasNetworkPainter } from "./CanvasNetworkPainter";
import { CanvasEdgePainter } from "./CanvasEdgePainter";
import { CanvasDotNodePainter } from "./CanvasDotNodePainter";
import { Edge } from "./Edge";
import { Node } from "./Node";
import { Network } from "./Network";
import { createCanvas } from "canvas";
it("Will paint a network", function () {
    var canvas = createCanvas(100, 100);
    var ctx = canvas.getContext("2d");
    var nodeColor = function (node) { return "hsl(0, 80%, ".concat(node.x, "%)"); };
    var edgeColor = function (edge) { return "hsl(180, 80%, 50%)"; };
    var nodes = [
        new Node(20, 20),
        new Node(80, 20),
        new Node(80, 80),
        new Node(20, 80),
    ];
    var edges = [
        new Edge(nodes[0], nodes[1]),
        new Edge(nodes[1], nodes[2]),
        new Edge(nodes[2], nodes[3]),
        new Edge(nodes[3], nodes[0]),
    ];
    var network = new Network(nodes, edges);
    // @ts-ignore
    var nodePainter = new CanvasDotNodePainter(ctx, nodeColor, nodeColor, 10);
    // @ts-ignore
    var edgePainter = new CanvasEdgePainter(ctx, edgeColor, edgeColor, 3);
    // @ts-ignore
    var networkPainter = new CanvasNetworkPainter(
    // @ts-ignore
    ctx, nodePainter, edgePainter);
    networkPainter.paint(network);
    expect(canvas.toBuffer()).toMatchImageSnapshot();
});
