import React from 'react'
import { BsCheckLg } from "react-icons/bs";
function WhyChooseUs() {

    const reason = [
        {
            id: 1,
            digit: '3x',
            title: 'Faster time-to-market',
            description: 'Accelerate your digital transformation',

        },
        {
            id: 2,
            digit: '40%',
            title: 'Cost savings',
            description: 'Optimized IT solutions reduce overheads',
        },
        {
            id: 3,
            digit: '98%',
            title: 'Client satisfaction',
            description: 'Businesses and learners love working with us',
        }
    ]

    return (
        <div className='ml-30 mr-30 bg-[#13111F] p-1 rounded-2xl'>
            <div className='relative m-20  flex flex-row items-center justify-center gap-20' >
                <div className='flex-1 w-full'>
                    <h1 className=' text-3xl flex items-center justify-center text-white font-extrabold'>
                        Why businesses choose MAHADAKSHA
                    </h1>
                    <div className='flex flex-col gap-3 font-semibold text-gray-400 mt-4 '>

                        <p className='font-bold'>
                            From custom software to professional training — everything you need to grow your business and career under one roof.
                        </p>
                        <p className='w-max flex flex-row items-center justify-center gap-1'>

                            <span className='bg-[#201446] p-[2px] rounded-full hover:bg-[#12101D] '><BsCheckLg /></span>  End-to-end IT solutions from web apps to enterprise software
                        </p>
                        <p className='w-max flex flex-row items-center justify-center gap-1'>

                            <span className='bg-[#201446] p-[2px] rounded-full hover:bg-[#12101D] '><BsCheckLg /></span>  Industry-expert trainers and mentors for career growth
                        </p>
                        <p className='w-max flex flex-row items-center justify-center gap-1'>

                            <span className='bg-[#201446] p-[2px] rounded-full hover:bg-[#11064e] '><BsCheckLg /></span>  Scalable solutions that evolve with your business
                        </p>
                        <p className='w-max flex flex-row items-center justify-center gap-1'>

                            <span className='bg-[#201446] p-[2px] rounded-full hover:bg-[#12101D] '><BsCheckLg /></span> Dedicated project managers and ongoing support
                        </p>

                        <p className='w-max flex flex-row items-center justify-center gap-1'>

                            <span className='bg-[#201446] p-[2px] rounded-full hover:bg-[#12101D] '><BsCheckLg /></span>  Proven track record across 50+ global markets
                        </p>
                    </div>

                </div>
                <div className='flex-1 w-full'>
                    <div className='flex flex-col gap-10 flex-1  ' >
                        {
                            reason.map((reason) => (

                                <div key={reason.id} className='bg-[#1A1630] py-4 items-center justify-center rounded-2xl' >
                                    <h1 className='px-6 text-3xl font-extrabold text-[#7C4DF5]'>
                                        {reason.digit}
                                    </h1>
                                    <p className=' text-white font-semibold px-6'>
                                        {reason.title}
                                    </p>
                                    <p className='px-6'>
                                        {reason.description}
                                    </p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhyChooseUs