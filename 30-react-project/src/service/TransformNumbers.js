import {getRandomNumber} from "../utils/random";
import {N_COLUMNS,N_ROWS} from "../config/config";

// function scanForLive(iRow, jColumn, array) {
//     console.log('EnterParam', iRow, jColumn, array)
//
//     let countLiveCells = 0;
//
//     const rawL = N_ROWS;
//     const colL = N_COLUMNS;
//
//     let iCurr = (iRow - 1);
//     let jCur = (jColumn - 1);
//
//     for (let i = 0; i < 3; i++) {
//
//         if(iCurr < 0 || iCurr >= rawL){
//             iCurr++;
//             break;
//         }
//
//         for (let k = 0; k < 3; k++) {
//             if(jCur < 0 || jCur >= colL){
//                 jCur++;
//                 break;
//             }
//             if(array[iCurr][jCur] === 1){
//                 countLiveCells++
//             }
//             jCur++;
//         }
//         jCur = (jColumn - 1);
//         iCurr++;
//     }
//     console.log("countLiveCells", countLiveCells)
//     if (countLiveCells > 2){
//         return 1
//     }else
//         return 0;
// }
//      i ->
// j     0,0,0,0,0
// |     0,0,0,0,0
// V     0,0,x,0,0
//       0,0,0,0,0
//       0,0,0,0,0

//i - 1, i , i + 1
//j-1, j,  j+1




export default class TransformNumbers {
    // constructor(numbers) {
    //     this.numbers = numbers;
    //     console.log('constructor', numbers)
    // }



    getNumbers(numbers) {

        let nArr = JSON.parse(JSON.stringify(numbers));
        console.log('generating', numbers);
        for (let i = 0; i < numbers.length; i++) {
            for (let j = 0; j < numbers[i].length; j++) {
                // this.numbers[i][j] = getRandomNumber(0, 1);
                nArr[i][j] = this.scanForLive(i, j, numbers);
            }
        }
        // numbers = JSON.parse(JSON.stringify(nArr));
        // return numbers;
        return nArr;
    }


    scanForLive(iRow, jColumn, numb) {

        let countLiveCells = 0;

        // const rawL = N_ROWS;
        // const colL = N_COLUMNS;
        const rawL = numb.length;
        const colL = numb[0].length;

        let iCurRaw = (iRow - 1);
        let jCurColumn = (jColumn - 1);

        for (let i = 0; i < 3; i++) {

            if (iCurRaw < 0 || iCurRaw >= rawL) {
                iCurRaw++;
            } else {
                for (let k = 0; k < 3; k++) {
                    if (jCurColumn < 0 || jCurColumn >= colL) {
                        jCurColumn++;
                    } else {
                        let aCUR = numb[iCurRaw][jCurColumn];
                        if (aCUR === 1) {
                            countLiveCells++
                        }
                        jCurColumn++;
                    }
                }
                jCurColumn = (jColumn - 1);
                iCurRaw++;
            }

        }
        if (numb[iRow][jColumn] === 1 && countLiveCells === 3 || countLiveCells === 4) {
            return 1;
        } else if (numb[iRow][jColumn] === 0 && countLiveCells === 3) {
            return 1;
        } else {
            return 0;
        }
    }

}



    //     let countLiveCells = 0;
    //
    //     const rawL = N_ROWS;
    //     const colL = N_COLUMNS;
    //
    //     let iCurr = (iRow - 1);
    //     let jCur = (jColumn - 1);
    //
    //     for (let i = 0; i < 3; i++) {
    //
    //         if(iCurr < 0 || iCurr === rawL){
    //             iCurr++;
    //             break;
    //         }
    //
    //         for (let k = 0; k < 3; k++) {
    //             if(jCur < 0 || jCur === colL){
    //                 jCur++;
    //                 break;
    //             }
    //             if(this.numbers[iCurr][jCur] === 1){
    //                 countLiveCells++
    //             }
    //             jCur++;
    //         }
    //         jCur = (jColumn - 1);
    //         iCurr++;
    //     }
    //     // console.log("countLiveCells", countLiveCells);
    //     if (countLiveCells > 2){
    //         return 1;
    //     }else
    //         return 0;
    // }

