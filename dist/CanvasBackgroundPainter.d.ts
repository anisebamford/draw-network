import { Color } from "./Painter";
export declare class CanvasBackgroundPainter {
    protected ctx: CanvasRenderingContext2D;
    protected width: number;
    protected height: number;
    protected color: Color;
    constructor(ctx: CanvasRenderingContext2D, width: number, height: number, color: Color);
    resolveColor(): string;
    paint(): void;
}
