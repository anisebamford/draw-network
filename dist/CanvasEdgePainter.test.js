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
import { CanvasEdgePainter } from "./CanvasEdgePainter";
import { Edge } from "./Edge";
import { Node } from "./Node";
import { createCanvas } from "canvas";
var ColoredEdge = /** @class */ (function (_super) {
    __extends(ColoredEdge, _super);
    function ColoredEdge() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return ColoredEdge;
}(Edge));
it("Will paint an edge", function () {
    var canvas = createCanvas(100, 100);
    var ctx = canvas.getContext("2d");
    var edge = new Edge(new Node(0, 0), new Node(100, 100));
    // @ts-ignore
    var edgePainter = new CanvasEdgePainter(ctx, "green", "blue", 10);
    edgePainter.paint(edge);
    expect(canvas.toBuffer()).toMatchImageSnapshot();
});
it("Will paint edges different colors", function () {
    var canvas = createCanvas(100, 100);
    var ctx = canvas.getContext("2d");
    var redEdge = new ColoredEdge(new Node(0, 0), new Node(100, 100));
    redEdge.color = "red";
    var greenEdge = new ColoredEdge(new Node(100, 0), new Node(0, 100));
    greenEdge.color = "green";
    var colorEdge = function (edge) { return edge.color; };
    // @ts-ignore
    var edgePainter = new CanvasEdgePainter(ctx, colorEdge, colorEdge, 10);
    edgePainter.paint(redEdge);
    edgePainter.paint(greenEdge);
    expect(canvas.toBuffer()).toMatchImageSnapshot();
});
