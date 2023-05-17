"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Network_1 = require("./Network");
it("Will construct a network", function () {
    var network = new Network_1.Network([], []);
    expect(network).toBeInstanceOf(Network_1.Network);
});
