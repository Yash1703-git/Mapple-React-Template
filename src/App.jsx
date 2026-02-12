import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import Product from './Components/Product'
import Pricing from './Components/Pricing'
import Resource from './Components/Resource'
import Footer from './Components/Footer'

import { Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <div className='container flex flex-col items-center justify-center w-full bg-black'>
      <Navbar/>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/product' element ={<Product/>}/>
        <Route path='/Resoures' element ={<Resource/>}/>
        <Route path='/Pricing' element ={<Pricing/>}/>
        <Route path='/About' element ={<Footer/>}/>
      </Routes>
    </div>
  )
}
