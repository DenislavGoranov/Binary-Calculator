export default function whatBinaryOperationWeDoing(originalNumber, numberForFirstIndex) {
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