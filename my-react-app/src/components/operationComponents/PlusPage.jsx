import useCalcData from "../../hooks/useCalcData";
import useShowValues from "../../hooks/useShowValues";
import useSummaryData from "../../hooks/useSummaryData";

export default function PlusPage() {
    const [calcData] = useCalcData();

    const result = useSummaryData(calcData.value1, calcData.value2, calcData.bits)

    let firstNum = useShowValues(Math.abs(calcData.value1), calcData.value1, calcData.bits);
    let secondNum = useShowValues(Math.abs(calcData.value2), calcData.value2, calcData.bits);

    return (
        <div className="page">
            <h1>{firstNum}</h1>
            <h1>+</h1>
            <h1>{secondNum}</h1>
            <h1>=</h1>
            <h1>{result}</h1>
        </div>
    );
}