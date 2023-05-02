import {Node} from "./Node"

it("Will create a new node", () => {
  const node = new Node(1, 2)
  expect(node).toBeInstanceOf(Node)
})

it("Will unserialize", () => {
  const node = Node.unfreeze(JSON.stringify({x: 1, y: 2}))
  expect(node).toBeInstanceOf(Node)
})
