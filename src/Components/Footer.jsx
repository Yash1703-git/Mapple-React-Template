import React from 'react'
import logo from "./../assets/logo-mark.svg"

export default function Footer() {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 border-t border-gray-800 w-full'>
      <div className='p-8 md:p-14  grid gap-12 md:grid-cols-2'>
        <div className=''>
            <img src={logo} width={30} height={30}></img>
            <p className='mt-6 text-sm/7 max-w-sm text-gray-500'>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
            </p>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-2 gap-8'>
            <div className=''>
                <h4 className='font-urbanist text-lg/8 font-semibold'>Product</h4>
                <ul className='mt-3'>
                    <li className='text-sm/7 text-gray-500'>
                        <a href='' className='hover:underline'>
                            About
                        </a>
                    </li>
                     <li className='text-sm/7 text-gray-500'>
                        <a href='' className='hover:underline'>
                            Features
                        </a>
                    </li>
                     <li className='text-sm/7 text-gray-500'>
                        <a href='' className='hover:underline'>
                            Pricing
                        </a>
                    </li>
                     <li className='text-sm/7 text-gray-500'>
                        <a href='' className='hover:underline'>
                            Doc
                        </a>
                    </li>
                </ul>
            </div>
            <div className=''>
                <h4 className='font-urbanist text-lg/8 font-semibold'>Product</h4>
                <ul className='mt-3'>
                    <li className='text-sm/7 text-gray-500'>
                        <a href='' className='hover:underline'>
                            About
                        </a>
                    </li>
                     <li className='text-sm/7 text-gray-500'>
                        <a href='' className='hover:underline'>
                            Features
                        </a>
                    </li>
                     <li className='text-sm/7 text-gray-500'>
                        <a href='' className='hover:underline'>
                            Pricing
                        </a>
                    </li>
                     <li className='text-sm/7 text-gray-500'>
                        <a href='' className='hover:underline'>
                            Doc
                        </a>
                    </li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
