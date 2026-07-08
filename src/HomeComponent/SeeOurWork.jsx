import React from 'react'
// import workProcess from '../assets/'
import itImage from '../assets/workers-it-company-working-computer.jpg'
import { FaArrowRight } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import WhyChooseUs from './WhyChooseUs';

function SeeOurWork() {
    return (
        <div className='relative mt-64 pb-28 '>
            <div>
                <h1 className=' text-4xl flex items-center justify-center text-white font-extrabold' >
                    See how we work
                </h1>
                <p className='  flex items-center justify-center font-semibold mt-2'>
                    Real solutions for real businesses — from startups to enterprises.
                </p>
            </div>

            <div>
                <div className='relative m-20 flex flex-row items-center justify-center gap-20'>

                    <div className='flex-1 w-full'>
                        <img className='w-full rounded-2xl p-2 cursor-pointer hover:scale-98 transition-all duration-400' src={itImage} alt="" />
                    </div>


                    <div className='flex-1 w-full'>
                        <h2 className='text-white text-3xl pl-2 font-bold'>
                            Built around people, not just technology
                        </h2>
                        <p className='text-gray-300 mt-4 ml-3'>
                            At MAHADAKSHA Foundation, we believe great technology serves people. Every solution we build is designed with your end users in mind — intuitive, reliable, and ready to scale.
                        </p>
                        <p className='text-gray-300 mt-4 ml-3'>
                            Whether you need a custom application, a training program for your team, or expert IT consulting — we bring the expertise and dedication to make it happen.
                        </p>

                        <div className='grid grid-cols-2 gap-5   mt-8 p-10'>
                            <div className='flex gap-1 items-center justify-center text-[#F8F9FB]  bg-[#13111F] py-1.5 rounded-4xl'> <span className='text-blue-400 font-bold'><SlEnergy/></span>Fast project delivery
                            </div>

                            <div className='flex gap-1 items-center text-[#F8F9FB] justify-center bg-[#13111F] p-1.5 rounded-4xl'>
                               <span className='text-blue-400 font-bold'><MdOutlineSecurity/></span> Enterprise-grade quality

                            </div>
                            <div className='flex gap-1 items-center justify-center bg-[#13111F] text-[#F8F9FB]  py-1.5 rounded-4xl'>
                               <span className='text-blue-400 font-bold'><AiOutlineGlobal/></span> Global client reach
                            </div>
                        </div>

                        <div className=' flex flex-row gap-2 justify-center items-center text-[#794bec] font-bold bg-[#13111F] w-max py-2 px-3 rounded-4xl cursor-pointer hover:text-[#5c1ff7] cursor-pointer  '>
                     <button className="cursor-pointer ">Request a Demo </button>< FaArrowRight/>
                        </div>
                    </div>
                </div>
            </div>
            <WhyChooseUs/>
        </div>
    )
}

export default SeeOurWork




