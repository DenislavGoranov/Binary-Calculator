export default function findBits(num1, num2) {
    let firstNumberToUse = Math.abs(num1);
    let secondNumberToUse = Math.abs(num2);

    let firstNumberBits = findStraightCode(firstNumberToUse, num1);
    
    let secondNumberBits = findStraightCode(secondNumberToUse, num2);

    if (firstNumberBits >= secondNumberBits) return firstNumberBits;

    return secondNumberBits;
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