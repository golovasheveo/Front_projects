import Shape from "./Shape";

export default
abstract class Point implements Shape {
    abstract draw();
    protected constructor(protected x: number, protected y: number) {
    }
}