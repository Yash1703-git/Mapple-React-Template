import { ChartNoAxesColumnDecreasing, Cpu, HatGlasses, Plug, ShieldCheckIcon, Workflow } from 'lucide-react'
import React from 'react'

export default function Product() {
    const data =[
        {
            icon: HatGlasses, text:"AI Agent Builder", 
            subText:"Design intelligent agents with modular logic, memory and tools - no complex setup required."
        },
        {
            icon: Workflow, text:"Workflow Orchestration", 
            subText:" Chain actions, triggers and decisions to automate multi-step workflows reliably."
        },
        {
            icon: Plug, text:"Plug & Play Integrations", 
            subText:" Connect APIs, databases and third-party tools seamlessly with built-in connectors."
        },
        {
            icon: ShieldCheckIcon, text:"Production-Ready Security", 
            subText:"Built-in safeguards, rate limits and isolation to run agents safely at scale."
        },
        {
            icon: ChartNoAxesColumnDecreasing, text:"Real-Time Monitoring", 
            subText:"Track executions, logs and performance metrics in real time."
        },
        {
            icon: Cpu, text:"Scalable Infrastructure", 
            subText:"Run agents efficiently across workloads with automatic scaling."
        }, 
        
    ]
  return (
    <div>
      <div className=' py-20 w-full text-center border-t border-gray-800' id="Product">
            <h2 className='text-4xl font-bold mb-3'>What We Offer </h2>
            <p>Explore amet minim mollit non deserunt ullamco est sit aliqua dolor</p>
            <p>do amet sint. Velit officia consequat.</p>
        </div>
        {/* grid Layout */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1'>
            {
                data.map((data,idx)=>{
                    return(
                        <div className='md:border-y border border-gray-800  px-8 py-10 ' key={idx}>
                            <button className='p-3 rounded-lg bg-[#15B100]'>
                                <data.icon/>
                            </button>
                            <div className='my-4 text-xl font-semibold'>{data.text}</div>
                            <div className='text-base text-gray-400'>
                                {data.subText}
                            </div>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}
