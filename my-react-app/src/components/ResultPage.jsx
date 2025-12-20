import Header from "./Header";

export default function ResultPage() {
    setTimeout(() => {
        localStorage.clear();
    }, 4000);
    return (
        <div className="page">
            <Header />
        </div>
    );
}