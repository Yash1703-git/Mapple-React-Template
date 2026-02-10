import React from 'react'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

export default function App() {
  return (
    <div className='container flex flex-col items-center justify-center w-full bg-black'>
      <Navbar/>
      <Home/>
    </div>
  )
}
