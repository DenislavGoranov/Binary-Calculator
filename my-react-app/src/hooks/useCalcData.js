import { useState } from "react";


export default function useCalcData() {
    const [calcData, setCalcData] = useState(() => {
        const saved = localStorage.getItem("calcData");
        return saved ? JSON.parse(saved) : {};
    });

    function saveCalcData(data) {
        setCalcData(data);
        localStorage.setItem("calcData", JSON.stringify(data));
    }
    return [calcData, saveCalcData];
}