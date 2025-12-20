import { useState } from "react";

const data = JSON.parse(localStorage.getItem("calcData") || "{}");

export default function useCalcData() {
    const [calcData, setCalcData] = useState(data);

    function saveSetCalcData(data) {
        setCalcData(data);
    }
    return [calcData, saveSetCalcData];
}