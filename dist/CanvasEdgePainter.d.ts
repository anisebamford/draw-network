import { Edge } from "./Edge";
import { EdgePainter, Color } from "./Painter";
export declare class CanvasEdgePainter<TEdge extends Edge = Edge> extends EdgePainter<TEdge> {
    protected ctx: CanvasRenderingContext2D;
    protected fillColor: Color<TEdge>;
    protected strokeColor: Color<TEdge>;
    protected width: number;
    constructor(ctx: CanvasRenderingContext2D, fillColor: Color<TEdge>, strokeColor: Color<TEdge>, width: number);
    paint(edge: TEdge): void;
}
