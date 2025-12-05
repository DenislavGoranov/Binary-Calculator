import { Route, Routes } from 'react-router-dom'

import HomePage from './components/HomePage'

import './home.css'

function App() {

    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/explanations' />
            <Route path='/about' />
        </Routes>

    )
}

export default App
