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
exports.CanvasNetworkPainter = void 0;
var Painter_1 = require("./Painter");
var CanvasNetworkPainter = /** @class */ (function (_super) {
    __extends(CanvasNetworkPainter, _super);
    function CanvasNetworkPainter(ctx, nodePainter, edgePainter, backgroundPainter) {
        var _this = _super.call(this) || this;
        _this.ctx = ctx;
        _this.nodePainter = nodePainter;
        _this.edgePainter = edgePainter;
        _this.backgroundPainter = backgroundPainter;
        return _this;
    }
    CanvasNetworkPainter.prototype.paintNodes = function (nodes) {
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            this.nodePainter.paint(node);
        }
    };
    CanvasNetworkPainter.prototype.paintEdges = function (edges) {
        for (var _i = 0, edges_1 = edges; _i < edges_1.length; _i++) {
            var edge = edges_1[_i];
            this.edgePainter.paint(edge);
        }
    };
    CanvasNetworkPainter.prototype.paintBackground = function () {
        if (this.backgroundPainter)
            this.backgroundPainter.paint();
    };
    CanvasNetworkPainter.prototype.paint = function (network) {
        this.paintBackground();
        this.paintEdges(network.edges);
        this.paintNodes(network.nodes);
    };
    return CanvasNetworkPainter;
}(Painter_1.Painter));
exports.CanvasNetworkPainter = CanvasNetworkPainter;
