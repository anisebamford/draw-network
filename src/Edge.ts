import { Node } from "./Node";

export class Edge<TNode extends Node = Node> {
  get nodes(): [TNode, TNode] {
    return [this.myNode1, this.myNode2];
  }

  constructor(protected myNode1: TNode, protected myNode2: TNode) {}
}
