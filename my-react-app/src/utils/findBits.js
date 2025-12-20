export default function findBits(num1, num2) {
    localStorage.clear();
    let number1 = Number(num1);
    let number2 = Number(num2);
    let firstNumberToUse = Math.abs(number1);
    let secondNumberToUse = Math.abs(number2);

    let result = number1 + number2;
    let thirdNumberToUse = Math.abs(result);
    
    let firstNumberBits = findStraightCode(firstNumberToUse, number1);
    
    let secondNumberBits = findStraightCode(secondNumberToUse, number2);
    
    let thirdNumberBits = findStraightCode(thirdNumberToUse, result);
    
    if (firstNumberBits >= secondNumberBits && firstNumberBits >= thirdNumberBits) {
        return firstNumberBits;
    } else if (secondNumberBits >= firstNumberBits && secondNumberBits >= thirdNumberBits) {
        return secondNumberBits;
    } else {
        return thirdNumberBits;
    }
}

function findStraightCode(positiveNumber, originalNumber) {
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

    if (originalNumber > 0) {
        straightCode.unshift(0);
    } else {
        straightCode.unshift(1);
    }
    
    return straightCode.length;
}