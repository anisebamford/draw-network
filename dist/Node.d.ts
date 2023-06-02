export declare class Node {
    protected myX: number;
    protected myY: number;
    get x(): number;
    get y(): number;
    constructor(myX: number, myY: number);
    move(): void;
}
