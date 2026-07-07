import React from 'react'
import customSoftware from '../assets/customSoftware.jpeg'
import EventsThatInspireAndConnect from '../assets/EventsThatInspireAndConnect.jpeg'
import TrainingThatLaunchesCarrer from '../assets/TrainingThatLaunchesCareers.jpeg'
function HowWeWork2() {
    return (
        <div className='relative m-20 flex flex-col items-center justify-center '>
            <div className='relative m-20 flex flex-row items-center justify-center gap-20'>
                <div className='flex-1 w-full'>
                    <h2  className='text-white text-3xl font-bold pl-2'>Custom software built for your business</h2>
                    <p  className='text-gray-300 mt-4 ml-3'>
                        We design and develop tailored software solutions — from web apps and mobile apps to enterprise platforms — that fit your exact workflow and scale with your growth.
                    </p>

                    <div className='m-3'>
                        <p className='text-blue-700 font-semibold'>
                            ✓ Full-stack web and mobile development
                        </p>
                        <p className='text-blue-700 font-semibold'>
                            ✓ Agile delivery with transparent milestones
                        </p>
                        <p className='text-blue-700 font-semibold'>
                            ✓ Post-launch support and maintenance
                        </p>
                    </div>

                    <div>
                    <button className=" text-[#794bec] bg-transparent hover:text-[#5c1ff7] cursor-pointer ml-4">View Courses →</button>
                </div>
                </div>
                <div className='flex-1 w-full'>
                    <img className='rounded-xl   p-2 cursor-pointer hover:scale-98 transition-all duration-400 ' src={customSoftware} alt="" />
                </div>
                
            </div>



            <div className='relative m-20 flex flex-row items-center justify-center gap-20'>
                {/* First Child - Takes 50% width */}
                <div className='flex-1 w-full'>
                    <img className='w-full rounded-2xl p-2 cursor-pointer hover:scale-98 transition-all duration-400' src={TrainingThatLaunchesCarrer} alt="" />
                </div>

             
                <div className='flex-1 w-full'>
                    <h2 className='text-white text-3xl pl-2 font-bold'>
                        Training that launches careers
                    </h2>
                    <p className='text-gray-300 mt-4 ml-3'>
                        Our industry-led training programs equip students and professionals with in-demand skills through hands-on projects, live mentoring, and real-world exposure.
                    </p>
                    <div className='m-3'>
                        <p className='text-blue-700 font-semibold'>
                            ✓ Instructor-led courses with live projects
                        </p>
                        <p className='text-blue-700 font-semibold'>
                            ✓ Certifications in top technologies
                        </p>
                        <p className='text-blue-700 font-semibold'>
                            ✓ Dedicated placement assistance
                        </p>
                        
                    </div>
                    <div>
                    <button className=" text-[#794bec] bg-transparent hover:text-[#5c1ff7] cursor-pointer ml-4">View Courses →</button>
                </div>
                </div>
            </div>




            <div className='relative m-20 flex flex-row items-center justify-center gap-20'>
                <div className='flex-1 w-full'>
                    <h2  className='text-white text-3xl font-bold pl-2'>
                        Events that inspire and connect
                    </h2>
                    <p className='text-gray-300 mt-4 ml-3'>
                        From tech summits and hackathons to corporate workshops — we plan and execute events that bring communities together and drive knowledge sharing.
                    </p>
                    <div className='m-3'>
                        <p className='text-blue-700 font-semibold'>
                            ✓ End-to-end event planning and execution
                        </p>
                        <p className='text-blue-700 font-semibold'>
                            ✓ Virtual, hybrid, and in-person formats
                        </p>
                        <p className='text-blue-700 font-semibold'>
                            ✓ Speaker management and branding support
                        </p>
                    </div>
                    <div>
                    <button className=" text-[#794bec] bg-transparent hover:text-[#5c1ff7] cursor-pointer ml-4">View Courses →</button>
                </div>
                </div> 
                <div className='flex-1 w-full'>
                    <img className='rounded-xl  p-2 cursor-pointer hover:scale-98 transition-all duration-400' src={EventsThatInspireAndConnect} alt="" />
                </div>

               
            </div>
        </div>
    )
}

export default HowWeWork2