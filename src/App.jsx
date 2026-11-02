import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product' 
import Register from './pages/Register'
import Login from './pages/Login'
import Cart from './pages/Cart'
import Navbar from './components/Navbar'
import Footer from './components/Footer'


function App() {

  return (

    <div>

      <Navbar /> 

      <Routes>

        <Route path = "/" element = {<Home />}> </Route>

        <Route path = "/products" element = {<Product />}> </Route> 

        <Route path = "/register" element = {<Register />}> </Route> 

        <Route path = "/login" element = {<Login />}> </Route> 

        <Route path = "/cart" element = {<Cart />}> </Route> 

      </Routes>


      <Footer />  

    </div>
  )
} 



export default App  

// index.html  -> main.jsx -> App.jsx  

// BrowserRouter -> Routes -> Route 
