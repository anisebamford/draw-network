import { Node } from "./Node";
import { Edge } from "./Edge";

export type Color<TElement extends Node | Edge> =
  | string
  | ((TElement) => string);

export abstract class Painter<TElement extends Node | Edge> {
  protected strokeColor: Color<TElement>;
  protected fillColor: Color<TElement>;
  protected width: number;

  protected resolveColor(color: Color<TElement>, element: TElement) {
    return typeof color === "string" ? color : color(element);
  }
}

export abstract class NodePainter<
  TNode extends Node = Node
> extends Painter<TNode> {
  paint(ctx: CanvasRenderingContext2D, node: TNode): void {};
}

export abstract class EdgePainter<
  TEdge extends Edge = Edge
> extends Painter<TEdge> {
  paint(ctx: CanvasRenderingContext2D, edge: Edge): void {};
}
