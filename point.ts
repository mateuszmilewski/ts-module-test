export class Point {
    constructor(private x?: number, private y?: number) {}
    getX() {
        return this.x;
    }

    getY() {
        return this.y;
    }

    simpleDraw() {
        console.log("I'm to lazy to write real implementation... so I'm just giving you x= " + this.x + " and y= " + this.y);
    }
}