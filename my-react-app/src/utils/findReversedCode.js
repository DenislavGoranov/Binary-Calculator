export default function findReversedCode(straightCode) {
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