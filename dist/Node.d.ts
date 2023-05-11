export declare class Node {
    protected myX: number;
    protected myY: number;
    get x(): number;
    get y(): number;
    constructor(myX: number, myY: number);
    static unfreeze(serialized: string): Node;
    freeze(): string;
    move(x: any, y: any): void;
}
