// // import {Person} from "./Person";
// // import {Color} from "./Color";
// //
// // let message:string = "10";
// // message = true.toString();
// // let ar = new Array<string>();
// // ar.push('10')
// // let fl: boolean;
// // //fl = new Boolean(false); error
// // fl = false;
// // let un1:unknown;
// // un1 = 4;
// // un1 = "bc";
// // un1 = message;
// // (un1 as string).substr(3);
// // let an1: any = {};
// // //un1.abc = 10;
// // an1.abc = 10;
// // console.log(an1)
// // an1 = "hello";
// // let arr: string[];
// // let arrr:Array<string[]> = [] ;
// // let ar4: any[] = [];
// // arrr.push(["10"]);
// // ar4.push([10]);
// // let tuple1: [string, number];
// // tuple1 = ['1', 2]
// // let [a, b] = tuple1;
// // a = '10';
// // console.log(b);
// //
// // let color:string;
// // color = Color[0];
// // console.log(color);
// //
// // let person: Person;
// // person = new Person(123, 'Moshe');
// // let persons: Person[] = [];
// // persons.push(new Person(100, "Sara"));
// // persons[0].color = Color.GREEN
// // persons[0].display();
// // // console.log(person);
// // // person.display()
// // let abc: string|number;
// // abc = 10;
// // abc = '10';
// // //abc = null;
// // let abcStr = new String("abc");
// // person.display();
//
// // interface searchFunction  {
// //     (a: number) : number;
// // }
//
// interface searchFunction  {
//     (a?: number) : number;
// }
//
// // type searchFunction = (a: number) => number;
//
// let fun1: searchFunction =  (a = 10) => 10;
//
// console.log(fun1());
//
// fun1 = (a: number) => a*10;
// let ar100 = [1,2,3]
// let ar200: ReadonlyArray<number> = ar100;
//
//

import Shape from "./Shape";
import Line from "./Line";
import Rectangle from "./Rectangle";

const shapes: Shape[] = [
    new Line(3,4,20),
    new Line(10,20,40),
    new Rectangle(3,4,30,50)
]

shapes.forEach(s => s.draw());