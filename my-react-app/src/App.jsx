import './home.css'
function App() {

    return (
        <div className="page">
            <nav>
                <ul>
                    <li><a href="/binary_sum.html">Calculator</a></li>
                    <li><a href="">Explanations</a></li>
                    <li><a href="">Sources</a></li>
                </ul>
            </nav>

            <h1>Binary Calculator</h1>

            <form method="get">
                <div>
                    <label>Value 1</label>
                    <input type="text" name="first" />
                </div>

                <div className="operations">
                    <button><i className="fa-solid fa-plus"></i></button>
                    <button><i className="fa-solid fa-xmark"></i></button>
                    <button><i className="fa-solid fa-divide"></i></button>
                </div>

                <div>
                    <label>Value 2</label>
                    <input type="text" name="second" />
                </div>

                <input type="submit" value="Calculate" />
            </form>
        </div>
    )
}

export default App
