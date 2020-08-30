export function getRandomNumber(min, max) {
    if (min > max) {
        [min, max] = [max, min];
    }
    return min + Math.round(Math.random() * (max - min))
}

export function getRandomMatrix(nColumns, nRows, min, max) {
    const numbers = new Array();
    for (let i = 0; i < nRows; i++) {
        numbers.push(new Array())
        for (let j = 0; j < nColumns; j++) {
            numbers[i].push(getRandomNumber(min, max));
        }
    }
    return numbers;
}

// [0,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]

// export function getRandomMatrix() {
//     // const numbers = [[0,1,0,0],[0,1,0,0],[0,1,0,0],[0,0,0,0]];
//
//     var numbers = [
//         [0,1,0,0],
//         [0,1,0,1],
//         [0,1,0,1],
//         [0,0,0,1]
//     ];
//
//         // numbers.push(new Array(0,1,0,0));
//         // numbers.push(new Array(0,1,0,0));
//         // numbers.push(new Array(0,1,0,0));
//         // numbers.push(new Array(0,0,0,0));
//
//     console.log('SUKAARRAY', numbers);
//
//     return numbers;
//
// }