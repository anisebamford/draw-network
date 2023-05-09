import { Edge } from "./Edge";
import { Node } from "./Node";
it("Will construct an edge", function () {
    var node1 = new Node(0, 1);
    var node2 = new Node(1, 0);
    var edge = new Edge(node1, node2);
    expect(edge.nodes).toStrictEqual([node1, node2]);
});
