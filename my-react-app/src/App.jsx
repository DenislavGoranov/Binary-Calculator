import { Route, Routes } from 'react-router-dom'

import HomePage from './components/HomePage'
import Explanations from './components/Explanations'

import './home.css'

function App() {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/explanations' element={<Explanations />} />
            <Route path='/about' />
        </Routes>

    )
}

export default App
