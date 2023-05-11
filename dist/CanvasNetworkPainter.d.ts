import { NodePainter, EdgePainter, Painter } from "./Painter";
import { Node } from "./Node";
import { Edge } from "./Edge";
import { Network } from "./Network";
export declare class CanvasNetworkPainter<TNode extends Node, TEdge extends Edge> extends Painter<TNode | TEdge> {
    protected ctx: CanvasRenderingContext2D;
    protected nodePainter: NodePainter<TNode>;
    protected edgePainter: EdgePainter<TEdge>;
    constructor(ctx: CanvasRenderingContext2D, nodePainter: NodePainter<TNode>, edgePainter: EdgePainter<TEdge>);
    paintNodes(nodes: TNode[]): void;
    paintEdges(edges: TEdge[]): void;
    paint(network: Network<TNode, TEdge>): void;
}
