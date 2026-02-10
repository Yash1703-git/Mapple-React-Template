import React, { useState } from 'react'
import { Atom, Menu, X } from 'lucide-react'
import Button1 from './Button-1'

export default function Navbar() {

  const [open, setOpen] = useState(false)

  return (

    <div className='w-[85%] mx-auto flex justify-between items-center py-4 bg-black  text-white relative'>

      {/* Logo - always visible */}
      <div className='flex gap-2 items-center'>
        <Atom size={40} strokeWidth={2} />
        <h2 className='text-2xl font-semibold'>mapple</h2>
      </div>


      {/* Desktop Menu */}
      <div className='hidden md:flex w-2/3 px-4 justify-between items-center gap-8'>

        <ul className='flex gap-8'>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Product</a></li>
          <li><a href='#'>Resources</a></li>
          <li><a href='#'>Pricing</a></li>
          <li><a href='#'>About</a></li>
        </ul>
        <Button1/>
      </div>


      {/* Mobile Hamburger Button */}
      <div className='md:hidden'>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>

      </div>


      {/* Mobile Menu */}
      {open && (

        <div className='absolute top-full left-0 w-full bg-black flex flex-col items-center gap-6 py-6 md:hidden'>

          <a href='#'>Home</a>
          <a href='#'>Product</a>
          <a href='#'>Resources</a>
          <a href='#'>Pricing</a>
          <a href='#'>About</a>

          <button className='bg-[#15b100] px-5 py-2 rounded-lg'>
            Get Started
          </button>

        </div>

      )}

    </div>

  )
}
