var array = [];
var srcArray = [];
var dstArray = [];

var N_NUMBERS = 5;

function createRandomArray(array) {
    for (var i = 0; i < N_NUMBERS; i++) {
        array[i] = Math.round(Math.random()*50)
    }
}

createRandomArray(array);
createRandomArray(srcArray);
createRandomArray(dstArray);
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

function arrayCopy(src, srcPos, dest, destPos, length) {
    dest.splice(destPos, 0, ...src.slice(srcPos, srcPos + length));
}


var ar = [1, 2, 3, 4, 5]
arrayCopy(ar, 1, ar,2, 3);

console.log(ar.toString())
