import React from "react";
import { BsCheckLg } from "react-icons/bs";

function WhyChooseUs() {
  const reason = [
    {
      id: 1,
      digit: "3x",
      title: "Faster time-to-market",
      description: "Accelerate your digital transformation",
    },
    {
      id: 2,
      digit: "40%",
      title: "Cost savings",
      description: "Optimized IT solutions reduce overheads",
    },
    {
      id: 3,
      digit: "98%",
      title: "Client satisfaction",
      description: "Businesses and learners love working with us",
    },
  ];

  const points = [
    "End-to-end IT solutions from web apps to enterprise software",
    "Industry-expert trainers and mentors for career growth",
    "Scalable solutions that evolve with your business",
    "Dedicated project managers and ongoing support",
    "Proven track record across 50+ global markets",
  ];

  return (
    <section className="mt-16 px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28">
      <div className="max-w-7xl mx-auto bg-[#13111F] rounded-3xl p-6 sm:p-8 lg:p-12">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
          {/* Left Side */}
          <div className="flex-1">
            <h2 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight">
              Why businesses choose MAHADAKSHA
            </h2>

            <p className="text-gray-300 mt-5 text-sm sm:text-base leading-7 font-medium">
              From custom software to professional training — everything you
              need to grow your business and career under one roof.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((point, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="bg-[#201446] text-[#7C4DF5] p-2 rounded-full flex-shrink-0">
                    <BsCheckLg size={12} />
                  </span>

                  <p className="text-gray-300 text-sm sm:text-base leading-6">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex-1 w-full">
            <div className="space-y-5">
              {reason.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1A1630] rounded-2xl p-6 hover:bg-[#201A3D] transition duration-300"
                >
                  <h3 className="text-[#7C4DF5] text-3xl sm:text-4xl font-extrabold">
                    {item.digit}
                  </h3>

                  <h4 className="text-white text-lg sm:text-xl font-semibold mt-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-400 text-sm sm:text-base mt-2">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;