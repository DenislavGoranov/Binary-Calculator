import Header from "./Header";

import useCalcData from "../hooks/useCalcData";
import binarySummary from "../utils/binarySummary";
import PlusPage from "./operationComponents/PlusPage";
export default function ResultPage() {
    const [calcData] = useCalcData();
    if (calcData.operation == 'plus') {
        console.log(calcData.value1);
        console.log(calcData.value2);
        console.log(binarySummary(calcData.value1, calcData.value2, calcData.bits));
    }

    return (
        <div className="page">
            <Header />

            {calcData.operation === 'plus' ? (
                <PlusPage />
            ) : (
                <div>mistake</div>
            )}
            {calcData.operation === 'multiply' ? (
                <MultiplyPage />
            ) : (
                <div>mistake</div>
            )}
            {calcData.operation === 'divide' ? (
                <DividePage />
            ) : (
                <div>mistake</div>
            )}
        </div>
    );
}