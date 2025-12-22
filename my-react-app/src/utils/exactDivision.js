export default function exactDivision(result) {
    let isTrue = 0;
    for (let i = 0; i < result.length; i++) {
        if (result[i] == 1) {
            isTrue = 1;
        }
    }
    return isTrue;
}