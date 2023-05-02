import { Node } from "./Node";

export class Edge {
  get nodes(): [Node, Node] {
    return [this.myNode1, this.myNode2];
  }

  constructor(protected myNode1: Node, protected myNode2: Node) {}
}
