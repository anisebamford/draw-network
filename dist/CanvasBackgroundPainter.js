"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasBackgroundPainter = void 0;
var CanvasBackgroundPainter = /** @class */ (function () {
    function CanvasBackgroundPainter(ctx, width, height, color) {
        this.ctx = ctx;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    CanvasBackgroundPainter.prototype.resolveColor = function () {
        return typeof this.color === "string" ? this.color : this.color();
    };
    CanvasBackgroundPainter.prototype.paint = function () {
        this.ctx.fillStyle = this.resolveColor();
        this.ctx.fillRect(0, 0, this.width, this.height);
    };
    return CanvasBackgroundPainter;
}());
exports.CanvasBackgroundPainter = CanvasBackgroundPainter;
