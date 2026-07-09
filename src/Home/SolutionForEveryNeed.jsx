import React, { useState } from "react";
import { BsCheckLg } from "react-icons/bs";
import business from '../assets/business.avif'
import early from '../assets/earlyAcess.avif'
import enterPrices from '../assets/enterPrices.avif'
import productTeam from '../assets/productTeam.avif'


    const cardData = {
    early: {
        heading: "Early platform access for fast-moving teams",
        description:
            "Launch your idea with the right technology foundation. MAHADAKSHA helps early teams validate MVPs, iterate faster, and build momentum from day one.",
        notices: [
            "Rapid MVP development and launch",
            "Expert technical guidance",
            "Scalable architecture from day one",
        ],
        image: <img className="w-full h-80 rounded-2xl border hover:border-[#3c1ad3] " src={early} alt="" />,
        btn1: 'Get Early Platform Access',
        btn2: 'Explore All Services',
    },

    business: {
        heading: "Growth-ready systems for modern businesses",
        description:
            "Streamline operations and accelerate growth with custom IT solutions. From ERP systems to customer portals, we build software that drives real business results.",
        notices: [
            "Custom software tailored to your workflow",
            "Process automation and optimization",
            "Ongoing maintenance and support",
        ],
        image: <img className="w-full h-80 rounded-2xl border hover:border-[#3c1ad3] " src={business} alt="" />,
        btn1: 'Talk to Solution Team',
        btn2: 'Explore All Services',
    },

    product: {
        heading: "Delivery acceleration for product teams",
        description:
            "Ship better products with aligned design, engineering, and delivery workflows. We help product teams execute faster with clarity and measurable outcomes.",
        notices: [
            "Cross-functional planning and execution support",
            "User-centric product development practices",
            "Reliable delivery with quality checkpoints",
        ],
        image: <img className="w-full h-80 rounded-2xl border hover:border-[#3c1ad3] " src={productTeam} alt="" />,
        btn1: 'Plan product Sprint',
        btn2: 'Explore All Services',
    },

    enterprise: {
        heading: "Enterprise modernization with predictable outcomes",
        description:
            "Transform legacy systems with modern architecture. Zaalima partners with enterprises for large-scale digital transformation, cloud migration, and IT modernization.",
        notices: [
            "Legacy system modernization",
            "Cloud migration and DevOps",
            "Dedicated teams and SLA-backed delivery",
        ],
        image: <img className="w-full h-80 rounded-2xl border hover:border-[#3c1ad3] " src={enterPrices} alt="" />,
        btn1: 'Request Enterprise Consultation',
        btn2: 'Explore All Services',
    },
};

function SolutionForEveryNeed() {
    const [activeTab, setActiveTab] = useState("early");

    return (
        <div className="bg-black px-20 py-24">

          
            <div className="text-center">
                <h1 className="text-5xl font-extrabold text-white">
                    Solutions For Every Need
                </h1>

                <p className="text-gray-400 text-xl mt-5">
                    Whether you're a startup founder, a student, or an enterprise —
                    MAHADAKSHA has you covered.
                </p>
            </div>

      
            <div className="flex justify-center mt-12">
               <div className='bg-[#13111F] w-max p-1 px-3 flex gap-2 items-center justify-center m-auto mt-15 rounded-xl'>

                    <button className={`hover:bg-[#1D1B29] px-3 hover-3d cursor-pointer rounded-2xl ${activeTab === "early"
                                ? "bg-[#1D1B29] border text-white"
                                : "text-gray-300 hover:bg-[#1D1B29]"
                            }`}
                        onClick={() => setActiveTab("early")}
                        
                    >
                        Early Access
                    </button>

                    <button
                        onClick={() => setActiveTab("business")}
                       className={`hover:bg-[#1D1B29] px-3 hover-3d cursor-pointer rounded-2xl ${activeTab === "business"
                                ? "bg-[#1D1B29] border text-white"
                                : "text-gray-300 hover:bg-[#1D1B29]"
                            }`}
                    >
                        Business
                    </button>

                    <button
                        onClick={() => setActiveTab("product")}
                       className={`hover:bg-[#1D1B29] px-3 hover-3d cursor-pointer rounded-2xl ${activeTab === "product"
                                ? "bg-[#1D1B29] border text-white"
                                : "text-gray-300 hover:bg-[#1D1B29]"
                            }`}
                    >
                        Product Team
                    </button>

                    <button
                        onClick={() => setActiveTab("enterprise")}
                       className={`hover:bg-[#1D1B29] px-3 hover-3d cursor-pointer rounded-2xl ${activeTab === "enterprise"
                                ? "bg-[#1D1B29] border text-white"
                                : "text-gray-300 hover:bg-[#1D1B29]"
                            }`}
                    >
                        Enterprises
                    </button>

                </div>
            </div>

           
            <Card {...cardData[activeTab]} />
        </div>
    );
}

export default SolutionForEveryNeed;

function Card({ heading, description, notices, image ,btn1,btn2}) {
    return (
        <div className=" p-12  ml-5 mr-5">

            <div className=" md:grid-cols-2 flex gap-15 items-center">

               
                <div className="flex-1">

                    <h2 className="text-2xl font-bold text-white">
                        {heading}
                    </h2>

                    <p className="text-gray-400 mt-3 leading-6">
                        {description}
                    </p>

                    <div className="mt-1 space-y-4">

                        {notices.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-1 text-gray-300 leading-6"
                            >
                                <span className='bg-[#201446] p-[2px] rounded-full hover:bg-[#12101D] '>
                                    <BsCheckLg />
                                </span>

                                <span>{item}</span>
                            </div>
                        ))}

                    </div>
                    <div className="mt-3 flex gap-10">
                        <button className="hover:bg-[#CFBFF7] bg-[#561DE2] px-3 hover-3d cursor-pointer rounded-2xl text-white font-semibold p-1">
                            {btn1}
                        </button>
                        <button className="hover:bg-[#CFBFF7] bg-[#242436] px-3 hover-3d cursor-pointer rounded-2xl text-[#4A1BBE] font-semibold p-1">
                            {btn2}
                        </button >
                    </div>

                </div>

                
                <div className="flex flex-1 justify-center">

                    <div className="w-full h-80 rounded-2xl border border-[#2A2738] bg-[#1B1829] flex items-center justify-center text-gray-500 text-lg">
                        {image}
                    </div>

                </div>

            </div>

        </div>
    );
}