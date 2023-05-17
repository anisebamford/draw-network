"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Edge = void 0;
var Edge = /** @class */ (function () {
    function Edge(myNode1, myNode2) {
        this.myNode1 = myNode1;
        this.myNode2 = myNode2;
    }
    Object.defineProperty(Edge.prototype, "nodes", {
        get: function () {
            return [this.myNode1, this.myNode2];
        },
        enumerable: false,
        configurable: true
    });
    return Edge;
}());
exports.Edge = Edge;
