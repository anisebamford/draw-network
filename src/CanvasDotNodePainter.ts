import { Node } from "./Node";
import { NodePainter, Color } from "./Painter";

export class CanvasDotNodePainter<
  TNode extends Node = Node
> extends NodePainter<TNode> {
  constructor(
    protected ctx: CanvasRenderingContext2D,
    protected fillColor: Color<TNode>,
    protected strokeColor: Color<TNode>,
    protected width: number
  ) {
    super()
  }

  paint(node: TNode) {
    this.ctx.moveTo(node.x - this.width / 2, node.y);
    this.ctx.fillStyle = this.resolveColor(this.fillColor, node);
    this.ctx.strokeStyle = this.resolveColor(this.strokeColor, node);
    this.ctx.arc(node.x, node.y, this.width / 2, 0, Math.PI * 2);
    this.ctx.stroke();
    this.ctx.fill();
  }
}
