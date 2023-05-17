import { Color } from "./Painter";

export class CanvasBackgroundPainter {
  constructor(
    protected ctx: CanvasRenderingContext2D,
    protected width: number,
    protected height: number,
    protected color: Color
  ) {
  }

  resolveColor() {
    return typeof this.color === "string" ? this.color : this.color()
  }

  paint() {
    this.ctx.fillStyle = this.resolveColor();
    this.ctx.fillRect(0, 0, this.width, this.height);
  }
}
