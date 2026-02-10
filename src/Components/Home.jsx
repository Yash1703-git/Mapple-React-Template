import React from 'react'
import { 
  MoveDownRight, MoveUpRight, 
  Radar, Star, 
  HatGlasses,
  Workflow,
  Plug,
  ShieldCheck,
  ChartNoAxesColumnDecreasing,
  Cpu
} from 'lucide-react'
import Button1 from './Button-1'
import TrustedBy from './Trusted'
import Resource from './Resource'

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
            <div className=' text-wrap text-center py-2 '>
              <p>Explore amet minim mollit non deserunt ullamco est sit aliqua dolor 
                <p>do amet sint. Velit officia consequat</p>
              </p>
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
              <div className=' py-20 w-full text-center border-t border-gray-800' id="about">
                  <h2 className='text-4xl font-bold mb-3'>What We Offer </h2>
                  <p>Explore amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
                  <p>do amet sint. Velit officia consequat.</p>
              </div>
              {/* grid  */}
              <div className='grid grid-cols-1 md:grid-cols-3 w-full'>

                {/* Item 1 */}
                <div className='md:border-y border-y border-gray-800  px-8 py-10'>
                  <button className='p-3 rounded-lg bg-[#15B100]'>
                    <HatGlasses strokeWidth={2} />
                  </button>
                  <div className='my-4 text-xl font-semibold'>AI Agent Builder</div>
                  <div className='text-base text-gray-400'>
                    Design intelligent agents with modular logic, memory and tools - no complex setup required.
                  </div>
                </div>

                {/* Item 2 */}
                <div className='md:border  border-gray-800 px-8 py-10'>
                  <button className="p-3 rounded-lg bg-[#15B100]">
                    <Workflow strokeWidth={1.25} />
                  </button> 
                  <div className='my-4 text-xl font-semibold'>Workflow Orchestration</div>
                  <div className='text-base text-gray-400'>
                    Chain actions, triggers and decisions to automate multi-step workflows reliably.
                  </div>
                </div>

                {/* Item 3 */}
                <div className='md:border-y border-y border-gray-800 px-8 py-10'>
                  <button className="p-3 rounded-lg bg-[#15B100]">
                    <Plug strokeWidth={1.25} />
                  </button> 
                  <div className='my-4 text-xl font-semibold'>Plug & Play Integrations</div>
                  <div className='text-base text-gray-400'>
                    Connect APIs, databases and third-party tools seamlessly with built-in connectors.
                  </div>
                </div>

                {/* Item 4 */}
                <div className='md:border-b border-gray-800 px-8 py-10'>
                  <button className="p-3 rounded-lg bg-[#15B100]">
                    <ShieldCheck strokeWidth={2} />
                  </button> 
                  <div className='my-4 text-xl font-semibold'>Production-Ready Security</div>
                  <div className='text-base text-gray-400'>
                    Built-in safeguards, rate limits and isolation to run agents safely at scale.
                  </div>
                </div>

                {/* Item 5 */}
                <div className='md:border border-y  border-gray-800 px-8 py-10'>
                  <button className="p-3 rounded-lg bg-[#15B100]">
                    <ChartNoAxesColumnDecreasing strokeWidth={2} />
                  </button> 
                  <div className='my-4 text-xl font-semibold'>Real-Time Monitoring</div>
                  <div className='text-base text-gray-400'>
                    Track executions, logs and performance metrics in real time.
                  </div>
                </div>

                {/* Item 6 */}
                <div className='md:border-b border-gray-800 px-8 py-10'>
                  <button className="p-3 rounded-lg bg-[#15B100]">
                    <Cpu strokeWidth={2} />
                  </button> 
                  <div className='my-4 text-xl font-semibold'>Scalable Infrastructure</div>
                  <div className='text-base text-gray-400'>
                    Run agents efficiently across workloads with automatic scaling.
                  </div>
                </div>
              </div>

              <div className=' py-12 w-full'></div>
              {/* Resources */}
              <Resource/>
              <div className=' py-12 w-full'></div> 
        </div>
    </div>
  )
}
