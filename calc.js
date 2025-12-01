var bit = 10;
var rezultatNakraq = [];
var isTrue;
var firstNumberAdditionalCode = [];
var secondNumberAdditionalCode = [];
var thirdNumberAdditionalCode = [];
// function getNumbers(event) {
//     event.preventDefault();
//     const formData = new FormData(event.target);
//     const numbersData = Object.fromEntries(formData);

//     event.target.reset();
//     num1 = Number(numbersData.first);
//     num2 = Number(numbersData.second);
//     bit = Number(numbersData.third);

//     calculations(num1, num2);
// }

calculations(-223, 23)
function calculations(num1, num2) {
    let firstNumberToUse = Math.abs(num1);
    let secondNumberToUse = Math.abs(num2);
    let num3 = num2 * -1;
    let thirdNumberToUse = Math.abs(num3);

    let [firstNumberStraightCode, firstCountForNormalization] = findStraightCode(firstNumberToUse, num1);
    
    let [secondNumberStraightCode, secondCountForNormalization] = findStraightCode(secondNumberToUse, num2);

    let [thirdNumberStraightCode, thirdCountForNormalization] = findStraightCode(thirdNumberToUse, num3);

    if (num1 < 0) {
        let firstNumberReversedCode =  findReversedCode(firstNumberStraightCode);
        firstNumberAdditionalCode = findAdditionalCode(firstNumberReversedCode)
    } else {
        firstNumberAdditionalCode = firstNumberStraightCode;
    }

    if (num2 < 0) {
        let secondNumberReversedCode = findReversedCode(secondNumberStraightCode);
        secondNumberAdditionalCode = findAdditionalCode(secondNumberReversedCode)
    } else {
        secondNumberAdditionalCode = secondNumberStraightCode;
    }
    
    if (num3 < 0) {
        let thirdNumberReversedCode = findReversedCode(thirdNumberStraightCode);
        thirdNumberAdditionalCode = findAdditionalCode(thirdNumberReversedCode)
    } else {
        thirdNumberAdditionalCode = thirdNumberStraightCode;
    }

    let DmNormalization = normalization(firstNumberAdditionalCode, firstCountForNormalization);
    let DtNormalization = normalization(secondNumberAdditionalCode, secondCountForNormalization);
    let minusDtNormalization = normalization(thirdNumberAdditionalCode, thirdCountForNormalization);
}

function findStraightCode(positiveNumber, originalNumber) {
    let countForNormalization = 0;
    let straightCode = [];
    while (positiveNumber != 0) {
        if (positiveNumber % 2 == 0) {
            straightCode.push(0);
        } else {
            straightCode.push(1);
        }
    
        positiveNumber = Math.floor(positiveNumber / 2);
    }
    
    straightCode.reverse();
    
    while (straightCode.length < bit - 1) {
        straightCode.unshift(0);
        countForNormalization++;
    }

    if (originalNumber > 0) {
        straightCode.unshift(0);
    } else {
        straightCode.unshift(1);
    }
    return [straightCode, countForNormalization];
}

function findReversedCode(straightCode) {
    let reversedCode = [];
    for (let i = 0; i < straightCode.length; i++) {
        if (i == 0) {
            reversedCode[i] = straightCode[i];
            continue;
        }
        if (straightCode[i] == 0) {
            reversedCode[i] = 1;
        } else {
            reversedCode[i] = 0;
        }
    }

    return reversedCode;
}

function findAdditionalCode(reversedCode) {
    let prenos = 1;
    for (let i = bit - 1; i >= 0; i--) {
        if (reversedCode[i] == 0 && prenos == 1) {
            reversedCode[i] = 1;
            break;
        } else if (reversedCode[i] == 1 && prenos == 1) {
            reversedCode[i] = 0;
            prenos = 1;
        } else if (reversedCode[i] == 1 && prenos == 0) {
            reversedCode[i] = 1;
            break;
        }
    }
    return reversedCode;
}

function binarySummary(firstNumberAdditionalCode, secondNumberAdditionalCode) {
    let result = [];
    let prenos = 0;

    for (let i = bit - 1; i >= 0; i--) {
        if (firstNumberAdditionalCode[i] == 1 && secondNumberAdditionalCode[i] == 1) {
            if (prenos == 0) {
                result[i] = 0;
            } else {
                result[i] = 1;
            }
            prenos = 1;
        } else if (firstNumberAdditionalCode[i] == 0 && secondNumberAdditionalCode[i] == 1) {
            if (prenos == 0) {
                result[i] = 1;
                prenos = 0;
            } else {
                result[i] = 0;
                prenos = 1;
            }
        } else if (firstNumberAdditionalCode[i] == 1 && secondNumberAdditionalCode[i] == 0) {
            if (prenos == 0) {
                result[i] = 1;
                prenos = 0;
            } else {
                result[i] = 0;
                prenos = 1;
            }
        } else if (firstNumberAdditionalCode[i] == 0 && secondNumberAdditionalCode[i] == 0) {
            if (prenos == 1) {
                result[i] = 1;
                prenos = 0;
            } else {
                result[i] = 0;
                prenos[i] = 0;
            }
        }
        else {
            result[i] = 0;
            prenos = 0;
        }
    }

    return result;
}

function normalization(code, count) {
    if (count == 0) {
        return code;
    }
    let count2 = count;
    while (count2 != 0) {
        for (let i = 0; i < code.length; i++) {
            code[i] = code[i + 1];
        }
        count2--;
    }
    for (let i = code.length - count; i < code.length; i++) {
        code[i] = 0;
    }
    return code;
}

function whatOperationWeDo(originalNumber, numberForFirstIndex) {
    let operation;
    let numberLookedFor;
    if (originalNumber > 0 && numberForFirstIndex[0] == 0) {
        operation = 1;
        numberLookedFor = 1;
    } else if (originalNumber > 0 && numberForFirstIndex[0] == 1) {
        operation = 0;
        numberLookedFor = 0;
    } else if (originalNumber < 0 && numberForFirstIndex[0] == 0) {
        operation = 0;
        numberLookedFor = 0;
    } else if (originalNumber < 0 && numberForFirstIndex[0] == 1) {
        operation = 1;
        numberLookedFor = 1;
    }
    return [operation, numberLookedFor];
}

function tochnoDelenie(result) {
    let isTrue = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == 1) {
            isTrue == 1;
            return 1;
        } else {
            isTrue = 0;
        }
    }
    return 0;
}