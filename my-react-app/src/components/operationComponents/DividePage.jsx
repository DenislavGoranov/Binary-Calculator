import useCalcData from "../../hooks/useCalcData";
import useDivisionData from "../../hooks/useDivisionData";
import useShowValues from "../../hooks/useShowValues";

export default function DividePage() {
    const [calcData] = useCalcData();

    const result = useDivisionData(calcData.value1, calcData.value2, calcData.bits)
    // let firstNum = useShowValues(Math.abs(calcData.value1), calcData.value1, calcData.bits);
    // let secondNum = useShowValues(Math.abs(calcData.value2), calcData.value2, calcData.bits);
    // let showOriginalNumberResult = calcData.value1 + calcData.value2;
    console.log(result);

    return (
        <div className="page">{result}</div>
    );
}