import findStraightCode from "./findStraightCode.js";
import findReversedCode from "./findReversedCode.js";
import findAdditionalCode from "./findAdditionalCode.js";

export default function binarySummary(num1, num2, bit) {

    let firstNumberAdditionalCode = [];
    let secondNumberAdditionalCode = [];
    let thirdNumberAdditionalCode = [];
    let firstNumberToUse = Math.abs(num1);
    let secondNumberToUse = Math.abs(num2);
    let num3 = num2 * -1;
    let thirdNumberToUse = Math.abs(num3);

    let [firstNumberStraightCode] = findStraightCode(firstNumberToUse, num1, bit);
        
    let [secondNumberStraightCode] = findStraightCode(secondNumberToUse, num2, bit);

    let [thirdNumberStraightCode] = findStraightCode(thirdNumberToUse, num3, bit);

    if (num1 < 0) {
        let firstNumberReversedCode =  findReversedCode(firstNumberStraightCode);
        firstNumberAdditionalCode = findAdditionalCode(firstNumberReversedCode, bit)
    } else {
        firstNumberAdditionalCode = firstNumberStraightCode;
    }

    if (num2 < 0) {
        let secondNumberReversedCode = findReversedCode(secondNumberStraightCode);
        secondNumberAdditionalCode = findAdditionalCode(secondNumberReversedCode, bit)
    } else {
        secondNumberAdditionalCode = secondNumberStraightCode;
    }
        
    if (num3 < 0) {
        let thirdNumberReversedCode = findReversedCode(thirdNumberStraightCode);
        thirdNumberAdditionalCode = findAdditionalCode(thirdNumberReversedCode, bit)
    } else {
        thirdNumberAdditionalCode = thirdNumberStraightCode;
    }

    let result = sum(firstNumberAdditionalCode, secondNumberAdditionalCode, bit);

    return result;
}

function sum(firstNumberAdditionalCode, secondNumberAdditionalCode, bit) {
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
                prenos = 0;
            }
        }
        else {
            result[i] = 0;
            prenos = 0;
        }
    }

    return result;
}
