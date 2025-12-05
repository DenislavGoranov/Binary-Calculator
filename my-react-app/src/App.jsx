import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './home.css'

function App() {

    return (
        <>
            <nav>
                <ul>
                    <li><a href="/binary_sum.html">Calculator</a></li>
                    <li><a href="">Explanations</a></li>
                    <li><a href="">Sources</a></li>
                </ul>
            </nav>

            <h1>Binary Calculator</h1>
            <form method="get" onsubmit="getNumbers(event)">
                <div>
                    <label for="">Value 1</label>
                    <input type="text" name="first" />
                </div>
                <div class="operations">
                    <button><i class="fa-solid fa-plus"></i></button>
                    <button><i class="fa-solid fa-xmark"></i></button>
                    <button><i class="fa-solid fa-divide"></i></button>
                </div>
                <div>
                    <label for="">Value 2</label>
                    <input type="text" name="second" />
                </div>


                <input type="submit" value="Calculate" />
            </form>
        </>
    )
}

export default App
