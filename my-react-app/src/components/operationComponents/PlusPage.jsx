import useCalcData from "../../hooks/useCalcData";
import useShowValues from "../../hooks/useShowValues";
import useSummaryData from "../../hooks/useSummaryData";

import styles from "./PlusPage.module.css"

export default function PlusPage() {
    const [calcData] = useCalcData();

    const result = useSummaryData(calcData.value1, calcData.value2, calcData.bits)
    let firstNum = useShowValues(Math.abs(calcData.value1), calcData.value1, calcData.bits);
    let secondNum = useShowValues(Math.abs(calcData.value2), calcData.value2, calcData.bits);
    let showOriginalNumberResult = calcData.value1 + calcData.value2;
    return (
        <div className="page">
            <h1 className={styles.margin}>{calcData.value1} = {firstNum}</h1>
            <h1>+</h1>
            <h1>{calcData.value2} = {secondNum}</h1>
            <h1>=</h1>
            <h1>{showOriginalNumberResult} = {result}</h1>
        </div>
    );
}