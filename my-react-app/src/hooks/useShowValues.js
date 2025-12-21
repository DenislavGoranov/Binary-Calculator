import findAdditionalCode from "../utils/findAdditionalCode";
import findReversedCode from "../utils/findReversedCode";
import findStraightCode from "../utils/findStraightCode";

export default function useShowValues(positiveNumber, originalNumber, bits) {
    let [straightCode] = findStraightCode(positiveNumber, originalNumber, bits);
    if (originalNumber >= 0) {
        return [straightCode];
    } else {
        let reversedCode = findReversedCode(straightCode);
        let additionalCode = findAdditionalCode(reversedCode, bits);
        return additionalCode;
    }

}