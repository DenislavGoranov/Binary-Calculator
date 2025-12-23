import Header from "./Header";
import PlusPage from "./operationComponents/PlusPage";
import MultiplyPage from "./operationComponents/MultiplyPage";
import DividePage from "./operationComponents/DividePage";

export default function ResultPage() {
    return (
        <div className="page">
            <Header />

            <PlusPage />
        </div>
    );
}