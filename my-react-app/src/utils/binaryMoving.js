export default function binaryMoving(code, count) {
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