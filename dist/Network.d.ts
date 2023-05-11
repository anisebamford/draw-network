import { Node } from "./Node";
import { Edge } from "./Edge";
export declare class Network<TNode extends Node, TEdge extends Edge> {
    nodes: TNode[];
    edges: TEdge[];
    constructor(nodes: TNode[], edges: TEdge[]);
}
