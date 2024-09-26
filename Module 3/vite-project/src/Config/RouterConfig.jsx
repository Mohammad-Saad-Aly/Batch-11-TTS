import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home/Home'
import Contact from '../Screens/Contact/Contact'
import About from '../Screens/About/About'
import Navbar from '../Components/Navbar/Navbar'
import Products from '../Screens/Products/Products'
import SingleProduct from '../Screens/SingleProduct/SingleProduct'


function RouterConfig() {
  return (
    <div>
        <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/products' element={<Products/>}/>
            <Route path='/singleProduct/:id' element={<SingleProduct/>}/>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouterConfig