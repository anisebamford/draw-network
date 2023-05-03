import { Node } from "./Node";
import { NodePainter, Color } from "./Painter";

export class CanvasDotNodePainter<
  TNode extends Node = Node
> extends NodePainter<TNode> {
  constructor(
    protected fillColor: Color<TNode>,
    protected strokeColor: Color<TNode>,
    protected width: number
  ) {}

  paint(ctx: CanvasRenderingContext2D, node: TNode) {
    ctx.moveTo(node.x - this.width / 2, node.y);
    ctx.fillStyle = this.resolveColor(this.fillColor);
    ctx.strokeStyle = this.resolveColor(this.strokeColor);
    ctx.arc(node.x, node.y, this.width / 2, Math.PI * 2);
    ctx.stroke();
    ctx.fill();
  }
}
