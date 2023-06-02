import { Node } from "./Node";
export declare class Edge<TNode extends Node = Node> {
    protected myNode1: TNode;
    protected myNode2: TNode;
    get nodes(): [TNode, TNode];
    constructor(myNode1: TNode, myNode2: TNode);
}
