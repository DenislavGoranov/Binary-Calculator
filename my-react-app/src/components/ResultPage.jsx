import Header from "./Header";

export default function ResultPage() {
    const value1 = localStorage.getItem("value1");
    const vlaue2 = localStorage.getItem("value2");
    const operation = localStorage.getItem("operation");
    const bits = localStorage.getItem("bits");

    const data = {
        value1: Number(localStorage.getItem("value1")),
        value2: Number(localStorage.getItem("value2")),
        operation: localStorage.getItem("operation"),
        bits: localStorage.getItem("bits"),
    }

    console.log(data);

    return (
        <div className="page">
            <Header />
        </div>
    );
}