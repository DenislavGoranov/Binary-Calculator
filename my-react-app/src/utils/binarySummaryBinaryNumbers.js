export default function binarySummaryBinaryNumbers(firstNumberAdditionalCode, secondNumberAdditionalCode, bits) {
    let result = [];
    let prenos = 0;

    for (let i = bits - 1; i >= 0; i--) {
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