import { Route, Routes } from 'react-router-dom'

import HomePage from './components/HomePage'
import Explanations from './components/Explanations'
import About from './components/About'
import ResultPage from './components/ResultPage';

import './home.css'

function App() {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/explanations' element={<Explanations />} />
            <Route path='/about' element={<About />} />
            <Route path='/result' element={<ResultPage />} ></Route>
        </Routes>

    )
}

export default App
