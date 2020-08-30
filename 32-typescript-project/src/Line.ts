import Point from './Point';

export default
class Line extends Point {

    constructor(x: number, y: number, protected length: number) {
        super(x, y);
    }

    draw() {
        console.log(`point (x: ${this.x}, y: ${this.y}, length: ${this.length}`)
    }
}