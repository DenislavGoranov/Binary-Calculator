import findStraightCode from "./findStraightCode";
import findReversedCode from "./findReversedCode";
import findAdditionalCode from "./findAdditionalCode";
import whatBinaryOperationWeDoing from "./whatBinaryOperationDoing";
import binaryMoving from "./binaryMoving";
import exactDivision from "./exactDivision";
import binarySummaryBinaryNumbers from "./binarySummaryBinaryNumbers";
// BUGS : 44 / -44 = ?
 
export default function binaryDivision(num1, num2, bits) {
    let rezultatNakraq = [];
    let isTrue;
    let firstNumberAdditionalCode = [];
    let secondNumberAdditionalCode = [];
    let thirdNumberAdditionalCode = [];
    let firstNumberToUse = Math.abs(num1);
    let secondNumberToUse = Math.abs(num2);
    let num3 = num2 * -1;
    let thirdNumberToUse = Math.abs(num3);

    let [firstNumberStraightCode, firstCountForNormalization] = findStraightCode(firstNumberToUse, num1, bits);
    
    let [secondNumberStraightCode, secondCountForNormalization] = findStraightCode(secondNumberToUse, num2, bits);
    
    let [thirdNumberStraightCode, thirdCountForNormalization] = findStraightCode(thirdNumberToUse, num3, bits);
    if (num1 < 0) {
        let firstNumberReversedCode =  findReversedCode(firstNumberStraightCode);
        firstNumberAdditionalCode = findAdditionalCode(firstNumberReversedCode, bits)
    } else {
        firstNumberAdditionalCode = firstNumberStraightCode;
    }

    if (num2 < 0) {
        let secondNumberReversedCode = findReversedCode(secondNumberStraightCode);
        secondNumberAdditionalCode = findAdditionalCode(secondNumberReversedCode, bits)
    } else {
        secondNumberAdditionalCode = secondNumberStraightCode;
    }
    
    if (num3 < 0) {
        let thirdNumberReversedCode = findReversedCode(thirdNumberStraightCode);
        thirdNumberAdditionalCode = findAdditionalCode(thirdNumberReversedCode, bits)
    } else {
        thirdNumberAdditionalCode = thirdNumberStraightCode;
    }
    

    let DmNormalization = binaryMoving(firstNumberAdditionalCode, firstCountForNormalization);
    let DtNormalization = binaryMoving(secondNumberAdditionalCode, secondCountForNormalization);
    let minusDtNormalization = binaryMoving(thirdNumberAdditionalCode, thirdCountForNormalization);
    
    const N = secondCountForNormalization - firstCountForNormalization + 1;
    let knownNumbers = bits - N;
    var resultAdditionalCode = [];

    if (num1 / num2 > 0) {
        for (let i = 0; i < knownNumbers; i++) {
            resultAdditionalCode[i] = 0;
        }
    } else {
        for (let i = 0; i < knownNumbers; i++) {
            resultAdditionalCode[i] = 1;
        }
    }

    let searchedNumbers = [];
    let result = [];
    for (let i = 0; i < N; i++) {
        if (i == 0) {
            [operation, numberLookedFor] = whatBinaryOperationWeDoing(num2, DmNormalization);
            if (operation == 1) {
                result = binarySummaryBinaryNumbers(DmNormalization, minusDtNormalization, bits);
            } else {
                result = binarySummaryBinaryNumbers(DmNormalization, DtNormalization, bits);
            }
            var [operation, numberLookedFor] = whatBinaryOperationWeDoing(num2, result);
            searchedNumbers.push(numberLookedFor);
            result = binaryMoving(result, 1);
            
        } else {
            if (operation == 1) {
                result = binarySummaryBinaryNumbers(result, minusDtNormalization, bits);
                [operation, numberLookedFor] = whatBinaryOperationWeDoing(num2, result);
                searchedNumbers.push(numberLookedFor);
                result = binaryMoving(result, 1);
            } else if (operation == 0) {
                result = binarySummaryBinaryNumbers(result, DtNormalization, bits);
                [operation, numberLookedFor] = whatBinaryOperationWeDoing(num2, result);
                searchedNumbers.push(numberLookedFor);
                result = binaryMoving(result, 1);
            }
            isTrue = exactDivision(result);
            if (isTrue == 0) {
                rezultatNakraq = result;
                console.log(rezultatNakraq);
                break;
            }
        }
        rezultatNakraq = result;
    }
    resultAdditionalCode = resultAdditionalCode.concat(searchedNumbers);
    
    let correctionNumbers = [];
    for (let i = 0; i < resultAdditionalCode.length; i++) {
        if (i == resultAdditionalCode.length - 1) {
            correctionNumbers[i] = 1;
        } else {
            correctionNumbers[i] = 0;
        }
    }

    if (num1 > 0 && num2 < 0) {
        resultAdditionalCode = binarySummaryBinaryNumbers(resultAdditionalCode, correctionNumbers, bits);
    } else if (num1 < 0 && num2 > 0) {
        let isEqualToZero = 0;
        for (let i = 0; i < rezultatNakraq.length; i++) {
            if (rezultatNakraq[i] == 1) {
                isEqualToZero = 1;
                break;
            } 
        }
        if (isEqualToZero == 1) {
            resultAdditionalCode = binarySummaryBinaryNumbers(resultAdditionalCode, correctionNumbers, bits);
        }
    } else if (num1 < 0 && num2 < 0) {
        let isEqualToZero = 0;
        for (let i = 0; i < rezultatNakraq.length; i++) {
            if (rezultatNakraq[i] == 1) {
                isEqualToZero = 1;
                break;
            }
        } 
        if (isEqualToZero == 0) {
            resultAdditionalCode = binarySummaryBinaryNumbers(resultAdditionalCode, correctionNumbers, bits);
        }
    }
    
    if (resultAdditionalCode.length < bits) {
        for (let i = resultAdditionalCode.length; i < bits; i++) {
            resultAdditionalCode.push(0);
        }
    }
    if (resultAdditionalCode[0] == 1) {
        let resultReversedCode = findReversedCode(resultAdditionalCode);
        let resultStraightCode = findAdditionalCode(resultReversedCode);
        resultAdditionalCode = resultStraightCode;
    }
    return resultAdditionalCode;
}