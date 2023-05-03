import { Edge } from "./Edge";
import { EdgePainter, Color } from "./Painter";

export class CanvasEdgePainter<
  TEdge extends Edge = Edge
> extends EdgePainter<TEdge> {
  constructor(
    protected ctx: CanvasRenderingContext2D,
    protected fillColor: Color<TEdge>,
    protected strokeColor: Color<TEdge>,
    protected width: number
  ) {
    super()
  }

  paint(edge: TEdge) {
    const [node1, node2] = edge.nodes
    this.ctx.moveTo(node1.x, node1.y);
    this.ctx.lineWidth = this.width;
    this.ctx.fillStyle = this.resolveColor(this.fillColor, edge);
    this.ctx.strokeStyle = this.resolveColor(this.strokeColor, edge);
    this.ctx.lineTo(node2.x, node2.y);
    this.ctx.stroke();
    this.ctx.fill();
  }
}
