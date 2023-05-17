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
exports.CanvasDotNodePainter = void 0;
var Painter_1 = require("./Painter");
var CanvasDotNodePainter = /** @class */ (function (_super) {
    __extends(CanvasDotNodePainter, _super);
    function CanvasDotNodePainter(ctx, fillColor, strokeColor, width) {
        var _this = _super.call(this) || this;
        _this.ctx = ctx;
        _this.fillColor = fillColor;
        _this.strokeColor = strokeColor;
        _this.width = width;
        return _this;
    }
    CanvasDotNodePainter.prototype.paint = function (node) {
        this.ctx.beginPath();
        this.ctx.moveTo(node.x - this.width / 2, node.y);
        this.ctx.fillStyle = this.resolveColor(this.fillColor, node);
        this.ctx.strokeStyle = this.resolveColor(this.strokeColor, node);
        this.ctx.arc(node.x, node.y, this.width / 2, 0, Math.PI * 2);
        this.ctx.stroke();
        this.ctx.fill();
    };
    return CanvasDotNodePainter;
}(Painter_1.NodePainter));
exports.CanvasDotNodePainter = CanvasDotNodePainter;
