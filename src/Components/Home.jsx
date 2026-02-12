import React from 'react'
import { 
  Minus,
  MoveDownRight, MoveUpRight, 
  Plus, 
  Radar, Star, 
} from 'lucide-react'


import Button1 from './Button-1'
import TrustedBy from './Trusted'
import Resource from './Resource'
import Product from './Product'
import Pricing from './Pricing'
import FAQ from './FAQ'
import Footer from './Footer'


export default function Home() {
  

  return (
    <div className=' text-white flex flex-col justify-center w-full border-t  border-gray-800'>
        <div className='w-[85%] bg-black  mx-auto border-gray-800 border-x h-full flex flex-col items-center pt-30' id='home'>
          
            <div className='flex gap-2 py-2'>
              <MoveUpRight size={20}/>
              <h1 className=' text-sm'>Trusted by 50,000+ users worldwide</h1>
            </div>
            <div className='text-6xl/normal font-bold text-center py-2 bg-linear-to-r from-white to-gray-300 bg-clip-text text-transparent'>
              <h1>Everthing You Need To</h1>
              <h1><span className='text-[#2eff12]'>Scale</span> Your Agency</h1>
            </div>
          <div className='text-wrap text-center py-2'>
            <p>Explore amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
            <p>do amet sint. Velit officia consequat</p>
          </div>

            <div className='flex gap-5 py-4'>
              <Button1/>
              <button 
              className=' border-2
               rounded-xl flex px-5 py-2 border-blue-200'
                > 
                See How It's Work <MoveDownRight/> </button>
            </div>
            <div className='flex py-3 pb-10'>
              <div className='flex'>
                <Radar  color='red' />
                <div className='flex gap-1 px-2 border-r-2 '>
                  <Star size={20} color='yellow' fill='yellow'/>
                  <Star size={20} color='yellow' fill='yellow'/>
                  <Star size={20} color='yellow' fill='yellow'/>
                  <Star size={20} color='yellow' fill='yellow'/>
                  <Star size={20} color='yellow' fill='yellow'/>
                </div>
              </div>
              <h1 className='pl-2 text-base'>Innovating UI solution 2025 by Prebuiltui</h1>
            </div>
            {/* hero img */}
            <div className='p-5 border-y border-gray-800'>
             <img src='/src/assets/hero-img.png' className='rounded-2xl'/>
            </div>

              {/* horizantal scroll bar */}
              <TrustedBy/>

              {/* Product */}
              <div id='product'>
                <Product/>
              </div>
              <div className=' py-12 w-full'></div>

              {/* Resources */}
              <div id='resource'>
                <Resource/>
              </div>
              <div className=' py-12 w-full'></div> 

              {/* Pricing */}
              <div id='pricing' className='w-full'>
                <Pricing/>
              </div>
              <div className=' py-12 w-full'></div> 

              {/* Question */}
              <div id='about' >
                <FAQ/>
              </div>
              <div className=' py-12 w-full'></div>
              
              {/*  */}
              <div className=' grid md:grid-cols-2 grid-cols-1 gap-3 justify-items-center border-y px-10 py-20 border-gray-800'>
                 <h1 className='text-3xl md:text-left text-center font-semibold px-5 bg-linear-to-r from-white to-gray-400 bg-clip-text text-transparent'>Get clean, modern template for your startup.</h1>
                 <div className='flex justify-center items-center'>
                  <button className='bg-[#34ff19] px-6 py-2 text-black rounded-lg mt-5'>Download Now</button>
                 </div>
              </div>
               <div className=' py-12 w-full'></div>
               {/* footer */}

               <Footer/>
               <div className='border-t border-gray-800 py-8 text-gray-500 w-[117%] text-center'>
                  Copyright 2026 ©PrebuiltUI • Distributed byThemeWagon • All Right Reserved.
               </div>
        </div>
    </div>
  )
}
