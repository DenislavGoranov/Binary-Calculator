import { useState, useEffect } from "react";
import binaryDivision from "../utils/binaryDivision";

export default function useDivisionData(num1, num2, bits) {
    const [result, setResult] = useState(null);
    
    useEffect(() => {
        setResult(binaryDivision(num1, num2, bits));
    }, [num1, num2, bits]);
    
    return result;
}