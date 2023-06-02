import { Node } from "./Node";

it("Will create a new node", () => {
  const node = new Node(1, 2);
  expect(node).toBeInstanceOf(Node);
  expect(node.x).toBe(1);
  expect(node.y).toBe(2);
});
