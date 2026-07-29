import React from "react";
import itImage from "../assets/workers-it-company-working-computer.jpg";
import { FaArrowRight } from "react-icons/fa";
import { SlEnergy } from "react-icons/sl";
import { MdOutlineSecurity } from "react-icons/md";
import { AiOutlineGlobal } from "react-icons/ai";
import WhyChooseUs from "./WhyChooseUs";
import { useNavigate } from "react-router-dom";

function SeeOurWork() {
  const navigate = useNavigate();
  return (
    <section className="relative mt-20 md:mt-28 lg:mt-36 xl:mt-44 pb-20 ">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 lg:px-20 xl:px-28 mb-20">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-white text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold">
            See how we work
          </h1>

          <p className="mt-3 text-gray-300 text-sm sm:text-base max-w-2xl mx-auto">
            Real solutions for real businesses — from startups to enterprises.
          </p>
        </div>

        {/* Content */}
        <div className="mt-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-14">
          {/* Left Image */}
          <div className="flex-1 flex justify-center">
            <img
              src={itImage}
              alt="Our Work"
              className="w-full max-w-[500px] h-[240px] sm:h-[300px] md:h-[360px] lg:h-[390px] xl:h-[420px] object-cover rounded-2xl shadow-lg hover:scale-[0.98] transition-all duration-300 cursor-pointer"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 max-w-xl">
            <h2 className="text-white text-2xl sm:text-3xl font-bold leading-tight">
              Built around people, not just technology
            </h2>

            <p className="mt-5 text-gray-300 text-sm sm:text-[15px] leading-7">
              At MAHADAKSHA Foundation, we believe great technology serves
              people. Every solution we build is designed with your end users in
              mind—intuitive, reliable, and ready to scale.
            </p>

            <p className="mt-4 text-gray-300 text-sm sm:text-[15px] leading-7">
              Whether you need a custom application, a training program for your
              team, or expert IT consulting, we bring the expertise and
              dedication to help you achieve your goals.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="flex items-center justify-center gap-2 bg-[#13111F] text-white py-3 px-4 rounded-full text-sm">
                <SlEnergy className="text-blue-400 text-lg" />
                <span>Fast project delivery</span>
              </div>

              <div className="flex items-center justify-center gap-2 bg-[#13111F] text-white py-3 px-4 rounded-full text-sm">
                <MdOutlineSecurity className="text-blue-400 text-lg" />
                <span>Enterprise-grade quality</span>
              </div>

              <div className="sm:col-span-2 lg:col-span-1 flex items-center justify-center gap-2 bg-[#13111F] text-white py-3 px-4 rounded-full text-sm">
                <AiOutlineGlobal className="text-blue-400 text-lg" />
                <span>Global client reach</span>
              </div>
            </div>

            {/* Button */}
            <button className="mt-8 flex items-center gap-2 btn btn-primary" onClick={()=>navigate('/contact')}>
              Request a Demo
              <FaArrowRight className="text-sm" />
            </button>
          </div>
        </div>
      </div>

      <WhyChooseUs />
    </section>
  );
}

export default SeeOurWork; 