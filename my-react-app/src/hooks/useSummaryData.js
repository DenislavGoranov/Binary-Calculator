import { useState, useEffect } from "react";
import binarySummary from "../utils/binarySummary";

export default function useSummaryData(num1, num2, bits) {
    const [result, setResult] = useState(null);

    useEffect(() => {
        setResult(binarySummary(num1, num2, bits));
    }, [num1, num2, bits]);

    return result;
}
