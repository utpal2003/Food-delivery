import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'

function App() {


  return (
    <div className='w-[85%] m-auto'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/place-order' element={<Placeorder />} />
      </Routes>
    </div>
  )
}

export default App
