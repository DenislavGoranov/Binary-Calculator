export default function findStraightCode(positiveNumber, originalNumber, bits) {
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
    
    while (straightCode.length < bits - 1) {
        straightCode.unshift(0);
        countForNormalization++;
    }

    if (originalNumber > 0) {
        straightCode.unshift(0);
    } else if (originalNumber < 0){
        straightCode.unshift(1);
    }
    return [straightCode, countForNormalization];
}