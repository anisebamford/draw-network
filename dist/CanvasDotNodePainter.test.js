import { CanvasDotNodePainter } from "./CanvasDotNodePainter";
import { Node } from "./Node";
import { createCanvas } from "canvas";
it("Will draw a node", function () {
    var canvas = createCanvas(100, 100);
    var ctx = canvas.getContext("2d");
    var node = new Node(50, 50);
    // @ts-ignore
    var nodePainter = new CanvasDotNodePainter(ctx, "green", "blue", 50);
    nodePainter.paint(node);
    expect(canvas.toBuffer()).toMatchImageSnapshot();
});
it("Will draw different colored nodes", function () {
    var canvas = createCanvas(100, 100);
    var ctx = canvas.getContext("2d");
    var node1 = new Node(25, 50);
    var node2 = new Node(75, 50);
    var nodeColor = function (node) { return (node.x < 50 ? "green" : "orange"); };
    // @ts-ignore
    var nodePainter = new CanvasDotNodePainter(ctx, nodeColor, nodeColor, 15);
    nodePainter.paint(node1);
    nodePainter.paint(node2);
    expect(canvas.toBuffer()).toMatchImageSnapshot();
});
