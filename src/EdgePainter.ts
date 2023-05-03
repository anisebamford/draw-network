import { Edge } from "./Node";
import { EdgePainter, Color } from "./Painter";

export class CanvasEdgePainter<
  TEdge extends Edge = Edge
> extends EdgePainter<TEdge> {
  constructor(
    protected fillColor: Color<TEdge>,
    protected strokeColor: Color<TEdge>,
    protected width: number
  ) {}

  paint(ctx: CanvasRenderingContext2D, edge: TEdge) {
    ctx.moveTo(edge.node1, edge.node1.y);
    ctx.fillStyle = this.resolveColor(this.fillColor);
    ctx.strokeStyle = this.resolveColor(this.strokeColor);
    ctx.lineTo(edge.node2.x, edge.node2.y);
    ctx.stroke();
    ctx.fill();
  }
}
