import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './assets/FunctionalComponents/Navbar'
import Home from './assets/FunctionalComponents/Home'
import Signup from './assets/FunctionalComponents/Signup'
import Login from './assets/FunctionalComponents/Login'
import Cart from './assets/FunctionalComponents/Cart'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App