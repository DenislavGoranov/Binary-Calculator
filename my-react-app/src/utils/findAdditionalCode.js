 export default function findAdditionalCode(reversedCode, bit) {
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