"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node_1 = require("./Node");
it("Will create a new node", function () {
    var node = new Node_1.Node(1, 2);
    expect(node).toBeInstanceOf(Node_1.Node);
    expect(node.x).toBe(1);
    expect(node.y).toBe(2);
});
