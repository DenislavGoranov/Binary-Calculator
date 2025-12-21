import useCalcData from "../../hooks/useCalcData";
import useSummaryData from "../../hooks/useSummaryData";

export default function PlusPage() {
    const [calcData] = useCalcData();
    const result = useSummaryData(calcData.value1, calcData.value2, calcData.bits)

    return (
        <div className="page">
            <h1>{calcData.value1}</h1>
            <h1>+</h1>
            <h1>{calcData.value2}</h1>
            <h1>=</h1>
            <h1>{result}</h1>
        </div>
    );
}