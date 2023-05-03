import { Network } from "./Network";
import { Node } from "./Node";
import { Edge } from "./Edge";

it("Will construct a network", () => {
  const network = new Network<Node, Edge>([], []);
  expect(network).toBeInstanceOf(Network);
});
