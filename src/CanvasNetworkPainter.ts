import { NodePainter, EdgePainter, Painter } from "./Painter";
import { CanvasBackgroundPainter } from "./CanvasBackgroundPainter";
import { Node } from "./Node";
import { Edge } from "./Edge";
import { Network } from "./Network";

export class CanvasNetworkPainter<
  TNode extends Node,
  TEdge extends Edge
> extends Painter<TNode | TEdge> {
  constructor(
    protected ctx: CanvasRenderingContext2D,
    protected nodePainter: NodePainter<TNode>,
    protected edgePainter: EdgePainter<TEdge>,
    protected backgroundPainter?: CanvasBackgroundPainter
  ) {
    super();
  }

  paintNodes(nodes: TNode[]) {
    for (const node of nodes) {
      this.nodePainter.paint(node);
    }
  }

  paintEdges(edges: TEdge[]) {
    for (const edge of edges) {
      this.edgePainter.paint(edge);
    }
  }

  paintBackground() {
    if (this.backgroundPainter) this.backgroundPainter.paint();
  }

  paint(network: Network<TNode, TEdge>) {
    this.paintBackground();
    this.paintEdges(network.edges);
    this.paintNodes(network.nodes);
  }
}
