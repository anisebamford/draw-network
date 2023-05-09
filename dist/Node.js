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
    Node.unfreeze = function (serialized) {
        var _a = JSON.parse(serialized), x = _a.x, y = _a.y;
        return new Node(x, y);
    };
    Node.prototype.freeze = function () {
        return JSON.stringify({ x: this.myX, y: this.myY });
    };
    Node.prototype.move = function (x, y) {
        this.myX += x;
        this.myY += y;
    };
    return Node;
}());
export { Node };
