import React from 'react'

function Servicesmenu() {
    return (
        <div className="absolute  left-0 pt-2 mt-2 w-[700px] z-50">
            <div className="rounded-3xl bg-[#11111f] p-8 shadow-xl">
                <h2 className="text-white text-s mb-1 font-extrabold">
                    Service Categories
                </h2>

                <div className="grid grid-cols-3 text-xs text-white font-semibold gap-4">

                    <div className="bg-[#1b1b2d] p-5 rounded-xl">
                        Digital Transformation
                    </div>

                    <div className="bg-[#1b1b2d] p-5 rounded-xl">
                        Infrastructure & Cloud
                    </div>

                    <div className="bg-[#1b1b2d] p-5 rounded-xl">
                        Data & AI
                    </div>

                    <div className="bg-[#1b1b2d] p-5 rounded-xl">
                        Security & Compliance
                    </div>

                    <div className="bg-[#1b1b2d] p-5 rounded-xl">
                        Business Consulting
                    </div>

                    <div className="bg-[#1b1b2d] p-5 rounded-xl">
                        Corporate Training
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Servicesmenu

