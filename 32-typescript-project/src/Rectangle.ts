import Line from "./Line";

export default class Rectangle extends Line {
    constructor(x: number, y: number, width: number, protected height: number) {
        super(x, y, width);
    }

    drow() {
        console.log(`point (x: ${this.x}, y: ${this.y}, width: ${this.length}, height: ${this.height}`)
    }
}{

}