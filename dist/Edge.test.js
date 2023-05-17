"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Edge_1 = require("./Edge");
var Node_1 = require("./Node");
it("Will construct an edge", function () {
    var node1 = new Node_1.Node(0, 1);
    var node2 = new Node_1.Node(1, 0);
    var edge = new Edge_1.Edge(node1, node2);
    expect(edge.nodes).toStrictEqual([node1, node2]);
});
