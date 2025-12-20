import Header from "./Header";

import useCalcData from "../hooks/useCalcData";
export default function ResultPage() {
    const [calcData] = useCalcData();
    return (
        <div className="page">
            <Header />
        </div>
    );
}