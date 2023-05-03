import { Node } from "./Node";
import { Edge } from "./Edge";

export class Network<TNode extends Node, TEdge extends Edge> {
  constructor(public nodes: TNode[], public edges: TEdge[]) {}
}
