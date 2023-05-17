"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CanvasEdgePainter = void 0;
var Painter_1 = require("./Painter");
var CanvasEdgePainter = /** @class */ (function (_super) {
    __extends(CanvasEdgePainter, _super);
    function CanvasEdgePainter(ctx, fillColor, strokeColor, width) {
        var _this = _super.call(this) || this;
        _this.ctx = ctx;
        _this.fillColor = fillColor;
        _this.strokeColor = strokeColor;
        _this.width = width;
        return _this;
    }
    CanvasEdgePainter.prototype.paint = function (edge) {
        var _a = edge.nodes, node1 = _a[0], node2 = _a[1];
        this.ctx.beginPath();
        this.ctx.moveTo(node1.x, node1.y);
        this.ctx.lineWidth = this.width;
        this.ctx.fillStyle = this.resolveColor(this.fillColor, edge);
        this.ctx.strokeStyle = this.resolveColor(this.strokeColor, edge);
        this.ctx.lineTo(node2.x, node2.y);
        this.ctx.stroke();
        this.ctx.fill();
    };
    return CanvasEdgePainter;
}(Painter_1.EdgePainter));
exports.CanvasEdgePainter = CanvasEdgePainter;
