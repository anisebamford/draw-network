import { NodePainter, EdgePainter, Painter } from "./Painter";
import { Node } from "./Node";
import { Edge } from "./Edge";
import { Network } from "./Network";

export class NetworkPainter<
  TNode extends Node,
  TEdge extends Edge
> extends Painter<TNode | TEdge> {
  constructor(
    protected nodePaitner: NodePainter<TNode>,
    protected edgePainter: EdgePainter<TEdge>
  ) {}

  paintNodes(nodes: TNode[]) {
    for (const node of nodes) {
      this.nodePainter.paint(node);
    }
  }

  paintEdges(edges: TEdge[]) {
    for (const edge of edges) {
      this.edgePainter.paint(node);
    }
  }

  paint(network: Network<TNode, TEdge>) {
    this.paintEdges(network.edges);
    this.paintNodes(network.nodes);
  }
}
