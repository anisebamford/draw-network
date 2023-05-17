"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasDotNodePainter_1 = require("./CanvasDotNodePainter");
var Node_1 = require("./Node");
var canvas_1 = require("canvas");
it("Will draw a node", function () {
    var canvas = (0, canvas_1.createCanvas)(100, 100);
    var ctx = canvas.getContext("2d");
    var node = new Node_1.Node(50, 50);
    // @ts-ignore
    var nodePainter = new CanvasDotNodePainter_1.CanvasDotNodePainter(ctx, "green", "blue", 50);
    nodePainter.paint(node);
    expect(canvas.toBuffer()).toMatchImageSnapshot();
});
it("Will draw different colored nodes", function () {
    var canvas = (0, canvas_1.createCanvas)(100, 100);
    var ctx = canvas.getContext("2d");
    var node1 = new Node_1.Node(25, 50);
    var node2 = new Node_1.Node(75, 50);
    var nodeColor = function (node) { return (node.x < 50 ? "green" : "orange"); };
    // @ts-ignore
    var nodePainter = new CanvasDotNodePainter_1.CanvasDotNodePainter(ctx, nodeColor, nodeColor, 15);
    nodePainter.paint(node1);
    nodePainter.paint(node2);
    expect(canvas.toBuffer()).toMatchImageSnapshot();
});
