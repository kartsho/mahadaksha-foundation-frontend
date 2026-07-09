import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Marquee from "react-fast-marquee";
function PartnerCompainies() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        const response = await axios({
            method: 'get',
            url: '/partnerCompinies',
            baseURL: 'https://6a4e15d1e785c9ef536c4116.mockapi.io/mahadakshaFoundation',

        })

        setData(response.data);
    }
    console.log(data)
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='relative ml-20 mr-20'>
            <div className='flex flex-col gap-3 '>
                <h1 className='text-white text-4xl font-extrabold m-auto  '>
                    Our Partner Companies
                </h1>
                <p className='m-auto font-semibold text-gray-300'>
                    Meet the organizations we collaborate with to deliver practical learning, real projects, and stronger career outcomes.
                </p>
            </div>
            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5 ">
                
                {data.map((company) => (
                    <DevCard
                        key={company.id}
                        company={company}
                        
                    />
                ))}
            </div>
        </div>
    )
}







export default PartnerCompainies

export const DevCard = ({company}) => {
    return (
        <div className=" flex items-center justify-center bg-[#09090f] p-6 hover-3d">
            <div className="w-[300px] rounded-3xl border border-[#3b3458] hover:border-[#6709ff]  bg-[#11111b]/90 p-5 shadow-xl backdrop-blur-sm ">

                
                <div className="overflow-hidden rounded-xl border border-[#34304d] bg-[#1a1a28] p-2">
                    <img
                        src={company.logo}

                       
                        className="h-16 w-full object-fill"
                    />
                </div>

               
                <div className="mt-6 space-y-4">
                    <div>
                        <h2 className="text-xl font-bold text-white">
                            {company.company}
                        </h2>

                        <p className="mt-2 text-l font-semibold text-violet-500">
                           {company.relation}
                        </p>
                    </div>

                    <p className="text-[10px] leading-8 text-gray-300">
                        {company.description}
                    </p>

                    <div className="space-y-3 text-[17px] text-gray-300">
                        <p>
                            <span className="font-semibold text-white">
                                Founded:
                            </span>{" "}
                           { company.founded}
                        </p>

                        <p>
                            <span className="font-semibold text-white">
                                Location:
                            </span>{" "}
                            {company.Location}
                        </p>

                        <p>
                            <span className="font-semibold text-white">
                                Focus:
                            </span>{" "}
                            {company.focus}
                        </p>
                    </div>

                    {/* Button */}
                    <button className="mt-4 rounded-xl bg-gradient-to-r from-violet-700 to-purple-500 px-3 py-2  font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-violet-500/40">
                        Visit Website
                    </button>
                </div>
            </div>
        </div>
    );
};

