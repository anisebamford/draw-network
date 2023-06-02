"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(myX, myY) {
        this.myX = myX;
        this.myY = myY;
    }
    Object.defineProperty(Node.prototype, "x", {
        get: function () {
            return this.myX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Node.prototype, "y", {
        get: function () {
            return this.myY;
        },
        enumerable: false,
        configurable: true
    });
    Node.prototype.move = function () {
    };
    return Node;
}());
exports.Node = Node;
