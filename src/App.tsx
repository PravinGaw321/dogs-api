import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import History from './pages/History'
import Cart from './pages/Cart'

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/history' element={<History/>}></Route>
      <Route path='/cart' element={<Cart/>}></Route>
    </Routes>
    
    </>
  )
}

export default App
