import Header from "./Header";

export default function ResultPage() {
    const data = JSON.parse(localStorage.getItem("calcData") || "{}");

    console.log(data);

    return (
        <div className="page">
            <Header />
        </div>
    );
}