import React from 'react'
import workImg1 from "../assets/Resources/imgi_4_work-img-1.png"
import workImg2 from "../assets/Resources/imgi_5_work-img-2.png"
import workImg3 from "../assets/Resources/imgi_6_work-img-3.png"
import workImg4 from "../assets/Resources/imgi_7_work-img-4.png"
import workImg5 from "../assets/Resources/imgi_8_work-img-5.png"
import workImg6 from "../assets/Resources/imgi_9_work-img-6.png"
import { MousePointerClick } from 'lucide-react'


export default function Resource() {
    const data = [
        {   logo:workImg1,  text:"AI-Powered ChatBot" },
        {   logo:workImg2,  text:"AI-Powered E-Commerce" },
        {   logo:workImg3,  text:"AI-Powered Landingpage" },
        {   logo:workImg4,  text:"AI-Powered Product Page" },
        {   logo:workImg5,  text:"AI-Powered Email Marketing" },
        {   logo:workImg6,  text:"AI-Powered Video Production" }
    ]
    
  return (
    <div className='border-y border-gray-800 py-5 w-full'>
        <div className='py-15 text-center'>
            <h1 className='text-4xl/loose font-semibold'>Our Latest Work.</h1>
            <p>Discover how our platform empowers you to build, deploy, and</p> 
            <p>manage intelligent AI agents with ease.</p>
        </div>
        {/* grid photo */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full p-4'>
            {
                data.map((data,idx)=>
                {
                    return(
                        <div key={idx} className='relative group overflow-hidden rounded-xl'  >
                            {/* imges */}
                            <img src={data.logo} className='h-full w-full object-cover'/>

                            {/* button  */}
                            <div className='absolute bottom-[-25] left-0 w-full flex justify-center transition-all duration-300 group-hover:bottom-4'>
                                <div className='bg-white text-black py-1.5 px-4 w-90 rounded-xl flex justify-between items-center'>
                                    <p className='font-semibold '>{data.text}</p>
                                    <button className='bg-[#34ff19] rounded-full p-1'><MousePointerClick /></button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    </div>    
  )
}
