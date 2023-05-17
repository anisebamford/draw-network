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
exports.EdgePainter = exports.NodePainter = exports.Painter = void 0;
var Painter = /** @class */ (function () {
    function Painter() {
    }
    Painter.prototype.resolveColor = function (color, element) {
        return typeof color === "string" ? color : color(element);
    };
    return Painter;
}());
exports.Painter = Painter;
var NodePainter = /** @class */ (function (_super) {
    __extends(NodePainter, _super);
    function NodePainter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NodePainter.prototype.paint = function (node) { };
    return NodePainter;
}(Painter));
exports.NodePainter = NodePainter;
var EdgePainter = /** @class */ (function (_super) {
    __extends(EdgePainter, _super);
    function EdgePainter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EdgePainter.prototype.paint = function (edge) { };
    return EdgePainter;
}(Painter));
exports.EdgePainter = EdgePainter;
