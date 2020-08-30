export function getNumbers(numbers: number[][]) {
    let nArr: number[][] = JSON.parse(JSON.stringify(numbers));
    console.log('generating', numbers);
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers[i].length; j++) {
            // this.numbers[i][j] = getRandomNumber(0, 1);
            nArr[i][j] = scanForLive(i, j, numbers);
        }
    }
    return nArr;
}
export function  scanForLive(iRow: number, jColumn: number, numb: number[][]) {
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