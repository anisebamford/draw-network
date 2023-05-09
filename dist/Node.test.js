import { Node } from "./Node";
it("Will create a new node", function () {
    var node = new Node(1, 2);
    expect(node).toBeInstanceOf(Node);
    expect(node.x).toBe(1);
    expect(node.y).toBe(2);
});
it("Will serialize", function () {
    var node = new Node(1, 2);
    expect(node.freeze()).toBe('{"x":1,"y":2}');
});
it("Will unserialize", function () {
    var node = Node.unfreeze(JSON.stringify({ x: 1, y: 2 }));
    expect(node).toBeInstanceOf(Node);
});
it("Will move", function () {
    var node = new Node(1, 2);
    node.move(1, -1);
    expect(node.x).toBe(2);
    expect(node.y).toBe(1);
});
