import { Node } from "./Node";
import { NodePainter, Color } from "./Painter";
export declare class CanvasDotNodePainter<TNode extends Node = Node> extends NodePainter<TNode> {
    protected ctx: CanvasRenderingContext2D;
    protected fillColor: Color<TNode>;
    protected strokeColor: Color<TNode>;
    protected width: number;
    constructor(ctx: CanvasRenderingContext2D, fillColor: Color<TNode>, strokeColor: Color<TNode>, width: number);
    paint(node: TNode): void;
}
