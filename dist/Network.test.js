import { Network } from "./Network";
it("Will construct a network", function () {
    var network = new Network([], []);
    expect(network).toBeInstanceOf(Network);
});
