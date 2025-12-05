import Header from "./Header";

export default function HomePage() {
    return (
        <div className="page">
            <Header />

            <h1>Binary Calculator</h1>

            <form method="get">
                <div>
                    <label>Value 1</label>
                    <input type="text" name="first" />
                </div>

                <div className="operations">
                    <label htmlFor="plus">Plus</label>
                    <input type="radio" name="operation" defaultChecked />
                    <label htmlFor="multiply">Multiply</label>
                    <input type="radio" name="operation" />
                    <label htmlFor="divide">Divide</label>
                    <input type="radio" name="operation" />
                </div>

                <div>
                    <label>Value 2</label>
                    <input type="text" name="second" />
                </div>

                <input type="submit" value="Calculate" />
            </form>
        </div>
    );
}