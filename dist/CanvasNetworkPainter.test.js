"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CanvasNetworkPainter_1 = require("./CanvasNetworkPainter");
var CanvasEdgePainter_1 = require("./CanvasEdgePainter");
var CanvasDotNodePainter_1 = require("./CanvasDotNodePainter");
var Edge_1 = require("./Edge");
var Node_1 = require("./Node");
var Network_1 = require("./Network");
var canvas_1 = require("canvas");
it("Will paint a network", function () {
    var canvas = (0, canvas_1.createCanvas)(100, 100);
    var ctx = canvas.getContext("2d");
    var nodeColor = function (node) { return "hsl(0, 80%, ".concat(node.x, "%)"); };
    var edgeColor = function (edge) { return "hsl(180, 80%, 50%)"; };
    var nodes = [
        new Node_1.Node(20, 20),
        new Node_1.Node(80, 20),
        new Node_1.Node(80, 80),
        new Node_1.Node(20, 80),
    ];
    var edges = [
        new Edge_1.Edge(nodes[0], nodes[1]),
        new Edge_1.Edge(nodes[1], nodes[2]),
        new Edge_1.Edge(nodes[2], nodes[3]),
        new Edge_1.Edge(nodes[3], nodes[0]),
    ];
    var network = new Network_1.Network(nodes, edges);
    // @ts-ignore
    var nodePainter = new CanvasDotNodePainter_1.CanvasDotNodePainter(ctx, nodeColor, nodeColor, 10);
    // @ts-ignore
    var edgePainter = new CanvasEdgePainter_1.CanvasEdgePainter(ctx, edgeColor, edgeColor, 3);
    // @ts-ignore
    var networkPainter = new CanvasNetworkPainter_1.CanvasNetworkPainter(
    // @ts-ignore
    ctx, nodePainter, edgePainter);
    networkPainter.paint(network);
    expect(canvas.toBuffer()).toMatchImageSnapshot();
});
