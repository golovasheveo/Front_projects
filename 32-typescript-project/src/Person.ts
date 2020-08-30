import {Color} from "./Color";

export class Person  {

    color?: Color
    constructor(private id: number, private name: string) {

    }
    display() {
        alert(JSON.stringify(this))
    }

}
