import React from 'react'

function SellAndNumber() {
    return (
        <div className="relative inset-0 pb-20 md:pb-32 lg:pb-50 flex flex-col m-auto">

            <div className="relative z-10 flex flex-col items-center pt-16 md:pt-20 lg:pt-24 text-center px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white transition-all duration-300 ease-in-out hover:-translate-y-4 hover:shadow-lg">
                    Numbers that speak for themselves
                </h2>

                <p className="mt-2 text-lg sm:text-xl md:text-2xl font-semibold text-gray-400 transition-all duration-300 ease-in-out hover:translate-y-2 hover:shadow-lg">
                    Real impact, measured in real results across the globe.
                </p>
            </div>

            <div className="max-w-7xl mx-auto mt-10 px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                    <div className="card bg-[#1D232A] shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="card-body flex flex-col items-center justify-center text-center">
                            <h1 className="card-title text-3xl text-[#7C4DF5] font-extrabold">
                                10,000+
                            </h1>
                            <h3 className="card-title text-lg font-bold text-white">
                                Active Users
                            </h3>
                            <p className="mt-2 text-[#A09EAB]">
                                Professionals Trust Our Foundation
                            </p>
                        </div>
                    </div>

                    <div className="card bg-[#1D232A] shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="card-body flex flex-col items-center justify-center text-center">
                            <h1 className="p-2 text-3xl text-[#7C4DF5] font-extrabold">
                                24/7
                            </h1>
                            <h3 className="card-title text-lg font-bold text-white">
                                Support
                            </h3>
                            <p className="mt-2 text-[#A09EAB]">
                                Dedicated assistance whenever you need it
                            </p>
                        </div>
                    </div>

                    <div className="card bg-[#1D232A] shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="card-body flex flex-col items-center justify-center text-center">
                            <h1 className="card-title p-3 text-3xl text-[#7C4DF5] font-extrabold">
                                50+
                            </h1>
                            <h3 className="card-title text-lg font-bold text-white">
                                Global Markets
                            </h3>
                            <p className="mt-2 text-[#A09EAB]">
                                Serving clients worldwide
                            </p>
                        </div>
                    </div>

                    <div className="card bg-[#1D232A] shadow-sm transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg">
                        <div className="card-body flex flex-col items-center justify-center text-center">
                            <h1 className="card-title p-3 text-3xl text-[#7C4DF5] font-extrabold">
                                500+
                            </h1>
                            <h3 className="card-title text-lg font-bold text-white">
                                Projects Delivered
                            </h3>
                            <p className="mt-2 text-[#A09EAB]">
                                Across every major IT sector
                            </p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default SellAndNumber