import { Node } from "./Node";
export declare class Edge {
    protected myNode1: Node;
    protected myNode2: Node;
    get nodes(): [Node, Node];
    constructor(myNode1: Node, myNode2: Node);
}
