// var array = [];
// var srcArray = [];
// var dstArray = [];
//
// var N_NUMBERS = 5;
//
// function createRandomArray(array) {
//     for (var i = 0; i < N_NUMBERS; i++) {
//         array[i] = Math.round(Math.random()*50)
//     }
// }
//
// createRandomArray(array);
// createRandomArray(srcArray);
// createRandomArray(dstArray);
//adding
// console.log('-'.repeat(50));
// console.log('Adding operations');
// console.log('array before adding: ', array.toString());;
// //adding at beginning
// array.unshift([1, 2, 3]);
// console.log('array[0][1]=', array[0][1])
// console.log('after adding 1, 2, 3 at beginning ', array);
// // //adding to end
// // array.push(10,20);
// // console.log('after adding 20,30 at end', array);
// // //adding to seredina
// // array.splice(3,0,-10,-20);
// // console.log('after adding -10 -20 at index 3', array);

// iterations

// array.forEach(function (value, index) {
//     console.log(index + '. ' + value);
// })

// console.log('even numbers recived by filter', array.filter(function (value){
//         return value % 2 === 0;
// }
// ).toString())

// console.log('-'.repeat(50));
// console.log('array before ****: ', array.toString());;


// var sum = 0;
// array.forEach(function (value, index) {
//     sum += value;
// })
//
// console.log('sum: ', sum)

// var sum = array.reduce(function (res, value) {
//     return res + value;
// },0)
// console.log('sum: ', sum)

/*
var max = array.reduce(function (max, value) {
    if (value > max) { return value; } else { return max;}
})

console.log('max: ', max)
*/

// console.log('after mapping each number to string with prefix "str"',
//    array.map(function (value) {
//      return 'str' + value;
//  }).toString())
//
// console.log('after flat mapping each number to digits',
//     array.flatMap(function (value) {
//         return value.toString().split('');
//     })
//     )
//
// createRandomArray(array);
// createRandomArray(srcArray);
// createRandomArray(dstArray);
//
// function arrayCopy(src, srcPos, dest, destPos, length )
// {
//     dest.splice(srcPos, length, src.slice(srcPos, srcPos + length));
//     console.log('dest', dest.string());
// }
//
// arrayCopy(srcArray, 2, destPos, destPos,)

// function arrayCopy(src, srcPos, dest, destPos, length) {
//     var inserted = src.splice(srcPos, srcPos + length);
//     if (destPos >= dest.length) {
//         inserted.forEach(function (value, index) {
//             dest[destPos + index] = value;
//         })
//     } else
//     {
//         dest.splice(destPos,0,...inserted);
//     }
//
//     // dest.splice(destPos, 0, ...src.slice(srcPos, srcPos + length));
// }
//
//
// var ar = [1, 2, 3, 4, 5]
// arrayCopy(ar, 1, ar,2, 3);



// 2.	Write function count that returns how many times a given element encountered in a given array

var array = ["abc","lmn","cd","abc","abc"];
var arrayTemp = ["a1","b2","c3","d4"]

function getCountTemp(array,str) {
    count = 0;
    var res = array.reduce(function (a,b,c,d) {
        console.log("iteration:",count++)
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(d);
        return count;
    },0)
    return count;
}

// Function get count

function getCount(array,str) {
    var count = 0;
    var res = array.reduce(function (a,b) {
        if (b===str) ++count;
        return count;
    },0)
    return count;
}

getCountTemp(arrayTemp,"abc")
console.log('------------------------------');
console.log('Initial array: ',array.toString());
console.log("Count: ", getCount(array, "abc"));


/* 3.	Write function ulSurround that surrounds array of strings inside <ul></ul> element.
Example of input array
var strings=["abc","lmn","cd"]
Output array for the above example-
["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]
*/


