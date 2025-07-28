import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Placeorder from './pages/Placeorder'
import Footer from './component/Footer'
import { useState } from 'react'
import Login from './pages/Login'

function App() {

  const [showlogin, setshowlogin] = useState(false)

  return (
    <>

      {showlogin && <Login setshowlogin={setshowlogin}/>}
      <div className='w-[87%] m-auto'>

        <Navbar setshowlogin={setshowlogin}/>
        <div className='w-[86%] m-auto'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/place-order' element={<Placeorder />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </>

  )
}

export default App
