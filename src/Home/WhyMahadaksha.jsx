import React from 'react'
import { BsStars } from "react-icons/bs";
import mahadaksha from '../assets/WhyMahaDaksha.jpg'
import HowWeWork from '../HomeComponent/HowWeWork';
function WhyMahadaksha() {
    return (
        <div className='bg-[#FFFFFF] relative ml-20 mr-20 '>
            <div className=' flex  text-blue-800 justify-center mt-10 font-bold items-center gap-2'>
                <h3 className='text-l'>
                    <BsStars />
                </h3>
                <h3 className='text-l'>
                    Why Mahadaksha
                </h3>

            </div>
            <div className=' w-[1100px] m-auto flex flex-col  items-center justify-center pt-6 text-black  font-bold'>
                <h1 className='text-6xl p-3' >
                    Your growth partner across every
                </h1>
                <h1 className='text-6xl pb-3 '>
                    IT need
                </h1>
                <p className='text-black/59 font-bold'>
                    MAHADAKSHA delivers end-to-end IT services — from custom software development
                </p>
                <p className='text-black/59 font-bold'>
                    and cloud solutions to professional training and career support — all under one
                </p>
                <p className='text-black/59 font-bold'>
                    roof.
                </p>
                <div className='text-black/59 font-medium flex items-center justify-center gap-10 mt-5 p-5 '>
                    <span className='bg-[#F8F9FB] rounded-4xl py-2 px-10'>500+ projects delivered</span>
                    <span className='bg-[#F8F9FB] rounded-4xl py-2 px-6'>99.9% uptime</span>
                    <span className='bg-[#F8F9FB] rounded-4xl py-2 px-8'>50+ global markets</span>
                    <span className='bg-[#F8F9FB] rounded-4xl py-2 px-6'>24/7 support</span>
                </div>
                <button className="btn bg-[#3480e5] text-white border-[#006eff] rounded-2xl mt-10 hover:bg-[#157aff]">
                  Explore Our Products
                </button>
            </div>
            <div className=' flex  mt-10 py-20 h-max w-max  m-auto' >
                <img className=' flex   h-max w-max  m-auto rounded-2xl' src={mahadaksha} alt="" />
            </div>
            <HowWeWork/>
        </div>
    )
}

export default WhyMahadaksha